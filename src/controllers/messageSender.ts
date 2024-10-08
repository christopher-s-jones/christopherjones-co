import NDK,
{
    NDKRelay,
    NDKEvent,
    NDKRelaySet,
    NDKPrivateKeySigner,
    type NDKUserParams,
    NDKUser,
    type NDKTag,
    type NDKRawEvent
} from "@nostr-dev-kit/ndk";
import { $message, type Message } from "../stores/message";

/**
 * @fileoverview MessageSender is a singleton class that
 * takes a plaintext message and encrypts it
 * with the private key given in the constructor, connects to a set of
 * relays, 
 */
export class MessageSender {

    private _signer: NDKPrivateKeySigner;
    private _recipient: NDKUser;
    private static _instance: MessageSender;
    private _ndk: NDK;
    private static _relays: NDKRelaySet;

    /**
     * Constructs a singleton MessageSender instance given a private key
     */
    private constructor() {
        // For each visitor, create a new keypair signer
        this._signer = NDKPrivateKeySigner.generate();
        if (!this._ndk) {
            this._ndk = new NDK({
                explicitRelayUrls: [
                    "wss://relay.damus.io",
                    "wss://relay.primal.net",
                    "wss://nostr.bitcoiner.social",
                    "wss://relay.vertexlab.io",
                    "wss://relay.snort.social",
                ],
            });
            // Connect to relays immediately
            this._ndk.connect().then(() => {
                console.log("NDK connected.");
            }).catch((e) => {
                console.error("NDK connection error: ", e)
            });

        }

        // Set the recipient
        let userParams: NDKUserParams = {
            npub: "npub1j8342dle7sp8ull50gdj8nfr3gqtz7r3n5darl7m0mvp70a5t3nqcztgf2",
        }
        this._recipient = new NDKUser(userParams);

        // Listen for changes on the message store
        $message.listen(async (value: Readonly<Message>, oldValue: Readonly<Message>, changedKey: keyof Message) => {
            switch (value.state) {
                case "unsent":
                    break;  // Nothing to do
                case "preflight":
                    break; // Nothing to do
                case "sending":
                    let event: NDKEvent;
                    // Create the encrypted message event
                    if (value.text) {
                        event = await this.encryptSignedEvent(value.text)
                    } else {
                        break;
                    }

                    // Connect to the relay
                    // await this._ndk.connect()
                    const relayList: NDKRelay[] = this._ndk.pool.connectedRelays()
                    relayList.forEach((relay) => {
                        console.log("Connected to :" + relay.url);
                    });
                    // Publish the event to the relay
                    try {
                        let relays: Set<NDKRelay> = await event.publish();
                        // Update the message state with a response
                        // depending on the success (sent or failed)
                        $message.set({
                            state: "sent",
                            text: value.text,
                            response: "Thank you! Your message was sent."
                        });
                    } catch (e) {
                        console.log("Publish error: " + e);
                        // Update the message state with a response
                        // depending on the success (sent or failed)
                        $message.set({
                            state: "failed",
                            text: value.text,
                            response: "Shoot. There was an issue sending the message. Please try again later.",
                        });
                    }
                    break;
                case "sent":
                    // Once sent, reset the message object
                    // to be used again
                    $message.setKey("text", "");
                    break;
                case "failed":
                    break; // Nothing to do
            }
        });
    }

    /**
     * Return or construct a MessageSender
     * @returns A MessageSender instance
     */
    public static getInstance(): MessageSender {
        if (!MessageSender._instance) {
            MessageSender._instance = new MessageSender();
        }
        return MessageSender._instance;
    }

    /**
     * 
     * @param message Given a message string, encrypt the message
     * and create a raw Nostr event. Generate a Bech32 event id
     * and set it for the event. Sign the encrypted event.
     * @returns the event Promise
     */
    public async encryptSignedEvent(message: string): Promise<NDKEvent> {

        // To create an encrypted Direct Message according to NIP-04
        // use a recipient tag in the event metadata 
        // (this is a privacy leak, and better strategies are forthcoming)
        let tags: NDKTag[] = [["p", this._recipient.pubkey]];

        // Encrypt with the NIP-44 scheme, which fixes known NIP-04 issues
        const encryptedMessage = await this._signer.encrypt(this._recipient, message, 'nip44');

        // The initial unsigned, unidentified event
        let rawEvent: NDKRawEvent = {
            created_at: Math.floor(Date.now() / 1000),
            content: encryptedMessage,
            tags: tags,
            kind: 4,
            pubkey: this._signer.pubkey,
            id: "",
            sig: ""
        }

        // Create the signed and identified event
        let event = new NDKEvent(this._ndk, rawEvent);
        event.id = event.encode()
        event.sig = await this._signer.sign(event);

        return event;
    }
}
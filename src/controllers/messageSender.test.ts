import TestFixture from "@nostr-dev-kit/ndk";
import { describe, it, expect, test } from "vitest";
import { generateSecretKey } from "nostr-tools";
import { MessageSender } from "./messageSender"
import { type NDKRawEvent, type NDKTag, NDKEvent, NDKPrivateKeySigner, NDKUser, type NDKUserParams } from "@nostr-dev-kit/ndk";
import NDK from "@nostr-dev-kit/ndk";
import { nip19, nip44 } from "nostr-tools";

describe("MessageSender", async () => {
    
    let fixture: TestFixture;
    fixture = new TestFixture();
    let event: NDKEvent;
    let signer: NDKPrivateKeySigner = NDKPrivateKeySigner.generate();
    let userParams: NDKUserParams = {
        npub: "npub1j8342dle7sp8ull50gdj8nfr3gqtz7r3n5darl7m0mvp70a5t3nqcztgf2",
    }
    let newUser = fixture.getUser(userParams)

    const recipient: NDKUser = new NDKUser(userParams)
    let tags: NDKTag[] = [["p", recipient.pubkey]];
    const message = "Hello, Nostr!";
    const encryptedMessage = await signer.encrypt(recipient, message, 'nip44');

    let rawEvent: NDKRawEvent = {
        created_at: Math.floor(Date.now() / 1000),
        content: encryptedMessage,
        tags: tags,
        kind: 1,
        pubkey: signer.pubkey,
        id: "",
        sig: ""
    }

    event = new NDKEvent(undefined, rawEvent);
    event.id = event.encode();
    event.sig = await signer.sign(event);
        console.debug(event.dump());
    // TODO: here

    it("creates a new MessageSender instance with a private key", async () => {
        const sender = MessageSender.getInstance();
        const event = await sender.encryptSignedEvent("Hello, Nostr!");

        // Ensure the singleton instance is returned
        expect(sender).toBeInstanceOf(MessageSender);

        // Ensure we have an NDKEvent object
        expect(event).toBeInstanceOf(NDKEvent);
    });

});
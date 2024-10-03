import { map } from "nanostores";


/** Messages can be in multiple states
 * - unsent  the message text area is not in focus, unsent
 * - preflight  the message text area is in focus, unsent
 * - inflight  the message button has been clicked, unsent
 * - sent  the message posted successfully, sent
 * - failed the message posted unsuccessfully, unsent
 */
export type MessagingStateValue = "unsent" | "preflight" | "sending" | "sent" | "failed";

export type Message = {
    /** The state of the message */
    state: MessagingStateValue,
    /** The message plaintext */
    text?: string,
    response?: string,
    placeholder?: string
}

export const $message = map<Message>({
    state: "unsent",
    placeholder: "Type your message here with your name and contact information.",
});
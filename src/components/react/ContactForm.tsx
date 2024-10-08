
import FormButton from "./FormButton";
import { $message, type Message } from "../../stores/message";
import React, { Component } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useStore } from "@nanostores/react";
import Notification from "./Notification";

export default function ContactForm() {

    const message: Message = useStore($message);
    const isSending: boolean = message.state === "sending" ? true : false;
    const isUnsent: boolean = message.state === "unsent" ? true : false;
    const isSent: boolean = message.state === "sent" ? true : false;
    const hasResponse: boolean = message.response && message.response.length > 0 ? true : false;
    const failed: boolean = message.state === "failed" ? true : false;

    return (
        <form onSubmit={(submitEvent: FormEvent) => {
            submitEvent.preventDefault();
            // When the form is submitted, set the state to "sending" to re-render
            // the appropriate components
            !isSending && $message.setKey("state", "sending")
            const formData: FormData = new FormData(submitEvent.target as HTMLFormElement);
            $message.set({
                state: "sending",
                text: formData.get("message").toString(),
            });
        }}
            className="border-2 border-slate-300 dark:border-slate-800 
        bg-slate-50 dark:bg-blue-960 rounded-lg md:col-start-1 md:col-end-2"
        >
            <div
                className="min-h-32 rounded-t-lg 
            bg-slate-200 dark:bg-blue-975 
            p-6 flex flex-col gap-4 items-start"
            >
                <div className="flex flex-row items-center justify-start">
                    <div
                        className="m-4 p-2 flex-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="basis-1 w-10 h-10 text-slate-800 dark:text-slate-50"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                        ><path
                            d="M406.65 113.39c-4.99-3.66-10.78-7.13-14.78-11.91-2.41-2.88-5.08-8.09-2.15-11.57.58-.68 8.16-3.83 9.06-3.85 6.06-.12 27.85-1.06 29.14-1.54.92-.34.96-1.62.07-2.02-3.48-1.57-7.21-2.29-10.89-3.22-.4-.08-.34-.67.07-.66 0 0 9.87-.09 11.17-.51.92-.29 1.04-1.55.19-2.01-1.79-.96-4.01-1.33-5.94-1.93-5.52-1.71-11.14-2.97-16.44-5.33-6.93-3.23-14.43-11.04-22.55-10.89-14.04.27-17.67 19.12-16.58 30.14 3.18 31.94 42.21 36.9 44.03 63.31.95 13.78-4.78 25.18-17.61 30.89-9.18 4.09-17.77.41-26.9 1.05-3.19.22-6.63 1.98-9.4 1.97-5.4-.03-13.69-7.07-18.66-9.89-32.9-18.69-67.21-14.75-100.98-.51-18.82 7.94-39.39 22.58-59.94 24.62-8.57.85-19.78 0-28.68 0-.46 0-1.78 1.79-1.86 2.6-.21 2.11 3.87 6.21 1.05 6.92-1.68.42-8.26-3.86-11.78-4.3-16.25-2-34.36 7-43.98 19.83-2.51 3.34-12.58 20.95-8.57 23.88 2.55 1.87 13.31-7.45 17.7-5.56-.71 4.42-8.16 24.12-.25 24.83 2.58.23 10.5-9.49 13.34-11.56 1.84-1.34 4.04-3.88 5.97-1.05-1.35 3.36-5.54 18.01-.93 19.32 2.24.64 11.33-5.87 13.96-7.18 6.97-3.47 19.39-6.58 27.18-7.38 8.71-.89 12.93 4.56 20.24 8.28 14.11 7.19 29.66 10.98 45.08 14.34 2.82 1.92-5.04 10.87-6.55 12.59-10.42 11.87-21.18 18.16-34.45 25.84-9.98 5.78-7.43 11.61-11.67 19.94l-40.67 57.85c-4.19 5.23-11.27 4.25-17.05 7.21-3.91 2-15.13 13.77-7.13 14.62 1.29.14 5.76-1.85 5.43.58-.26 1.95-4.11 6.38-5.29 8.69-3.09 6.06-5.24 13.82-3.38 20.55 2.9 10.5 7.67-4.59 9.25-7.33 5.1-8.83 13.64-14.46 19.57-22.33 6.77-8.97 12.5-19.95 19.23-29.3 10.78-14.99 23.13-28.95 34.15-43.78 5.72-2.89 11.92-5.27 15.34-11.13 1.58-2.71 1.49-6.01 3.85-8.65 2.78-3.13 28.12-22.3 32.11-24.5 1.77-.98 20.73-8.36 21.51-7.53.5 3.82-2.79 6.31-4.2 9.39-3.56 7.79-9.78 21.41-5.51 29.34 5.72 10.63 17.75.15 25.51-2.74 14.26-5.3 32.74-11.09 47.45-15.05 2.88-.77 14.95-4.33 16.59-1.89.66.98.13 3.27.49 4.65.76 2.9 3.36 10.65 7.46 9.31 3.32-1.09-1.34-8.36 1.55-10.22 1.59-.09 12.62 13.31 18.56 14.53 6.31 1.3 3.3-3.92 1.79-6.96-2.77-5.56-11.32-19.07-15.26-23.7-6.23-7.32-12.02-6.69-20.75-4.7-14.45 3.29-31.18 9.45-45.58 13.98-2.52.79-17.21 6.31-18.14 6.08-.55-.14-1.1-.95-1.04-1.7.14-1.5 5.15-9.11 6.48-10.45 2.48-2.48 6.61-4.02 9.6-6.58 3.33-2.84 5.6-6.62 8.83-9.55 32.49-.01 77.9-5.66 80.87-46.33.38-5.16-1.3-15.14 1.59-18.99 12-7.98 24.54-14.33 34.1-25.46 17.65-20.53 26.17-48.85 9.5-72.73-3.58-5.12-8.56-9.04-13.55-12.7Z"
                        ></path></svg>
                    </div><h2
                        className="basis-16 flex-grow font-sans font-normal text-lg 2xl:text-xl text-slate-800 dark:text-slate-50"
                    >
                        Message
                    </h2>
                </div><span
                    className="font-sans font-normal text-sm 2xl:text-lg text-slate-500 dark:text-slate-400 min-h-[3em]"
                >Send me an encrypted note via Nostr. Let me know how to contact you back in your message. Thanks!</span>
            </div>
            <textarea
                value={message.text}
                onChange={(event) => {$message.setKey("text", event.target.value)}}
                name="message"
                onFocus={(focusEvent) => { 
                    if (!isSending) {
                        $message.set({
                            "state": "preflight",
                            "text": message.text,
                            "response": "",
                            "placeholder": "",
                        });
                    }
                }}
                placeholder={message.placeholder}
                className="p-2 mx-6 font-mono font-normal text-sm 2xl:text-lg text-slate-600 dark:text-slate-100 w-11/12 min-h-32 rounded-lg my-4 bg-slate-200 dark:bg-slate-950"
            ></textarea>
            <div className="w-full px-6 mb-4 flex flex-row justify-end items-center">
                <FormButton />
            </div>
            <Notification />

        </form>
    )
}
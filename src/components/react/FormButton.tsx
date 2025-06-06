import { useStore } from "@nanostores/react";
import { $message, type Message } from "../../stores/message";

export default function FormButton() {


    const message: Message = useStore($message);
    const isSending: boolean = message.state === "sending" ? true : false;

    return (
        <button disabled={isSending}
            className="disabled:opacity-25 disabled:cursor-wait
            flex gap-3
            rounded-lg text-center items-center font-sans font-normal
            bg-gradient-to-r from-amber-400 from-20% to-amber-500 to-90%
            hover:bg-gradient-to-br hover:from-amber-500 hover:from-20% hover:to-amber-600 hover:to-90%
            text-white text-base px-3 py-2"
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="grid-flow-dense size-6 3xl:size-10 fill-white">
                <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clipRule="evenodd" />
            </svg>
            Send
        </button>
    )
}
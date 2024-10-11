import { useStore } from "@nanostores/react";
import { $message, type Message } from "../../stores/message";

export default function Notification() {

    const message: Message = useStore($message);
    const hasResponse: boolean = message.response && message.response.length > 0 ? true : false;
    const failed: boolean = message.state === "failed" ? true : false;

    return (
        <div className="font-sans font-normal text-sm 2xl:text-lgw-full mn-h-12 px-2 md:px-6 py-6 text-bold">
            <div className={!failed ? "rounded-lg flex flex-row justify-center items-center text-slate-800 dark:text-slate-50 bg-blue-800 dark:bg-blue-900" : "rounded-lg flex flex-row justify-center items-center text-slate-50 dark:text-slate-50 bg-red-500 dark:bg-red-900"}>
                <p className={hasResponse ? "px-2 md:px-6 py-6" : "px-2 md:px-6 py-6 hidden"}>
                    {hasResponse ? message.response : ""}
                </p>
            </div>
        </div>
    )
}
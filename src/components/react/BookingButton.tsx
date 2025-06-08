import { useStore } from "@nanostores/react";
import { $isMenuOpen } from "../../stores/menuState";

export default function BookingButton( { buttonText } ) {

    const isMenuOpen = useStore($isMenuOpen);

    return (
        <a onClick={() => isMenuOpen && $isMenuOpen.set(false)} href="/booking">
            <button
                className="flex gap-3
            rounded-lg text-center items-center
            bg-gradient-to-r from-amber-400 from-20% to-amber-500 to-90%
            hover:bg-gradient-to-br hover:from-amber-500 hover:from-20% hover:to-amber-600 hover:to-90%
            text-white px-3 py-2 3xl:px-6 3xl:py-4 ml-5"
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="grid-flow-dense size-6 3xl:size-10 fill-white">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                <span>{buttonText}</span>
            </button>
        </a>
    )
}
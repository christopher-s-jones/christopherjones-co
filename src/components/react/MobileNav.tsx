import { useStore } from "@nanostores/react"
import { isMenuOpen } from "../../stores/menuStore"

export default function MobileNav() {

    const $isMenuOpen = useStore(isMenuOpen);
    
    return (
        <nav className="md:hidden flex items-center">
            <button
                type="button"
                className="text-slate-500 dark:text-slate-400
                hover:text-slate-600 dark:hover:text-slate-300
                size-8 flex justify-center"
            >
                <span className="sr-only">Navigation</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-8 fill-slate-800"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </nav>
    )
}

import { useStore } from "@nanostores/react"
import { isMenuOpen } from "../../stores/menuState"
import { isMobile } from "../../stores/mobileState";


export default function MobileNav() {
    const $isMobile = useStore(isMobile);
    const $isMenuOpen = useStore(isMenuOpen);
    
    return (
            <nav className={isMobile ? "md:hidden flex items-center" : "hidden md:hidden flex items-center"}>
            <button type="button"
                className="flex justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-8 text-slate-800 dark:text-slate-400
                        hover:text-slate-600 dark:hover:text-slate-300"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"></path>
                </svg>
            </button>
        </nav>
    );
}

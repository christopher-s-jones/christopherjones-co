import { useStore } from "@nanostores/react"
import { $isMenuOpen } from "../../stores/menuState"
import { $isMobile } from "../../stores/mobileState";
import ContactButton from "./ContactButton";


export default function MobileNav() {
    const isMobile = useStore($isMobile);
    const isMenuOpen = useStore($isMenuOpen);

    return (
            <nav className={isMobile ? "pt-6 pb-6 mx-4 flex items-center" : "hidden md:hidden"}>
                <button onClick={() => $isMenuOpen.set(!$isMenuOpen.get())} type="button"
                    className={isMenuOpen ? "hidden" : "flex justify-center"}
                >
                    <span className="sr-only">Open Navigation</span>
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
                {isMenuOpen &&
                    <div className={isMenuOpen ?
                        "fixed top-[2px] right-4 pt-14 pb-6 w-full max-w-48 rounded-lg shadow-lg bg-slate-50 dark:bg-blue-960 border border-slate-400 dark:border-slate-600 text-base font-semibold" : "hidden"
                    }>
                        <button onClick={() => $isMenuOpen.set(false)} className="absolute top-5 right-5 w-8 h-8
                            flex items-center justify-center 
                            text-slate-800 dark:text-slate-400 
                            hover:text-slate-600 dark:hover:text-slate-300">
                            <span className="sr-only">Close Navigation</span>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="size-8">
                                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <ul className="space-y-4">
                            <a onClick={() => $isMenuOpen.set(false)} className="block px-1 py-2 hover:text-slate-950 dark:hover:text-white hover:bg-amber-500" href="#projects"><li><span className="px-6">Projects</span></li></a>
                            <a onClick={() => $isMenuOpen.set(false)} className="block px-1 py-2 hover:text-slate-950 dark:hover:text-white hover:bg-amber-500" href="#about"><li><span className="px-6">About</span></li></a>
                        </ul>
                        <div className="mx-6 mt-6 pt-6 border-t border-slate-400 dark:border-slate-600"></div>
                        <ContactButton />
                    </div>
                }
            </nav>
    );
}

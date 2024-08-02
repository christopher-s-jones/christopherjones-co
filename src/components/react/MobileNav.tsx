import { useStore } from "@nanostores/react"
import { $isMenuOpen } from "../../stores/menuState"
import { $isMobile } from "../../stores/mobileState";


export default function MobileNav() {
    const isMobile = useStore($isMobile);
    const isMenuOpen = useStore($isMenuOpen);

    return (
        <>
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
                        "fixed top-[2px] right-4 pt-14 pb-6 w-full max-w-xs rounded-lg shadow-lg bg-stone-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-base font-semibold" : "hidden"
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
                        <ul className="space-y-4 dark:border-spacing-y-1">
                            <a className="block px-1 py-2 hover:text-stone-950 dark:hover:text-white hover:bg-amber-400" href="#projects"><li><span className="px-6">Projects</span></li></a>
                            <a className="block px-1 py-2 hover:text-stone-950 dark:hover:text-white hover:bg-amber-400" href="#about"><li><span className="px-6">About</span></li></a>
                            <a className="block px-1 py-2 hover:text-stone-950 dark:hover:text-white hover:bg-amber-400" href="#contact"><li><span className="px-6">Contact</span></li></a>
                        </ul>
                    </div>
                }
            </nav>


            {/* <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="hidden w-full" id="navbar-hamburger">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm dark:bg-blue-600" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

        </>

    );
}

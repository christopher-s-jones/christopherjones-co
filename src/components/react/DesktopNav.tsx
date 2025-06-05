import { useStore } from "@nanostores/react";
import { $isMobile } from "../../stores/mobileState";
import BookingButton from "./BookingButton";

export default function DesktopNav() {

    const isMobile = useStore($isMobile);

    return (
        <nav
            className=
            {isMobile ?
                "hidden md:flex items-center justify-end font-sans font-semibold text-lg 3xl:text-3xl" :
                "md:flex items-center justify-end font-sans font-semibold text-lg 3xl:text-3xl"
            }
        >
           <div>
                <a
                    className="text-center p-3 ml-5 text-slate-700 dark:text-slate-100 
                        hover:text-amber-500 dark:hover:text-amber-400"
                    href="/">
                    Home
                </a>
            </div>
            <div>
                <a
                    className="text-center p-3 ml-5 text-slate-700 dark:text-slate-100 
                        hover:text-amber-500 dark:hover:text-amber-400"
                    href="/#services">
                    Services
                </a>
            </div>
            <div>
                <a
                    className="text-center p-3 ml-5 text-slate-700 dark:text-slate-100 
                        hover:text-amber-500 dark:hover:text-amber-400"
                    href="/projects">
                    Projects
                </a>
            </div>
            <div>
                <a
                    className="text-center p-3 ml-5 text-slate-700 dark:text-slate-100 
                        hover:text-amber-500 dark:hover:text-amber-400"
                    href="/about">
                    About
                </a>
            </div>
            <BookingButton buttonText="Book a Call" />
        </nav>
    );
}

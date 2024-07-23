import Logo from "./Logo"
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import ThemeToggle from "./ThemeToggle";
import { useStore } from "@nanostores/react";
import { isMobile } from "../../stores/mobileState";

// Header is the common page header with an embedded nav,
// either mobile or desktop
export default function Header() {

    const $isMobile = useStore(isMobile);

    return (
        <header
            className="fixed
                top-0 left-0 right-0 z-50
                backdrop-blur-md
                bg-white
                bg-opacity-95
                dark:bg-opacity-50
                dark:bg-slate-950"
        >
            <div
                className="flex items-center justify-start 
                    max-w-7xl 3xl:max-w-[2560px] mx-auto px-6 py-4 3xl:py-6"
            >
                <Logo />
                <div className="fixed right-0 mx-5 flex flex-row-reverse">
                    {isMobile && (<><ThemeToggle /><MobileNav /></>)}
                    {!isMobile && (<><DesktopNav /><ThemeToggle /></>)}
                </div>
            </div>
        </header>
    );
}
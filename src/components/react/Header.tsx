import Logo from "./Logo"
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import ThemeToggle from "./ThemeToggle";
import { useStore } from "@nanostores/react";
import { $isMobile } from "../../stores/mobileState";

// Header is the common page header with an embedded nav,
// either mobile or desktop
export default function Header() {

    const isMobile = useStore($isMobile);

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
                className="flex items-center justify-between 
                    max-w-7xl 3xl:max-w-[2560px] mx-auto px-6 py-0 sm:py-1 md:py-6"
            >
                <Logo />
                <div className="content" />
                <div className="flex flex-end flex-row-reverse">
                    {/**ThemeToggle is rendering in the opposite order,
                     * so reverse the order here for both mobile and desktop.
                     * Odd behavior =)
                     */}
                    {isMobile && (<><MobileNav /><ThemeToggle /></>)}
                    {!isMobile && (<><ThemeToggle /><DesktopNav /></>)}
                </div>
            </div>
        </header>

    );
}
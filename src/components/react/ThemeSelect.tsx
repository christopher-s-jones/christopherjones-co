import { useStore } from "@nanostores/react";
import { $settings } from "../../stores/settings";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import SystemIcon from "./SystemIcon";
import { useState } from "react";
import ReactDOM from "react-dom";

export default function ThemeSelect() {

    // Subscribe to the settings model
    const settings = useStore($settings);
    const [isOpen, setMenuIsOpen] = useState(false);

    // themeHandler handles click events on the ThemeToggle button
    const setSelectedTheme = (event) => {
        event.preventDefault();
        const newTheme = event.currentTarget.parentElement.dataset.value;
        console.log("Theme selection changed.");
        switch (newTheme) {
            case "light":
                $settings.setKey("theme", newTheme);
                break;
            case "dark":
                $settings.setKey("theme", newTheme);
                break;
            case "auto":
                $settings.setKey("theme", newTheme);
                break;
        }
        setMenuIsOpen(false);
    }

    const isDark = document.documentElement.classList.contains("dark");

    return (

        <div id="theme-select" className="relative flex items-center justify-center font-semibold text-sm py-2 text-slate-800 dark:text-slate-100">
            <button onClick={() => setMenuIsOpen(!isOpen)} className="items-center px-3 md:px-6 py-2 mr-0 ml-5">
                {/* Check the settings, but if it is "auto", use isDark */}
                <SunIcon  visible={settings.theme === "light" ? true : !isDark} />
                <MoonIcon visible={settings.theme === "dark" ? true : isDark} />
            </button>
            <div
                data-value={settings.theme}
                onChange={(e) => setSelectedTheme(e)}
                className={isOpen ? "absolute z-50 top-full right-4 overflow-hidden py-1 rounded-lg bg-slate-50 dark:bg-blue-960 border border-slate-300 dark:border-slate-700 space-y-2" : "rounded-lg bg-slate-50 dark:bg-blue-960 border border-slate-300 dark:border-slate-700 py-2 space-y-6 hidden"}>
                <div className="py-1 px-2 mx-4 flex items-center cursor-pointer" role="option" data-value={"light"}><SunIcon visible={true} /><span onClick={(e) => setSelectedTheme(e)} className="mx-2">Light</span></div>
                <div className="py-1 px-2 mx-4 flex items-center cursor-pointer" role="option" data-value={"dark"}><MoonIcon visible={true} /><span onClick={(e) => setSelectedTheme(e)} className="mx-2">Dark</span></div>
                <div className="py-1 px-2 mx-4 flex items-center cursor-pointer" role="option" data-value={"auto"}><SystemIcon visible={true} /><span onClick={(e) => setSelectedTheme(e)} className="mx-2">System</span></div>
            </div>
        </div>
    );
}


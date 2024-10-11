import { useState } from "react";
import MoonIcon from "./MoonIcon.tsx";
import SunIcon from "./SunIcon.tsx";

export default function ThemeToggle() {

    const [isDark, setIsDark] =  useState(false);
    
    // const theme = localStorage.getItem("theme");
    // setIsDark(theme === "dark" ? true : false);

    // Set up a system theme change listener
    const darkPref = window.matchMedia(
        "(prefers-color-scheme: dark)",
    );
    darkPref.addEventListener("change", (event) => {
        const newTheme = event.matches ? "dark" : "light";
        if (newTheme === "light") {
            setIsDark(false);
        } else {
            setIsDark(true);
        }
    });

    /**
     * Toggle the opposite theme when the toggle is clicked
     * @param event the mouse click event
     */
    const themeHandler = (event) => {
        const currentTheme = event.currentTarget.dataset.theme;
        currentTheme === "dark"? setIsDark(false) : setIsDark(true);
    }

    return (
        // <!-- Toggle light or dark mode -->
        <button onClick={(event) => themeHandler(event)}
            data-theme={isDark ? "dark" : "light"}
            className="z-50 flex items-center justify-center hover:cursor-pointer px-3 md:px-6 py-2 mr-0 ml-5">
            <SunIcon visible={!isDark} />
            <MoonIcon visible={isDark} />
        </button>
    );
}


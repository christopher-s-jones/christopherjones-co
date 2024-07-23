import { map } from "nanostores";
import type { PreinitializedMapStore } from "nanostores";
import { useStore } from "@nanostores/react";
import { $themeState } from "../../stores/themeState";

export default function ThemeToggle() {

    // Subscribe to the themeState model
    const themeState = useStore($themeState);

    // themeHandler handles click events on the ThemeToggle button
    const themeHandler = (event: React.MouseEvent) => {
        console.log("Theme button clicked.");
        $themeState.set({
            isDark: !themeState.isDark, // Toggle the value
            via: "manual",
        });
    }

    return (
        // <!-- Toggle light or dark mode -->
        <button onClick={(event) => themeHandler(event)} className="items-center px-3 md:px-6 py-2 mr-0 ml-5">
            <span className={themeState.isDark === true ? "hidden dark:hidden" : "dark:hidden"}>
                {/* <!-- Sunshine Icon --> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-6 3xl:size-10
                fill-slate-700 hover:fill-amber-500"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
                    ></path>
                </svg>
            </span>
            <span className={themeState.isDark === true ? "dark:inline" : "hidden dark:inline"}>
                {/* <!-- Moon Icon--> */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-6 3xl:size-10
                    dark:hover:fill-amber-400 dark:fill-white"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                    ></path>
                </svg>
            </span>
        </button>
    );
}


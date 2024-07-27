import { map } from "nanostores";
// ThemeState stores a model of the current dark or light mode state
// If set via manual override, localStorage.theme will be set,
// otherwise it will be removed when set by the system
export type ThemeState = {
    isDark: boolean,
    via: string,  // manual | system
}

// On page load, export an initial theme state,
// based on the prefers-color-scheme media query,
// but update it from local storage if present.
let isDark: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialState: ThemeState = {
    isDark: isDark,
    via: "system"
}

if ("theme" in localStorage) {
    if (localStorage.theme === "dark") {
        initialState.isDark = true;
        initialState.via = "manual";
    } else {
        initialState.via = "manual";
    }
}

export const $themeState = map<ThemeState>(initialState);

// Respond to dark system theme preference changes
const darkModePref: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
darkModePref.addEventListener("change", function (e: MediaQueryListEvent) {
    console.debug("System theme changed");
    if (e.matches) {
        $themeState.set({isDark: true, via: "system"});
    }
});

// Respond to light system theme preference changes
const lightModePref: MediaQueryList = window.matchMedia("(prefers-color-scheme: light)");
lightModePref.addEventListener("change", function (e: MediaQueryListEvent) {
    console.debug("System theme changed.");
    if (e.matches) {
        $themeState.set({isDark: false, via: "system"});
    }
});

// When the theme is changed, update the state
function themeChangeHandler( newState: Readonly<ThemeState>, oldState: Readonly<ThemeState>, 
    changedKey: keyof ThemeState) {
        // Update the local storage theme setting
        if (newState.via === "system") {
            localStorage.removeItem("theme");
        } else {
            localStorage.setItem("theme", newState.isDark ? "dark" : "light");
        }
        // Update the page theme (TailwindCSS strategy)
        if (newState.isDark) {
            document.documentElement.classList.add("dark");
            console.debug("HTMLElem classes:" + document.documentElement.classList.values())
        } else {
            document.documentElement.classList.remove("dark");
        }
}

// Listen for changes to the model
$themeState.subscribe(themeChangeHandler);

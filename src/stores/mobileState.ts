import { atom } from "nanostores";

let mobileMediaQueryStr = "(min-width: 768px)";

// isMobile stores the current state of the mobile media query
export const $isMobile = atom(!window.matchMedia(mobileMediaQueryStr).matches);

// Set the isMobile state as the viewport changes
window.matchMedia(mobileMediaQueryStr).addEventListener("change", (event) => {
    $isMobile.set(!event.matches);
});


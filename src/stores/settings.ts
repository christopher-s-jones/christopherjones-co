import { persistentMap } from "@nanostores/persistent";

// A map of settings for the app that is persisted to local storage
export type SettingsValue = {
    theme?: "dark" | "light"
}

export const $settings = persistentMap<SettingsValue>("settings:", {});

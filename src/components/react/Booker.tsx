import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Booker() {
    useEffect(() => {
        (async function () {
            // const cal = await getCalApi({ "namespace": "60min" });
            const cal = await getCalApi({});
            cal("ui", { 
                "cssVarsPerTheme": {
                    light: {
                        "cal-bg": "#f1f5f9",
                        "cal-bg-muted": "#e2e8f0",
                        "cal-bg-subtle": "#e2e8f0",
                        "cal-text": "#1c1917",
                        "cal-text-emphasis": "#0c0a09",
                        "cal-border-emphasis": "#e2e8f0",
                        "cal-text-error": "#9f1239",
                        "cal-border": "#e2e8f0",
                        "cal-border-default": "#e2e8f0",
                        "cal-border-subtle": "#e2e8f0",
                        "cal-border-booker": "#cbd5e1",
                        "cal-text-muted": "#f5f5f4",
                        "cal-bg-emphasis": "#cbd5e1",
                        "cal-border-booker-width": "2px",
                        // More CSS variables are defined here
                        // https://github.com/calcom/cal.com/blob/main/packages/config/tailwind-preset.js
                    },
                    dark: {
                        // Set the similar variables as in light theme but for dark mode.
                        "cal-bg": "#020616",
                        "cal-bg-muted": "#111827",
                        "cal-bg-subtle": "#0d142e",
                        "cal-text": "#f8fafc",
                        "cal-text-emphasis": "#FFFFFF",
                        "cal-border-emphasis": "#64748b",
                        "cal-text-error": "#9f1239",
                        "cal-border": "#1e293b",
                        "cal-border-default": "#1e293b",
                        "cal-border-subtle": "#1e293b",
                        "cal-border-booker": "#1e293b",
                        "cal-text-muted": "##64748b",
                        "cal-bg-emphasis": "#172554",
                        "cal-border-booker-width": "2px",
                    },
                }, 
                "hideEventTypeDetails": false, 
                "layout": "month_view" 
            });
        })();
    }, [])

    return <Cal 
        calLink="christopherjones"
        style={{ margin: "0px auto", width: "100%", height: "100%", overflow: "scroll"}}
        config={{ "layout": "month_view" }}
    />;
};

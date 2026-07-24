"use client";

import { useEffect } from "react";
import { CAL } from "@/content";

/**
 * Loads the Cal.com embed lazily and wires up the element-click popup.
 * Any element carrying the data-cal-* attributes (the "book a call"
 * button) opens the "20" scheduler in a dark month view on click.
 * Renders nothing — this is the only client-side JavaScript on the page.
 */
export default function CalInit() {
  useEffect(() => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    if ((window as any).__calInit) return;
    (window as any).__calInit = true;

    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal; const ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1]; api.q = api.q || [];
          if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); }
          else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", CAL.namespace, { origin: "https://app.cal.com" });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;
    Cal.ns[CAL.namespace]("ui", { hideEventTypeDetails: false, layout: "month_view", theme: "dark" });
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }, []);

  return null;
}

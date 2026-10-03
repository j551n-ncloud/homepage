import posthog from "posthog-js";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

async function start(key: string) {
  // Cookieless mode strips the IP before PostHog's GeoIP lookup, so the country comes from Cloudflare.
  let country: string | null = null;
  try {
    country = (await (await fetch("/api/geo")).json()).country;
  } catch {
    // no country then, analytics still works
  }
  posthog.init(key, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: "2026-08-30",
    cookieless_mode: "always",
    before_send: (event) => {
      if (event && country) event.properties.$geoip_country_code = country;
      return event;
    },
  });
}

if (key) void start(key);

import type { NextRequest } from "next/server";

// Country of the visitor as Cloudflare sees it (CF-IPCountry), for PostHog. Cookieless mode strips the
// IP before PostHog's GeoIP lookup runs, so the country is added client-side instead. No IP is returned.
export function GET(req: NextRequest) {
  const raw = req.headers.get("cf-ipcountry");
  const country = raw && /^[A-Z]{2}$/.test(raw) && raw !== "XX" ? raw : null;
  return Response.json({ country }, { headers: { "Cache-Control": "no-store" } });
}

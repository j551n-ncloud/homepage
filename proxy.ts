import { NextResponse, type NextRequest } from "next/server";

// Access log to stdout (docker logs). Behind Cloudflare the real client IP is in CF-Connecting-IP.
// Requests without it (cloudflared health checks from the tunnel hosts) are not logged.
export function proxy(req: NextRequest) {
  const ip = req.headers.get("cf-connecting-ip");
  if (!ip) return NextResponse.next();
  const country = req.headers.get("cf-ipcountry") ?? "-";
  const ua = req.headers.get("user-agent") ?? "-";
  console.log(`${new Date().toISOString()} ${ip} ${country} ${req.method} ${req.nextUrl.pathname} "${ua}"`);
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/|ingest/|favicon).*)"],
};

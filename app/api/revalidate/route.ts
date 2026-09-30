import { createHmac, timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

// Called by Ghost webhooks (post published, edited, unpublished) so new posts and tag links show up
// right away instead of after the hourly revalidation.
//
// Ghost refuses webhooks to private IPs, so it calls the public URL through Cloudflare. Those requests
// must carry a valid X-Ghost-Signature: "sha256=<hex>, t=<ms>", an HMAC-SHA256 of body + timestamp with
// the webhook secret (GHOST_WEBHOOK_SECRET). Calls from the LAN (no CF-Connecting-IP) are allowed
// without it, for a manual refresh.
const MAX_AGE_MS = 5 * 60_000;

function validSignature(header: string | null, body: string, secret: string | undefined): boolean {
  if (!header || !secret) return false;
  const m = /sha256=([a-f0-9]{64}),\s*t=(\d+)/.exec(header);
  if (!m) return false;
  const [, sig, ts] = m;
  if (Math.abs(Date.now() - Number(ts)) > MAX_AGE_MS) return false;
  const expected = createHmac("sha256", secret).update(`${body}${ts}`).digest();
  const given = Buffer.from(sig, "hex");
  return given.length === expected.length && timingSafeEqual(given, expected);
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const viaCloudflare = req.headers.get("cf-connecting-ip") !== null;
  if (viaCloudflare && !validSignature(req.headers.get("x-ghost-signature"), body, process.env.GHOST_WEBHOOK_SECRET)) {
    return new Response("forbidden", { status: 403 });
  }
  revalidatePath("/");
  revalidatePath("/de");
  return Response.json({ revalidated: ["/", "/de"] });
}

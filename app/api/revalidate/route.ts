import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

// Called by a Ghost webhook (post published, edited, unpublished) so new posts and tag links show up
// right away instead of after the hourly revalidation. Ghost runs on the same host and calls this over
// the LAN; anything coming through Cloudflare carries CF-Connecting-IP and is refused.
export async function POST(req: NextRequest) {
  if (req.headers.get("cf-connecting-ip")) {
    return new Response("forbidden", { status: 403 });
  }
  revalidatePath("/");
  revalidatePath("/de");
  return Response.json({ revalidated: ["/", "/de"] });
}

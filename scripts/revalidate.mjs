#!/usr/bin/env node
// Manual cache refresh: signs the request like a Ghost webhook, so it passes /api/revalidate.
//   GHOST_WEBHOOK_SECRET=<secret> node scripts/revalidate.mjs [url]
import { createHmac } from "node:crypto";

const secret = process.env.GHOST_WEBHOOK_SECRET;
if (!secret) {
  console.error("GHOST_WEBHOOK_SECRET is not set (deploy vault: vault_homepage_webhook_secret)");
  process.exit(1);
}
const url = process.argv[2] ?? "https://j551n.com/api/revalidate";
const body = JSON.stringify({ manual: true });
const t = Date.now();
const sig = createHmac("sha256", secret).update(`${body}${t}`).digest("hex");
const res = await fetch(url, {
  method: "POST",
  headers: { "content-type": "application/json", "x-ghost-signature": `sha256=${sig}, t=${t}` },
  body,
});
console.log(res.status, await res.text());
process.exit(res.ok ? 0 : 1);

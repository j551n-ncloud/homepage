# j551n.com

Personal portfolio of Johannes Nguyen, in English and German. Next.js 16 with a Swiss Modernism design, self-hosted on Docker and deployed through a GitOps pipeline.

**Live:** [j551n.com](https://j551n.com) · [j551n.com/de](https://j551n.com/de)

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router, React 19, React Compiler), TypeScript |
| Styling | Tailwind CSS v4 with a single custom `globals.css` |
| Font | Inter via `next/font` |
| Analytics | PostHog, EU cloud, cookieless |
| Runtime | Node.js on Alpine, standalone output, port `8080` |
| Registry | `ghcr.io/j551n-ncloud/homepage` |

## Structure

| Path | Contents |
|---|---|
| `app/(en)/`, `app/(de)/de/` | English and German routes, each with its own root layout for `<html lang>` |
| `lib/content.ts` | All page text in both languages: hero, about, skills, projects, experience |
| `lib/legal.tsx` | Legal notice and privacy policy in both languages |
| `components/HomePage.tsx` | The page itself, rendered for either language |
| `lib/blog.ts` | Latest posts from the Ghost RSS feed and live tag checks |
| `app/api/` | `revalidate` (Ghost webhook) and `geo` (country for analytics) |
| `proxy.ts` | Access log with the real client IP from Cloudflare |
| `public/Johannes_Nguyen_CV.pdf`, `public/Johannes_Nguyen_Lebenslauf.pdf` | Web CV in English and German, built in the separate `Bewerbung` repo with `make web` |

## Features

- **Bilingual.** `/` and `/de` with `hreflang`, a language switch in the nav and translated legal pages.
- **Blog integration.** The latest posts from [blog.j551n.com](https://blog.j551n.com) are pulled via RSS. Skills link to their blog tag only while that tag page exists, and every skill category links to its section on the blog's Topics page.
- **Instant updates.** Ghost calls `/api/revalidate` when a post is published, edited or unpublished. Every request must carry a valid `X-Ghost-Signature` (HMAC-SHA256 with `GHOST_WEBHOOK_SECRET`, at most 5 minutes old). Without a webhook, pages revalidate hourly.
- **Cookieless analytics.** PostHog runs in cookieless mode and is proxied through `/ingest`. The country comes from Cloudflare via `/api/geo`, because cookieless mode strips the IP before PostHog's GeoIP lookup. CV downloads are tracked as a `cv_download` event.
- **Structured data.** JSON-LD with credentials, `knowsAbout` and profiles.

## Tracking links

Links with `utm_source` show up in PostHog under Web analytics, Sources, and are attached to CV downloads:

```
https://j551n.com/?utm_source=<company>   # one per application
https://j551n.com/?utm_source=card        # business card QR code
https://j551n.com/?utm_source=linkedin
```

## Configuration

| Variable | When | Purpose |
|---|---|---|
| `NEXT_PUBLIC_POSTHOG_KEY` | build | PostHog project key, from the GitHub variable `POSTHOG_KEY`. Without it, analytics is off |
| `NEXT_PUBLIC_APP_VERSION` | build | Version shown in the footer, set from the `v*` tag |
| `GHOST_WEBHOOK_SECRET` | runtime | Shared secret of the Ghost webhooks, from the deploy repo's vault |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Put `NEXT_PUBLIC_POSTHOG_KEY` in `.env.local` to test analytics.

Manual cache refresh, signed like a Ghost webhook:

```bash
GHOST_WEBHOOK_SECRET=<secret> node scripts/revalidate.mjs
```

## Build and deploy

A `v*` tag builds the image in GitHub Actions and pushes it to ghcr.io with the version baked into the footer. Pushes to `main` build the `edge` tag only. The release notes get the image digest and pull command.

Production runs from the private `services/deploy` repo: the image version is pinned in `compose/homepage/docker-compose.yml`, and bumping that pin rolls it out with Ansible after a Proxmox snapshot.

`package.json`'s `version` field is frozen; the footer version comes from the tag.

## License

Source code: GNU Affero General Public License v3.0, see [LICENSE](LICENSE). Copyright (c) 2026 Johannes Nguyen.

The license covers the source code only. The site's content (texts, the CV in `public/*.pdf`, images and the personal data in them) is not covered and remains all rights reserved.

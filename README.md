# j551n.com

Personal portfolio site built with Next.js 16, Tailwind CSS v4, and Swiss Modernism design principles. Self-hosted on Docker via GitHub Actions CI/CD.

**Live:** [j551n.com](https://j551n.com)

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16.2.9 (App Router, React 19) |
| Styling | Tailwind CSS v4, CSS custom properties |
| Font | Inter via `next/font/google` |
| Language | TypeScript |
| Runtime | Node.js 22 Alpine (standalone output) |
| Registry | GitHub Container Registry (ghcr.io) |
| CI/CD | GitHub Actions |

---

## Design

Swiss Modernism / International Typographic Style. Two-column label/content grid, horizontal rules, tight typographic hierarchy. No JavaScript UI frameworks for layout, just CSS Grid and custom properties.

Key tokens:

| Token | Value |
|---|---|
| `--bg` | `#f6f6f4` |
| `--text` | `#141414` |
| `--accent` | `#0047b3` |
| `--muted` | `#6c6c6c` |
| `--label-w` | `180px` |

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Docker

```bash
# pull latest
docker pull ghcr.io/j551n-ncloud/homepage:latest

# or run with compose
docker compose up -d
```

Runs on port `8080`.

---

## CI/CD

Pushing to `main` or creating a `v*` tag triggers a GitHub Actions build that pushes to `ghcr.io/j551n-ncloud/homepage`. The release notes are automatically updated with the image digest and pull command.

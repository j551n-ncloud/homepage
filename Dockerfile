# Wolfi (glibc) for both stages; -dev adds npm and a shell for building
FROM cgr.dev/chainguard/node:latest-dev AS base
USER root

# ── deps ──────────────────────────────────────────────────────────────────────
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ── builder ───────────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG NEXT_PUBLIC_APP_VERSION=dev
ENV NEXT_PUBLIC_APP_VERSION=$NEXT_PUBLIC_APP_VERSION
ARG NEXT_PUBLIC_POSTHOG_KEY
ENV NEXT_PUBLIC_POSTHOG_KEY=$NEXT_PUBLIC_POSTHOG_KEY
RUN npm run build

# ── runner ────────────────────────────────────────────────────────────────────
FROM cgr.dev/chainguard/node:latest AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# npm is only needed to build; dropping it removes the CVEs in its bundled dependencies
USER root
RUN rm -rf /usr/lib/node_modules/npm /usr/bin/npm /usr/bin/npx

COPY --from=builder /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node
EXPOSE 8080
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

# the image entrypoint is node
CMD ["server.js"]

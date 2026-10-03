"use client";

import posthog from "posthog-js";

// CV download button that records a cv_download event in PostHog, together with the utm_source the
// visitor arrived with (e.g. ?utm_source=erhardt from a link in an application). Cookieless like
// everything else; if PostHog is not configured, capture is a no-op.
export default function CvLink({ href, lang, className, children }: {
  href: string;
  lang: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      download
      onClick={() => {
        const source = new URLSearchParams(window.location.search).get("utm_source") ?? undefined;
        posthog.capture("cv_download", { lang, utm_source: source });
      }}
    >
      {children}
    </a>
  );
}

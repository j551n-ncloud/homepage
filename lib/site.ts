import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { content, type Lang } from "@/lib/content";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const bodyStyle = { fontFamily: "var(--font-inter), 'Helvetica Neue', Helvetica, sans-serif" };

export function siteMetadata(lang: Lang): Metadata {
  const { title, description } = content[lang].meta;
  const url = lang === "de" ? "https://j551n.com/de" : "https://j551n.com";
  return {
    title,
    description,
    metadataBase: new URL("https://j551n.com"),
    alternates: {
      canonical: lang === "de" ? "/de" : "/",
      languages: { en: "/", de: "/de", "x-default": "/" },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Johannes Nguyen",
      type: "website",
      locale: lang === "de" ? "de_DE" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon.png", type: "image/png" },
      ],
      apple: "/favicon.png",
    },
  };
}

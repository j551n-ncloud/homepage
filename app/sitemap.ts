import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://j551n.com";
  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: base, de: `${base}/de` } },
    },
    {
      url: `${base}/de`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: base, de: `${base}/de` } },
    },
    {
      url: `${base}/legal/notice`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/legal/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}

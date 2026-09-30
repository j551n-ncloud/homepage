export type Post = { title: string; url: string; date: Date };

const FEED = "https://blog.j551n.com/rss/";

function decode(s: string) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    .trim();
}

// Latest posts from the Ghost RSS feed. Returns [] if the blog is unreachable so the build never fails on it.
export async function getLatestPosts(limit = 3): Promise<Post[]> {
  try {
    const res = await fetch(FEED, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .slice(0, limit)
      .map(([, item]) => ({
        title: decode(item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ""),
        url: decode(item.match(/<link>([\s\S]*?)<\/link>/)?.[1] ?? ""),
        date: new Date(item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? ""),
      }))
      .filter((p) => p.title && p.url.startsWith("https://"));
  } catch {
    return [];
  }
}

// Ghost only serves /tag/<slug>/ once the tag has a published post, so a 200 means the link is safe.
// Checked on each hourly revalidation; unreachable blog means no tag links rather than dead ones.
export async function getLiveTags(slugs: string[]): Promise<Set<string>> {
  const results = await Promise.all(
    [...new Set(slugs)].map(async (slug) => {
      try {
        const res = await fetch(`https://blog.j551n.com/tag/${slug}/rss/`, { next: { revalidate: 3600 } });
        return res.ok ? slug : null;
      } catch {
        return null;
      }
    }),
  );
  return new Set(results.filter((s): s is string => s !== null));
}

export const tagUrl = (slug: string) => `https://blog.j551n.com/tag/${slug}/`;

import { rssUrl, type Tag } from "@/config/site";
import { POSTS_META } from "@/content/posts";

export type Post = {
  slug: string;
  titulo: string;
  href: string;
  /** AAAA-MM-DD */
  data: string;
  tipo: string;
  tag?: Tag;
  imagem?: string;
};

/**
 * Lê o RSS do Substack no build (o site é exportado estático).
 * Sem link configurado, ou se o feed falhar, devolve lista vazia.
 */
export async function getPosts(limite = 7): Promise<Post[]> {
  const url = rssUrl();
  if (!url) return [];

  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    return parseFeed(await res.text()).slice(0, limite);
  } catch {
    return [];
  }
}

function parseFeed(xml: string): Post[] {
  const itens = xml.match(/<item\b[\s\S]*?<\/item>/g) ?? [];

  return itens.flatMap((item) => {
    const titulo = text(item, "title");
    const href = text(item, "link");
    if (!titulo || !href) return [];

    const slug = href.replace(/\/+$/, "").split("/").pop() ?? href;
    const meta = POSTS_META[slug] ?? {};
    const pubDate = new Date(text(item, "pubDate"));

    return [
      {
        slug,
        titulo,
        href,
        data: Number.isNaN(pubDate.getTime()) ? "" : pubDate.toISOString().slice(0, 10),
        tipo: meta.tipo ?? "ensaio",
        tag: meta.tag,
        imagem: item.match(/<enclosure\b[^>]*\burl="([^"]+)"/)?.[1],
      },
    ];
  });
}

function text(xml: string, tag: string): string {
  const raw = xml.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`))?.[1] ?? "";
  const cdata = raw.match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  return (cdata ? cdata[1] : decodeEntities(raw)).trim();
}

function decodeEntities(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export const SITE = {
  name: "viriato sampaio",
  title: "Viriato Sampaio",
  headline: "Engenheiro, ensaísta.",
  description:
    "Engenheiro de software e ensaísta. Ensaios sobre tecnologia, trabalho, cultura digital e teoria crítica.",
  location: "vale do capão, ba",
  avatar: "/vt.jpeg",
  // TODO: nome da publicação no Substack.
  publicacao: "",
} as const;

export const NAV = [
  { label: "início", href: "/" },
  { label: "projetos", href: "/projetos" },
  { label: "sobre", href: "/sobre" },
] as const;

// TODO: preencher os links vazios. Links vazios não aparecem no site.
export const LINKS = {
  substack: "", // ex.: https://nome.substack.com
  youtube: "",
  instagram: "",
  github: "https://github.com/viriatonova",
  email: "",
  curriculo: "", // ex.: /curriculo.pdf (arquivo em public/)
} as const;

export const TAGS = ["tecnologia", "trabalho", "ideias", "terra"] as const;

export type Tag = (typeof TAGS)[number];

export type ExternalLink = { label: string; href: string; external: boolean };

export function rssUrl(): string {
  return LINKS.substack ? new URL("/feed", LINKS.substack).toString() : "";
}

export function substackSubscribeUrl(): string {
  return LINKS.substack ? new URL("/subscribe", LINKS.substack).toString() : "";
}

function only(links: Array<ExternalLink | false>): ExternalLink[] {
  return links.filter((l): l is ExternalLink => Boolean(l && l.href));
}

/** Links sociais na ordem do rodapé. */
export function footerLinks(): ExternalLink[] {
  return only([
    { label: "rss", href: rssUrl(), external: false },
    { label: "substack", href: LINKS.substack, external: true },
    { label: "youtube", href: LINKS.youtube, external: true },
    { label: "instagram", href: LINKS.instagram, external: true },
    { label: "github", href: LINKS.github, external: true },
    { label: "e-mail", href: LINKS.email && `mailto:${LINKS.email}`, external: false },
  ]);
}

/** Links da seção de contato, na página sobre. */
export function contactLinks(): ExternalLink[] {
  return only([
    { label: "github", href: LINKS.github, external: true },
    { label: "youtube", href: LINKS.youtube, external: true },
    { label: "substack", href: LINKS.substack, external: true },
    { label: "instagram", href: LINKS.instagram, external: true },
  ]);
}

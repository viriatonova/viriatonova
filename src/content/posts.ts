import type { Tag } from "@/config/site";

/**
 * O RSS do Substack não traz tag nem tipo. Classifique aqui cada post pelo slug
 * da URL (https://nome.substack.com/p/<slug>). Sem entrada, o post aparece como
 * "ensaio" e sem tag.
 */
export const POSTS_META: Record<string, { tag?: Tag; tipo?: string }> = {
  // "dois-vales": { tag: "trabalho", tipo: "ensaio" },
};

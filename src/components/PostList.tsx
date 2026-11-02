"use client";

import { useState } from "react";
import { TAGS, type Tag } from "@/config/site";
import type { Post } from "@/lib/substack";
import { TagPill } from "./TagPill";
import pill from "./TagPill.module.css";
import styles from "./PostList.module.css";

type Props = {
  posts: Post[];
  verTodosHref?: string;
};

export function PostList({ posts, verTodosHref }: Props) {
  const [filtro, setFiltro] = useState<Tag | null>(null);
  const itens = filtro ? posts.filter((p) => p.tag === filtro) : posts;

  return (
    <section aria-labelledby="recentes" className={styles.section}>
      <div className={styles.top}>
        <h2 id="recentes" className="eyebrow">
          {"// últimos posts no substack · via rss"}
        </h2>
        <div role="group" aria-label="filtrar por tag" className={styles.filters}>
          <button
            type="button"
            onClick={() => setFiltro(null)}
            aria-pressed={filtro === null}
            className={`${pill.pill} ${pill.md} ${styles.all} ${filtro === null ? pill.active : ""}`}
          >
            todas
          </button>
          {TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setFiltro(filtro === tag ? null : tag)}
              aria-pressed={filtro === tag}
              className={`${pill.pill} ${pill.md} ${pill[tag]} ${styles.filter} ${filtro === tag ? pill.active : ""}`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.list}>
        {itens.map((post) => (
          <a key={post.href} href={post.href} target="_blank" rel="noopener" className={`row ${styles.item}`}>
            <span className={styles.meta}>
              <span>{post.data}</span>
              <span className={styles.tipo}>{post.tipo}</span>
            </span>
            <span className={`row-t ${styles.title}`}>{post.titulo}</span>
            {post.tag && <TagPill tag={post.tag} />}
            <span aria-hidden="true" className={styles.arrow}>
              ↗
            </span>
          </a>
        ))}
        {itens.length === 0 && (
          <p className={styles.empty}>
            {filtro ? "// nada aqui com essa tag ainda." : "// nada aqui ainda."}
          </p>
        )}
      </div>

      {verTodosHref && (
        <a href={verTodosHref} target="_blank" rel="noopener" className={`lk ${styles.more}`}>
          ver todos no substack ↗
        </a>
      )}
    </section>
  );
}

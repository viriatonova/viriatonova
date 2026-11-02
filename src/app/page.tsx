import Image from "next/image";
import { PostList } from "@/components/PostList";
import { TagPill } from "@/components/TagPill";
import { SeloBlues, SeloCodigo, SeloEscrita, SeloMorro } from "@/components/icons";
import { LINKS, SITE, substackSubscribeUrl } from "@/config/site";
import { getPosts } from "@/lib/substack";
import styles from "./page.module.css";

export default async function Home() {
  const posts = await getPosts();
  const ultimo = posts[0];
  const assinar = substackSubscribeUrl();

  return (
    <>
      <section className={styles.hero}>
        <ul aria-label="símbolos" className={styles.symbols}>
          <li>
            <Image
              src={SITE.avatar}
              alt="retrato de viriato sampaio"
              width={60}
              height={60}
              priority
              className={styles.portrait}
            />
          </li>
          <li>
            <SeloMorro size={60} label="morro do vale do capão" />
          </li>
          <li>
            <SeloCodigo size={60} label="código" />
          </li>
          <li>
            <SeloEscrita size={60} label="escrita" />
          </li>
          <li>
            <SeloBlues size={60} label="blues" />
          </li>
        </ul>
        <div className={styles.intro}>
          <p className={styles.headline}>{SITE.headline}</p>
          <h1 className={styles.title}>
            Entre o <span className={styles.mono}>login</span> e o{" "}
            <span className={styles.mono}>logout</span>{" "}
            <span className="grifo">cabe uma vida inteira</span>
            <span className="cur" aria-hidden="true">
              _
            </span>
          </h1>
        </div>
        <p className={styles.signature}>
          {"// "}
          {SITE.name}, {SITE.location}
        </p>
      </section>

      <main className={styles.main}>
        <aside aria-labelledby="substack-t" className={styles.substack}>
          <div className={styles.substackTop}>
            <p className={styles.substackNote}>{"// os textos moram no substack"}</p>
            <SeloMorro size={28} />
          </div>
          <h2 id="substack-t" className={styles.substackTitle}>
            {SITE.publicacao || "Substack"}
          </h2>
          <p className={styles.substackText}>
            Ensaios sobre tecnologia, trabalho, cultura digital e teoria crítica. Os textos novos
            saem lá primeiro, e chegam por e-mail para quem assina.
          </p>

          {ultimo && (
            <a href={ultimo.href} target="_blank" rel="noopener" className={styles.latest}>
              {ultimo.imagem ? (
                // imagem externa do Substack: sem otimização no export estático
                // eslint-disable-next-line @next/next/no-img-element
                <img src={ultimo.imagem} alt="" className={styles.latestCover} />
              ) : (
                <div aria-hidden="true" className={`${styles.latestCover} ${styles.latestDots}`} />
              )}
              <span className={styles.latestMeta}>
                <span>
                  {"// último post · "}
                  {ultimo.data}
                </span>
                {ultimo.tag && <TagPill tag={ultimo.tag} />}
              </span>
              <span className={styles.latestTitle}>{ultimo.titulo} ↗</span>
            </a>
          )}

          {LINKS.substack && (
            <div className={styles.substackActions}>
              <a href={LINKS.substack} target="_blank" rel="noopener" className={styles.btnSolid}>
                ler no substack ↗
              </a>
              <a href={assinar} target="_blank" rel="noopener" className={styles.btnOutline}>
                assinar
              </a>
            </div>
          )}
        </aside>

        <PostList posts={posts} verTodosHref={LINKS.substack || undefined} />
      </main>
    </>
  );
}

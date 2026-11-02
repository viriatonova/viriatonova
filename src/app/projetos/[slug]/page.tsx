import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjetoIcone } from "@/components/ProjetoIcone";
import { TagPill } from "@/components/TagPill";
import { LINKS } from "@/config/site";
import { getProjeto, PROJETOS, STATUS, type Etapa } from "@/content/projetos";
import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJETOS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const projeto = getProjeto(slug);
  if (!projeto) return {};
  return { title: projeto.nome, description: projeto.resumo };
}

const SIMBOLO_ETAPA: Record<Etapa["estado"], string> = {
  feito: "●",
  atual: "◐",
  pendente: "○",
};

export default async function ProjetoPage(props: PageProps<"/projetos/[slug]">) {
  const { slug } = await props.params;
  const projeto = getProjeto(slug);
  if (!projeto) notFound();

  const status = STATUS[projeto.status];
  const outros = PROJETOS.filter((p) => p.slug !== projeto.slug);

  return (
    <main className={styles.main}>
      <section className={styles.head}>
        <Link href="/projetos" className={`lk ${styles.back}`}>
          ← projetos
        </Link>
        <div className={styles.identity}>
          <ProjetoIcone projeto={projeto} size={96} label={`símbolo do ${projeto.nome}`} />
          <div className={styles.identityText}>
            <p className="eyebrow">
              {status.simbolo} {status.label} · {projeto.tipo}
              {projeto.desde && ` · desde ${projeto.desde}`}
            </p>
            <h1 className={styles.title}>{projeto.nome}</h1>
          </div>
        </div>
        <p className={styles.lead}>{projeto.chamada}</p>
        <div className={styles.tags}>
          {projeto.tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      </section>

      {projeto.telas.length > 0 && (
        <section aria-label="telas" className={styles.screens}>
          {projeto.telas.map((tela, i) => (
            <figure key={i} className={styles.screen}>
              {tela.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={tela.src} alt={tela.legenda} className={styles.screenImg} />
              ) : (
                <div role="img" aria-label="placeholder de tela" className={`dots ${styles.screenImg}`}>
                  <span className={styles.screenLabel}>[tela {i + 1}]</span>
                </div>
              )}
              <figcaption className={styles.caption}>
                {"// "}
                {tela.legenda}
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      <section className={styles.content}>
        <div className={styles.text}>
          <div className={styles.block}>
            <h2 className={styles.h2}>O que é</h2>
            {projeto.oQueE.map((p, i) => (
              <p key={i} className={styles.p}>
                {p}
              </p>
            ))}
          </div>
          <div className={styles.block}>
            <h2 className={styles.h2}>Por que existe</h2>
            {projeto.porQueExiste.map((p, i) => (
              <p key={i} className={styles.p}>
                {p}
              </p>
            ))}
          </div>
          <div className={styles.block}>
            <h2 className={styles.h2}>Em que pé está</h2>
            <ol className={styles.steps}>
              {projeto.etapas.map((etapa) => (
                <li key={etapa.nome} className={`${styles.step} ${styles[etapa.estado]}`}>
                  <span className={styles.stepMark}>{SIMBOLO_ETAPA[etapa.estado]}</span>
                  <span className={styles.stepName}>{etapa.nome}</span>
                  <span className={styles.stepWhen}>{etapa.quando ?? "—"}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <aside aria-label="ficha do projeto" className={styles.card}>
          <p className="eyebrow">{"// ficha"}</p>
          <dl className={styles.facts}>
            {projeto.ficha.map(({ termo, valor }) => (
              <div key={termo} className={styles.fact}>
                <dt>{termo}</dt>
                <dd>{valor}</dd>
              </div>
            ))}
            <div className={styles.fact}>
              <dt>status</dt>
              <dd>{status.label}</dd>
            </div>
          </dl>
          {(projeto.acao || LINKS.substack) && (
            <div className={styles.actions}>
              {projeto.acao && (
                <a href={projeto.acao.href} className="btn">
                  {projeto.acao.label}
                </a>
              )}
              {LINKS.substack && (
                <a href={LINKS.substack} target="_blank" rel="noopener" className={`lk ${styles.follow}`}>
                  acompanhar no substack ↗
                </a>
              )}
            </div>
          )}
        </aside>
      </section>

      {outros.length > 0 && (
        <section aria-labelledby="outros" className={styles.others}>
          <h2 id="outros" className="eyebrow">
            {"// outros projetos"}
          </h2>
          <div className={styles.othersList}>
            {outros.map((p) => {
              const s = STATUS[p.status];
              return (
                <Link key={p.slug} href={`/projetos/${p.slug}`} className={`row ${styles.other}`}>
                  <span className="eyebrow">
                    {s.simbolo} {s.label}
                  </span>
                  <span className={`row-t ${styles.otherName}`}>{p.nome}</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}

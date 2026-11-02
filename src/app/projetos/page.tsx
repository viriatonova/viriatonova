import type { Metadata } from "next";
import Link from "next/link";
import { ProjetoIcone } from "@/components/ProjetoIcone";
import { TagPill } from "@/components/TagPill";
import { PROJETOS, STATUS } from "@/content/projetos";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Coisas que estou idealizando: o que é, por que existe e em que pé está.",
};

export default function Projetos() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <p className="eyebrow">{"// projetos"}</p>
        <h1 className={styles.title}>Coisas que estou idealizando.</h1>
        <p className={styles.lead}>
          Algumas viram software, outras ficam no papel por um tempo. Cada projeto tem sua página,
          com o que é, por que existe e em que pé está.
        </p>
      </div>

      <div className={styles.legend}>
        <span>{"// legenda:"}</span>
        {Object.values(STATUS).map(({ simbolo, label }) => (
          <span key={label}>
            {simbolo} {label}
          </span>
        ))}
      </div>

      <div className={styles.list}>
        {PROJETOS.map((projeto) => {
          const status = STATUS[projeto.status];
          return (
            <Link key={projeto.slug} href={`/projetos/${projeto.slug}`} className={`row ${styles.item}`}>
              <ProjetoIcone projeto={projeto} size={72} />
              <div className={styles.body}>
                <p className="eyebrow">
                  {status.simbolo} {status.label} · {projeto.tipo}
                </p>
                <p className={`row-t ${styles.name}`}>{projeto.nome}</p>
                <p className={`${styles.summary} ${projeto.status === "ideia" ? styles.muted : ""}`}>
                  {projeto.resumo}
                </p>
              </div>
              <div className={styles.side}>
                {projeto.tags.map((tag) => (
                  <TagPill key={tag} tag={tag} />
                ))}
                <span className={`lk ${styles.cta}`}>ver projeto →</span>
              </div>
            </Link>
          );
        })}
      </div>

      <p className={styles.contact}>
        {"// quer conversar sobre algum? "}
        <Link href="/sobre#contato" className="lk">
          fale comigo →
        </Link>
      </p>
    </main>
  );
}

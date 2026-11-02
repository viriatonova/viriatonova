import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contactLinks, LINKS, SITE } from "@/config/site";
import { FORMACAO, STACK, TRABALHO } from "@/content/sobre";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Engenheiro de software e ensaísta. Trabalho, formação e contato.",
};

export default function Sobre() {
  const links = contactLinks();

  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <Image
          src={SITE.avatar}
          alt="retrato de viriato sampaio"
          width={360}
          height={478}
          priority
          className={styles.portrait}
        />
        <div className={styles.introText}>
          <p className="eyebrow">{"// sobre"}</p>
          <h1 className={styles.title}>Engenheiro de software e ensaísta.</h1>
          <p className={styles.p}>
            Construo software há sete anos. Antes, construí prédios por nove.{" "}
            <span className="grifo">
              Hoje escrevo sobre o que as duas coisas têm em comum: estruturas que moldam como a
              gente vive.
            </span>
          </p>
          <p className={styles.p}>
            Lidero um time de produto e já trabalhei como engenheiro de software e de qualidade em
            empresas do Brasil, dos Estados Unidos e do Reino Unido. Cresci na periferia de
            Salvador. Moro no Vale do Capão, na Chapada Diamantina, desde 2012.
          </p>
          <div className={styles.actions}>
            {LINKS.curriculo && (
              <a href={LINKS.curriculo} className="btn">
                baixar currículo (PDF)
              </a>
            )}
            <a href="#contato" className={`lk ${styles.monoLink}`}>
              falar comigo →
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="trabalho" className={styles.section}>
        <h2 id="trabalho" className={styles.h2}>
          Trabalho
        </h2>
        <div className={styles.timeline}>
          {TRABALHO.map((item, i) => (
            <div key={i} className={styles.entry}>
              <p className={styles.period}>{item.periodo}</p>
              <div className={styles.entryBody}>
                <p className={styles.role}>
                  <strong>{item.cargo}</strong> · {item.onde}
                </p>
                <p className={styles.result}>{item.resultado}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.stack}>
          <span className="eyebrow">{"// stack"}</span>
          {STACK.map((s) => (
            <span key={s} className={styles.chip}>
              {s}
            </span>
          ))}
        </div>
      </section>

      <section aria-labelledby="formacao" className={styles.section}>
        <h2 id="formacao" className={styles.h2}>
          Formação
        </h2>
        <div className={styles.timeline}>
          {FORMACAO.map((item) => (
            <div key={item.curso} className={`${styles.entry} ${styles.entryCompact}`}>
              <p className={styles.period}>{item.periodo}</p>
              <p className={`${styles.role} ${styles.entryText}`}>
                <strong>{item.curso}</strong> · {item.onde}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.columns}>
        <div className={styles.column}>
          <h2 className={styles.h2}>Fora do código</h2>
          <p className={styles.small}>
            Publiquei um livro de poesia, com influência da poesia concreta. Fundei uma banda de
            blues e o primeiro festival de blues do Capão. Na pandemia, fiz um jornal local. E
            guardo um acervo de fotografia on the road pela Bahia.
          </p>
          <Link href="/projetos" className={`lk ${styles.monoLink}`}>
            ver projetos →
          </Link>
        </div>
        <div id="contato" className={styles.column}>
          <h2 className={styles.h2}>Contato</h2>
          {LINKS.email && (
            <a href={`mailto:${LINKS.email}`} className={`lk ${styles.email}`}>
              {LINKS.email}
            </a>
          )}
          {links.length > 0 && (
            <div className={styles.contactLinks}>
              {links.map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener" className="lk">
                  {label} ↗
                </a>
              ))}
            </div>
          )}
          <p className="eyebrow">{"// respondo por e-mail. sem formulário, sem robô."}</p>
        </div>
      </section>
    </main>
  );
}

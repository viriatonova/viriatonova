import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <p className="eyebrow">{"// 404"}</p>
      <h1 className={styles.title}>Página não encontrada.</h1>
      <p className={styles.text}>
        {"// esta trilha não leva a lugar nenhum. "}
        <Link href="/" className="lk">
          volte para o início.
        </Link>
      </p>
    </main>
  );
}

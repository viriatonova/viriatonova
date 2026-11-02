import type { Projeto } from "@/content/projetos";
import { SeloCapaoInfo } from "./icons";
import styles from "./ProjetoIcone.module.css";

type Props = {
  projeto: Projeto;
  size: number;
  label?: string;
};

/** Símbolo do projeto, ou círculo tracejado enquanto ele não tem um. */
export function ProjetoIcone({ projeto, size, label }: Props) {
  if (projeto.icone === "capao-info") {
    return <SeloCapaoInfo size={size} label={label} className={styles.icon} />;
  }
  return (
    <div aria-hidden="true" className={styles.placeholder} style={{ width: size, height: size }}>
      [ ]
    </div>
  );
}

import type { Tag } from "@/config/site";
import styles from "./TagPill.module.css";

type Props = {
  tag: Tag;
  size?: "sm" | "md";
};

/** Pílula colorida com texto Noite. */
export function TagPill({ tag, size = "sm" }: Props) {
  return <span className={`${styles.pill} ${styles[size]} ${styles[tag]}`}>#{tag}</span>;
}

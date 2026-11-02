"use client";

import { THEME_STORAGE_KEY } from "@/lib/theme";
import styles from "./ThemeToggle.module.css";

/**
 * Mostra o tema atual entre colchetes. O rótulo vem do CSS (data-theme no <html>),
 * então o HTML estático já nasce certo, sem piscar.
 */
export function ThemeToggle() {
  function alternar() {
    const root = document.documentElement;
    const atual =
      root.dataset.theme ??
      (matchMedia("(prefers-color-scheme: dark)").matches ? "escuro" : "claro");
    const proximo = atual === "escuro" ? "claro" : "escuro";
    root.dataset.theme = proximo;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, proximo);
    } catch {
      // armazenamento indisponível: o tema vale só nesta visita
    }
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label="alternar tema claro ou escuro"
      className={styles.toggle}
    >
      [<span className={styles.claro}>claro</span>
      <span className={styles.escuro}>escuro</span>]
    </button>
  );
}

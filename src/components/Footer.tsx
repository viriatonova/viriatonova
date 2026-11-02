import { footerLinks, SITE } from "@/config/site";
import { SeloMorro } from "./icons";
import styles from "./Footer.module.css";

export function Footer() {
  const links = footerLinks();

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <SeloMorro size={32} />
        <p className={styles.note}>
          {"// feito à mão, sem rastreadores · "}
          {SITE.location}
        </p>
      </div>
      {links.length > 0 && (
        <nav aria-label="links externos" className={styles.links}>
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              className="lk"
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
            >
              {label}
              {external && " ↗"}
            </a>
          ))}
        </nav>
      )}
    </footer>
  );
}

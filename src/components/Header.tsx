"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`${styles.header} ${isHome ? styles.home : ""}`}>
      {!isHome && (
        <Link href="/" className={styles.signature}>
          {SITE.name}
          <span className="cur" aria-hidden="true">
            _
          </span>
        </Link>
      )}
      <div className={styles.bar}>
        <nav aria-label="principal" className={styles.nav}>
          {NAV.map(({ label, href }) => {
            const current = isCurrent(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={current ? "page" : undefined}
                className={styles.link}
              >
                {current && "> "}
                {label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

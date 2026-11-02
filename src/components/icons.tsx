import type { ReactNode } from "react";

// Ícones do sistema: traço 1.5px, sem preenchimento, círculo de raio 18.25 em 40×40.

type IconProps = {
  size?: number;
  /** Com rótulo vira imagem acessível; sem rótulo fica oculto para leitores de tela. */
  label?: string;
  className?: string;
};

function Selo({ size = 40, label, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      strokeLinecap="round"
      className={className}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <circle cx="20" cy="20" r="18.25" />
      {children}
    </svg>
  );
}

const ONDAS =
  "M7.5 28.5 q1.25 -2.5 2.5 0 q1.25 -2.5 2.5 0 q1.25 -2.5 2.5 0 q1.25 -2.5 2.5 0 q1.25 -2.5 2.5 0 q1.25 -2.5 2.5 0 q1.25 -2.5 2.5 0 q1.25 -2.5 2.5 0 q1.25 -2.5 2.5 0 q1.25 -2.5 2.5 0";

/** Morro do Vale do Capão. */
export function SeloMorro(props: IconProps) {
  return (
    <Selo {...props}>
      <path d="M9.5 26.5 L11 23.5 L11.8 20 L12.4 17.5 L12 15.2 L15 13.6 L18.5 14.2 L22.5 13 L27 14.6 L27.6 18 L28.4 21 L30.2 24 L31 26.5" />
      <path d="M15.5 16.5 V20 M19 16 V21.5 M22.8 15.4 V18.6 M25.4 17 V21" />
      <path d={ONDAS} />
      <circle cx="11" cy="24.6" r="1.2" />
      <circle cx="29.6" cy="24" r="1.2" />
    </Selo>
  );
}

export function SeloCodigo(props: IconProps) {
  return (
    <Selo {...props}>
      <path d="M15 15 L10 20 L15 25" />
      <path d="M25 15 L30 20 L25 25" />
      <path d="M22 13 L18 27" />
    </Selo>
  );
}

export function SeloEscrita(props: IconProps) {
  return (
    <Selo {...props}>
      <path d="M11 15 H29 M11 20 H29 M11 25 H22" />
    </Selo>
  );
}

export function SeloBlues(props: IconProps) {
  return (
    <Selo {...props}>
      <path d="M17.2 26 V13.5 L27.2 11.5 V24" />
      <circle cx="15" cy="26" r="2.2" />
      <circle cx="25" cy="24" r="2.2" />
    </Selo>
  );
}

export function SeloCapaoInfo(props: IconProps) {
  return (
    <Selo {...props}>
      <path d="M10 28.5 L11.6 25.8 L12 23.4 L15.5 22.4 L19.5 22.8 L24 21.8 L27.6 22.8 L28.2 25.6 L30 28.5" />
      <path d="M8.5 30 q1.15 -2.2 2.3 0 q1.15 -2.2 2.3 0 q1.15 -2.2 2.3 0 q1.15 -2.2 2.3 0 q1.15 -2.2 2.3 0 q1.15 -2.2 2.3 0 q1.15 -2.2 2.3 0 q1.15 -2.2 2.3 0 q1.15 -2.2 2.3 0 q1.15 -2.2 2.3 0" />
      <path d="M13 14.5 q7 -6 14 0" />
      <path d="M15.8 17.4 q4.2 -3.4 8.4 0" />
      <circle cx="20" cy="19.6" r="0.6" fill="currentColor" />
    </Selo>
  );
}

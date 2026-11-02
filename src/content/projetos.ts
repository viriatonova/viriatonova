import type { Tag } from "@/config/site";

export type Status = "ideia" | "construcao" | "no-ar";

export const STATUS: Record<Status, { simbolo: string; label: string }> = {
  ideia: { simbolo: "○", label: "ideia" },
  construcao: { simbolo: "◐", label: "em construção" },
  "no-ar": { simbolo: "●", label: "no ar" },
};

export type Etapa = {
  nome: string;
  quando?: string;
  estado: "feito" | "atual" | "pendente";
};

export type Projeto = {
  slug: string;
  nome: string;
  status: Status;
  tipo: string;
  desde?: string;
  /** Símbolo próprio. Sem símbolo, aparece um círculo tracejado. */
  icone?: "capao-info";
  /** Uma frase, usada na lista de projetos. */
  resumo: string;
  /** Frase de abertura da página do projeto. */
  chamada: string;
  tags: Tag[];
  telas: { legenda: string; src?: string }[];
  oQueE: string[];
  porQueExiste: string[];
  etapas: Etapa[];
  ficha: { termo: string; valor: string }[];
  /** Botão principal da ficha (ex.: "quero testar"). */
  acao?: { label: string; href: string };
};

// TODO: substituir os trechos entre colchetes.
export const PROJETOS: Projeto[] = [
  {
    slug: "capao-info",
    nome: "Capão Info",
    status: "construcao",
    tipo: "app",
    desde: "[ano]",
    icone: "capao-info",
    resumo:
      "Um aplicativo para a rede local do Vale do Capão. [descrever em uma frase o que o app reúne]",
    chamada:
      "Um aplicativo para a rede local do Vale do Capão. [o que ele resolve, em uma frase]",
    tags: ["terra", "tecnologia"],
    telas: [{ legenda: "[legenda]" }, { legenda: "[legenda]" }, { legenda: "[legenda]" }],
    oQueE: [
      "[Dois ou três parágrafos curtos: o que o app faz, quem usa, o que muda no dia a dia de quem mora no vale.]",
    ],
    porQueExiste: [
      "[O problema que você viu, e por que um app local, feito daqui, e não mais uma plataforma de fora.]",
    ],
    etapas: [
      { nome: "ideia", quando: "[data]", estado: "feito" },
      { nome: "construção · [etapa atual]", quando: "agora", estado: "atual" },
      { nome: "testes com moradores", estado: "pendente" },
      { nome: "no ar", estado: "pendente" },
    ],
    ficha: [
      { termo: "tipo", valor: "app" },
      { termo: "stack", valor: "react native" },
      { termo: "login", valor: "google" },
      { termo: "onde", valor: "vale do capão, ba" },
    ],
  },
];

export function getProjeto(slug: string): Projeto | undefined {
  return PROJETOS.find((p) => p.slug === slug);
}

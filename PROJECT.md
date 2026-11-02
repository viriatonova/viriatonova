# viriato sampaio · site pessoal

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router, export estático, React Compiler)
- React 19 + TypeScript
- CSS Modules + variáveis CSS (sem biblioteca de UI)
- Fontes via `next/font`: Space Grotesk (títulos), Inter (texto), JetBrains Mono (metadados, navegação)
- Deploy na Vercel

## Sistema visual

Os tokens ficam em [src/app/globals.css](src/app/globals.css) e seguem o design "Site pessoal · Viriato Sampaio" (componentes e tokens).

- Cores vivas: Papel digital `#FAF8F3`, Noite `#14151B`, Ipê `#FFD23F` (grifo), Céu elétrico `#3D7BFF` (links e foco)
- Tags: `#tecnologia` Fósforo, `#trabalho` Urucum, `#ideias` Lilás, `#terra` Mata viva
- Tema claro e escuro via `data-theme="claro" | "escuro"` no `<html>`, com `prefers-color-scheme` como padrão
- Sem sombra, sem gradiente. Raio 4px, pílula 999px, borda 1px
- Coluna de leitura até 680px, layout até 1120px
- Ícones: SVG próprios, traço 1.5px, sem preenchimento

## Onde editar o conteúdo

- [src/config/site.ts](src/config/site.ts): nome, links sociais, Substack, currículo. Links vazios não aparecem.
- [src/content/projetos.ts](src/content/projetos.ts): lista de projetos; cada um ganha a página `/projetos/<slug>`.
- [src/content/sobre.ts](src/content/sobre.ts): trabalho, stack e formação.
- [src/content/posts.ts](src/content/posts.ts): tag e tipo de cada post do Substack (o RSS não traz essa informação).

Os posts são lidos do RSS do Substack no momento do build. Para atualizar a lista, faça um novo deploy.

# viriato sampaio

Site pessoal de Viriato Sampaio, engenheiro de software e ensaísta.

Os ensaios moram no Substack; o site reúne a página inicial (com os últimos posts via RSS), os projetos e a página sobre.

## Desenvolvimento

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # exporta o site estático em out/
npm run lint
```

Veja [PROJECT.md](PROJECT.md) para stack e sistema visual.

## Fluxo de git e deploy

Todo o trabalho vai direto na `master`, sem branches. Pushes na `master` não publicam nada.

O deploy de produção na Vercel sai de uma tag numérica:

```bash
git tag 0.1
git push origin 0.1
```

O workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) confere se a tag está na `master`, roda o lint e publica com a CLI da Vercel. Ele precisa dos segredos `VERCEL_TOKEN`, `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID` no GitHub.

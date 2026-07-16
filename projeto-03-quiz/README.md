# QuizApp

Projeto 3 da disciplina **DCC704 — Arquitetura e Tecnologias de Sistemas Web** (UFRR).

Aplicação de quiz sobre Ciência da Computação com cadastro de usuário, correção automática, cadastro de novas perguntas e controle de troca de abas.

## Requisitos atendidos

- [x] Cadastro de usuário (nome e e-mail), persistido no banco
- [x] Correção automática das questões, com exibição do resultado ao final
- [x] Cadastro de novas perguntas via formulário
- [x] Controle de troca de aba (limite de 2 trocas, encerra o quiz automaticamente)

## Stack

TypeScript · Next.js (App Router) · Prisma · PostgreSQL (Neon) · Tailwind CSS

## Como rodar localmente

```bash
npm install
npx prisma generate
npm run dev
```

Crie um `.env` a partir do `.env.example`, preenchendo `DATABASE_URL` (pooled) e `DATABASE_URL_UNPOOLED` (direta, usada pelas migrations) com a connection string do banco Postgres (Neon).

---

Parte do repositório [arquitetura-web-ufrr](../).

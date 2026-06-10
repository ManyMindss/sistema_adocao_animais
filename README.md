# Adota Pet

Sistema de adoção de animais com backend NestJS, frontend Next.js e PostgreSQL.

## Estrutura do monorepo

```
adota-pet/
├── backend/     # API NestJS + Prisma (porta 3001)
├── frontend/    # App Next.js (porta 3000)
└── package.json # workspaces npm
```

## Pré-requisitos

- Node.js 20+
- PostgreSQL

## Configuração

1. Instale as dependências na raiz:

```bash
npm install
```

2. Configure o backend:

```bash
cp backend/.env.example backend/.env
```

Edite `backend/.env` com sua `DATABASE_URL` e demais variáveis.

3. (Opcional) Configure o frontend:

```bash
cp frontend/.env.local.example frontend/.env.local
```

4. Rode as migrations do Prisma:

```bash
npm exec --workspace backend prisma migrate dev
```

## Desenvolvimento

Subir backend e frontend juntos:

```bash
npm run dev
```

Ou separadamente:

```bash
npm run dev:backend   # http://localhost:3001
npm run dev:frontend  # http://localhost:3000
```

## API

Principais rotas do backend:

- `POST /auth/cadastro` — cadastro de usuário
- `POST /auth/login` — login
- `GET /animais` — listar animais (pública)
- `GET /adotante`, `GET /ong` — demais recursos

## Domínio

- ONGs, Animais, Adotantes, Telefones
- Controle de status de adoção
- Autenticação JWT com roles (`INSTITUICAO`, `ADOTANTE`)

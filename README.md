Collecting workspace informationREADME.md:

```markdown
# NLW Agents

Este projeto foi desenvolvido durante o evento NLW da Rocketseat. Trata-se de uma aplicação fullstack composta por um backend em Fastify e um frontend em React, utilizando PostgreSQL e Drizzle ORM.

## Tecnologias Utilizadas

### Backend (`server/`)
- **Fastify:** Framework web rápido para Node.js.
- **Drizzle ORM:** ORM para TypeScript moderno e seguro.
- **Zod:** Validação de schemas.
- **PostgreSQL:** Banco de dados relacional.
- **drizzle-kit:** Migrations e geração de tipos para Drizzle ORM.
- **pgvector:** Extensão para vetores no PostgreSQL (via Docker).

### Frontend (`web/`)
- **React:** Biblioteca para construção de interfaces.
- **Vite:** Bundler e dev server rápido.
- **React Router DOM:** Gerenciamento de rotas.
- **@tanstack/react-query:** Gerenciamento de dados assíncronos.
- **Tailwind CSS:** Utilitários CSS para estilização.
- **clsx, tailwind-merge:** Utilitários para composição de classes.
- **Radix UI:** Componentes acessíveis e sem estilos.
- **lucide-react:** Ícones SVG.

## Padrões de Projeto

- **Monorepo:** Separação entre `server/` (backend) e `web/` (frontend).
- **TypeScript:** Tipagem estática em todo o projeto.
- **Validação com Zod:** Schemas para validação de dados nas rotas.
- **React Query:** Gerenciamento de cache e requisições HTTP no frontend.
- **Componentização:** Uso de componentes reutilizáveis e utilitários para estilização.

## Setup e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18+)
- [Docker](https://www.docker.com/) (para o banco de dados)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)

### 1. Clonar o repositório

```sh
git clone <url-do-repo>
cd NLW20
```

### 2. Subir o banco de dados

```sh
cd server
docker compose up -d
```

### 3. Instalar dependências

```sh
cd server
npm install
cd ../web
npm install
```

### 4. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env` em `server/` e ajuste se necessário.

```sh
cp .env.example .env
```

### 5. Rodar as migrations

```sh
cd server
npx drizzle-kit push
```

### 6. Iniciar o backend

```sh
npm run dev
```

### 7. Iniciar o frontend

```sh
cd ../web
npm run dev
```

Acesse o frontend em [http://localhost:5173](http://localhost:5173).

---

Projeto **NLW Agents** — desenvolvido durante o evento da [Rocketseat](https://rocketseat.com.br/).

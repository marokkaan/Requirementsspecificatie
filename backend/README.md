# Chocolate Firm API (scaffold)

This directory contains a minimal scaffold for the Chocolate Firm backend API using a Nest-style TypeScript structure, Prisma schema and a docker-compose for local development (Postgres, Redis, RabbitMQ).

Quick start (from `backend/`):

1. Copy `.env.example` to `.env` and adjust values.
2. Start dependencies:

```bash
docker-compose up -d db redis rabbitmq
```

3. Install and run locally:

```bash
npm install
npm run start:dev
```

4. API stub: POST `http://localhost:3000/api/products/register` with JSON `{ "userId": "...", "qrCode":"..." }`

Notes:
- This is a scaffold: implement validation, database wiring (`@prisma/client`), authentication, and full tests before production.

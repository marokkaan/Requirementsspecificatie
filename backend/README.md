# Chocolate Firm API

This directory contains a small Chocolate Firm backend API using a Nest-style TypeScript structure, Prisma schema and a docker-compose for local development.

The API now has a real SQL interaction: `POST /api/products/register` stores a product registration in PostgreSQL through Prisma. The static `app.html` calls this endpoint when a product is registered. If the API is not running, the app falls back to localStorage.

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

4. Run the Prisma migration:

```bash
npm run prisma:generate
npm run prisma:migrate
```

5. Test the SQL interaction:

```bash
curl -X POST http://localhost:3000/api/products/register \
  -H "Content-Type: application/json" \
  -d '{"email":"alex.devries@email.nl","batchNumber":"#PE-2026","qrCode":"QR-PE-2026","name":"Fairtrade Puur 72%"}'
```

Notes:
- This is a demo backend. Add authentication, production validation and full tests before real use.

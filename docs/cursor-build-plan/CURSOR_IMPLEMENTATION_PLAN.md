# Cursor Implementation Plan

Objetivo: construir ChambaQ Agent desde este repo usando Cursor, con landing, demo web app, herramientas agentic y conexión progresiva a MongoDB/Gemini/Stitch.

## 0. Principio de entrega

Primero demo local funcional. Después servicios externos. Después polish.

Si una integración bloquea, dejar adapter/mock con la misma interfaz y seguir. El video del hackathon necesita mostrar acción, no perfección infra.

## 1. Preparación en Cursor

Abrir esta carpeta en Cursor:

```bash
cd /Users/rogergv/Documents/SoftvibesLab/ChambaQ
cursor .
```

Leer en este orden:

```text
docs/cursor-build-plan/README.md
docs/srs/00-srs-overview.md
docs/cursor-build-plan/TECHNICAL_SPECS.md
docs/cursor-build-plan/STITCH_DESIGN_BRIEF.md
README.md
hackathon/MVP_ARCHITECTURE.md
dataset/seeds/seed_data.json
```

Prompt inicial para Cursor:

```text
Build ChambaQ Agent according to docs/cursor-build-plan and docs/srs/00-srs-overview.md.
Start with a local deterministic MVP using dataset/seeds/seed_data.json.
Do not connect external services until the demo route works end-to-end.
Implement Next.js + TypeScript + Tailwind with a landing page at / and demo app at /demo.
```

## 2. Fase 1: Scaffold web

Comandos sugeridos:

```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
npm install zod lucide-react clsx tailwind-merge
npx shadcn@latest init
npx shadcn@latest add button card badge input textarea tabs separator scroll-area
```

Si `create-next-app` no acepta carpeta no vacía:

1. Crear en carpeta temporal `chambaq-app`.
2. Copiar `src/`, `package.json`, configs y `public/` al repo.
3. Mantener docs y dataset existentes.

Definition of Done:

- `npm run dev` funciona.
- `/` renderiza landing básica.
- `/demo` renderiza shell de demo.

## 3. Fase 2: Seed adapter y schemas

Crear:

```text
src/lib/data/seed-adapter.ts
src/lib/schemas/job.ts
src/lib/schemas/worker.ts
src/lib/schemas/outreach.ts
```

Implementar:

- Cargar `dataset/seeds/seed_data.json`.
- Normalizar trade y ciudad.
- Buscar workers por `trade_canonical`, `city`, `availability`, `verification_status`.
- Devolver 3 plomeros para el prompt demo.

Prompt para Cursor:

```text
Implement seed data access for ChambaQ. Use dataset/seeds/seed_data.json as the source.
Create typed repositories for workers, jobs, employers, reviews, certifications, and outreach logs.
Keep the interfaces compatible with a future MongoDB adapter.
```

Definition of Done:

- Una función `searchWorkers(jobRequest)` devuelve Luis, Ana y Marco para el caso Cancún/plumbing/2026-05-25_morning.

## 4. Fase 3: Agent tools deterministas

Crear:

```text
src/lib/agent/extract-job-requirements.ts
src/lib/agent/create-job-request.ts
src/lib/agent/search-workers.ts
src/lib/agent/rank-candidates.ts
src/lib/agent/explain-tradeoff.ts
src/lib/agent/draft-outreach.ts
src/lib/agent/orchestrator.ts
```

Prompt para Cursor:

```text
Implement deterministic agent tools for the ChambaQ MVP.
The orchestrator should run: extract -> create job -> search workers -> rank candidates -> explain tradeoff -> draft outreach -> action log.
Use pure TypeScript functions first. No LLM required in this phase.
Every step must append a visible action log item with tool name, status, and summary.
```

Definition of Done:

- `runChambaQDemo(message)` devuelve `jobRequest`, `job`, `ranked`, `outreachDrafts`, `actionLog`.

## 5. Fase 4: API routes

Crear:

```text
src/app/api/agent/run/route.ts
src/app/api/workers/search/route.ts
src/app/api/jobs/route.ts
```

Prompt para Cursor:

```text
Create Next.js route handlers for the ChambaQ agent flow.
POST /api/agent/run should execute the complete deterministic demo flow.
Validate inputs with Zod and return JSON suitable for the /demo UI.
```

Definition of Done:

```bash
curl -X POST http://localhost:3000/api/agent/run \
  -H "Content-Type: application/json" \
  -d '{"message":"Necesito un plomero en Cancun para manana temprano. Es una fuga en la cocina de un restaurante. Presupuesto maximo 1800 pesos. Prefiero alguien confiable aunque no sea el mas barato.","employerId":"employer_001","mode":"seed"}'
```

Devuelve 200 con 3 candidatos.

## 6. Fase 5: UI de landing y demo

Usar `STITCH_DESIGN_BRIEF.md` en Stitch.

Implementar en Cursor:

```text
src/app/page.tsx
src/app/demo/page.tsx
src/components/landing/*
src/components/demo/*
```

Prompt para Cursor:

```text
Implement the ChambaQ landing and demo UI using the design guidance from docs/cursor-build-plan/STITCH_DESIGN_BRIEF.md.
The /demo route must show request input, agent plan/action log, ranked candidates, tradeoff explanation, and outreach drafts.
Use lucide-react icons and shadcn/ui components.
Keep cards at 8px radius or less.
```

Definition of Done:

- Juez entiende el flujo visualmente.
- Action log deja claro que hay tools.
- Outreach drafts tienen estado "drafted" o "awaiting approval".

## 7. Fase 6: MongoDB Atlas adapter

Instalar:

```bash
npm install mongodb
```

Crear:

```text
src/lib/data/mongo-adapter.ts
src/lib/data/repositories.ts
scripts/seed-mongodb.ts
```

Variables:

```bash
MONGODB_URI=
MONGODB_DB=chambaq_demo
DATA_MODE=mongo
```

Prompt para Cursor:

```text
Add a MongoDB adapter that implements the same repository interface as seed-adapter.
Use the official MongoDB Node.js driver.
Add a seed script that loads dataset/seeds/seed_data.json into MongoDB Atlas.
Do not remove the seed adapter. Select adapter by DATA_MODE.
```

Definition of Done:

- `npm run seed` carga datos.
- `/api/agent/run` funciona con `DATA_MODE=mongo`.

## 8. Fase 7: Gemini/Vertex AI

Instalar según decisión final:

```bash
npm install @google/generative-ai
```

O usar Vertex AI SDK si se elige despliegue Google Cloud más formal.

Uso recomendado:

- Gemini para extracción natural si el input no coincide con reglas.
- Gemini para explicación final.
- Mantener ranking determinista.

Prompt para Cursor:

```text
Add an optional Gemini extraction adapter.
Keep deterministic extraction as fallback.
The system must still work without GOOGLE_API_KEY.
Do not let the LLM invent workers; candidate records must come from repositories only.
```

Definition of Done:

- Sin API key, demo funciona.
- Con API key, extracción mejora.
- Candidatos siempre vienen de seed/Mongo.

## 9. Fase 8: MCP plan

Prioridad MCP:

1. MongoDB MCP: lectura/escritura real de colecciones.
2. Stitch MCP/SDK: generación y actualización de pantallas si está disponible.
3. GitHub/GitLab MCP: proyecto, issues, PR.
4. Arize/OpenInference MCP/CLI: tracing y evaluación después de tener demo.

Prompt para Cursor:

```text
Prepare MCP-ready tool definitions for ChambaQ:
- search_workers
- create_job_request
- rank_candidates
- draft_outreach_message
- log_outreach
Keep them as wrappers around existing TypeScript services.
```

Definition of Done:

- Hay una capa `src/lib/agent/tools.ts` con tool metadata reutilizable.

## 10. Fase 9: QA y video

Comandos esperados:

```bash
npm run lint
npm run typecheck
npm run demo:test
npm run dev
```

Checklist:

- Landing carga.
- Demo carga.
- Prompt demo funciona.
- 3 candidatos rankeados.
- Outreach drafts visibles.
- Action log visible.
- No hay envío real.
- README actualizado.

## 11. Backlog ordenado

### Must

- Next.js app.
- Seed adapter.
- Agent flow determinista.
- Demo UI.
- Landing.
- Action log.
- Outreach drafts.

### Should

- MongoDB Atlas adapter.
- Gemini extraction.
- Deploy Vercel o Cloud Run.
- Stitch-based final visual polish.

### Could

- Admin data view.
- Arize tracing.
- Eval set JSONL.
- GitHub/GitLab CI.

### Won't for MVP

- WhatsApp real.
- Payments.
- Blockchain.
- Token CHQ.
- DAO.
- Native mobile app.

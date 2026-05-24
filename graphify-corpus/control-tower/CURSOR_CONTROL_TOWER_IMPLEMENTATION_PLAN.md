# Cursor Control Tower Implementation Plan

## Objetivo

Construir el dashboard ChambaQ Control Tower despues del MVP local base.

## Prompt para Cursor

```text
Build ChambaQ Control Tower according to docs/control-tower.

Create a Next.js + TypeScript dashboard at /control with:
- Project pulse
- Members CRUD
- Member profile detail
- Hermes registry
- Knowledge base view
- Prompt studio
- Agency-agent assignment matrix
- Observability placeholder for Arize

Use dataset/control-tower/seeds/team.seed.json as local data.
Do not connect external channels or secrets yet.
All external messaging must be approval-first.
```

## Fase 1: Tipos y datos

Crear:

```text
src/lib/control-tower/types.ts
src/lib/control-tower/seed-repository.ts
src/lib/control-tower/role-mapping.ts
src/lib/control-tower/prompts.ts
```

Definition of Done:

- Los tipos representan schemas de `dataset/control-tower/schemas/`.
- El seed carga Roger y su Hermes.

## Fase 2: Rutas UI

Crear:

```text
src/app/control/page.tsx
src/app/control/members/page.tsx
src/app/control/members/[id]/page.tsx
src/app/control/agents/page.tsx
src/app/control/knowledge/page.tsx
src/app/control/prompts/page.tsx
src/app/control/observability/page.tsx
```

Definition of Done:

- Navegacion completa.
- CRUD local en memoria o mock repository.
- Detail page de Roger visible.

## Fase 3: API local

Crear:

```text
src/app/api/control/members/route.ts
src/app/api/control/members/[id]/route.ts
src/app/api/control/hermes/route.ts
src/app/api/control/tasks/route.ts
```

Definition of Done:

- `GET /api/control/members` devuelve seed.
- `POST /api/control/members` valida payload.
- `PATCH /api/control/members/[id]` actualiza mock/local.

## Fase 4: Graphify artifacts

Crear:

```text
src/lib/control-tower/graphify-artifacts.ts
```

Leer:

- `graphify-out/graph.json`
- `graphify-out/GRAPH_REPORT.md`
- `graphify-out/graph.html`

Definition of Done:

- Dashboard muestra estado del grafo global.
- Perfil muestra ruta esperada del grafo individual.

## Fase 5: Prompt Studio

Crear editor para:

- System prompt.
- Customer prompt.
- Version.
- Estado.
- Motivo de cambio.

Definition of Done:

- Cambios quedan en estado `draft`.
- Publicar requiere aprobacion.

## Fase 6: Observability placeholder

Mostrar:

- `ax` instalado o pendiente.
- Space pendiente.
- Integraciones pendientes.
- Guia de comandos desde `docs/control-tower/ARIZE_AI_PROVIDER_INTEGRATION_GUIDE.md`.

Definition of Done:

- Nada intenta leer secretos.
- La UI explica el siguiente paso seguro.


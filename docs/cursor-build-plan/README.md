# ChambaQ Cursor Build Pack

Este paquete organiza lo necesario para construir ChambaQ Agent en Cursor: SRS, especificaciones, diseño de app/plataforma/landing y plan de ejecución con CLI/MCP.

## Orden recomendado en Cursor

1. Leer `docs/cursor-build-plan/CURSOR_IMPLEMENTATION_PLAN.md`.
2. Leer `docs/cursor-build-plan/TECHNICAL_SPECS.md`.
3. Leer `docs/cursor-build-plan/STITCH_DESIGN_BRIEF.md`.
4. Leer `docs/srs/00-srs-overview.md`.
5. Implementar por fases, empezando por demo local determinista antes de conectar servicios externos.

## Artefactos creados

- `docs/srs/00-srs-overview.md`: SRS resumido con problemas, necesidades, requisitos y trazabilidad.
- `docs/cursor-build-plan/TECHNICAL_SPECS.md`: specs de arquitectura, stack, APIs, datos, agentes y despliegue.
- `docs/cursor-build-plan/STITCH_DESIGN_BRIEF.md`: brief y prompts para generar app web, plataforma y landing en Google Stitch.
- `docs/cursor-build-plan/CURSOR_IMPLEMENTATION_PLAN.md`: plan paso a paso para ejecutar en Cursor con CLI/MCP.

## Decisión base

Construir primero una demo funcional con datos seed y API local. Después conectar MongoDB Atlas, Gemini/Vertex AI y, si el tiempo alcanza, MCP real. La landing y las pantallas de producto se diseñan en Stitch, se exportan como código o design context, y se implementan en Next.js.

# Agency Agent Role Mapping

## Objetivo

Asignar `agency-agents` a integrantes y Hermes segun rol, fase y necesidad.

## Roles base para ChambaQ

### Roger: Orquestador / Product Owner

Agency-agents recomendados:

- `specialized/agents-orchestrator.md`
- `project-management/project-manager-senior.md`
- `product/product-manager.md`
- `product/product-sprint-prioritizer.md`
- `specialized/automation-governance-architect.md`

Uso:

- Definir prioridades.
- Coordinar el equipo.
- Aprobar prompts y acciones.
- Mantener plan del hackathon.
- Evaluar riesgos.

### Engineering Lead

Agency-agents recomendados:

- `engineering/engineering-software-architect.md`
- `engineering/engineering-backend-architect.md`
- `engineering/engineering-ai-engineer.md`
- `engineering/engineering-database-optimizer.md`
- `specialized/specialized-mcp-builder.md`

Uso:

- Arquitectura.
- API.
- MongoDB.
- Gemini.
- MCP/tools.

### Frontend / Dashboard Builder

Agency-agents recomendados:

- `engineering/engineering-frontend-developer.md`
- `design/design-ui-designer.md`
- `design/design-ux-architect.md`
- `engineering/engineering-rapid-prototyper.md`

Uso:

- Control Tower UI.
- CRUD de integrantes.
- Prompt Studio.
- Visualizacion de grafos y tareas.

### Data / Knowledge Lead

Agency-agents recomendados:

- `specialized/data-consolidation-agent.md`
- `engineering/engineering-data-engineer.md`
- `engineering/engineering-ai-data-remediation-engineer.md`
- `engineering/engineering-technical-writer.md`

Uso:

- Normalizar conocimiento.
- Mantener Markdown.
- Preparar datasets.
- Actualizar Graphify.

### Observability / Quality Lead

Agency-agents recomendados:

- `specialized/automation-governance-architect.md`
- `specialized/compliance-auditor.md`
- `engineering/engineering-code-reviewer.md`
- `project-management/project-management-experiment-tracker.md`

Uso:

- Arize traces.
- Evaluadores.
- QA.
- Evidencia para hackathon.

### Growth / Narrative Lead

Agency-agents recomendados:

- `marketing/marketing-content-creator.md`
- `marketing/marketing-social-media-strategist.md`
- `design/design-visual-storyteller.md`
- `sales/sales-proposal-strategist.md`

Uso:

- Devpost.
- Demo video.
- Storytelling.
- Comunicacion externa.

## Regla de seleccion

Cada integrante debe tener:

- 1 agente primario de rol.
- 1 agente de calidad/gobernanza.
- 1 agente de ejecucion rapida.
- Agentes adicionales solo si la tarea lo justifica.

## Activacion

Modos:

- `always_on`: se incluye siempre en contexto del Hermes.
- `task_based`: se activa por tipo de tarea.
- `review_only`: se activa para revisar entregables.
- `on_request`: Roger o integrante lo invoca manualmente.


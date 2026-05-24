# ChambaQ Control Tower

Este modulo define la torre de control para coordinar el proyecto ChambaQ, el equipo, los agentes Hermes individuales, las bases de conocimiento y la observabilidad.

## Documentos

- `CONTROL_TOWER_MASTER_PLAN.md`: plan principal y fases recomendadas.
- `DASHBOARD_PRODUCT_SPEC.md`: vistas, flujos y comportamiento del dashboard.
- `DATA_MODEL.md`: entidades base para integrantes, agentes, tareas, canales y grafos.
- `HERMES_AGENT_SPEC.md`: especificacion de Hermes independiente por integrante.
- `GRAPHIFY_KNOWLEDGE_BASE_SPEC.md`: arquitectura de base de conocimiento en Markdown y grafos.
- `AGENCY_AGENT_ROLE_MAPPING.md`: como asignar `agency-agents` segun rol.
- `ARIZE_AI_PROVIDER_INTEGRATION_GUIDE.md`: uso seguro de Arize AI integrations.
- `CURSOR_CONTROL_TOWER_IMPLEMENTATION_PLAN.md`: plan ejecutable para construirlo en Cursor.

## Decision principal

La mejor direccion es construir una capa de operacion interna encima del MVP de hackathon:

1. ChambaQ Agent sigue siendo el demo orientado a contratar talento local.
2. Control Tower coordina el equipo que construye ChambaQ.
3. Roger tiene un agente orquestador con permisos de administracion.
4. Cada integrante tiene un Hermes propio con perfil, proposito, skills, tareas, canales y grafo.
5. Graphify mantiene una base de conocimiento global y grafos individuales.
6. Arize observa y evalua los agentes cuando exista runtime conectado.


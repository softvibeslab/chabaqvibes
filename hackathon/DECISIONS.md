# ChambaQ — Decisiones Arquitectónicas del Ecosistema de Agentes

> Bitácora de decisiones tomadas durante la construcción del ecosistema de agentes para ChambaQ. Cada decisión incluye contexto, opciones consideradas, decisión final y consecuencias. Inspirado en el patrón ADR.

---

## ADR-001 — Adoptar un ecosistema de dos capas (Build + Product)

**Fecha:** 2026-05-24
**Estado:** Aceptada
**Responsable:** Roger / Agente orquestador

### Contexto
ChambaQ necesita entregar un MVP demostrable para el Google Cloud Rapid Agent Hackathon (deadline 11 jun 2026). El proyecto se beneficia tanto de agentes que ayudan a *construir* la propuesta (devpost, demo, schema, prompts) como de agentes que *son* el producto que se demuestra ante los jueces.

### Opciones consideradas
1. Solo product agents (lo mínimo demostrable).
2. Solo build agents (acelerar desarrollo, sin ecosistema en demo).
3. Ambos en dos capas claramente separadas.

### Decisión
Adoptar **opción 3**: dos capas separadas dentro de `/agents/`.

- **Capa A — `agents/build/`**: agentes que aceleran el trabajo de Roger (no se demuestran).
- **Capa B — `agents/product/`**: agentes que componen el MVP demostrable.

### Consecuencias
- Cero confusión sobre qué agentes ven los jueces.
- Los build agents pueden inspirarse libremente en `agency-agents` (MIT).
- Los product agents siguen una taxonomía propia derivada del flujo de hiring.

---

## ADR-002 — Runtime objetivo: Vertex AI + Gemini + function calling

**Fecha:** 2026-05-24
**Estado:** Aceptada
**Responsable:** Roger / Agente orquestador

### Contexto
El hackathon premia integración con Google Cloud Agent Builder y Gemini. Existen alternativas (Claude Agent SDK, LangGraph, framework custom), pero la afinidad con el track y con los recursos provistos por Google Cloud favorece quedarse en el ecosistema Google.

### Opciones consideradas
1. **Vertex AI Agent Builder + Gemini function calling** (Python ADK).
2. Claude Agent SDK (TypeScript/Python).
3. Framework custom sobre Gemini REST.

### Decisión
Adoptar **opción 1** como runtime objetivo del producto.

- Orquestador implementado como agente Gemini con function calling.
- Especialistas implementados como funciones / sub-agentes ADK que reciben el system prompt definido en `/agents/product/**/*.md`.
- MongoDB se consume vía MCP server (track principal del hackathon).

### Consecuencias
- Los archivos `.md` de cada agente son **system prompts portables**: viven en el repo y se cargan al runtime.
- Se aprovecha la compatibilidad de `agency-agents` con Gemini CLI para prototipar localmente antes del despliegue final.
- Si el equipo decide mover el runtime, los prompts siguen siendo reutilizables (formato neutro).

---

## ADR-003 — Convención de archivos: estructura agency-agents

**Fecha:** 2026-05-24
**Estado:** Aceptada
**Responsable:** Roger / Agente orquestador

### Contexto
El repo público `msitarzewski/agency-agents` (MIT, 98k stars) define un formato estable para describir agentes en Markdown: frontmatter YAML + secciones (identity, mission, critical rules, deliverables, workflow, metrics). Es compatible con Gemini CLI, Cursor, Aider, Windsurf, Claude Code y otros hosts.

### Opciones consideradas
1. Adoptar la convención `agency-agents` tal cual.
2. Inventar un formato propio más liviano.
3. Definir agentes en código (clases Python).

### Decisión
Adoptar **opción 1** con una extensión mínima.

- Cada agente vive como `<division>/<chambaq>-<role>.md`.
- Frontmatter: `name`, `description`, `color`, `division`, `layer` (build|product), `tools[]`, `model`.
- Secciones obligatorias: Identity, Mission, Critical Rules, Tools & MCPs, Workflow, Deliverables, Success Metrics, Handoff Triggers.

### Consecuencias
- Compatibilidad inmediata con Gemini CLI para pruebas locales.
- Los jueces pueden leer cada `.md` sin necesidad de ejecutar nada.
- Naming consistente facilita el routing del orquestador (`product/intake/chambaq-requirement-extractor.md`).

---

## ADR-004 — Mantener blockchain/CHQ/NFT/DAO fuera del MVP

**Fecha:** 2026-05-24
**Estado:** Reafirmada (ya estaba en `hackathon-adaptation-plan.md`)

### Decisión
Cero agentes relacionados con tokenomics, NFTs o DAO en `/agents/product/`. Se mencionan únicamente en `ROADMAP.md` como capa futura.

### Consecuencias
- Ningún juez verá complejidad innecesaria.
- El narrativa se enfoca en "AI that helps you take action" sobre datos reales (MongoDB).

---

## Pendientes / suposiciones que conviene validar con Roger

1. **Idioma de los agentes**: se asume **español neutro LATAM** para los product agents (porque el dominio es hiring local en México). El orquestador detecta idioma y reenvía. Cambiar si el demo va en inglés.
2. **Modelo por defecto**: se asume `gemini-2.5-pro` para el orquestador y `gemini-2.5-flash` para especialistas de baja latencia. Ajustable por agente vía frontmatter.
3. **Cobertura geográfica de la demo**: se asume Cancún + CDMX como ciudades del dataset semilla.
4. **WhatsApp / SMS outreach**: se asume *draft only* (el agente genera el mensaje, el humano lo envía). Integración real con WhatsApp Business API queda en roadmap.

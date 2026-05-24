# ChambaQ — Ecosistema de Agentes

> Equipo de agentes IA especializados orquestados por un agente maestro. Construido para el Google Cloud Rapid Agent Hackathon (deadline 2026-06-11).

---

## TL;DR

ChambaQ no es un solo agente. Es **un orquestador maestro (`chambaq-orchestrator`) que dirige a un equipo de 6 especialistas product** cuando un empleador necesita contratar mano de obra local. Además, **5 agentes build** aceleran el desarrollo del propio hackathon.

| Capa | Agentes | Visible al juez |
|---|---|---|
| **A — Build** | 5 | No (interno) |
| **B — Product** | 6 + orquestador | Sí (se demuestra) |

Arquitectura completa: `../hackathon/AGENTS_ECOSYSTEM.md`
Decisiones detrás del diseño: `../hackathon/DECISIONS.md`

---

## Estructura del repo

```
agents/
├── README.md                                    ← este archivo
├── orchestrator/
│   └── chambaq-orchestrator.md                  ← agente maestro
├── product/                                     ← Capa B (demo del MVP)
│   ├── intake/
│   │   └── chambaq-requirement-extractor.md
│   ├── matching/
│   │   ├── chambaq-worker-matcher.md
│   │   ├── chambaq-candidate-ranker.md
│   │   └── chambaq-tradeoff-explainer.md
│   ├── outreach/
│   │   └── chambaq-outreach-drafter.md
│   └── records/
│       └── chambaq-job-record-updater.md
└── build/                                       ← Capa A (interno)
    ├── engineering/
    │   ├── chambaq-mongodb-schema-designer.md
    │   └── chambaq-gemini-prompt-engineer.md
    ├── product/
    │   └── chambaq-hackathon-shipping-coach.md
    └── narrative/
        ├── chambaq-devpost-copywriter.md
        └── chambaq-demo-video-director.md
```

---

## Cómo se invoca un agente

### Localmente (Gemini CLI)
Cada `.md` es un system prompt portable. Para conversar con uno directamente:

```bash
gemini --system-prompt ./agents/product/intake/chambaq-requirement-extractor.md \
  --message "necesito un plomero mañana en Cancún urgente 1500"
```

### A través del orquestador
En producción no se invoca directamente a un especialista; el orquestador decide.

```bash
gemini --system-prompt ./agents/orchestrator/chambaq-orchestrator.md \
  --tools ./agents/product/**/*.md \
  --message "necesito un plomero mañana en Cancún urgente 1500"
```

### En Vertex AI / Cloud Run (objetivo final)
Cada agente se carga como sub-agent del orquestador con su system prompt + function declarations generadas por `chambaq-gemini-prompt-engineer`.

---

## Routing — qué agente atiende qué tipo de solicitud

| Solicitud del usuario | Agente que la atiende |
|---|---|
| "necesito X oficio en Y ciudad" | `chambaq-orchestrator` → `chambaq-requirement-extractor` |
| "¿quién está disponible?" | `chambaq-orchestrator` → `chambaq-worker-matcher` |
| "¿cuáles son los mejores?" | `chambaq-orchestrator` → `chambaq-candidate-ranker` |
| "¿por qué este y no aquel?" | `chambaq-orchestrator` → `chambaq-tradeoff-explainer` |
| "mándales un mensaje" | `chambaq-orchestrator` → `chambaq-outreach-drafter` |
| "guarda esto en el sistema" | `chambaq-orchestrator` → `chambaq-job-record-updater` |
| "ayúdame con la arquitectura mongo" | `chambaq-mongodb-schema-designer` (build, manual) |
| "qué construyo hoy" | `chambaq-hackathon-shipping-coach` (build, manual) |
| "escribe el devpost" | `chambaq-devpost-copywriter` (build, manual) |
| "arma el script del video" | `chambaq-demo-video-director` (build, manual) |
| "mejora los prompts" | `chambaq-gemini-prompt-engineer` (build, manual) |

---

## Convención de archivos

Cada `.md` sigue la misma estructura inspirada en `msitarzewski/agency-agents` (MIT):

```markdown
---
name: <slug>
description: <una línea — usada por Gemini para routing>
color: <hex>
division: <intake|matching|outreach|records|engineering|product|narrative|orchestrator>
layer: <build|product>
model: <gemini-2.5-pro|gemini-2.5-flash>
tools: [ ... ]
language: <es-MX|en-US|bilingual>
---

# Identity & Memory
# Core Mission
# Critical Rules
# Tools & MCPs
# Workflow Process
# Deliverables
# Handoff Triggers
# Success Metrics
```

Esto garantiza:
- **Legibilidad para jueces** (cada agente se entiende sin código).
- **Portabilidad** entre runtimes (Vertex AI, Gemini CLI, Claude Code, Cursor).
- **Versionabilidad** vía git.

---

## Créditos e inspiración

Estructura de archivos y patrón de agentes inspirado en **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)** (licencia MIT, 98k★).

Adaptaciones directas en `agents/build/` (cada agente documenta su `inspired_by` en frontmatter).

Los agentes `agents/product/` son originales y específicos del dominio ChambaQ (contratación local de oficios en México).

---

## Próximos pasos sugeridos

1. **Invocar `chambaq-mongodb-schema-designer`** para crear las colecciones y el seed en Atlas.
2. **Invocar `chambaq-gemini-prompt-engineer`** para convertir cada `.md` a system prompt + function declarations.
3. **Invocar `chambaq-hackathon-shipping-coach`** cada mañana para el daily focus.
4. **Invocar `chambaq-demo-video-director`** una vez que el flujo funcione end-to-end.
5. **Invocar `chambaq-devpost-copywriter`** los últimos 3 días antes del deadline.

---

## Licencia

Los archivos de este directorio se distribuyen bajo la misma licencia del repositorio raíz de ChambaQ. La inspiración estructural proviene de `agency-agents` (MIT).

# ChambaQ — Arquitectura del Ecosistema de Agentes

> Documento maestro que describe cómo está organizado el ecosistema de agentes de ChambaQ, cómo se enrutan las solicitudes, y cómo cada especialista cumple un rol acotado dentro del flujo de hiring local.

---

## 1. Visión

ChambaQ no es un solo agente: es **un orquestador maestro que dirige a un equipo de agentes especialistas** según la intención detectada en cada solicitud. Esto convierte al sistema en un asistente de operaciones de contratación, no en un chatbot.

> *"AI that helps you take action"* — el ecosistema completo demuestra esta promesa porque cada agente puede ejecutar pasos concretos sobre datos reales (MongoDB) y producir entregables verificables (shortlists, mensajes, registros de empleo).

---

## 2. Dos capas separadas

El repositorio aloja **dos ecosistemas en paralelo** bajo `/agents/`:

### Capa A — Build agents (`/agents/build/`)
Aceleran el trabajo de Roger durante las 2-3 semanas de construcción del hackathon. **No se demuestran ante los jueces.** Sirven para producir código, prompts, documentación, video y submission Devpost más rápido.

### Capa B — Product agents (`/agents/product/`)
Componen el MVP que se demuestra ante los jueces. Cada uno cumple un paso del flujo de hiring. **Son el producto.** Su ejecución se orquesta con Gemini function calling sobre Vertex AI.

---

## 3. Mapa visual del flujo del producto (Capa B)

```
┌──────────────────────────────────────────────────────────────────┐
│  USUARIO (empleador)                                             │
│  "Necesito un plomero en Cancún mañana, $1,500, urgente"         │
└──────────────────────────────┬───────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────┐
│  chambaq-orchestrator         (Gemini 2.5 Pro, function calling) │
│  - Detecta idioma e intent                                       │
│  - Decide qué especialista invocar y en qué orden                │
│  - Mantiene contexto compartido (jobId, conversación, decisiones)│
└──┬──────────┬──────────┬──────────┬──────────┬──────────┬────────┘
   │          │          │          │          │          │
   ▼          ▼          ▼          ▼          ▼          ▼
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│intake│ │match │ │rank  │ │tradeo│ │outre │ │record│
│      │ │      │ │      │ │ff    │ │ach   │ │      │
└──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘
   │        │        │        │        │        │
   └────────┴────────┴────────┴────────┴────────┘
                            │
                            ▼
                ┌─────────────────────────┐
                │  MongoDB Atlas (MCP)    │
                │  workers, jobs, reviews │
                │  outreach_logs, certs   │
                └─────────────────────────┘
```

---

## 4. Catálogo del ecosistema

### 4.1 Orquestador (1 agente)

| Archivo | Rol |
|---|---|
| `agents/orchestrator/chambaq-orchestrator.md` | Recibe la solicitud, detecta intent, despacha al especialista, consolida la respuesta. |

### 4.2 Product agents (6 agentes) — Capa B

| División | Archivo | Rol en el flujo |
|---|---|---|
| `intake/` | `chambaq-requirement-extractor.md` | Convierte la solicitud natural en un job-request estructurado (oficio, ubicación, urgencia, presupuesto, calidad). |
| `matching/` | `chambaq-worker-matcher.md` | Consulta MongoDB Atlas para encontrar workers candidatos. |
| `matching/` | `chambaq-candidate-ranker.md` | Ranquea candidatos por distancia, rating, disponibilidad, fit de precio y certificaciones. |
| `matching/` | `chambaq-tradeoff-explainer.md` | Explica al usuario el trade-off tiempo / dinero / calidad de cada candidato. |
| `outreach/` | `chambaq-outreach-drafter.md` | Genera borradores de WhatsApp/SMS personalizados por candidato. |
| `records/` | `chambaq-job-record-updater.md` | Crea o actualiza el `job` en MongoDB con el shortlist y los logs de outreach. |

### 4.3 Build agents (5 agentes) — Capa A

| División | Archivo | Rol durante el desarrollo |
|---|---|---|
| `engineering/` | `chambaq-mongodb-schema-designer.md` | Diseña, valida y migra las colecciones (`workers`, `jobs`, `reviews`, etc.). |
| `engineering/` | `chambaq-gemini-prompt-engineer.md` | Optimiza system prompts, function declarations y few-shot examples para Gemini. |
| `product/` | `chambaq-hackathon-shipping-coach.md` | Mantiene el foco en MVP, detecta scope creep, repriorita backlog. |
| `narrative/` | `chambaq-devpost-copywriter.md` | Escribe la submission de Devpost optimizada por criterios del jurado. |
| `narrative/` | `chambaq-demo-video-director.md` | Convierte el flujo demo en storyboard, script con timecodes y shot list para el video de 3 min. |

---

## 5. Patrón de orquestación (Capa B)

### 5.1 Routing
El orquestador usa **Gemini function calling** con una lista de funciones, una por especialista. La descripción de cada función está sincronizada con el `description` del frontmatter del `.md`. Esto permite que Gemini elija el siguiente paso con base en la conversación.

### 5.2 Estado compartido
El orquestador mantiene un objeto `session_context` con:
- `user_input_raw`: texto original del empleador.
- `job_request`: salida estructurada del extractor.
- `candidates`: lista cruda de matching.
- `ranked`: lista rankeada con scores y razones.
- `tradeoffs`: explicación por candidato.
- `outreach_messages`: borradores generados.
- `job_id`: id del documento en MongoDB.
- `audit_log`: pasos y decisiones del orquestador para evaluación (alineado con Arize si se elige track secundario).

### 5.3 Handoff
Cada especialista declara explícitamente sus **handoff triggers** en su `.md`:
- `next_agent`: a quién pasarle el control si la salida es exitosa.
- `escalate_to_orchestrator_if`: condiciones donde el especialista no debe decidir y devuelve control.

### 5.4 Fallback
Si Gemini no puede mapear la intención a una función, el orquestador entra en un sub-modo de **clarification**: hace 1 pregunta máximo, vuelve a clasificar.

---

## 6. Inspiración y créditos

La estructura de archivos `.md` (frontmatter YAML + secciones) está inspirada en `msitarzewski/agency-agents` (MIT). Algunos agentes de la Capa A son adaptaciones directas de ese repo aplicadas al dominio de ChambaQ:

| Build agent ChambaQ | Inspirado en (agency-agents) |
|---|---|
| `chambaq-mongodb-schema-designer` | `engineering/engineering-database-optimizer.md` |
| `chambaq-gemini-prompt-engineer` | `engineering/engineering-ai-engineer.md` |
| `chambaq-hackathon-shipping-coach` | `product/product-sprint-prioritizer.md` + `engineering/engineering-rapid-prototyper.md` |
| `chambaq-devpost-copywriter` | `marketing/marketing-content-creator.md` (espíritu) |
| `chambaq-demo-video-director` | `marketing/marketing-video-producer.md` (espíritu) |

Los product agents (Capa B) son originales y específicos del dominio de ChambaQ.

---

## 7. Cómo usar el ecosistema

### Localmente (prototipo)
1. Instalar Gemini CLI.
2. Cargar la carpeta `/agents/product/` como skill set.
3. Conversar con el orquestador: `gemini --agent chambaq-orchestrator`.

### En producción (Vertex AI)
1. Cada `.md` se carga al runtime ADK como system prompt de un sub-agent.
2. El orquestador se despliega como Cloud Run service detrás de la app web.
3. MongoDB MCP server corre en una VM o como Cloud Function.

### Para los jueces (read-only)
Los `.md` están versionados y son legibles directamente desde GitHub. El `README.md` de `/agents/` linkea cada uno con su descripción y un GIF/loom corto de su uso.

---

## 8. Métricas del ecosistema

El éxito del ecosistema se mide con:
- **Cobertura del flujo demo**: ¿los 6 product agents cubren el escenario completo de la demo de 3 minutos? **Objetivo: 100%**.
- **Routing accuracy**: ¿el orquestador despacha al especialista correcto a la primera? **Objetivo: ≥ 90% en el dataset semilla**.
- **Latencia end-to-end**: desde solicitud cruda hasta shortlist entregado. **Objetivo: < 30 s**.
- **Determinismo de outputs**: con la misma entrada, los outputs estructurados (job_request, ranking) son repetibles. **Objetivo: 95%**.

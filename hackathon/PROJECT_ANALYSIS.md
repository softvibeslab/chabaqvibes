# ChambaQ — Análisis Completo del Proyecto

> Fecha del análisis: **2026-05-24** · Días al deadline: **18** (2026-06-11 17:00 EDT)

---

## 1. TL;DR

ChambaQ está en un **buen punto de planeación** (brief, MVP arch, delivery plan, devpost draft, ecosistema de 12 agentes documentado, schemas v1 y seed mínimo ya creados) pero **NO tiene una línea de código ejecutable todavía**. Para llegar a demo grabada en 18 días hay que pasar de markdown a runtime, y antes hay que limpiar duplicación masiva que está inflando el repo ~16 MB innecesarios.

**Estado por dimensión:**

| Dimensión | Estado | Comentario |
|---|---|---|
| Estrategia / posicionamiento | Sólido | Brief, adaptation plan y Devpost draft alineados con el track MongoDB. |
| Documentación de producto | Sólido | MVP architecture clara, demo scenario concreto (plomero en Cancún). |
| Ecosistema de agentes (markdown) | Sólido | 13 archivos en `agents/` con frontmatter consistente. |
| Schemas MongoDB | Mínimo viable | 6 schemas v1 con `$jsonSchema` y required fields. |
| Seed data | Insuficiente | Solo 6 workers, 1 job, 1 employer. **Insuficiente para demo creíble**. |
| Código runtime | Inexistente | No hay agente Gemini ejecutable, no hay MCP cliente, no hay UI. |
| Higiene del repo | Mala | Duplicación masiva, carpeta "Sin título", link roto a checklist inexistente. |
| Submission Devpost | Draft v1 | Falta video, hosted URL y versión optimizada por jurado. |

---

## 2. Inventario completo

```
ChambaQ/
├── LICENSE                                          (MIT)
├── README.md                                        (raíz, bien estructurado)
├── ROADMAP.md                                       (Fases 0-5, decopa blockchain bien)
├── skills-lock.json                                 (solo elasticsearch-onboarding)
├── hackathon-adaptation-plan.md                     (estrategia hackathon, queda en raíz)
│
├── agents/                                          (recién creado por mí, 64K)
│   ├── README.md
│   ├── orchestrator/chambaq-orchestrator.md
│   ├── product/ (6 agentes: intake, matching x3, outreach, records)
│   └── build/   (5 agentes: engineering x2, product, narrative x2)
│
├── hackathon/                                       (21 MB total — 90% son PDFs)
│   ├── CHAMBAQ_HACKATHON_BRIEF.md
│   ├── MVP_ARCHITECTURE.md
│   ├── DELIVERY_PLAN.md
│   ├── DEVPOST_SUBMISSION_DRAFT.md
│   ├── AGENCY_AGENTS_CONNECTION.md                  (mapa graphify previo)
│   ├── AGENTS_ECOSYSTEM.md                          (creado por mí)
│   ├── DECISIONS.md                                 (creado por mí)
│   ├── PROJECT_ANALYSIS.md                          (este archivo)
│   └── *.pdf (7 PDFs de tracks del hackathon, 21 MB)
│
├── dataset/                                         (6.8 MB)
│   ├── 1.html .. 6.html                             (visión original ChambaQ, ES)
│   ├── hackathon/main-devpost.pdf                   (DUPLICADO de hackathon/)
│   ├── schemas/v1/                                  (6 JSON schemas)
│   └── seeds/                                       (seed.py + 6 workers)
│
├── docs/                                            (VACÍO)
│
├── graphify-out/                                    (292K, knowledge graph)
│   ├── GRAPH_REPORT.md                              (52 nodes, 67 edges, 9 communities)
│   ├── graph.html
│   └── graph.json
│
├── graphify-corpus/                                 (8.9 MB — copia parcial duplicada)
│   ├── agency-agents/                               (26 .md duplicados)
│   ├── dataset/                                     (HTML duplicados)
│   └── hackathon/                                   (briefs duplicados + PDFs)
│
└── Sin título/                                      (6.4 MB — nombre raro, mover)
    └── agency-agents/                               (226 .md repo completo MIT)
```

---

## 3. Duplicación detectada (acción de limpieza recomendada)

Estos archivos son **idénticos** entre carpetas (verificado con `diff -q`, salida vacía = idénticos):

| Archivo | Ubicación A | Ubicación B | Tamaño desperdiciado |
|---|---|---|---|
| `CHAMBAQ_HACKATHON_BRIEF.md` | `hackathon/` | `graphify-corpus/hackathon/` | ~4 KB |
| `MVP_ARCHITECTURE.md` | `hackathon/` | `graphify-corpus/hackathon/` | ~5 KB |
| `DELIVERY_PLAN.md` | `hackathon/` | `graphify-corpus/hackathon/` | ~4 KB |
| `DEVPOST_SUBMISSION_DRAFT.md` | `hackathon/` | `graphify-corpus/hackathon/` | ~5 KB |
| Devpost main PDF (6.9 MB) | `hackathon/` | `graphify-corpus/hackathon/` + `dataset/hackathon/` | **~14 MB** |
| MongoDB resources PDF (1.8 MB) | `hackathon/` | `graphify-corpus/hackathon/` | ~1.8 MB |
| `dataset/*.html` (6 archivos) | `dataset/` | `graphify-corpus/dataset/` | ~140 KB |
| Subset de 26 agentes | `Sin título/agency-agents/` | `graphify-corpus/agency-agents/` | ~600 KB |

**Total duplicación ≈ 16-17 MB** (más del 50% del repo).

**Recomendación**: `graphify-corpus/` es solo input efímero para la herramienta graphify. Mover su contenido único (si lo hay) a `graphify-out/` y borrar la carpeta. Eliminar el PDF triplicado.

---

## 4. Inconsistencias y bugs

| # | Severidad | Hallazgo | Cómo arreglar |
|---|---|---|---|
| 1 | Media | `README.md` linkea `hackathon/FINAL_READINESS_CHECKLIST.md` que **no existe** | Crear el checklist o quitar el link |
| 2 | Baja | Carpeta `docs/` está vacía pero aparece en el README "Repository Map" | Crearle contenido (status reports) o eliminarla |
| 3 | Baja | Carpeta `Sin título/` con nombre de Finder español | Renombrar a `reference/agency-agents/` (y agregar a `.gitignore` si solo es referencia local) |
| 4 | Baja | `hackathon-adaptation-plan.md` vive en raíz mientras el resto vive en `hackathon/` | Mover a `hackathon/ADAPTATION_PLAN.md` |
| 5 | Baja | `skills-lock.json` solo tiene `elasticsearch-onboarding` (no usada en MVP) | Documentar para qué es o eliminar |
| 6 | Media | Seed data muy chico: 6 workers, 1 employer, 1 job, 3 reviews | Ampliar a 40 workers / 6 employers / 12 jobs / 80 reviews (lo que pide `chambaq-mongodb-schema-designer`) |
| 7 | Baja | `graphify-out/GRAPH_REPORT.md` referencia 9 isolated nodes sin acción | Decidir si se exploran o se ignoran |
| 8 | Media | El `AGENCY_AGENTS_CONNECTION.md` propone una alineación con agency-agents distinta a `AGENTS_ECOSYSTEM.md` | Aclarar que son complementarios: el primero es mapa de inspiración, el segundo es ecosistema concreto |

---

## 5. Qué está bien y qué falta para la demo

### ✅ Listo
- Brief, MVP architecture, delivery plan, devpost draft, adaptation plan.
- Roadmap con decopa explícita de blockchain/CHQ/NFT/DAO.
- 13 agentes documentados en `agents/` con frontmatter consistente.
- 6 schemas MongoDB con validación.
- Seed script reproducible.
- Knowledge graph del corpus (graphify-out).

### 🟡 Mínimo viable, ampliar
- Seed data (6 workers → necesita 30-40 para que el ranking sea creíble).
- Schemas (faltan índices declarados, faltan campos de geo coords).

### ❌ Falta construir
- **Conexión a MongoDB Atlas real** (cluster, IP allowlist, credentials).
- **MCP server o cliente para MongoDB** (track principal del hackathon).
- **Runtime Gemini / Vertex AI** que cargue los agentes `.md` como system prompts.
- **Function declarations** sincronizadas con cada agente.
- **UI demo** (chat + shortlist + action log).
- **Video de 3 minutos** (script existe en el draft devpost).
- **Hosted URL pública** (Cloud Run o Vercel).
- **Repo público en GitHub** con licencia visible.
- **FINAL_READINESS_CHECKLIST.md** (referenciado pero no creado).

---

## 6. Riesgos críticos al hackathon

| Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|
| **No queda tiempo para grabar el video** | Alta | Crítico | Bloquear día 7-9 jun para grabación. Hoy mismo redactar shot list. |
| **MongoDB MCP no integra fácil con Gemini/Vertex** | Media | Alto | Probar el MCP server *hoy* con una query simple antes de invertir más. Tener fallback de cliente REST nativo. |
| **Demo se ve como chatbot, no como agente** | Media | Crítico | Mostrar tool calls en pantalla, panel de "agent thinking", action log visible. |
| **Hosted URL no funciona en demo** | Media | Alto | Tener video grabado como respaldo y screenshots en el Devpost. |
| **Seed data poco creíble** | Alta hoy | Medio | Llevar de 6 a ≥30 workers, con nombres y colonias reales de Cancún. |
| **Scope creep: alguien empuja blockchain/CHQ** | Baja | Crítico | `chambaq-hackathon-shipping-coach` ya lo rechaza por defecto. |

---

## 7. Plan de acción priorizado (18 días al deadline)

### Esta semana (24-30 mayo) — **Foundation**
1. **Limpiar duplicación**: eliminar `graphify-corpus/` y PDFs triplicados (gana 16 MB y claridad).
2. **Mover `hackathon-adaptation-plan.md`** a `hackathon/`.
3. **Crear repo GitHub público** con la licencia MIT visible.
4. **Conectar a MongoDB Atlas** y correr `seed.py` con seed actual (mínimo viable).
5. **Ampliar seed** a 30+ workers, 6 employers, 12 jobs, 60+ reviews (correr `chambaq-mongodb-schema-designer`).
6. **Probar MongoDB MCP** con una query de prueba desde Python.

### Semana 2 (31 mayo - 6 jun) — **Build**
7. **Implementar el orquestador real**: Python script que carga los 7 prompts `.md` y los expone como funciones de Gemini.
8. **Implementar las 6 funciones product**: `extract_job_requirements`, `search_workers`, `rank_candidates`, `explain_tradeoff`, `draft_outreach_message`, `update_job_record`.
9. **UI mínima**: Next.js + chat + 2 paneles (shortlist + action log). O Streamlit si se prefiere más rápido.
10. **Hosted en Cloud Run** o Vercel.
11. **End-to-end test** del escenario demo (plomero Cancún).

### Semana 3 (7-11 jun) — **Ship**
12. **Día 7-8 jun**: grabar video, montar narrativa.
13. **Día 9 jun**: pulir Devpost copy con `chambaq-devpost-copywriter`.
14. **Día 10 jun**: dry run completo del flujo en vivo.
15. **Día 11 jun antes de las 5pm EDT**: submit.
16. **Buffer**: 1 día de holgura para imprevistos.

---

## 8. Recomendaciones específicas

### Reorganización del repo (propuesta)
```
ChambaQ/
├── README.md
├── ROADMAP.md
├── LICENSE
├── .gitignore                 ← agregar Sin título/, .DS_Store, etc.
├── agents/                    ← (ya está bien)
├── data/                      ← renombrar dataset/ a data/ (más estándar)
│   ├── schemas/v1/
│   ├── seeds/
│   └── concept-vision/        ← mover los HTML aquí (no son seed)
├── docs/                      ← llenar o eliminar
├── hackathon/
│   ├── strategy/              ← brief, adaptation plan, decisions
│   ├── architecture/          ← MVP arch, agents ecosystem
│   ├── submission/            ← devpost draft, video script, checklist
│   └── resources/             ← PDFs (1 copia única)
├── runtime/                   ← NUEVO: código del agente Gemini
│   ├── orchestrator.py
│   ├── tools/
│   ├── prompts/v1/            ← outputs de chambaq-gemini-prompt-engineer
│   └── ui/
└── reference/                 ← gitignored, solo local
    └── agency-agents/         ← (renombrar "Sin título/")
```

### Quick wins (≤30 min cada uno)
- Eliminar `graphify-corpus/` después de verificar que no hay archivos únicos.
- Eliminar el PDF triplicado de devpost.
- Renombrar `Sin título/` → `reference/`.
- Mover `hackathon-adaptation-plan.md` a `hackathon/`.
- Crear `FINAL_READINESS_CHECKLIST.md` (puedo generarlo con un comando).
- Agregar `.gitignore` con `reference/`, `.DS_Store`, `__pycache__/`, `*.pyc`.

### Próximo agente a invocar
**`chambaq-mongodb-schema-designer`** (build/engineering). Es el bloqueante crítico: sin más seed data, el ranker no demuestra valor, el matcher devuelve listas vacías, y la demo se ve pobre. Estimo 2-3 horas de trabajo para llevar el seed a 30+ workers con nombres y colonias reales.

---

## 9. Decisión sugerida ahora mismo

Tienes 3 caminos para los próximos 30 minutos:

| Opción | Qué pasa | Cuándo elegir |
|---|---|---|
| **A. Limpieza primero** | Borro duplicación, reorganizo carpetas, creo `.gitignore` y `FINAL_READINESS_CHECKLIST.md`. ~30 min. | Si quieres el repo presentable antes de invertir en código. |
| **B. Ampliar seed primero** | Genero 30+ workers, 6 employers, 12 jobs, 60+ reviews con datos realistas de Cancún+CDMX. ~45 min. | Si quieres ver datos creíbles cuanto antes para validar el flujo. |
| **C. Empezar runtime ya** | Esqueleto Python del orquestador con Gemini + un tool de MongoDB básico. ~60 min. | Si quieres confirmar que el stack técnico funciona antes de invertir en seed/limpieza. |

**Mi recomendación: opción A primero** (es la más barata, deja el repo limpio para todo lo demás), luego **B** (datos creíbles), luego **C** (runtime).

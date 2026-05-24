# ChambaQ Agent MVP Architecture

## Objetivo Tecnico

Construir un agente funcional que use Gemini para razonar y Google Cloud Agent Builder para orquestar herramientas, con MongoDB como memoria operacional y fuente de datos.

El MVP debe demostrar un flujo completo de contratacion local.

## Arquitectura Conceptual

```text
Employer UI / Demo Chat
        |
        v
Google Cloud Agent Builder + Gemini
        |
        v
Agent Tools
        |
        +-- MongoDB MCP / API tools
        |     +-- workers
        |     +-- jobs
        |     +-- employers
        |     +-- certifications
        |     +-- reviews
        |     +-- outreach_logs
        |
        +-- Ranking Logic
        |
        +-- Message Drafting
        |
        +-- Optional Training Recommendation
```

## Core User Flow

1. Employer submits a hiring request in natural language.
2. Agent extracts structured fields.
3. Agent asks one clarifying question only if needed.
4. Agent creates a `jobs` record.
5. Agent searches workers in MongoDB.
6. Agent ranks candidates.
7. Agent explains the recommendation.
8. Agent drafts contact messages.
9. Agent logs outreach records.
10. Employer approves next action.

## Agent Tools

### `extract_job_requirements`

Input:

```json
{
  "message": "Necesito un plomero en Cancun manana..."
}
```

Output:

```json
{
  "trade": "plomero",
  "city": "Cancun",
  "neighborhood": null,
  "urgency": "tomorrow_morning",
  "budget_mxn": 1800,
  "quality_priority": "high",
  "description": "Fuga en cocina de restaurante"
}
```

### `create_job_request`

Creates a job in MongoDB.

Required fields:

- employer_id
- trade
- city
- urgency
- budget_mxn
- quality_priority
- description
- status

### `search_workers`

Searches verified workers by:

- trade
- city
- service area
- availability
- verification status
- budget range

### `rank_candidates`

Calculates a candidate score.

Suggested scoring:

```text
score =
  availability_match * 0.25 +
  trade_match * 0.20 +
  rating * 0.20 +
  completed_jobs * 0.10 +
  certification_score * 0.15 +
  budget_fit * 0.10
```

### `explain_tradeoff`

Applies the Tiempo-Dinero-Calidad model.

Examples:

- Tiempo + Calidad: expect higher cost.
- Tiempo + Dinero: quality may be lower.
- Calidad + Dinero: delivery may be slower.

### `draft_outreach_message`

Creates WhatsApp/SMS-ready messages.

Example:

```text
Hola, Luis. Tenemos una solicitud para plomeria en Cancun manana temprano:
fuga en cocina de restaurante, presupuesto hasta $1,800 MXN.
¿Estas disponible para revisar detalles?
```

### `log_outreach`

Creates records for contacted candidates.

Fields:

- job_id
- worker_id
- channel
- message
- status
- created_at

### `recommend_training_path`

Optional fallback if candidate quality is low.

Example:

> No hay suficientes plomeros certificados para urgencias comerciales. Recomiendo priorizar candidatos con experiencia y sugerir certificacion de mantenimiento hidraulico para futuros perfiles.

## MongoDB Collections

### `workers`

```json
{
  "_id": "worker_001",
  "name": "Luis Hernandez",
  "trade": "plomero",
  "city": "Cancun",
  "service_areas": ["Centro", "Zona Hotelera", "Bonfil"],
  "availability": ["2026-05-25_morning", "2026-05-25_afternoon"],
  "rate_min_mxn": 1200,
  "rate_max_mxn": 2200,
  "rating": 4.8,
  "completed_jobs": 42,
  "certifications": ["instalaciones_hidraulicas", "reparacion_fugas"],
  "verification_status": "verified",
  "phone": "+52XXXXXXXXXX",
  "languages": ["es"]
}
```

### `jobs`

```json
{
  "_id": "job_001",
  "employer_id": "employer_001",
  "trade": "plomero",
  "city": "Cancun",
  "urgency": "tomorrow_morning",
  "budget_mxn": 1800,
  "quality_priority": "high",
  "description": "Fuga en cocina de restaurante",
  "status": "shortlisted",
  "shortlisted_worker_ids": ["worker_001", "worker_004", "worker_009"]
}
```

### `reviews`

```json
{
  "_id": "review_001",
  "worker_id": "worker_001",
  "employer_id": "employer_003",
  "rating": 5,
  "comment": "Llego a tiempo y resolvio una fuga complicada.",
  "job_type": "plomeria_comercial"
}
```

### `outreach_logs`

```json
{
  "_id": "outreach_001",
  "job_id": "job_001",
  "worker_id": "worker_001",
  "channel": "whatsapp",
  "message": "Hola, Luis...",
  "status": "drafted",
  "created_at": "2026-05-24T00:00:00Z"
}
```

## MVP Screens

### Screen 1: Employer Request

Simple chat input where the employer describes the job.

### Screen 2: Agent Plan

Shows the steps the agent will perform:

- Extract requirements.
- Search verified workers.
- Rank candidates.
- Draft outreach.
- Save job record.

### Screen 3: Shortlist

Candidate cards:

- Name.
- Trade.
- Rating.
- Availability.
- Estimated cost.
- Certifications.
- Why recommended.

### Screen 4: Action Log

Shows:

- Job created.
- Search executed.
- Candidates ranked.
- Messages drafted.
- Awaiting employer approval.

## Build Order

1. Create sample MongoDB dataset.
2. Define tools around MongoDB operations.
3. Build agent prompt and tool instructions.
4. Build simple UI/demo chat.
5. Implement ranking function.
6. Add outreach drafting and logging.
7. Record demo video.
8. Prepare Devpost submission.


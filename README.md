# ChambaQ Agent

ChambaQ Agent is a hackathon-ready project concept for the Google Cloud Rapid Agent Hackathon.

The goal is to demonstrate AI that does not only answer questions, but helps a user take action. ChambaQ adapts the original ChambaQ employment vision into an agentic workflow for local trade hiring in Mexico.

## What It Does

ChambaQ Agent helps an employer turn a natural-language hiring request into concrete next steps:

1. Extract the job requirements.
2. Search verified trade workers.
3. Rank candidates.
4. Explain the time-money-quality trade-off.
5. Draft WhatsApp/SMS outreach messages.
6. Create or update the job record.
7. Keep a clear audit log for evaluation.

Example request:

```text
Necesito un plomero en Cancun para manana temprano. Es una fuga en la cocina de un restaurante. Presupuesto maximo 1800 pesos. Prefiero alguien confiable aunque no sea el mas barato.
```

## Hackathon Positioning

The hackathon theme is:

> AI that doesn't just provide answers, it helps you take action.

ChambaQ Agent fits by showing a multi-step hiring workflow with tool use, data retrieval, ranking, action drafts, and human approval.

Primary partner track:

- MongoDB: operational memory, worker profiles, jobs, reviews, certifications, and outreach logs.

Optional secondary tracks:

- Elastic: hybrid/semantic search over worker profiles.
- Arize: tracing, evaluation datasets, and prompt optimization.
- GitLab: repo/project workflow automation.

## Repository Map

```text
agents/                         Agent prompts and orchestration design
dataset/                        ChambaQ concept prototypes and seed data
dataset/schemas/v1/             MongoDB collection schemas
dataset/seeds/                  Reproducible demo seed data
dataset/control-tower/          Control Tower schemas and seed team data
docs/                           Project-level prompts and status docs
docs/control-tower/             Team, Hermes, dashboard and observability specs
graphify-out/                   Knowledge graph outputs
hackathon/                      Hackathon strategy, architecture and submission docs
knowledge/                      Project and member knowledge bases
Sin título/agency-agents/       Source reference library for agent patterns
```

## Key Docs

- [Hackathon Brief](hackathon/CHAMBAQ_HACKATHON_BRIEF.md)
- [MVP Architecture](hackathon/MVP_ARCHITECTURE.md)
- [Delivery Plan](hackathon/DELIVERY_PLAN.md)
- [Devpost Draft](hackathon/DEVPOST_SUBMISSION_DRAFT.md)
- [Agency Agents Connection](hackathon/AGENCY_AGENTS_CONNECTION.md)
- [Agents Ecosystem](hackathon/AGENTS_ECOSYSTEM.md)
- [Architecture Decisions](hackathon/DECISIONS.md)
- [Final Readiness Checklist](hackathon/FINAL_READINESS_CHECKLIST.md)
- [Control Tower](docs/control-tower/README.md)
- [Roadmap](ROADMAP.md)

## Agent Ecosystem

ChambaQ uses a two-layer agent architecture.

Build agents help create the hackathon project:

- MongoDB schema designer
- Gemini prompt engineer
- Hackathon shipping coach
- Devpost copywriter
- Demo video director

Product agents are the demo system:

- Requirement extractor
- Worker matcher
- Candidate ranker
- Trade-off explainer
- Outreach drafter
- Job record updater
- ChambaQ orchestrator

See [agents/README.md](agents/README.md).

## Control Tower

ChambaQ Control Tower is the internal dashboard plan for managing the project team and agent system.

It adds:

- Member CRUD.
- Hermes agent per member.
- Roger's orchestrator agent.
- Personal and project knowledge bases.
- Graphify graphs per project and member.
- Agency-agent role assignment.
- Prompt editing and approval workflows.
- Arize observability planning.

Start with [docs/control-tower/README.md](docs/control-tower/README.md).

## Data Model

The MVP uses six MongoDB collections:

- `workers`
- `employers`
- `jobs`
- `certifications`
- `reviews`
- `outreach_logs`

Schemas live in [dataset/schemas/v1](dataset/schemas/v1). Demo seed data lives in [dataset/seeds](dataset/seeds).

## Current Status

This repository is ready as a planning and orchestration package. The next build step is to implement the runtime demo:

1. Load seed data into MongoDB Atlas.
2. Expose MongoDB operations through MCP or API tools.
3. Wire the product agents to Gemini / Google Cloud Agent Builder.
4. Build a small UI with chat, shortlist, and action log.
5. Record the three-minute demo.

Parallel internal build:

1. Implement `/control` dashboard from `docs/control-tower/`.
2. Load `dataset/control-tower/seeds/team.seed.json`.
3. Create member CRUD and Hermes registry.
4. Display Graphify artifacts and Arize setup status.

## License

MIT. See [LICENSE](LICENSE).

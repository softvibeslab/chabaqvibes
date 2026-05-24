# ChambaQ Roadmap

## Phase 0: Hackathon Package

Status: ready as documentation and orchestration package.

Deliverables:

- Hackathon brief
- MVP architecture
- Devpost draft
- Agent ecosystem docs
- Graphify knowledge graph
- MongoDB schemas and seed data
- Final readiness checklist

## Phase 1: Functional Demo

Goal: demonstrate an end-to-end action-taking agent.

Build:

- MongoDB Atlas seed database
- MongoDB MCP/API tools
- Gemini / Google Cloud Agent Builder orchestration
- Simple web UI with chat, candidate shortlist, and action log
- Human approval step before outreach

Success criteria:

- Employer request creates a structured job record.
- Agent retrieves real seed workers.
- Agent ranks at least 3 candidates.
- Agent drafts outreach messages.
- Action log shows tool calls and state changes.

## Phase 2: Search Upgrade

Goal: improve candidate retrieval.

Options:

- Add Elasticsearch for hybrid worker search.
- Add semantic matching for natural-language job descriptions.
- Add facets: trade, city, price, rating, certification, availability.
- Add autocomplete for human-facing search.

## Phase 3: Evaluation and Observability

Goal: prove quality and traceability.

Options:

- Add Arize/OpenInference instrumentation.
- Create evaluation datasets for extraction, ranking, and outreach quality.
- Track tool calls, latency, candidate hallucination rate, and routing accuracy.
- Add prompt optimization loop.

## Phase 4: Marketplace Hardening

Goal: move beyond demo.

Build:

- Worker onboarding
- Employer onboarding
- Review workflow
- Availability updates
- Abuse/fraud reporting
- Verified certification upload
- Admin moderation

## Phase 5: Future ChambaQ Vision

Keep out of the hackathon MVP:

- Blockchain credentials
- NFT skill passport
- CHQ token
- DAO governance
- Smart contract payments

These concepts remain valid as long-term roadmap items after marketplace liquidity and trust are validated.


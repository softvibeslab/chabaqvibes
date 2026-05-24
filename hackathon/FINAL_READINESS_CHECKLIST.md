# Final Readiness Checklist

## Project Package

- [x] Root README explains ChambaQ Agent.
- [x] MIT license exists.
- [x] Hackathon brief exists.
- [x] MVP architecture exists.
- [x] Delivery plan exists.
- [x] Devpost draft exists.
- [x] Agent ecosystem documentation exists.
- [x] Graphify knowledge graph exists.
- [x] Agency-agents connection map exists.
- [x] Control Tower plan exists.
- [x] Member/Hermes data model exists.
- [x] Roger knowledge profile exists.
- [x] MongoDB schemas exist.
- [x] Seed data exists.

## Tooling Validated

- [x] GitLab CLI installed: `glab 1.99.0`.
- [x] GitLab auth validated as `rgarciavibes`.
- [x] Elasticsearch onboarding skill installed locally.
- [x] Arize skills installed globally.
- [ ] Arize `ax` CLI installed.
- [ ] Phoenix/OpenInference runtime installed.
- [ ] MongoDB Atlas cluster connected.
- [ ] Google Cloud project configured.
- [ ] Gemini / Agent Builder runtime connected.

## Demo Build Tasks

- [ ] Create MongoDB Atlas database.
- [ ] Load `dataset/seeds/seed_data.json`.
- [ ] Create MongoDB indexes:
  - `workers`: `{ trade: 1, city: 1 }`
  - `workers`: `{ availability: 1 }`
  - `jobs`: `{ employer_id: 1, created_at: -1 }`
  - `reviews`: `{ worker_id: 1, created_at: -1 }`
- [ ] Expose MongoDB tools via MCP or API.
- [ ] Implement agent routing from `agents/orchestrator/chambaq-orchestrator.md`.
- [ ] Implement product agents.
- [ ] Build UI with:
  - employer chat
  - agent plan
  - candidate shortlist
  - action log
- [ ] Add human approval before outreach.
- [ ] Record 3-minute demo video.

## Control Tower Build Tasks

- [ ] Build `/control` dashboard.
- [ ] Implement member CRUD.
- [ ] Implement Hermes registry.
- [ ] Implement Prompt Studio.
- [ ] Show project Graphify artifacts.
- [ ] Generate per-member Graphify output.
- [ ] Add Telegram/WhatsApp connection placeholders.
- [ ] Add Arize integration status panel.

## Devpost Submission

- [ ] Hosted project URL.
- [ ] Public repository URL.
- [ ] Open-source license visible.
- [ ] 3-minute video uploaded.
- [ ] Selected partner track.
- [ ] Completed project description.
- [ ] Built-with section mentions Gemini, Google Cloud Agent Builder, MongoDB.
- [ ] Impact section focuses on local trade hiring.

## Demo Acceptance Test

Use this prompt:

```text
Necesito un plomero en Cancun para manana temprano. Es una fuga en la cocina de un restaurante. Presupuesto maximo 1800 pesos. Prefiero alguien confiable aunque no sea el mas barato.
```

The demo passes when:

- [ ] A structured job request is produced.
- [ ] A MongoDB query retrieves actual seed workers.
- [ ] At least 3 candidates are ranked.
- [ ] Time-money-quality trade-off is explained.
- [ ] Outreach messages are drafted.
- [ ] A job record is created or updated.
- [ ] An audit/action log is visible.

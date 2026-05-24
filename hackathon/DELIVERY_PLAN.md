# Delivery Plan

## Goal

Submit ChambaQ Agent as a working hackathon project that demonstrates an AI agent taking action on a real-world local hiring workflow.

## Recommended Track

Primary track:

- MongoDB

Possible secondary mention:

- Elastic-style search concepts, if semantic search is implemented later.
- Arize-style evaluation, if observability is added later.

## Scope

### In Scope

- Hiring request intake.
- Job requirement extraction.
- Worker search.
- Candidate ranking.
- Time-money-quality explanation.
- WhatsApp/SMS message drafting.
- Job and outreach logging.
- Simple web demo.
- Sample data.

### Out Of Scope For Hackathon MVP

- Production mobile app.
- Real WhatsApp sending.
- Payments.
- Blockchain implementation.
- NFTs.
- CHQ token.
- DAO.
- Legal worker verification.
- Full certification integrations.

## Milestones

### Milestone 1: Product Definition

Deliverables:

- Clear problem statement.
- User personas.
- Demo scenario.
- Agent capabilities.

Acceptance criteria:

- The project can be explained in under 30 seconds.
- The demo scenario is specific and realistic.

### Milestone 2: Data Layer

Deliverables:

- MongoDB collections or mock JSON equivalent.
- At least 20 worker profiles.
- At least 5 employer/job scenarios.
- Reviews and certifications sample records.

Acceptance criteria:

- The agent can retrieve real candidate records.
- Candidate data includes enough fields to justify ranking.

### Milestone 3: Agent Tools

Deliverables:

- Search worker tool.
- Create job tool.
- Rank candidates tool.
- Draft outreach tool.
- Log outreach tool.

Acceptance criteria:

- Each tool can be demonstrated independently.
- The agent can call more than one tool in a single workflow.

### Milestone 4: Agent Orchestration

Deliverables:

- Agent system instructions.
- Tool descriptions.
- Guardrails for human approval.
- Multi-step execution flow.

Acceptance criteria:

- The agent explains its plan before executing.
- The agent asks for approval before contacting workers.
- The agent produces a shortlist and action log.

### Milestone 5: Demo UI

Deliverables:

- Chat/request input.
- Agent plan panel.
- Candidate shortlist panel.
- Action log panel.

Acceptance criteria:

- A judge can understand the workflow without reading code.
- UI makes it obvious that the agent is acting on tools/data.

### Milestone 6: Devpost Package

Deliverables:

- Hosted project URL.
- Public GitHub repository.
- Open-source license.
- README.
- 3-minute demo video.
- Devpost writeup.

Acceptance criteria:

- Submission addresses all judging criteria.
- Partner track usage is explicit.

## Suggested Timeline

### Day 1

- Finalize scope.
- Create sample data.
- Write README and project story.

### Day 2

- Implement data access and tools.
- Build ranking logic.
- Test tool calls.

### Day 3

- Build UI.
- Integrate agent flow.
- Add action log.

### Day 4

- Polish demo.
- Record video.
- Prepare Devpost submission.

## Risk Management

### Risk: Scope creep

Mitigation:

Keep blockchain, token, DAO and mobile app as roadmap only.

### Risk: Agent feels like a chatbot

Mitigation:

Show tool calls, records created, candidates ranked and messages drafted.

### Risk: Partner integration feels superficial

Mitigation:

Make MongoDB central to the workflow: worker search, job creation and outreach logs should all depend on it.

### Risk: Data is too small

Mitigation:

Use enough sample workers to make ranking meaningful. Include candidates that should be rejected or ranked lower.

## Final Demo Story

The user is a restaurant owner in Cancun with an urgent plumbing issue.

ChambaQ Agent turns the request into structured work:

1. It identifies the need.
2. It creates the job.
3. It searches verified workers.
4. It ranks candidates.
5. It explains trade-offs.
6. It drafts outreach.
7. It logs next steps.

This directly matches the hackathon theme: AI that helps you take action.


# ChambaQ Adaptation Plan for Google Cloud Rapid Agent Hackathon

## Hackathon Fit

The hackathon asks for a functional agent, powered by Gemini and Google Cloud Agent Builder, that solves a real-world challenge. The agent must go beyond chat: it should plan, use tools, execute multi-step workflows, and integrate meaningfully with at least one partner MCP server.

ChambaQ fits if it is reframed from a broad employment ecosystem into a focused action-taking agent for verified local hiring.

## Recommended Submission Concept

**Project name:** ChambaQ Agent

**Tagline:** An AI hiring agent that helps small businesses find, verify, and contact qualified trade workers in minutes.

**Core problem:** Local employers struggle to hire reliable trade workers quickly. Workers struggle to prove skills, find nearby opportunities, and respond before jobs disappear.

**Agent mission:** Given a real hiring need, ChambaQ Agent collects requirements, searches verified worker profiles, ranks candidates, explains trade-offs, drafts outreach, updates records, and produces a hiring shortlist.

## Best Partner Track

**Recommended track: MongoDB**

Why:

- ChambaQ naturally needs structured worker, employer, job, certification, and reputation data.
- The agent can use a MongoDB MCP server to query, create, update, and rank real records.
- This makes the demo concrete: the agent is not only answering questions, it is operating on a live hiring database.
- MongoDB is easier to justify than blockchain/tokenomics for an MVP.

Secondary possible tracks:

- **Elastic:** strong if the demo focuses on job/candidate search and semantic retrieval.
- **Arize:** useful if the demo highlights agent evaluation and quality monitoring.
- **GitLab:** useful only if the agent manages implementation tasks, not the core ChambaQ product.
- **Fivetran:** useful for importing external labor market/job data, but likely heavier.
- **Dynatrace:** useful for production observability, less central to the user problem.

## What To De-Scope

For the hackathon MVP, avoid making these central:

- Blockchain as a required architecture.
- Token CHQ.
- DAO governance.
- NFTs as a live implementation.
- Full mobile app.
- Full marketplace payments.

Mention them as future roadmap only. The hackathon criteria favor a working agent with clear impact over a very large speculative platform.

## MVP Workflow

The demo should show one complete scenario:

1. Employer says: "Necesito un plomero en Cancún mañana, presupuesto $1,500, trabajo urgente, calidad alta."
2. Agent extracts job requirements: oficio, location, urgency, budget, quality expectation.
3. Agent applies the ChambaQ trade-off model: tiempo / dinero / calidad.
4. Agent queries MongoDB for qualified nearby workers.
5. Agent ranks candidates using:
   - distance or service area
   - availability
   - rating
   - completed jobs
   - certifications
   - price fit
6. Agent returns a shortlist with explanation.
7. Agent drafts WhatsApp/SMS outreach messages.
8. Agent creates or updates a job record.
9. Agent logs the selected candidates and next steps.

## Suggested Demo Dataset

Create sample MongoDB collections:

- `workers`
- `employers`
- `jobs`
- `certifications`
- `reviews`
- `outreach_logs`

Minimum worker fields:

- name
- trade
- city
- neighborhoods
- availability
- hourly_or_job_rate
- rating
- completed_jobs
- certifications
- languages
- phone
- verification_status

Minimum job fields:

- employer_id
- trade_needed
- location
- urgency
- budget
- quality_priority
- description
- status
- shortlisted_worker_ids

## Agent Tools

The agent should expose actions like:

- `create_job_request`
- `search_workers`
- `rank_candidates`
- `explain_tradeoff`
- `draft_outreach_message`
- `log_outreach`
- `update_job_status`
- `recommend_training_path`

## Devpost Positioning

Use this framing:

ChambaQ Agent is built for real-world local hiring. Instead of acting like a job board, it behaves like an operations assistant for small businesses and workers. It asks the right questions, searches verified data, reasons through trade-offs, and takes concrete actions to move a hiring request forward.

## Judging Criteria Alignment

### Technological Implementation

Show Google Cloud Agent Builder + Gemini orchestrating tools and using MongoDB MCP for live data operations.

### Design

Keep the UX simple: employer chat on the left, candidate shortlist and action log on the right.

### Potential Impact

Focus on informal labor, small businesses, and verified opportunities for trade workers in Mexico.

### Quality of Idea

The distinctive idea is the combination of verified worker data, the time-money-quality hiring model, and an agent that actually completes hiring steps.

## Three-Minute Demo Script

1. Open with the problem: hiring reliable trade workers is slow, informal, and risky.
2. Show the employer entering a real request.
3. Show the agent extracting requirements and asking one clarifying question.
4. Show the agent using MongoDB to find candidates.
5. Show the ranked shortlist with reasons.
6. Show the agent drafting outreach messages.
7. Show the job record updated with selected candidates.
8. Close with impact: faster hiring for businesses, better opportunities for verified workers.

## Submission Checklist

- Hosted project URL.
- Public open-source repository URL.
- Open-source license visible at repo root.
- About section/license detectable on repository page.
- Approximately 3-minute demo video.
- Selected partner track: MongoDB.
- Completed Devpost submission form.

## Deadline

The PDF shows the deadline as **June 11, 2026 at 5:00 PM EDT**.


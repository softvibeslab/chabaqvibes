# Devpost Submission Draft

## Project Name

ChambaQ Agent

## Short Description

An AI hiring agent that helps local businesses find, rank and contact verified trade workers using Gemini and MongoDB.

## Inspiration

Hiring local trade workers is still fragmented and informal. Small businesses often rely on word of mouth, social media posts or scattered WhatsApp groups. That makes urgent hiring slow and risky, especially when quality, price and availability all matter.

ChambaQ Agent was built to show how an AI agent can move beyond chat and actually help complete the hiring workflow.

## What It Does

ChambaQ Agent helps an employer turn a natural-language request into concrete hiring actions.

The agent can:

- Understand a job request.
- Extract structured requirements.
- Apply a time-money-quality trade-off model.
- Search verified worker profiles.
- Rank candidates.
- Explain recommendations.
- Draft WhatsApp/SMS outreach messages.
- Create job records.
- Log next steps.

## How We Built It

The project is designed around Gemini and Google Cloud Agent Builder for agent reasoning and orchestration.

MongoDB is used as the operational data layer for:

- Worker profiles.
- Employer records.
- Job requests.
- Certifications.
- Reviews.
- Outreach logs.

The agent uses tool calls to search, rank, create and update records. This makes the system an action-taking workflow assistant instead of a question-answering chatbot.

## Partner Technology

Primary partner track: MongoDB.

MongoDB provides the persistent memory and searchable data foundation for the agent. ChambaQ Agent uses it to retrieve worker profiles, create job records and store outreach activity.

## Real-World Impact

ChambaQ Agent targets a real labor-market problem: local hiring for trades is often informal, slow and low-trust.

For businesses, the agent reduces the time needed to find suitable candidates.

For workers, verified profiles can lead to more relevant opportunities.

For local economies, better matching can reduce friction between demand and available talent.

## What Makes It Different

ChambaQ Agent combines:

- Practical local hiring workflows.
- Verified worker data.
- Explainable candidate ranking.
- Human-in-the-loop approval.
- The time-money-quality decision model.

The agent does not just answer "who should I hire?" It creates the job, searches data, ranks candidates, drafts messages and prepares the next action.

## Challenges We Ran Into

The biggest challenge was reducing the original ChambaQ vision into a focused MVP. The full ChambaQ concept includes training, certifications, blockchain credentials, token rewards and a mobile ecosystem. For the hackathon, we focused on the core action loop: match a real hiring need with available verified workers.

## Accomplishments

- Defined a focused agent workflow.
- Designed the MongoDB data model.
- Created an explainable ranking approach.
- Built a demo scenario around a real local business need.
- Scoped the project to match the hackathon's action-oriented agent theme.

## What We Learned

The strongest AI agent demos are not the broadest ones. They are narrow enough to complete a real task end to end, while still showing a path toward a larger product.

## What's Next

Future versions of ChambaQ could add:

- Real WhatsApp integration.
- Worker onboarding.
- Certification verification.
- Training recommendations.
- Reputation history.
- Payments and contracts.
- Blockchain credentials for portable worker reputation.
- Token incentives for learning and verified work.

## Demo Script

### 0:00 - 0:20 Problem

"Small businesses still hire trade workers through fragmented channels. When the need is urgent, it is hard to know who is available, qualified and trustworthy."

### 0:20 - 0:45 User Request

Show employer prompt:

```text
Necesito un plomero en Cancun para manana temprano. Es una fuga en la cocina de un restaurante. Presupuesto maximo 1800 pesos. Prefiero alguien confiable aunque no sea el mas barato.
```

### 0:45 - 1:15 Agent Plan

Show agent extracting:

- trade: plomero
- city: Cancun
- urgency: tomorrow morning
- budget: 1800 MXN
- quality priority: high
- job type: restaurant kitchen leak

Then show plan:

- Create job.
- Search workers.
- Rank candidates.
- Draft outreach.
- Wait for approval.

### 1:15 - 2:00 Tool Actions

Show tool calls:

- `create_job_request`
- `search_workers`
- `rank_candidates`
- `draft_outreach_message`
- `log_outreach`

### 2:00 - 2:35 Results

Show shortlist of 3 candidates with explanation.

Example:

1. Luis Hernandez: best overall fit, verified, available tomorrow, commercial plumbing experience.
2. Ana Torres: strong rating and certifications, slightly above budget.
3. Marco Ruiz: available and affordable, fewer commercial reviews.

### 2:35 - 3:00 Closing

"ChambaQ Agent demonstrates AI that takes action: it turns a real hiring need into a structured job, candidate shortlist, drafted outreach and next steps, while keeping the employer in control."


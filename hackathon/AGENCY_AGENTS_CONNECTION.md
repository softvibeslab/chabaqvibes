# Agency Agents Connection Map

## Purpose

This document connects three project sources:

- `Sin título/agency-agents/`: a library of specialist agent roles and workflows.
- `hackathon/`: the Google Cloud Rapid Agent Hackathon plan for ChambaQ.
- `dataset/`: the broader ChambaQ strategic vision and product narrative.

The goal is to use `agency-agents` as an orchestration model for creating the hackathon project, not as the final product agent.

## Graphify Summary

Graphify was run on a focused corpus that combines relevant `agency-agents` roles with ChambaQ hackathon and dataset documents.

Generated outputs:

- `graphify-out/graph.html`
- `graphify-out/graph.json`
- `graphify-out/GRAPH_REPORT.md`

Graph result:

- 52 nodes
- 67 edges
- 9 communities

## Core Bridge Nodes

The graph identified these as the main connectors across the three corpora:

1. **ChambaQ Agent**
   - Connects ChambaQ market vision, hackathon requirements and MongoDB demo package.

2. **End-to-End Hiring Workflow**
   - Connects MVP delivery, quality/governance, MCP/data tools and orchestration patterns.

3. **ChambaQ Agent Tools**
   - Connects MongoDB/MCP tooling with the action-taking agent requirement.

4. **Action-Taking Agent Requirements**
   - Connects the hackathon theme to product scope, demo design and partner integration.

## Community Map

### 1. MongoDB Demo Package

Source emphasis:

- `hackathon/MVP_ARCHITECTURE.md`
- `hackathon/DEVPOST_SUBMISSION_DRAFT.md`
- MongoDB hackathon resource PDF

Role in the project:

Defines the concrete technical submission: MongoDB collections, MCP integration, demo scenario, Devpost narrative and data-backed agent actions.

### 2. ChambaQ Market Vision

Source emphasis:

- `dataset/*.html`
- `hackathon/CHAMBAQ_HACKATHON_BRIEF.md`

Role in the project:

Preserves the original ChambaQ thesis: local trade hiring, trust, verified skills, worker growth and the time-money-quality decision model.

### 3. Hackathon Agent Requirements

Source emphasis:

- `hackathon/main-devpost.pdf`
- `hackathon/DELIVERY_PLAN.md`

Role in the project:

Keeps the project aligned with the judging target: an agent that reasons, plans, uses tools and executes tasks under human oversight.

### 4. Quality and Governance Roles

Source emphasis:

- `agency-agents/automation-governance-architect.md`
- `agency-agents/testing-evidence-collector.md`
- `agency-agents/testing-reality-checker.md`
- `agency-agents/engineering-technical-writer.md`

Role in the project:

Defines validation, evidence, human approval and documentation discipline.

### 5. MVP Delivery Workflow

Source emphasis:

- `agency-agents/workflow-startup-mvp.md`
- `agency-agents/engineering-rapid-prototyper.md`
- `agency-agents/product-sprint-prioritizer.md`
- `agency-agents/project-manager-senior.md`

Role in the project:

Turns the idea into a buildable sequence: define scope, prototype quickly, prioritize features and manage tasks.

### 6. MCP and Data Tools

Source emphasis:

- `agency-agents/specialized-mcp-builder.md`
- `agency-agents/data-consolidation-agent.md`
- `hackathon/MVP_ARCHITECTURE.md`

Role in the project:

Defines how the agent gets real-world capabilities: tool design, database access, structured outputs and reliable tool descriptions.

### 7. Future Blockchain Roadmap

Source emphasis:

- `dataset/*.html`
- `hackathon/DELIVERY_PLAN.md`

Role in the project:

Keeps blockchain, NFTs, CHQ token and DAO as future roadmap instead of MVP scope.

### 8. Agent Orchestration Pattern

Source emphasis:

- `agency-agents/agents-orchestrator.md`
- `agency-agents/workflow-startup-mvp.md`

Role in the project:

Provides the meta-agent pattern for coordinating the project build: PM, architecture, development, QA and integration.

### 9. Problem-First Product Fit

Source emphasis:

- `agency-agents/product-manager.md`
- `hackathon/CHAMBAQ_HACKATHON_BRIEF.md`

Role in the project:

Keeps the work grounded in a real user problem instead of a technology showcase.

## Recommended Orchestrator Team

Use these `agency-agents` roles to create the project:

### Phase 1: Product Scope

Owner roles:

- Product Manager
- Senior Project Manager
- Sprint Prioritizer

Outputs:

- MVP scope
- user stories
- task list
- demo scenario

### Phase 2: Technical Foundation

Owner roles:

- Software Architect
- AI Engineer
- MCP Builder
- Database Optimizer

Outputs:

- architecture
- MongoDB schema
- MCP/tool contract
- agent instructions
- ranking logic

### Phase 3: Build Prototype

Owner roles:

- Rapid Prototyper
- AI Engineer
- Technical Writer

Outputs:

- working demo
- sample data
- README
- tool/action logs

### Phase 4: Validate Evidence

Owner roles:

- Evidence Collector
- Reality Checker
- Automation Governance Architect

Outputs:

- proof that the agent uses tools
- test script
- human-in-the-loop approval checks
- risk notes

### Phase 5: Submit

Owner roles:

- Technical Writer
- Project Shepherd
- Devpost package owner

Outputs:

- Devpost copy
- demo video script
- repo checklist
- final submission checklist

## Practical Connection

The final project should be built by an orchestrator agent, not by a single generic assistant.

The orchestrator should coordinate specialists like this:

```text
Agents Orchestrator
  -> Product Manager: define problem and MVP
  -> Sprint Prioritizer: choose hackathon-safe scope
  -> Software Architect: design system
  -> MCP Builder: define MongoDB tools
  -> Rapid Prototyper: build demo
  -> Evidence Collector: prove tool actions
  -> Reality Checker: challenge whether demo really works
  -> Technical Writer: package README and Devpost
```

## Key Insight

The strongest connection across all sources is:

> ChambaQ's big product vision becomes hackathon-ready only when `agency-agents` is used as a project creation orchestrator that narrows the scope, builds the MongoDB/MCP action layer, validates evidence and packages the demo.

In short:

`dataset/` gives the vision.

`hackathon/` gives the target.

`agency-agents/` gives the build system.


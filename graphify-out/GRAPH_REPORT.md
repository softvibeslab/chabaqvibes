# Graph Report - graphify-corpus  (2026-05-24)

## Corpus Check
- 49 files · ~60,688 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 71 nodes · 92 edges · 10 communities (8 shown, 2 thin omitted)
- Extraction: 49% EXTRACTED · 51% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_MongoDB Demo Package|MongoDB Demo Package]]
- [[_COMMUNITY_ChambaQ Market Vision|ChambaQ Market Vision]]
- [[_COMMUNITY_Hackathon Agent Requirements|Hackathon Agent Requirements]]
- [[_COMMUNITY_Quality and Governance Roles|Quality and Governance Roles]]
- [[_COMMUNITY_MVP Delivery Workflow|MVP Delivery Workflow]]
- [[_COMMUNITY_MCP and Data Tools|MCP and Data Tools]]
- [[_COMMUNITY_Future Blockchain Roadmap|Future Blockchain Roadmap]]
- [[_COMMUNITY_Agent Orchestration Pattern|Agent Orchestration Pattern]]
- [[_COMMUNITY_Problem First Product Fit|Problem First Product Fit]]
- [[_COMMUNITY_Control_Tower_and_Hermes_Orchestration|Control Tower and Hermes Orchestration]]

## God Nodes (most connected - your core abstractions)
1. `ChambaQ Agent` - 9 edges
2. `End-to-End Hiring Workflow` - 8 edges
3. `ChambaQ Agent Tools` - 6 edges
4. `Action-Taking Agent Requirement` - 5 edges
5. `Action-Taking Agent Requirements` - 5 edges
6. `ChambaQ Agent` - 5 edges
7. `MongoDB MCP Partner Track` - 4 edges
8. `Startup MVP Multi-Agent Workflow` - 3 edges
9. `Partner MCP Track Requirement` - 3 edges
10. `Local Trade Hiring Problem` - 3 edges

## Control Tower Update

Graphify corpus now includes the Control Tower knowledge base:

- `docs/control-tower/`
- `dataset/control-tower/seeds/team.seed.json`
- `knowledge/members/roger/profile.md`
- `knowledge/members/roger/soul.md`

New graph additions:

- `ChambaQ Control Tower`
- `Roger Orchestrator`
- `Hermes Agent`
- `Member CRUD`
- `Prompt Studio`
- `Project Knowledge Base`
- `Personal Knowledge Base`
- `Agency Agent Assignment`
- `Arize AI Provider Integration`
- `Telegram Channel`
- `WhatsApp Channel`

Generated member graph:

- `graphify-out/members/roger/graph.json`
- `graphify-out/members/roger/graph.html`
- `graphify-out/members/roger/GRAPH_REPORT.md`

## Surprising Connections (you probably didn't know these)
- `Reality Checker` --conceptually_related_to--> `ChambaQ Agent`  [INFERRED]
  graphify-corpus/agency-agents/testing-reality-checker.md → hackathon-adaptation-plan.md
- `Technical Writer` --conceptually_related_to--> `ChambaQ Agent`  [INFERRED]
  graphify-corpus/agency-agents/engineering-technical-writer.md → hackathon-adaptation-plan.md
- `Startup MVP Multi-Agent Workflow` --conceptually_related_to--> `ChambaQ Agent`  [INFERRED]
  graphify-corpus/agency-agents/workflow-startup-mvp.md → hackathon-adaptation-plan.md
- `Rapid Prototyper` --conceptually_related_to--> `ChambaQ Agent`  [INFERRED]
  graphify-corpus/agency-agents/engineering-rapid-prototyper.md → hackathon-adaptation-plan.md
- `Senior Project Manager Task Breakdown` --conceptually_related_to--> `ChambaQ Agent`  [INFERRED]
  graphify-corpus/agency-agents/project-manager-senior.md → hackathon-adaptation-plan.md

## Hyperedges (group relationships)
- **Project Orchestration Team** — agents_orchestrator_pipeline_manager, project_manager_senior_task_breakdown, product_sprint_prioritizer_sprint_scope, workflow_startup_mvp_multi_agent_delivery, hackathon_adaptation_plan_chambaq_agent [INFERRED 0.86]
- **Technical Delivery Team** — engineering_rapid_prototyper_mvp_builder, engineering_ai_engineer_production_ai, specialized_mcp_builder_agent_tools, specialized_workflow_architect_workflow_trees, mvp_architecture_agent_tools, hackathon_adaptation_plan_mongodb_mcp_track [INFERRED 0.88]
- **Validation and Evidence Team** — testing_evidence_collector_visual_qa, testing_reality_checker_final_gate, automation_governance_architect_human_control, chambaq_hackathon_brief_action_taking_agent, mvp_architecture_hiring_workflow [INFERRED 0.83]
- **Hackathon Submission Package** — main_devpost_submission_requirements, delivery_plan_devpost_package, devpost_submission_draft_chambaq_agent_submission, devpost_submission_draft_demo_script [EXTRACTED 0.95]
- **ChambaQ MVP Workflow** — chambaq_hackathon_brief_chambaq_agent, mvp_architecture_gemini_agent_builder, delivery_plan_agent_tools, mvp_architecture_mongodb_collections, mvp_architecture_outreach_logging, chambaq_hackathon_brief_demo_scenario [EXTRACTED 0.95]
- **IA and Blockchain Future Roadmap** — dataset_1_chambaq_ecosystem_vision, dataset_3_ia_blockchain_data_economy, dataset_5_chq_token_dao_roadmap, dataset_6_sms_whatsapp_mobile_layers, dataset_6_future_roadmap, delivery_plan_hackathon_scope_control [INFERRED 0.85]

## Communities (9 total, 2 thin omitted)

### Community 0 - "MongoDB Demo Package"
Cohesion: 0.22
Nodes (9): Cancun Restaurant Plumber Demo Scenario, ChambaQ MongoDB Track Choice, ChambaQ Agent Devpost Submission Draft, ChambaQ Demo Script, Partner MCP Track Requirement, MongoDB Atlas Agent Memory Layer, MongoDB MCP Server, ChambaQ MongoDB Collections (+1 more)

### Community 1 - "ChambaQ Market Vision"
Cohesion: 0.28
Nodes (9): ChambaQ Agent, Local Trade Hiring Problem, Tiempo-Dinero-Calidad Model, ChambaQ Ecosystem Vision, Worker Growth and Token Rewards, Trade Market Trust and Efficiency Gap, Verified Skills and Blockchain Credentials, Mexican Informal Labor Challenge (+1 more)

### Community 2 - "Hackathon Agent Requirements"
Cohesion: 0.29
Nodes (8): SMS WhatsApp and Mobile Access Layers, ChambaQ Agent Tools, Hackathon Devpost Package, Action-Taking Agent Requirements, Google Cloud Rapid Agent Hackathon, Devpost Submission Requirements, Gemini and Google Cloud Agent Builder Architecture, Outreach Logging Workflow

### Community 3 - "Quality and Governance Roles"
Cohesion: 0.33
Nodes (6): Automation Governance Architect, Action-Taking Agent Requirement, AI Engineer, Technical Writer, Evidence Collector, Reality Checker

### Community 4 - "MVP Delivery Workflow"
Cohesion: 0.53
Nodes (6): Rapid Prototyper, ChambaQ Agent, End-to-End Hiring Workflow, Sprint Prioritizer, Senior Project Manager Task Breakdown, Workflow Architect

### Community 5 - "MCP and Data Tools"
Cohesion: 0.7
Nodes (5): Data Consolidation Agent, MongoDB MCP Partner Track, ChambaQ Agent Tools, MCP Builder, MCP Memory Handoffs

### Community 6 - "Future Blockchain Roadmap"
Cohesion: 0.5
Nodes (5): IA and Blockchain Data Economy, CHQ Token and DAO Roadmap, Multilayer AI and Blockchain Strategy, ChambaQ Future Roadmap, Hackathon MVP Scope Control

### Community 9 - "Control Tower and Hermes Orchestration"
Cohesion: 0.62
Nodes (19): ChambaQ Control Tower, Roger Orchestrator, Hermes Agent, Independent Hermes Per Member, Member CRUD, Member Profile, Member Soul, Member Superpowers, Prompt Studio, Project Knowledge Base, Personal Knowledge Base, Graphify Artifact, Agency Agent Assignment, Arize AI Provider Integration, Observability Panel, Telegram Channel, WhatsApp Channel, Human Approval Policy, Control Tower Cursor Build Plan

## Knowledge Gaps
- **9 isolated node(s):** `Agents Orchestrator`, `Product Manager Problem-First PRD`, `Workflow Architect`, `Hackathon Devpost Package`, `Trade Market Trust and Efficiency Gap` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Action-Taking Agent Requirements` connect `Hackathon Agent Requirements` to `MongoDB Demo Package`, `ChambaQ Market Vision`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Why does `ChambaQ Agent` connect `ChambaQ Market Vision` to `MongoDB Demo Package`, `Hackathon Agent Requirements`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `End-to-End Hiring Workflow` connect `MVP Delivery Workflow` to `Quality and Governance Roles`, `MCP and Data Tools`, `Agent Orchestration Pattern`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `ChambaQ Agent` (e.g. with `Startup MVP Multi-Agent Workflow` and `Rapid Prototyper`) actually correct?**
  _`ChambaQ Agent` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `End-to-End Hiring Workflow` (e.g. with `Startup MVP Multi-Agent Workflow` and `Rapid Prototyper`) actually correct?**
  _`End-to-End Hiring Workflow` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `ChambaQ Agent Tools` (e.g. with `MCP Memory Handoffs` and `MCP Builder`) actually correct?**
  _`ChambaQ Agent Tools` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `Action-Taking Agent Requirement` (e.g. with `AI Engineer` and `Automation Governance Architect`) actually correct?**
  _`Action-Taking Agent Requirement` has 4 INFERRED edges - model-reasoned connections that need verification._

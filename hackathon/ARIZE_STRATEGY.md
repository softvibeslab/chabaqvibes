# Arize Strategy for ChambaQ

## Role In The Hackathon

Arize should not be the primary product surface for ChambaQ. It should be the evidence and quality layer that proves the agent is doing real work correctly.

Primary ChambaQ track remains MongoDB.

Arize can be used as a secondary strength for:

- Tracing agent steps.
- Inspecting tool calls.
- Evaluating outputs.
- Creating golden datasets.
- Improving prompts with real failure cases.

## What Arize Can Prove

The hackathon asks for:

> AI that doesn't just provide answers, it helps you take action.

Arize can prove this by showing traces where ChambaQ:

1. Receives an employer request.
2. Extracts a structured job request.
3. Calls worker search.
4. Ranks candidates.
5. Drafts outreach.
6. Updates/logs the job.
7. Waits for human approval.

Each of these should become a span or event in the trace.

## Best Arize Skills For ChambaQ

### `arize-instrumentation`

Use when the app runtime exists.

Purpose:

- Add OpenInference/OpenTelemetry tracing.
- Capture LLM spans.
- Capture custom tool spans.
- Capture parent-child relationships between orchestrator and tools.

Important for ChambaQ:

- Add manual `CHAIN` spans for orchestration steps.
- Add manual `TOOL` spans for MongoDB search, ranking, outreach draft and job update.
- Do not change business logic.
- Do not embed credentials in code.

### `arize-trace`

Use after traces are emitted.

Purpose:

- Export and inspect traces.
- Confirm tool calls appear.
- Debug sparse traces.
- Verify inputs/outputs and parent-child relationships.

Questions it can answer:

- Did the agent call MongoDB?
- Did the ranker receive the candidates returned by search?
- Did the outreach drafter use the selected candidates?
- Did the system hallucinate a worker?

### `arize-dataset`

Use to create evaluation datasets.

Recommended datasets:

1. `chambaq_requirement_extraction`
   - raw employer request
   - expected trade
   - expected city
   - expected urgency
   - expected budget
   - expected quality priority

2. `chambaq_candidate_ranking`
   - job request
   - candidate list
   - expected top candidate
   - ranking rationale rubric

3. `chambaq_outreach_quality`
   - job request
   - worker profile
   - drafted message
   - expected tone and required fields

### `arize-evaluator`

Use for LLM-as-judge evaluation once traces or datasets exist.

Recommended evaluators:

#### Requirement Extraction Accuracy

Checks whether extracted fields match the user's request.

Labels:

- `correct`
- `incorrect`

#### Candidate Hallucination

Checks whether every recommended worker exists in retrieved data.

Labels:

- `grounded`
- `hallucinated`

#### Tool-Use Completeness

Checks whether a trace contains the required action sequence:

1. extract
2. search
3. rank
4. draft outreach
5. log/update

Labels:

- `complete`
- `incomplete`

#### Outreach Message Quality

Checks whether the drafted message includes:

- worker name
- job type
- location
- timing
- budget
- availability question
- polite tone

Labels:

- `ready_to_send`
- `needs_revision`

### `arize-prompt-optimization`

Use after there are failures.

Purpose:

- Improve prompts using trace data.
- Compare outputs before/after prompt changes.
- Reduce extraction mistakes.
- Reduce ranking explanations that are too vague.

## Recommended Trace Shape

```text
TRACE: employer_hiring_request
  CHAIN: chambaq_orchestrator
    CHAIN: requirement_extractor
      LLM: extract_job_request
    TOOL: mongodb_create_job
    TOOL: mongodb_search_workers
    CHAIN: candidate_ranker
      LLM: rank_candidates
    CHAIN: tradeoff_explainer
      LLM: explain_tdc
    CHAIN: outreach_drafter
      LLM: draft_messages
    TOOL: mongodb_log_outreach
```

## Attributes To Capture

### On the root trace

- `session.id`
- `employer.id`
- `job.id`
- `city`
- `trade`
- `demo.scenario`

### On tool spans

- `tool.name`
- `tool.input`
- `tool.output`
- `tool.latency_ms`
- `tool.success`

### On candidate ranking

- `candidate.count`
- `candidate.top_worker_id`
- `ranking.weights`
- `ranking.score_breakdown`

### On safety and quality

- `human_approval.required`
- `human_approval.status`
- `hallucination_check.passed`
- `candidate_source`

## MVP Integration Order

Do not start with Arize. Start with the working demo.

Recommended order:

1. Build the MongoDB-backed ChambaQ demo.
2. Add structured action logs locally.
3. Add OpenInference/Arize instrumentation.
4. Create one small dataset for extraction tests.
5. Add one evaluator: candidate hallucination.
6. Use traces as evidence in the demo video.

## What To Show Judges

If Arize is included in the demo:

- Show the ChambaQ UI doing the hiring workflow.
- Then show the Arize trace proving each step happened.
- Point out the MongoDB tool calls.
- Point out the human approval step.
- Point out evaluator results for grounded candidates.

This makes ChambaQ stronger because the judges can see both:

- the user-facing action workflow
- the observability/evaluation layer behind it

## Current Local Status

Installed:

- Arize skills in `~/.agents/skills/arize-*`

Not installed yet:

- `ax` CLI
- Phoenix/OpenInference runtime packages
- OpenTelemetry packages

Do not block the MVP on these. Add them once the runtime app exists.


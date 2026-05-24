# Tooling Status

## Validated

### GitLab CLI

Installed:

```text
/opt/homebrew/bin/glab
glab 1.99.0
```

Authenticated:

```text
gitlab.com as rgarciavibes
REST API: https://gitlab.com/api/v4/
GraphQL: https://gitlab.com/api/graphql/
```

### Graphify

Generated:

- `graphify-out/graph.html`
- `graphify-out/graph.json`
- `graphify-out/GRAPH_REPORT.md`
- `graphify-out/members/roger/graph.html`
- `graphify-out/members/roger/graph.json`
- `graphify-out/members/roger/GRAPH_REPORT.md`

Current graph:

- 71 nodes.
- 92 edges.
- 10 communities.
- 19 Control Tower nodes.

### Elasticsearch Onboarding Skill

Installed locally:

```text
.agents/skills/elasticsearch-onboarding
```

Use for future Elastic search design.

### Arize Skills

Installed globally:

```text
~/.agents/skills/arize-*
```

Available skill families:

- admin
- ai provider integration
- annotation
- compliance audit
- dataset
- evaluator
- experiment
- instrumentation
- link
- prompt optimization
- trace

## Missing

### Arize CLI

Not installed yet:

```text
ax not found
```

Validated on 2026-05-24:

```bash
ax spaces list
```

Result:

```text
command not found: ax
```

Next safe step after installing AX:

```bash
ax spaces list
ax ai-integrations list --space CHAMBAQ_SPACE
```

Create Gemini only if no suitable integration exists:

```bash
ax ai-integrations create \
  --name "ChambaQ Gemini" \
  --provider gemini \
  --api-key $GEMINI_API_KEY \
  --function-calling-enabled
```

Security rule: do not store provider keys in the repository.

### Phoenix / OpenInference

Not installed yet:

```text
phoenix: false
openinference: false
opentelemetry: false
```

Install only when the demo runtime exists and tracing is ready to wire.

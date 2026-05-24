# Control Tower Data Model

## Entidades

### MemberProfile

Representa a un integrante humano.

Campos:

- `id`
- `displayName`
- `handle`
- `role`
- `purpose`
- `status`
- `bio`
- `superpowers`
- `skills`
- `agencyAgents`
- `channels`
- `tasks`
- `knowledge`
- `hermesAgentId`
- `createdAt`
- `updatedAt`

### HermesAgent

Agente independiente asociado a un integrante.

Campos:

- `id`
- `memberId`
- `name`
- `status`
- `mission`
- `systemPromptPath`
- `customerPromptPath`
- `profilePath`
- `soulPath`
- `projectKnowledgeScope`
- `personalKnowledgeScope`
- `graph`
- `assignedAgencyAgents`
- `tools`
- `channels`
- `permissions`
- `observability`
- `createdAt`
- `updatedAt`

### AgencyAgentAssignment

Relaciona un integrante o Hermes con un agente de `agency-agents`.

Campos:

- `id`
- `agencyAgentName`
- `sourcePath`
- `reason`
- `appliesToRole`
- `activationMode`
- `priority`

### KnowledgeSource

Documento o fuente que alimenta el conocimiento.

Campos:

- `id`
- `ownerType`
- `ownerId`
- `title`
- `path`
- `sourceType`
- `visibility`
- `lastIndexedAt`
- `graphNodeIds`

### GraphArtifact

Salida generada por Graphify.

Campos:

- `id`
- `scope`
- `ownerId`
- `graphJsonPath`
- `graphHtmlPath`
- `reportPath`
- `nodeCount`
- `edgeCount`
- `communityCount`
- `generatedAt`

### ChannelConnection

Configuracion de canal externo.

Campos:

- `id`
- `provider`
- `label`
- `status`
- `externalHandle`
- `secretRef`
- `approvalPolicy`

### Task

Unidad de trabajo asignable.

Campos:

- `id`
- `title`
- `description`
- `status`
- `priority`
- `ownerMemberId`
- `supportHermesId`
- `supportAgencyAgents`
- `source`
- `dueDate`
- `links`

### PromptConfig

Version de prompt.

Campos:

- `id`
- `ownerType`
- `ownerId`
- `promptKind`
- `path`
- `version`
- `status`
- `changeReason`
- `approvedBy`
- `createdAt`

## Persistencia recomendada

### MVP local

- JSON seed en `dataset/control-tower/seeds/team.seed.json`.
- Markdown para perfiles y souls.
- Archivos Graphify en `graphify-out/`.

### Produccion

- MongoDB collections:
  - `members`
  - `hermes_agents`
  - `agency_agent_assignments`
  - `knowledge_sources`
  - `graph_artifacts`
  - `channel_connections`
  - `tasks`
  - `prompt_configs`

## Indices MongoDB recomendados

```javascript
db.members.createIndex({ status: 1, role: 1 })
db.members.createIndex({ handle: 1 }, { unique: true })
db.hermes_agents.createIndex({ memberId: 1 }, { unique: true })
db.hermes_agents.createIndex({ status: 1 })
db.tasks.createIndex({ ownerMemberId: 1, status: 1 })
db.knowledge_sources.createIndex({ ownerType: 1, ownerId: 1 })
db.graph_artifacts.createIndex({ scope: 1, ownerId: 1, generatedAt: -1 })
```


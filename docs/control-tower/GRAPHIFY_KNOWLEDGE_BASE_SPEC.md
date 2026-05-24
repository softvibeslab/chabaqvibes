# Graphify Knowledge Base Spec

## Objetivo

Usar Graphify como memoria navegable del proyecto y de cada integrante.

Graphify debe producir:

- Grafo global de ChambaQ.
- Grafo individual por integrante.
- Reporte legible.
- JSON consultable por dashboard y agentes.
- HTML navegable para exploracion humana.

## Estructura de conocimiento

```text
knowledge/
  project/
    README.md
    decisions.md
    raw/
  members/
    roger/
      profile.md
      soul.md
      raw/
      prompts/
      graph/
graphify-out/
  graph.json
  graph.html
  GRAPH_REPORT.md
  members/
    roger/
      graph.json
      graph.html
      GRAPH_REPORT.md
```

## Fuentes globales iniciales

- `README.md`
- `ROADMAP.md`
- `docs/PROJECT_STATUS.md`
- `docs/ORCHESTRATOR_PROMPT.md`
- `docs/cursor-build-plan/`
- `docs/control-tower/`
- `hackathon/`
- `agents/`
- `dataset/seeds/seed_data.json`
- `dataset/schemas/v1/`
- `Sin título/agency-agents/` archivos seleccionados por rol.

## Fuentes individuales

Cada integrante puede aportar:

- Perfil profesional.
- Preferencias de trabajo.
- Conocimiento tecnico.
- Notas personales del proyecto.
- Objetivos.
- Restricciones.
- Canales.
- Historial de tareas.

## Flujo de actualizacion

1. Guardar o actualizar Markdown.
2. Ejecutar Graphify sobre el corpus correspondiente.
3. Generar `graph.json`, `graph.html` y `GRAPH_REPORT.md`.
4. Registrar `GraphArtifact`.
5. Mostrar fecha y resumen en dashboard.
6. Usar el grafo para responder preguntas y asignar contexto a Hermes.

## Comandos sugeridos

Grafo global:

```bash
graphify graphify-corpus --update
```

Grafo por integrante:

```bash
graphify knowledge/members/roger --update
```

Consulta:

```bash
graphify query "como se conecta Roger con el orquestador y el hackathon?"
```

## Politica de alcance

- El grafo global contiene informacion compartida del proyecto.
- El grafo individual contiene informacion del integrante y enlaces al proyecto.
- Informacion privada no debe mezclarse automaticamente en el grafo global.
- Credenciales y tokens nunca se indexan.

## Nodos clave esperados

- ChambaQ Control Tower.
- Roger Orchestrator.
- Hermes Agent.
- Member Profile.
- Soul.
- Superpowers.
- Agency Agent Assignment.
- Project Knowledge Base.
- Personal Knowledge Base.
- Graphify Artifact.
- Arize AI Provider Integration.
- Telegram Channel.
- WhatsApp Channel.
- Prompt Studio.


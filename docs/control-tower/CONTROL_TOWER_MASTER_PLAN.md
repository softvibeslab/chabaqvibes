# ChambaQ Control Tower Master Plan

## Objetivo

Crear una torre de control para que Roger pueda dirigir el proyecto ChambaQ como un sistema de agentes y personas coordinadas.

La torre debe permitir:

- Gestionar integrantes del equipo con CRUD completo.
- Crear un Hermes independiente por integrante.
- Asignar superpoderes, skills, tareas y `agency-agents` de soporte.
- Mantener una base de conocimiento global del proyecto.
- Mantener una base de conocimiento individual por integrante.
- Generar grafos con Graphify para el proyecto y para cada integrante.
- Conectar canales como Telegram o WhatsApp al Hermes de cada integrante.
- Visualizar el estado del proyecto, tareas, agentes, prompts y evidencia.
- Permitir que Roger edite el prompt system y customer del orquestador y de cada Hermes.
- Preparar observabilidad con Arize para trazas, evaluadores y proveedores LLM.

## Lectura del proyecto actual

El repositorio ya tiene tres activos fuertes:

- `hackathon/`: define el objetivo competitivo, la narrativa, la arquitectura MVP y la ruta Devpost.
- `docs/`: contiene el plan de implementacion en Cursor, estado del proyecto y prompts de orquestacion.
- `dataset/`: contiene la vision ChambaQ y datos semilla para trabajadores, empleadores y jobs.
- `agents/`: contiene agentes de producto y build listos para convertirse en prompts operativos.
- `Sin título/agency-agents/`: aporta roles especializados para armar equipos de agentes.
- `graphify-out/`: ya contiene un grafo inicial que conecta vision, hackathon y agencia de agentes.

## Mejor plan

La estrategia mas fuerte es construir dos productos relacionados:

1. **ChambaQ Agent MVP**
   - Demo para el hackathon.
   - Contrata trabajadores locales usando razonamiento, herramientas, datos y aprobacion humana.
   - Usa MongoDB/Gemini/Google Cloud como ruta principal.

2. **ChambaQ Control Tower**
   - Dashboard interno para construir, dirigir y observar ChambaQ.
   - Coordina equipo humano, Hermes individuales, tareas y bases de conocimiento.
   - Puede convertirse despues en producto para que otras comunidades creen sus propias redes de agentes.

## Fases

### Fase 1: Base documental y modelo

Entregables:

- Especificacion del dashboard.
- Modelo de datos.
- Seeds de integrantes.
- Especificacion Hermes.
- Especificacion Graphify.
- Guia Arize.

Estado: en progreso.

### Fase 2: Dashboard local

Stack recomendado:

- Next.js + TypeScript + Tailwind.
- Shadcn/ui para tablas, formularios, tabs, dialogs y command menu.
- `dataset/control-tower/seeds/team.seed.json` como fuente local inicial.
- Persistencia inicial en JSON o SQLite; MongoDB despues.

Pantallas minimas:

- `/control`: vista general.
- `/control/members`: CRUD de integrantes.
- `/control/members/[id]`: perfil, soul, Hermes, tareas, grafo, canales y prompts.
- `/control/agents`: registro de Hermes y `agency-agents` asignados.
- `/control/knowledge`: base de conocimiento global e individual.
- `/control/prompts`: editor de prompts system/customer.
- `/control/observability`: estado Arize, trazas y evaluaciones.

### Fase 3: Hermes por integrante

Cada integrante obtiene:

- Perfil operacional.
- Soul en Markdown.
- Proposito dentro de ChambaQ.
- Superpoderes.
- Skills disponibles.
- `agency-agents` asignados.
- Tareas actuales.
- Canales conectables.
- Base de conocimiento personal.
- Grafo Graphify individual.

### Fase 4: Orquestador de Roger

Roger opera un agente orquestador con permisos para:

- Crear, editar y pausar Hermes.
- Asignar tareas.
- Editar prompts.
- Aprobar mensajes externos.
- Ejecutar actualizacion de Graphify.
- Consultar estado del proyecto.
- Lanzar evaluaciones Arize.

### Fase 5: Observabilidad Arize

Cuando exista runtime:

- Instrumentar llamadas LLM, herramientas y decisiones.
- Crear AI provider integration para Gemini u otro proveedor.
- Crear evaluadores de calidad, seguridad, groundedness y cumplimiento.
- Usar datasets para casos de prueba.
- Mostrar resultados en la torre.

## Principio de control

Los agentes pueden proponer y preparar acciones, pero las acciones externas sensibles requieren aprobacion humana:

- Mensajes a Telegram/WhatsApp.
- Cambios de prompts system.
- Eliminacion de integrantes.
- Rotacion de credenciales.
- Publicaciones o entregas del hackathon.

## Definition of Done inicial

- Existe documentacion versionada de Control Tower.
- Existe modelo de datos para CRUD.
- Existe seed con Roger como orquestador.
- Existe perfil Hermes inicial para Roger.
- Graphify incluye los conceptos de Control Tower.
- La guia Arize explica como conectar Gemini sin exponer secretos.


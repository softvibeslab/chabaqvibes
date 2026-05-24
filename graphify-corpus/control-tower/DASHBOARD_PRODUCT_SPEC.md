# Dashboard Product Spec

## Nombre

ChambaQ Control Tower

## Usuarios

- **Roger**: owner y orquestador principal.
- **Integrantes**: miembros del equipo con rol, proposito, tareas y Hermes propio.
- **Agentes Hermes**: agentes individuales que ayudan a cada integrante.
- **Agency-agents**: especialistas auxiliares asignados por rol o necesidad.

## Navegacion

### 1. Project Pulse

Vista principal para ver:

- Estado general del proyecto.
- Fase actual.
- Riesgos.
- Entregables abiertos.
- Ultimas actualizaciones del grafo.
- Tareas bloqueadas.
- Integrantes activos.
- Agentes activos.
- Integraciones pendientes.

### 2. Integrantes

CRUD completo:

- Crear integrante.
- Editar perfil.
- Activar o pausar.
- Asignar rol y proposito.
- Asignar superpoderes.
- Asignar skills.
- Asignar `agency-agents`.
- Vincular Telegram o WhatsApp.
- Ver tareas.
- Ver y editar prompts del Hermes.

Campos visibles en tabla:

- Nombre.
- Rol.
- Estado.
- Hermes.
- Tareas abiertas.
- Ultima actualizacion de conocimiento.
- Canales conectados.

### 3. Perfil de Integrante

Tabs recomendadas:

- **Perfil**: identidad, rol, proposito, bio operacional.
- **Soul**: principios, estilo de colaboracion, energia, preferencias.
- **Hermes**: prompt system, prompt customer, tools, permisos.
- **Skills**: skills humanas y agenticas.
- **Agentes**: agency-agents asignados y motivo.
- **Tareas**: backlog personal.
- **Knowledge**: documentos personales y fuentes.
- **Graph**: grafo individual.
- **Canales**: Telegram, WhatsApp, email u otros.
- **Historial**: cambios relevantes.

### 4. Hermes Registry

Registro global de Hermes:

- Hermes ID.
- Integrante owner.
- Estado.
- Modelo preferido.
- Knowledge scope.
- Canales.
- Permisos.
- Ultimo trace Arize.

### 5. Knowledge Base

Gestiona:

- Base global de ChambaQ.
- Bases individuales.
- Fuentes Markdown.
- Archivos subidos.
- Grafos Graphify.
- Reportes `GRAPH_REPORT.md`.
- Estado de sincronizacion.

### 6. Agent Assignment

Permite seleccionar `agency-agents` para un integrante segun:

- Rol.
- Fase del proyecto.
- Tarea actual.
- Riesgo.
- Skill faltante.

### 7. Prompt Studio

Editor con versionado:

- Prompt system del orquestador.
- Prompt customer del orquestador.
- Prompt system de cada Hermes.
- Prompt customer de cada Hermes.
- Plantillas por rol.
- Historial de cambios.
- Boton de aprobar/publicar.

### 8. Channels

Conexiones:

- Telegram.
- WhatsApp.
- Email futuro.

Regla:

El dashboard guarda estado y configuracion, no secretos crudos. Los tokens se manejan por variables de entorno o secret manager.

### 9. Observability

Estado de Arize:

- CLI `ax` disponible.
- Perfil Arize configurado.
- Space seleccionado.
- AI provider integrations disponibles.
- Trazas recientes.
- Evaluadores activos.
- Errores por Hermes.
- Calidad por tarea.

## Estados principales

### Integrante

- `active`: puede recibir tareas.
- `paused`: conserva conocimiento pero no recibe tareas.
- `draft`: creado, todavia no listo.
- `archived`: historial conservado.

### Hermes

- `draft`: prompts en construccion.
- `ready`: puede operar en dashboard.
- `connected`: tiene canal externo conectado.
- `paused`: no ejecuta acciones.
- `needs_review`: requiere ajuste humano.

### Tarea

- `backlog`
- `assigned`
- `in_progress`
- `blocked`
- `review`
- `done`

## Permisos

Roger:

- Admin total.
- Edita prompts.
- Aprueba acciones externas.
- Gestiona integrantes.
- Lanza Graphify.
- Configura Arize.

Integrante:

- Ve su perfil, tareas, Hermes y conocimiento.
- Propone cambios a su Hermes.
- No puede modificar prompts globales sin aprobacion.

Hermes:

- Puede leer conocimiento autorizado.
- Puede proponer respuestas.
- Puede preparar tareas.
- No puede enviar mensajes externos sin politica de aprobacion.


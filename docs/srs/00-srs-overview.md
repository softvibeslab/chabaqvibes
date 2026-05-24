# ChambaQ Agent SRS

Fecha: 2026-05-24  
Estado: Draft para implementación en Cursor  
Producto: ChambaQ Agent  
Alcance: MVP web para Google Cloud Rapid Agent Hackathon

## 1. Propósito

ChambaQ Agent es una plataforma web con un agente de IA que ayuda a empleadores locales a encontrar, comparar y contactar trabajadores de oficios verificados. El MVP debe demostrar que la IA no solo responde preguntas, sino que toma acciones supervisadas: extrae requisitos, consulta datos, rankea candidatos, redacta outreach y registra el flujo.

## 2. Alcance del MVP

Incluido:

- Landing page explicando ChambaQ Agent.
- Web app demo para empleador.
- Chat o intake de solicitud de trabajo.
- Extracción estructurada de requisitos.
- Búsqueda de workers desde MongoDB o seed local.
- Ranking determinista de candidatos.
- Explicación del trade-off tiempo/dinero/calidad.
- Borradores de WhatsApp/SMS.
- Job record y action log visibles.
- Aprobación humana antes de contacto real.

Fuera del MVP:

- Envío real de WhatsApp.
- Pagos.
- Contratos.
- App móvil nativa.
- Blockchain, NFTs, token CHQ y DAO.
- Verificación legal real de certificaciones.

## 3. Stakeholders

| Stakeholder | Interés |
|---|---|
| Empleador local | Resolver una necesidad urgente de contratación con menos riesgo. |
| Trabajador de oficio | Recibir oportunidades relevantes basadas en perfil, zona y disponibilidad. |
| Jueces del hackathon | Ver un agente que usa herramientas y produce acciones verificables. |
| Equipo ChambaQ | Presentar una visión grande mediante un MVP pequeño y creíble. |

## 4. Customer Problems

| ID | Problema |
|---|---|
| CP-001 | Los empleadores contratan oficios con información incompleta, lenta y dispersa. |
| CP-002 | Es difícil comparar candidatos por precio, disponibilidad, calidad y confianza. |
| CP-003 | Los trabajadores confiables tienen poca visibilidad si no están en la red informal correcta. |
| CP-004 | Los procesos de contacto y seguimiento quedan en mensajes sueltos sin trazabilidad. |
| CP-005 | Un chatbot genérico no demuestra acción real para el reto del hackathon. |

## 5. Customer Needs

| ID | Necesidad | Problemas |
|---|---|---|
| CN-001 | Convertir una solicitud informal en requisitos estructurados. | CP-001 |
| CN-002 | Encontrar candidatos reales por oficio, zona, disponibilidad y presupuesto. | CP-001, CP-003 |
| CN-003 | Comparar candidatos con razones claras. | CP-002 |
| CN-004 | Preparar acciones de contacto sin quitar control al humano. | CP-004 |
| CN-005 | Mostrar evidencia de herramientas, registros y decisiones del agente. | CP-005 |

## 6. Functional Requirements

| ID | Requisito | Prioridad | Trazabilidad |
|---|---|---|---|
| FR-001 | El sistema SHALL permitir ingresar una solicitud de contratación en lenguaje natural. | Must | CN-001 |
| FR-002 | El sistema SHALL extraer oficio, ciudad, urgencia, presupuesto, prioridad de calidad y descripción. | Must | CN-001 |
| FR-003 | El sistema SHALL crear o simular un job record con estado inicial. | Must | CN-005 |
| FR-004 | El sistema SHALL buscar workers verificados compatibles con el job request. | Must | CN-002 |
| FR-005 | El sistema SHALL rankear candidatos con factores visibles: disponibilidad, precio, rating, experiencia y certificaciones. | Must | CN-003 |
| FR-006 | El sistema SHALL explicar el trade-off tiempo/dinero/calidad para el shortlist. | Must | CN-003 |
| FR-007 | El sistema SHALL redactar mensajes de outreach por candidato sin enviarlos automáticamente. | Must | CN-004 |
| FR-008 | El sistema SHALL registrar action log con pasos ejecutados y datos relevantes. | Must | CN-005 |
| FR-009 | El sistema SHALL mostrar landing page pública con problema, solución, demo y roadmap. | Should | CN-005 |
| FR-010 | El sistema SHALL permitir ejecutar el flujo completo usando seed local cuando MongoDB Atlas no esté configurado. | Must | CN-005 |
| FR-011 | El sistema SHOULD conectar MongoDB Atlas como fuente de verdad para workers, jobs y outreach logs. | Should | CN-002, CN-005 |
| FR-012 | El sistema SHOULD conectar Gemini/Vertex AI para extracción y orquestación del flujo. | Should | CN-001, CN-005 |

## 7. Non-Functional Requirements

| ID | Categoría | Requisito | Prioridad |
|---|---|---|---|
| NFR-001 | Usabilidad | La demo SHALL ser entendible por un juez sin leer código en menos de 60 segundos. | Must |
| NFR-002 | Performance | El flujo demo SHOULD devolver shortlist en menos de 5 segundos con seed local. | Should |
| NFR-003 | Seguridad | El sistema SHALL mantener claves y URIs en variables de entorno, nunca hardcodeadas. | Must |
| NFR-004 | Auditabilidad | Cada herramienta ejecutada SHALL aparecer en el action log. | Must |
| NFR-005 | Mantenibilidad | La implementación SHALL separar UI, API tools, ranking y acceso a datos. | Must |
| NFR-006 | Portabilidad | La demo SHALL funcionar localmente desde Cursor con comandos documentados. | Must |

## 8. Criterios de aceptación del MVP

- Dado el prompt demo del restaurante en Cancún, el sistema produce un job request estructurado.
- El sistema encuentra al menos 3 plomeros del seed.
- El ranking muestra score y razones por candidato.
- La UI muestra action log: extract, create job, search, rank, draft outreach, log.
- Los mensajes quedan como borradores, no como envío real.
- La landing explica ChambaQ, el problema, el MVP y el roadmap.

## 9. Traceability Matrix

| CP | CN | FR |
|---|---|---|
| CP-001 | CN-001 | FR-001, FR-002 |
| CP-001, CP-003 | CN-002 | FR-004, FR-010, FR-011 |
| CP-002 | CN-003 | FR-005, FR-006 |
| CP-004 | CN-004 | FR-007 |
| CP-005 | CN-005 | FR-003, FR-008, FR-009, FR-010, FR-012 |

## 10. Suposiciones

- El demo principal será en español con contexto México/Cancún.
- MongoDB es el partner track principal.
- Gemini/Vertex AI se integra después del flujo local si el tiempo aprieta.
- Stitch se usará para generar y refinar diseño UI, no como runtime principal.

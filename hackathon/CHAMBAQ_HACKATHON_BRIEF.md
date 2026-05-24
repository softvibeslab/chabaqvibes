# ChambaQ Agent Hackathon Brief

## Objetivo del Hackathon

El reto pide construir IA que no solo conteste preguntas, sino que ayude a tomar accion.

La idea central es pasar de un chatbot a un agente capaz de:

- Razonar sobre una meta.
- Planear pasos.
- Usar herramientas.
- Ejecutar tareas bajo supervision humana.
- Integrarse con al menos una solucion partner mediante MCP.
- Resolver un problema real.

## Adaptacion de ChambaQ

ChambaQ debe adaptarse como un agente de accion para contratacion local de oficios.

En vez de presentar todo el ecosistema completo de IA, blockchain, tokens, DAO y app movil, el proyecto para el hackathon debe enfocarse en un MVP demostrable:

**ChambaQ Agent**

Un agente que ayuda a pequenos negocios y personas a encontrar, comparar y contactar trabajadores de oficios verificados.

## Problema Real

Contratar trabajadores de oficios en mercados locales suele ser lento, informal y riesgoso.

Los empleadores tienen problemas para:

- Encontrar candidatos disponibles cerca.
- Saber si el trabajador tiene experiencia real.
- Comparar precio, calidad y urgencia.
- Contactar candidatos rapido.
- Dar seguimiento a quien fue contactado.

Los trabajadores tienen problemas para:

- Ser descubiertos por clientes reales.
- Probar sus habilidades.
- Recibir oportunidades acordes a su zona, oficio y disponibilidad.
- Diferenciarse de perfiles no verificados.

## Solucion Propuesta

ChambaQ Agent convierte una necesidad de contratacion en una accion concreta:

1. Entiende lo que el empleador necesita.
2. Extrae oficio, ubicacion, presupuesto, urgencia y calidad esperada.
3. Aplica el modelo Tiempo-Dinero-Calidad.
4. Busca candidatos en una base de datos.
5. Rankea candidatos.
6. Explica por que recomienda cada uno.
7. Genera mensajes de contacto.
8. Registra el avance de la solicitud.
9. Recomienda capacitacion si no encuentra candidatos suficientes.

## Track Recomendado

### MongoDB

MongoDB es el mejor track para ChambaQ porque el producto depende de datos operativos:

- Trabajadores.
- Empleadores.
- Vacantes o solicitudes.
- Certificaciones.
- Resenas.
- Disponibilidad.
- Historial de trabajos.
- Contactos realizados.

El agente puede usar MongoDB como memoria operacional y base de busqueda.

### Por Que No Blockchain En El MVP

Blockchain, NFTs y token CHQ pueden ser parte de la vision futura, pero no deben ser el centro del hackathon.

Para el MVP, el juez necesita ver un agente funcionando. Una base de datos con perfiles, busqueda, ranking y acciones concretas comunica mejor el valor.

## Nombre Del Proyecto

**ChambaQ Agent**

## Tagline

AI hiring agent for verified local trade work.

Version en espanol:

Agente de IA para encontrar y contactar trabajadores de oficios verificados.

## Propuesta De Valor

Para empleadores:

> Describe el trabajo que necesitas. ChambaQ Agent encuentra candidatos cercanos, explica las mejores opciones y prepara el contacto.

Para trabajadores:

> Tu perfil, experiencia y disponibilidad se vuelven visibles para oportunidades reales y mejor filtradas.

Para el hackathon:

> ChambaQ Agent demonstrates an action-taking agent that plans and executes a real hiring workflow using Gemini and MongoDB MCP.

## Demo Principal

Escenario:

Un restaurante en Cancun necesita un plomero manana por una fuga en cocina. Tiene presupuesto limitado, pero necesita calidad porque no puede cerrar operaciones.

Prompt del empleador:

```text
Necesito un plomero en Cancun para manana temprano. Es una fuga en la cocina de un restaurante. Presupuesto maximo 1800 pesos. Prefiero alguien confiable aunque no sea el mas barato.
```

El agente debe:

1. Confirmar datos faltantes si es necesario.
2. Crear una solicitud de trabajo.
3. Buscar plomeros disponibles en Cancun.
4. Rankear candidatos.
5. Mostrar trade-off: calidad + tiempo implica costo medio/alto.
6. Recomendar 3 candidatos.
7. Redactar mensajes de WhatsApp.
8. Registrar outreach pendiente.

## Criterios De Exito Del Demo

El demo debe demostrar que el agente:

- No solo conversa.
- Llama herramientas.
- Lee y escribe datos.
- Toma decisiones explicables.
- Mantiene al humano en control.
- Resuelve un flujo real de punta a punta.


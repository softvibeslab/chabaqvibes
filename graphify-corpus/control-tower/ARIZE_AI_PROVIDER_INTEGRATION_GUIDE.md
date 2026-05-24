# Arize AI Provider Integration Guide

## Objetivo

Conectar proveedores LLM a Arize para que la torre pueda usar evaluadores, trazas y experimentos con modelos como Gemini, OpenAI o Anthropic.

Esta guia usa la skill `arize-ai-provider-integration`.

## Estado actual

Requisitos:

- CLI `ax` instalada.
- Perfil Arize configurado.
- Space Arize conocido.
- API key del proveedor disponible como variable de entorno.

Reglas de seguridad:

- No guardar tokens en el repositorio.
- No leer `.env` para buscar secretos.
- No pegar API keys en comandos versionados.
- Usar variables como `$GEMINI_API_KEY`.

## Flujo recomendado

### 1. Listar spaces

```bash
ax spaces list
```

Elegir el space de ChambaQ.

### 2. Listar integraciones existentes

```bash
ax ai-integrations list --space CHAMBAQ_SPACE
```

Antes de crear una integracion, siempre confirmar si ya existe una util.

### 3. Crear integracion Gemini

```bash
ax ai-integrations create \
  --name "ChambaQ Gemini" \
  --provider gemini \
  --api-key $GEMINI_API_KEY \
  --function-calling-enabled
```

Nota: `create` no usa `--space`; las AI integrations son de cuenta.

### 4. Recuperar ID de integracion

```bash
ax ai-integrations list --space CHAMBAQ_SPACE -o json
```

Guardar el `id` devuelto en el sistema de configuracion, no en codigo duro.

### 5. Usarlo en evaluadores

El ID de integracion se puede usar despues para:

- Evaluadores LLM-as-judge.
- Experimentos.
- Validaciones de calidad.
- Monitoreo continuo.

## Proveedores utiles para ChambaQ

### Gemini

Uso principal:

- Alineacion con el hackathon.
- Tool calling.
- Razonamiento de orquestador.

Comando:

```bash
ax ai-integrations create \
  --name "ChambaQ Gemini" \
  --provider gemini \
  --api-key $GEMINI_API_KEY \
  --function-calling-enabled
```

### OpenAI

Uso posible:

- Evaluadores alternos.
- Comparacion de prompts.

Comando:

```bash
ax ai-integrations create \
  --name "ChambaQ OpenAI" \
  --provider openAI \
  --api-key $OPENAI_API_KEY \
  --function-calling-enabled
```

### Custom

Uso posible:

- Proxy interno.
- Gateway LLM.

Comando:

```bash
ax ai-integrations create \
  --name "ChambaQ LLM Gateway" \
  --provider custom \
  --base-url "https://llm-gateway.example.com/v1" \
  --api-key $CUSTOM_LLM_API_KEY \
  --function-calling-enabled
```

## Como aparece en Control Tower

La pantalla Observability debe mostrar:

- Space activo.
- Integraciones disponibles.
- Provider.
- Modelos permitidos.
- Si tiene credenciales.
- Si function calling esta activo.
- Integracion usada por cada evaluador.

## Bloqueadores conocidos

Si `ax` no existe:

```text
Instalar Arize AX CLI y configurar perfil antes de crear integraciones.
```

Si falta space:

```bash
ax spaces list
```

Si falta API key del proveedor:

Pedirla al usuario o crearla en el portal del proveedor. No buscarla en archivos locales.


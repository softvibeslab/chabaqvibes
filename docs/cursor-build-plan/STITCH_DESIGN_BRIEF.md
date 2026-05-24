# ChambaQ Stitch Design Brief

Objetivo: usar Google Stitch para generar el diseño de la landing, la web app demo y la plataforma operativa de ChambaQ Agent. Este documento está pensado para copiarse en Stitch y luego pasar el resultado a Cursor.

Nota de herramienta: Google describe Stitch como un canvas AI-native para crear UI de alta fidelidad desde lenguaje natural, con prototipos interactivos, `DESIGN.md`, export a herramientas de desarrollo y puente mediante MCP/SDK. Usar Stitch para diseño y prototipado; implementar el runtime final en Next.js.

Fuente oficial consultada: https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/

## 1. Design Direction

Producto: ChambaQ Agent  
Audiencia: jueces de hackathon, pequeños negocios, empleadores locales, trabajadores de oficios.  
Personalidad: confiable, operativo, local, moderno, sin sentirse corporativo frío.  
Tono visual: herramienta de trabajo clara, no landing genérica de startup.  

Evitar:

- Exceso de gradientes morados/azules.
- Decoración abstracta que no explique el producto.
- Layouts de marketing sin demo visible.
- Cards dentro de cards.
- Texto explicando cómo usar la UI dentro de la app.

Preferir:

- Interfaz densa pero escaneable.
- Colores funcionales por estado.
- Iconos simples.
- Tablas/cards de candidatos legibles.
- Action log visible.
- Evidencia de herramientas y datos.

## 2. Design Tokens

```text
Brand primary: #0B7A75
Brand dark: #075854
Accent gold: #E0A526
Accent blue: #3266C3
Accent rose: #C4475A
Ink: #18212F
Muted text: #617086
Background: #FBFAF7
Surface: #FFFFFF
Border: #DDE3EA
Success soft: #E6F4EF
Warning soft: #FFF4D8
Info soft: #E9F0FF
Risk soft: #FDECEF
Radius: 8px max for cards and panels
Font: Inter or system sans
Letter spacing: 0
```

## 3. Landing Page Prompt for Stitch

Copy this prompt into Stitch:

```text
Design a responsive landing page for "ChambaQ Agent", an AI hiring agent for verified local trade work in Mexico.

The first viewport must clearly show the product name "ChambaQ Agent", a short value proposition, and a visible preview of the product workflow. This is not a generic startup landing page. Make the hero feel like an operational hiring tool: show a realistic employer request, agent steps, and a candidate shortlist preview.

Audience: hackathon judges, small business owners, and local trade workers.

Core message:
"Describe the job you need. ChambaQ Agent finds verified local workers, ranks candidates, explains trade-offs, drafts outreach, and logs next steps."

Sections:
1. Hero with product name, value proposition, CTA "Open demo", and a realistic workflow preview.
2. Problem: local trade hiring is informal, slow, and low-trust.
3. Solution: AI agent that extracts requirements, searches workers, ranks candidates, drafts outreach, and records action.
4. Demo flow: Extract -> Search -> Rank -> Explain -> Draft -> Log.
5. Partner technology: MongoDB for operational memory, Gemini/Google Cloud for agent reasoning.
6. Human control: outreach is drafted but not sent without approval.
7. Roadmap: WhatsApp integration, worker onboarding, certifications, payments, blockchain credentials later.

Visual style:
Use warm off-white background, teal primary, gold accent, blue informational states, rose for risk/urgency. Keep cards at 8px radius. Use icons for steps. Avoid purple gradients, decorative blobs, and oversized empty marketing sections. Make it feel practical, trustworthy, and demo-ready.

Responsive:
Desktop and mobile. On mobile, the product workflow preview should remain visible in the first viewport below the hero copy.
```

## 4. Demo Web App Prompt for Stitch

Copy this prompt into Stitch:

```text
Design the main web app screen for "ChambaQ Agent", an AI agent demo that helps a restaurant owner find a plumber in Cancun.

Use a professional SaaS tool layout, not a marketing page.

Screen route: /demo

Layout:
- Left column: employer request composer with the prefilled prompt:
"Necesito un plomero en Cancun para manana temprano. Es una fuga en la cocina de un restaurante. Presupuesto maximo 1800 pesos. Prefiero alguien confiable aunque no sea el mas barato."
- Center column: agent plan and action log showing tool steps:
  1. Extract requirements
  2. Create job record
  3. Search MongoDB workers
  4. Rank candidates
  5. Explain time-money-quality tradeoff
  6. Draft outreach
  7. Await human approval
- Right column: candidate shortlist with three ranked plumbers:
  Luis Hernandez, Ana Torres, Marco Ruiz.

Each candidate card must show:
- Rank
- Name
- Trade
- Rating
- Completed jobs
- Availability
- Estimated cost
- Certifications
- 2 short reasons
- "Draft message" action

Also include an outreach draft panel with WhatsApp-style messages, but make it clear that messages are drafts and not sent automatically.

Visual style:
Dense, clear, operational. Use restrained colors. Make action log and tool use obvious for hackathon judges. Avoid tutorial text inside the app. Use icons for tools, search, ranking, message, approval, and database.

States to include:
- Ready state
- Running state
- Results state
- Awaiting approval state
```

## 5. Platform Dashboard Prompt for Stitch

Copy this prompt into Stitch:

```text
Design a platform dashboard for ChambaQ Agent after the hackathon MVP.

Audience: internal operator or employer account.

Navigation:
- Jobs
- Workers
- Outreach
- Reviews
- Certifications
- Settings

Main dashboard:
- Active job requests
- Candidate pipeline
- Recent outreach drafts
- Worker availability overview
- Trust and verification status
- Action log feed

Design requirements:
Keep it utilitarian and scan-friendly. No hero section. No decorative backgrounds. Use tables, filters, status chips, compact cards, and clear empty states. This should feel like a local hiring operations console.
```

## 6. Mobile App Prompt for Stitch

Copy this prompt into Stitch:

```text
Design a mobile-first ChambaQ Agent flow for an employer who needs a local trade worker.

Screens:
1. Request input
2. Clarifying question
3. Agent progress
4. Candidate shortlist
5. Candidate detail
6. Outreach draft approval
7. Job status summary

Style:
Practical, local, trustworthy. Use Spanish copy. Optimize for quick use by a restaurant owner or small business manager. Keep buttons large enough for mobile, show status clearly, and avoid marketing copy inside the product screens.
```

## 7. Cursor Handoff from Stitch

After Stitch generates screens:

1. Export code if available.
2. Export or copy `DESIGN.md` if available.
3. Save screenshots into `docs/design/stitch/`.
4. In Cursor, ask it to implement the selected design in:
   - `src/app/page.tsx`
   - `src/app/demo/page.tsx`
   - `src/components/landing/*`
   - `src/components/demo/*`
5. Keep behavior separate from UI. Do not let generated design code own agent logic.

## 8. Stitch MCP/SDK Plan

If Stitch MCP/SDK is available in the developer environment:

- Use it to create or update screens from this brief.
- Export design tokens and components into a project-level `DESIGN.md`.
- Use Cursor to translate exported UI into Next.js components.

If Stitch MCP/SDK is not available:

- Use Stitch manually in the browser.
- Export/copy generated code.
- Paste or import into Cursor.
- Keep this brief as the source of truth for iteration.

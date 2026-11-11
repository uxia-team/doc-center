# Uxia help center: instructions for writers and agents

This is the Uxia help center, built with [Mintlify](https://mintlify.com). It is served inside the app at
`platform.uxia.app/docs`.

- Pages are MDX files with YAML frontmatter. Navigation and redirects live in `docs.json`.
- Run `mint dev` to preview, `mint broken-links` to check links, and `mint validate` for a strict build check.
- `sources/` and this file are listed in `.mintignore` and are not published.

## Product model (read this first)

Uxia has **two test types**:

- **Unmoderated test.** Participants complete the test on their own. You build it from **blocks**, then run it
  with **AI participants**, **human participants**, or both.
- **AI-moderated test.** An AI moderator runs a live voice interview with real participants from a research
  guide, asking follow-ups as it goes. Only the overview page is written so far.

An unmoderated test moves through three phases, shown in the test header as **Build › Recruit › Analyze**:

1. **Build.** Add and configure blocks.
2. **Recruit.** Choose AI participants, create test links for your own participants, or request a human panel.
   Then launch.
3. **Analyze.** Read the results block by block.

The blocks:

| Block | Picker name(s) | What it does | Replaces (old docs) |
|---|---|---|---|
| Task | **Live website task**, **Figma prototype task**, **Media prototype task** | Participants complete a task in your product or prototype while thinking aloud | AI User Test |
| Survey | **Survey** | Participants answer questions (open-ended, multiple choice, rating scale, ranking, budget allocation). After a task, each question can be limited to AI participants who completed it ("Only ask testers who complete the flow") | AI User Research / AI User Surveys, post-test questions |
| Card sorting | **Card sorting** | Participants group cards into categories (closed or open sort) | (new) |
| Accessibility check | **Accessibility check** | Audits uploaded screens against WCAG 2.2 AA or AAA. No participants needed | AI Accessibility Test |

## Terminology

Use the term on the left. Never use the terms on the right. The help center documents the current product only;
don't add pages or sections about legacy test types or older versions of Uxia.

| Use | Don't use |
|---|---|
| unmoderated test, AI-moderated test | "AI User Test", "AI User Research", "AI Accessibility Test" as test types |
| Task block (or the specific name: live website task, Figma prototype task, media prototype task) | AI User Test, AI Live Website Test |
| Survey block | AI User Research, AI User Surveys, research study |
| Accessibility check block | Accessibility Test (as a test type) |
| **Task** (the field describing what participants do; formerly "mission") | Mission (except: "Task (formerly called *mission*)") |
| AI participants | synthetic testers, AI testers, testers (you may say "synthetic" once to explain what AI participants are) |
| human participants | Human Test, human testers |
| participants (covers both) | testers (the UI still says "testers" in some places; quote the UI label when it does) |
| test link | Human Test link, share link (for participant invites) |
| results / the Analyze phase | report, Results tab (except for the PDF report) |
| **Start recruiting** / **Launch test** | Launch Test (as the Build button) |
| benchmarks (SUS, UXIA-Q) | post-test questionnaire |

The UI currently misspells the block as "Accesibility check". Write **Accessibility check**.

## Style

- Second person, active voice, present tense. One idea per sentence. American English.
- Frontmatter: always `title` and `description` (one sentence, under 160 characters). Add `sidebarTitle` when
  the title is long. Titles use Title Case; headings inside a page use sentence case.
- Put UI labels in bold, spelled exactly as in the app: **Start recruiting**, **Add a block**,
  **Distribute evenly**. Don't invent labels; if you can't confirm one, describe the action instead.
- Lead with what the reader wants to do, then how. Prefer short sections, `<Steps>` for procedures, and tables
  for options and limits.
- Components: `<Note>`, `<Tip>`, `<Warning>`, `<Steps>`, `<Card>` / `<CardGroup>`, `<Tabs>`,
  `<AccordionGroup>`, `<Frame>`. Icons come from the Lucide set.
- End each page with a `<Card title="Next: …">`, or a small `<CardGroup cols={2}>` of related pages.
- Link between pages with root-relative paths without the extension, e.g. `[Task](/mission)`.
- Say which plans a limit applies to. Use "Free plan" and "paid plans" (Starter, Pro, Custom).

## Content boundaries

- Don't document internal flags, superadmin tools, the playground, internal service names, or code paths.
- Don't promise integrations or behavior the app doesn't have. When unsure, leave it out.
- Don't use real client names or client data in examples. Use neutral products (a food-delivery app, an online
  bookstore, a banking app).
- The slugs `/sus`, `/uxia-q-score`, `/tester-credentials`, `/tester-files` and `/integrations/mcp` are linked
  from inside the app. Never rename or redirect them.

## Facts (verify against the app code before changing)

**Credits (AI participants only; human participants via test links cost 0 credits)**

| Block | Cost |
|---|---|
| Task (any type) | 20 credits per AI participant, +1 per AI participant for each benchmark (SUS, UXIA-Q) switched on |
| Survey | 1 credit per question per AI participant |
| Card sorting | 10 credits per AI participant |
| Accessibility check | 10 credits per frame (no participants) |
| A/B variant | Per-participant costs are doubled, plus 100 credits for the comparison |

If a test is stopped, blocks that had not started are refunded 100% and the running block 50%. If every AI
participant is blocked from a live website (anti-bot, access denied), 80% of the credits are refunded.

**Plan limits**

| | Free plan | Paid plans |
|---|---|---|
| Task blocks per test | 1 | 3 |
| Survey blocks per test | 1 | 3 |
| Survey questions per test | 5 | 30 |
| Accessibility check | Not available | 1 block, up to 5 frames |
| Benchmarks (SUS, UXIA-Q) | Not available | Available |
| AI participants per test | 3 | 5–10 |
| Audiences per test | up to 3 | up to 3 |
| Human participants (test links, human panel) | Not available | Available |
| Human sessions shown in results | Not available | Starter: not included; Pro: first 10 per test; Custom: unlimited |
| PDF export | Not available | Pro and Custom |

**Other facts**

- Plans are Free, Starter, Pro and Custom. New Free organizations get their first test free.
- Card sorting allows up to 100 cards and 30 categories. A closed sort needs at least 2 categories.
- Media prototypes allow up to 35 frames.
- Tester files: up to 5 files of 100 MB each.
- Accessibility frames: upload UI screenshots as PNG, JPEG, WebP or GIF, up to 100 MB each. The uploader also
  accepts video, but the pre-launch test review rejects non-image files, so don't recommend video.
- Once AI participants launch, the test's blocks are locked. Block tests can't be duplicated from the tests list.
- Viewports: Desktop (1920×1080), Laptop (1366×768), Tablet (1024×768), Mobile (390×844).
- Test links: up to 10 per test. Participant languages are English, Spanish, Korean, German, French, Chinese,
  Português (Brasil), Português (Portugal) and Italian.
- Human sessions are recorded (screen and microphone; face camera optional) and capped at 60 minutes.
  Participants need a desktop browser that supports screen sharing.

## Translations

The help center and trust center are published in English (default), Spanish (`es/`), Catalan (`ca/`),
French (`fr/`) and German (`de/`). English is the source of truth: change the English page first, then update
every language folder in the same PR.

**Files and navigation**

- A translated page has the same path under the language folder: `quickstart.mdx` → `es/quickstart.mdx`,
  `de/quickstart.mdx`, and so on. Never rename or translate file names or slugs.
- Each language has its own navigation in `docs.json` under `navigation.languages`. A new page must be added
  to every language. Translate tab and group names there.
- Prefix every internal link with the language: `/mission` → `/es/mission` (or `/ca/mission`, `/fr/mission`,
  `/de/mission`). External links and `/images/...` paths stay the same.
- Anchors follow the translated heading: a link to `/es/mission#refine-it-with-tips` must use the slug of the
  Spanish heading (for example `#ajústala-con-consejos`). Slugs are the heading in lowercase, punctuation
  removed, spaces as hyphens; accents and umlauts are kept. An apostrophe becomes a typographic ’ and stays in
  the slug (`Executa l'auditoria` → `#executa-l’auditoria`, `Lancer l'audit` → `#lancer-l’audit`).

**What stays as-is**

- MDX structure: every component, attribute other than `title`, icon, code block, table shape and image stays
  identical. Translate `title="..."` attributes, Badge text, table cells and Card text.
- UI labels in bold (**Start recruiting**, **Add a block**, the **Build › Recruit › Analyze** phases, picker
  names like **Live website task**). The app is English only, so readers must see the exact English label.
  Do not add translations in parentheses.
- Product and plan names: Uxia, UXIA-Q, SUS, Figma, Jira, Free, Starter, Pro, Custom, MCP, SSO, SAML, SCIM.
- Code and configuration. Natural-language prompt examples inside code blocks may be translated.

**Style**

- Spanish: neutral Spanish, addressed as *tú*. Catalan: standard Catalan, addressed as *tu*. French: standard
  French, addressed as *vous*. German: standard German, addressed as *Sie*, with gender-neutral plurals
  (*Teilnehmende*).
- Titles and headings in sentence case (`Primeros pasos`, `Premiers pas`, `Erste Schritte`). German keeps its
  normal noun capitalization.
- Write natural prose, not a word-for-word rendering. Keep the meaning, facts, numbers and limits exact.
- Numbers: no separator up to four digits (`1500`); from five digits a space in es, ca and fr (`18 000`) and a
  period in de (`18.000`). Decimal comma (`80,3`) and a space before `%` (`80 %`) in all four.
- French punctuation: a space before `:`, `;`, `?` and `!`. Use straight quotes or none; don't add « ».
- Quoted app messages, placeholders and status values stay in English like UI labels. Explanations,
  examples you write yourself and questionnaire items you describe are translated.
- Dates: `octubre de 2026` (es, ca), `octobre 2026` (fr), `Oktober 2026` (de). `Next: …` cards become
  `Siguiente: …`, `Següent: …`, `Suivant : …`, `Weiter: …`.

**Glossary**

| English | Spanish | Catalan | French | German |
|---|---|---|---|---|
| unmoderated test | test no moderado | test no moderat | test non modéré | unmoderierter Test |
| AI-moderated test | test moderado por IA | test moderat per IA | test modéré par IA | KI-moderierter Test |
| test (noun) | test | test | test | Test |
| block | bloque | bloc | bloc | Block |
| Task block | bloque de tarea | bloc de tasca | bloc de tâche | Aufgabenblock |
| task (the field) | tarea | tasca | tâche | Aufgabe |
| Survey block | bloque de encuesta | bloc d'enquesta | bloc d'enquête | Umfrageblock |
| Card sorting block | bloque de card sorting | bloc de card sorting | bloc de tri de cartes | Card-Sorting-Block |
| Accessibility check block | bloque de revisión de accesibilidad | bloc de revisió d'accessibilitat | bloc de vérification de l'accessibilité | Block zur Barrierefreiheitsprüfung |
| AI participants | participantes de IA | participants d'IA | participants IA | KI-Teilnehmende |
| human participants | participantes humanos | participants humans | participants humains | menschliche Teilnehmende |
| participant | participante | participant | participant | Teilnehmende (pl.), teilnehmende Person (sg.) |
| human panel | panel humano | panell humà | panel humain | menschliches Panel |
| test link | enlace de test | enllaç de test | lien de test | Testlink |
| audience | audiencia | audiència | audience | Zielgruppe |
| enrichment | enriquecimiento | enriquiment | enrichissement | Anreicherung |
| credits | créditos | crèdits | crédits | Credits |
| paid plans | planes de pago | plans de pagament | forfaits payants | kostenpflichtige Pläne |
| workspace | espacio de trabajo | espai de treball | espace de travail | Workspace |
| organization | organización | organització | organisation | Organisation |
| project | proyecto | projecte | projet | Projekt |
| results | resultados | resultats | résultats | Ergebnisse |
| insights | insights | insights | insights | Insights |
| transcript | transcripción | transcripció | transcription | Transkript |
| benchmarks | benchmarks | benchmarks | benchmarks | Benchmarks |
| test scenario | escenario de test | escenari de test | scénario de test | Testszenario |
| stop condition | condición de parada | condició d'aturada | condition d'arrêt | Abbruchbedingung |
| live website | sitio web en producción | lloc web en producció | site web en production | Live-Website |
| prototype | prototipo | prototip | prototype | Prototyp |
| frame (screen) | frame | frame | frame | Frame |
| viewport | viewport | viewport | viewport | Viewport |
| think aloud | pensar en voz alta | pensar en veu alta | penser à voix haute | lautes Denken |
| launch (a test) | lanzar | llançar | lancer | starten |
| credentials | credenciales | credencials | identifiants | Zugangsdaten |
| integration | integración | integració | intégration | Integration |
| webhook | webhook | webhook | webhook | Webhook |
| accessibility | accesibilidad | accessibilitat | accessibilité | Barrierefreiheit |
| conformance level | nivel de conformidad | nivell de conformitat | niveau de conformité | Konformitätsstufe |
| subprocessor | subencargado del tratamiento | subencarregat del tractament | sous-traitant ultérieur | Unterauftragsverarbeiter |
| data processing addendum | anexo de tratamiento de datos (DPA) | annex de tractament de dades (DPA) | accord de traitement des données (DPA) | Auftragsverarbeitungsvertrag (AVV) |
| media prototype | prototipo multimedia | prototip multimèdia | prototype multimédia | Medienprototyp |
| media canvas | lienzo multimedia | llenç multimèdia | canevas multimédia | Medien-Canvas |
| user personas | perfiles de usuario | perfils d'usuari | personas utilisateurs | Nutzer-Personas |
| interactive login session | inicio de sesión interactivo | inici de sessió interactiu | session de connexion interactive | interaktive Anmeldesitzung |
| misclicks | clics erróneos | clics erronis | clics erronés | Fehlklicks |
| drop-off | abandono | abandonament | abandon | Abbruch |
| heatmap | mapa de calor | mapa de calor | carte de chaleur | Heatmap |
| journeys (analytics) | recorridos | recorreguts | parcours | Nutzerpfade |
| stakeholders | partes interesadas | parts interessades | parties prenantes | Stakeholder |
| feedback | feedback | feedback | retours | Feedback |
| seats | licencias de usuario | llicències d'usuari | licences utilisateur | Nutzerlizenzen |
| provisioning | aprovisionamiento | aprovisionament | provisionnement | Provisionierung |
| audit logs | registros de auditoría | registres d'auditoria | journaux d'audit | Audit-Logs |
| success criteria (WCAG) | criterios de conformidad | criteris de conformitat | critères de succès | Erfolgskriterien |
| agreement (card sorting) | acuerdo | acord | accord | Übereinstimmung |
| similarity matrix | matriz de similitud | matriu de similitud | matrice de similarité | Ähnlichkeitsmatrix |
| Enterprise Auth (feature) | Enterprise Auth | Enterprise Auth | Enterprise Auth | Enterprise Auth |

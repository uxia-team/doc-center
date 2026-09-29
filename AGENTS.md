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
  guide, asking follow-ups as it goes. The release is expected in October 2026. Only the stub page is written
  so far.

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

Use the term on the left. Never use the terms on the right, except once on the "What changed" page to explain
the mapping.

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
- Features with an October 2026 release (A/B variants, AI-moderated tests) open with
  `<Note>… expected to be released in October 2026 …</Note>`.

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

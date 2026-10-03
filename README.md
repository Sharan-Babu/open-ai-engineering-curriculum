# Open AI Engineering Curriculum

An independent learning path through the [AI Engineer video archive](https://www.youtube.com/@aiDotEngineer). It organizes 43 talks and workshops into six core courses and six areas for deeper study.

Each core course includes prerequisites, an intended outcome, a short ordered resource list, and a reason to watch each selection. Each specialization includes a guiding question and a project direction. Videos open on YouTube; this repository does not host them.

## Use the curriculum

1. Start with **Systems before agents** if you can already build a web application or API.
2. Follow the six-course sequence, or select the course that matches your current question.
3. Filter a course to **Talk** or **Workshop** when you want a shorter explanation or a practical session.
4. Choose a specialization and use its project direction to apply what you learn.

For example, **Context and retrieval** starts with information retrieval, then moves through production RAG, context limits, and a context-engineering workshop. Its intended outcome is to help you choose between search, long context, memory, and structured data. The **Knowledge systems** specialization provides a deeper path afterward.

### The common core

| Course | Focus |
| --- | --- |
| Systems before agents | Model calls, structured outputs, context, tools, and the surrounding application |
| Context and retrieval | Finding and supplying useful information |
| Agents, tools, and skills | Bounded action loops and reusable capabilities |
| Evaluation as engineering | Datasets, graders, traces, and failure analysis |
| Production and reliability | State, recovery, operations, and delivery |
| Security and trust | Execution boundaries, authorization, and tool security |

The six specializations are agent engineering, coding agents, knowledge systems, inference and models, multimodal and interface design, and evals and reliable AI.

## Run locally

Requires Node.js **22.13 or newer** and **pnpm 11.25.0**.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://127.0.0.1:5214/`.

```sh
pnpm test       # Curriculum structure and checked-link integrity
pnpm build      # TypeScript check and production bundle
pnpm preview    # Serve the production bundle locally
```

The build writes `dist/`. It is a static browser application with relative asset URLs, suitable for a static host or a subdirectory. Serve the output over HTTP rather than opening the HTML as a file. No account, database, API key, or server-side runtime is required. Course selection and filters stay in memory and reset on refresh. No progress tracking or certificates are provided.

The pnpm workspace uses a sibling `.pnpm-store` and hardlinks to share packages across neighboring projects. Set `PNPM_STORE_DIR` to use another store location. No global pnpm configuration is changed.

## Source map

- `src/curriculum.ts`: courses, specializations, resource descriptions, video IDs, and the historical update list.
- `src/App.tsx`: course selection, format filters, specialization panels, and page layout.
- `src/styles.css`: responsive page styles.
- `src/fonts.css` and `public/fonts/`: self-hosted fonts and their license notices.
- `docs/resource-link-audit.json`: title/channel metadata returned by YouTube for every resource.
- `tests/curriculum.test.mjs`: curriculum and link-mapping integrity checks.

To change a selection, edit `src/curriculum.ts`, check the destination and its content, update the link audit, then run the checks. The total resource count is derived from the data.

## Scope and verification

The editorial selection is an **August 24, 2026 snapshot**, not an automatically updating catalog. On October 3, 2026, all 43 distinct video links resolved through YouTube's public oEmbed endpoint and identified **AI Engineer** as the channel. That check verifies current link identity and title metadata; it does not prove video availability in every region or re-evaluate every claim made in the talks. Displayed running times are approximate estimates retained from the curriculum snapshot.

This is a curated path for independent study. It is not a degree program, an accredited qualification, or a substitute for a complete computer-science foundation. It is not affiliated with or endorsed by AI Engineer or OpenAI.

## Credits and rights

See [CREDITS.md](CREDITS.md) for source and asset attribution. Talks and workshops remain their creators' content. This repository links to them and contains no downloaded YouTube videos or transcripts.

No project-wide license has been added. The bundled fonts retain their separate SIL Open Font License notices.

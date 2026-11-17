# 🧱 Technical Overview

## Runtime and framework

CodeShare is a Next.js application using the App Router. React components provide the interface and the app route files define the two visible routes. TypeScript is used for application components and project scripts are authored as Node.js ES modules.

| Layer | Technology | Actual responsibility |
|---|---|---|
| Application framework | Next.js 15.3.1 | Routing, build, static rendering and development server |
| UI runtime | React 19 | Component rendering and local state |
| Component library | Mantine 7 | Buttons, tabs, avatars, selectors, layout primitives |
| Styling | Tailwind CSS 4 | Utility classes |
| Icons | lucide-react | Interface icons |
| Type checking | TypeScript 5 | Static type verification |
| Package management | npm | Dependency installation and lockfile |
| Local regression tests | Node built-in test runner | Repository contract checks |
| Collaboration transport | None in routed app | No live network collaboration |
| Persistence | None | No server-side document or chat storage |

## Application entry and routes

- `app/layout.tsx` is the root layout, metadata source, global stylesheet and Mantine provider boundary.
- `app/page.tsx` is the landing page.
- `app/editor/page.tsx` is the interactive local workspace route.
- Components under `app/components/` separate editor, chat, sample presence, and an additional editor shell component.

## Runtime state

The current workspace stores state in React component memory. A reload creates a new component tree and loses local edits and messages. No database, browser storage adapter, or remote service synchronizes this state.

## Build and verification

`npm ci` installs the lockfile. `npm test` runs Node contract tests. `npm run typecheck` checks TypeScript. `npm run validate` verifies project structure contracts and Markdown links. `npm run build` builds the Next.js application.

## Architecture boundaries

The unreferenced `pagebackup.tsx` file contains an older Socket.IO experiment, but the repository has no matching server and the routed workspace does not import it. Do not treat this file as a supported collaboration architecture.

See [architecture](architecture.md), [component architecture](component-architecture.md), and [project structure](project-structure.md).

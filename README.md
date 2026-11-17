# 💻 CodeShare

**CodeShare (CodeCollab prototype)** is a Next.js application exploring a collaborative coding workspace. The repository currently provides a landing page and an interactive local editor/chat UI.

<p align="center">
  <img src="docs/assets/architecture-overview.svg" alt="CodeShare current architecture overview" width="950">
</p>

<p align="center">
  <a href="https://github.com/Brajesh31/CodeShare/actions/workflows/quality-checks.yml"><img src="https://github.com/Brajesh31/CodeShare/actions/workflows/quality-checks.yml/badge.svg" alt="Quality checks"></a>
  <img src="https://img.shields.io/badge/Next.js-15.3.1-black?logo=nextdotjs" alt="Next.js 15">
  <img src="https://img.shields.io/badge/React-19-149eca?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Mantine-7-339af0" alt="Mantine">
  <img src="https://img.shields.io/badge/Status-UI%20prototype-orange" alt="UI prototype">
</p>

> **Important:** This is a UI prototype, not a live collaborative coding service. The editor and chat store state in the current browser tab. Presence is hard-coded, the AI tab returns a canned reply, and no authentication, collaboration server, database, model provider, or persistence layer exists in this repository.

## 📑 Contents

- [✨ Current features](#-current-features)
- [⚠️ Implemented behavior versus mock UI](#️-implemented-behavior-versus-mock-ui)
- [🚀 Getting started](#-getting-started)
- [🧭 Routes](#-routes)
- [🗂️ Project structure](#️-project-structure)
- [🧪 Validation](#-validation)
- [🔐 Security and privacy](#-security-and-privacy)
- [🧱 Roadmap](#-roadmap)
- [📚 Documentation](#-documentation)

## ✨ Current features

- Next.js App Router landing page.
- `/editor` workspace route.
- Editable sample code using a browser `contentEditable` element.
- Local language selector, theme toggle, and chat panel state.
- Team chat UI with messages held in React state.
- AI chat preview with a fixed demo response.
- Static sample user avatars and presence display.
- Mantine components, Tailwind utilities, and Lucide icons.

## ⚠️ Implemented behavior versus mock UI

| Capability | Current reality |
|---|---|
| Landing page | Implemented UI |
| Editor | Local `contentEditable` text area, not Monaco/CodeMirror |
| Language selector | Local selection state only |
| Real-time code synchronization | **Not implemented** |
| Team chat across browsers | **Not implemented**, messages stay local |
| AI code assistant | **Not implemented**, response is canned |
| Online presence | **Not implemented**, users are hard-coded |
| Authentication and private rooms | **Not implemented** |
| Database and saved documents | **Not implemented** |
| Voice chat | Coming soon copy only |
| Socket.IO | Unreferenced experiment in `pagebackup.tsx`; no server exists |

Do not use this prototype to share confidential source code or private team messages under the assumption that collaboration rooms or accounts are protected.

## 🚀 Getting started

### Requirements

- Node.js 20.9.0 or newer, Node 22 is pinned in `.nvmrc`
- npm
- Git
- Modern browser

### Install and run

```bash
git clone https://github.com/Brajesh31/CodeShare.git
cd CodeShare
npm ci
npm run dev
```

Open `http://localhost:3000`. Visit `/` for the landing page and `/editor` for the workspace.

### Production build

```bash
npm run build
npm start
```

### Quality checks

```bash
npm test
npm run typecheck
npm run validate
npm run audit:security
```

The Node-native tests cover repository contracts and prototype disclosures. They do not replace browser interaction tests. See [docs/testing.md](docs/testing.md).

## 🧭 Routes

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | CodeShare landing page |
| `/editor` | `app/editor/page.tsx` | Local editor, team/AI chat UI, theme and static presence |

No `app/api` routes or supported WebSocket endpoints are present.

## 🗂️ Project structure

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── DISCUSSION_TEMPLATE/
│   ├── workflows/
│   └── PULL_REQUEST_TEMPLATE.md
├── app/
│   ├── components/
│   │   ├── ChatPanel.tsx
│   │   ├── Editor.tsx
│   │   ├── EditorApp.tsx
│   │   └── UserPresence.tsx
│   ├── editor/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── docs/
│   ├── assets/
│   ├── diagrams/
│   ├── runbooks/
│   └── templates/
├── scripts/
│   ├── audit-dependencies.mjs
│   └── validate-repository.mjs
├── tests/
│   └── repository-contract.test.mjs
├── .nvmrc
├── package.json
├── package-lock.json
├── pagebackup.tsx
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

`pagebackup.tsx` is not an active App Router route. It is kept as an unreferenced Socket.IO experiment.

## 🧪 Validation

The quality workflow runs on pushes, pull requests, and weekly. It installs the lockfile, reports npm security advisories, runs contract tests, type checking, repository validation, a production build, YAML parsing, and Mermaid source checks.

A successful type check/build verifies compilation, not real-time collaboration, AI, authentication, data protection, or full accessibility. Manual route checks are still required.

## 🔐 Security and privacy

The app does not currently implement a server-side trust boundary for editor or chat content. Do not put secrets in browser code or `NEXT_PUBLIC_*` variables. Avatar images may be loaded from pravatar.cc; Next font assets are configured through `next/font/google`.

Read [SECURITY.md](SECURITY.md), [PRIVACY.md](PRIVACY.md), and [docs/security.md](docs/security.md) before proposing networked features.

## 🧱 Roadmap

1. Decide and document the intended product scope.
2. Establish authentication, user identity, and server-authorized rooms before real collaboration.
3. Design WebSocket/Socket.IO lifecycle, document synchronization, reconnect, and presence.
4. Add persistence, backups, retention, and deletion.
5. Add a real code editor engine with language services.
6. Add a server-side AI provider proxy with explicit privacy controls.
7. Add browser integration tests, authorization tests, and accessibility review.

See [ROADMAP.md](ROADMAP.md). This is a proposed direction, not a delivery promise.

## 📚 Documentation

Start at [docs/README.md](docs/README.md). The handbook covers product behavior, architecture, components, routes, configuration, dependencies, security, privacy, data, deployment, testing, accessibility, runbooks, diagrams, and reusable templates.

## 🤝 Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md), [GOVERNANCE.md](GOVERNANCE.md), and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Use the issue and PR templates. Report security concerns privately according to [SECURITY.md](SECURITY.md).

## 📄 License

The single MIT license is attributed to **Brajesh Kumar (@brajesh31)** and applies only to original CodeShare source and documentation within the stated scope. Next.js starter content, dependencies, external avatars, fonts, icons, and other third-party materials remain subject to their own licenses. See [LICENSE](LICENSE).

Last updated: 2026-11-17 22:33 UTC

# CodeShare (CodeCollab prototype)

CodeShare is a Next.js prototype for a collaborative coding workspace. It includes a landing page, an editor screen, a team-chat panel, an AI-chat tab, a dark-mode toggle, and a user-presence display.

**The current project is a UI prototype, not a working real-time collaboration service.** Code edits and chat stay in component state; the “Connected” status and three-user presence are hard-coded; the AI tab returns a fixed placeholder response. There is no server, authentication, API, database, real model integration, or active socket connection on the routed pages.

## Routes and current behavior

| Route | What it currently shows |
| --- | --- |
| `/` | CodeCollab landing page with feature descriptions and a link to the editor |
| `/editor` | Local editor mock, theme toggle, sample presence, team/AI chat tabs |

On `/editor`, the editor is a `contentEditable` `<pre>` with sample JavaScript, not a language-aware code editor. Selecting a language changes local UI state only. Team messages are appended locally. The AI tab waits briefly and appends a canned reply; no prompt is sent to a model.

## Requirements

- Node.js and npm
- A modern browser with JavaScript enabled

No API credentials are needed for the current prototype. Do not enter confidential source code or chat data into a future network-connected version until its server, access controls, and data handling are implemented and reviewed.

## Run locally

```sh
npm ci
npm run dev
```

Open `http://localhost:3000` in a browser. Use **Launch Editor** or visit `/editor` directly.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Next.js with Turbopack |
| `npm run build` | Build the Next.js application |
| `npm start` | Start the built Next.js application |
| `npm run lint` | Run the configured Next.js lint command |

There is no automated test script in `package.json`.

## Project layout

```text
app/
  page.tsx                 CodeCollab landing page
  editor/page.tsx          Editor route
  components/
    EditorApp.tsx          Workspace layout and local UI state
    Editor.tsx             Editable sample code pane
    ChatPanel.tsx          Local team-chat and canned AI tabs
    UserPresence.tsx       Static sample users
  layout.tsx               Root metadata, fonts, and Mantine provider
pagebackup.tsx             Unrouted Socket.IO experiment
```

See [docs/architecture.md](docs/architecture.md), [docs/development.md](docs/development.md), and [docs/troubleshooting.md](docs/troubleshooting.md) for the current implementation and its limits.

## Important limitations

- Real-time editor synchronization is not implemented.
- Chat is local-only and disappears when the page reloads.
- The AI assistant is a fixed canned response, not an AI service.
- User presence and “Connected” indicators are hard-coded sample UI.
- No API or Socket.IO server exists. `pagebackup.tsx` is an unreferenced experiment that targets `ws://localhost:3000/` and should not be treated as a working backend.
- The root layout still has generic Next.js starter metadata; the app is a prototype rather than a production-ready collaboration product.

## Contributing, support, and security

Read [CONTRIBUTING.md](CONTRIBUTING.md) before proposing changes. Use [SUPPORT.md](SUPPORT.md) for ordinary questions and [SECURITY.md](SECURITY.md) for private reports. The [ROADMAP.md](ROADMAP.md) records possible work without delivery promises.

## License

The MIT grant in [LICENSE](LICENSE) applies to original CodeShare source and documentation authored by Brajesh Kumar (`@brajesh31`) within the stated scope. Framework starter material, icons, dependencies, and other third-party content remain under their respective terms.

Last updated: 2026-10-30 16:27 UTC

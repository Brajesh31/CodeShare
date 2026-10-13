# Architecture

## Overview

CodeShare is a Next.js App Router application with a public landing page and a client-side editor mock. The routed app has no collaboration server, API route, database, AI provider, or persistence layer.

```text
Next.js App Router
  /            -> app/page.tsx (landing page)
  /editor      -> app/editor/page.tsx
                   -> EditorApp.tsx (client workspace state)
                      -> Editor.tsx (contentEditable sample code)
                      -> ChatPanel.tsx (local team/AI mock)
                      -> UserPresence.tsx (static sample users)
```

## Main components

- `app/layout.tsx`: root HTML, Next font setup, Mantine styles/provider, and page metadata. The metadata still uses generic Create Next App title/description.
- `app/page.tsx`: landing page with marketing copy and link to `/editor`.
- `app/editor/page.tsx`: editor route entry point.
- `app/components/EditorApp.tsx`: client-side workspace shell, theme state, chat visibility, sidebar shell, and hard-coded connection/status text.
- `app/components/Editor.tsx`: editable sample code in a `contentEditable` `<pre>`, local language selection, and simulated load/WebSocket log messages. It is not a code editor with syntax parsing or collaboration.
- `app/components/ChatPanel.tsx`: local team messages and a simulated AI tab. Messages are stored in component state; the AI tab appends a fixed canned answer after a timeout.
- `app/components/UserPresence.tsx`: a hard-coded array of three sample users, with remote avatar URLs.
- `pagebackup.tsx`: unreferenced Socket.IO experiment outside the `app/` route tree. It targets `ws://localhost:3000/` and listens/emits example events; no server implementation exists here.

## State and data flow

Editor text, selected language, dark mode, chat visibility, message lists, and active chat tab are React state in the current browser tab. They disappear on reload. The components do not synchronize data over Socket.IO. The sidebar and connection indicators are visual scaffolding.

## Network and third-party resources

The routed pages do not send editor or chat content to an application server. `UserPresence` uses `pravatar.cc` avatar URLs. The root layout configures `next/font/google`; Next downloads and bundles those font assets during its build process. Dependencies are managed from `package-lock.json`.

## Security boundary

Because there is no authentication or server-side room model, this prototype cannot protect or share team content. Any future collaboration service needs an explicit authorization model, server-side validation, transport lifecycle, and privacy/retention documentation before use with confidential code.

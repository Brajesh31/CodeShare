# 🧱 Component Reference

## App Router files

| Path | Responsibility |
|---|---|
| `app/layout.tsx` | Root HTML, Geist font setup, Mantine provider, metadata |
| `app/page.tsx` | Landing page |
| `app/editor/page.tsx` | Client editor route entry |

## UI components

### EditorApp

`app/components/EditorApp.tsx` lays out the workspace header, sidebar shell, editor, chat visibility, theme state, sample presence, and static connection status. Some state variables/imports are currently unused or scaffolding.

### Editor

`app/components/Editor.tsx` renders sample JavaScript in a `contentEditable` preformatted block. The language dropdown is visual/local state; it does not change parser, syntax highlighting, compiler, or execution behavior. The effect named like a socket connection only logs to the console.

### ChatPanel

`app/components/ChatPanel.tsx` contains Team and AI tabs. Team messages append to local React state. AI messages append locally and then receive a generic hard-coded reply after a timeout. No content is sent to a server or model.

### UserPresence

`app/components/UserPresence.tsx` renders a static array of sample users and requests remote avatar images from pravatar.cc. These people are not actual connected collaborators.

## Legacy experiment

`pagebackup.tsx` contains a Socket.IO client experiment and is not imported by the App Router. It connects to localhost and emits sample events, but no corresponding server implementation exists in the repository. Treat it as experimental code, not supported runtime behavior.

## Component change checklist

- Keep interactive components client-rendered when they need browser state or event handlers.
- Keep data flow explicit through typed props.
- Render chat/editor user content as text, not injected HTML.
- Remove unused state/imports only with a tested, focused change.
- Update this file when components are added, removed, or responsibilities change.

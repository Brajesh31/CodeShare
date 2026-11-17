# 🧱 Component Reference

## App Router files

| Path | Responsibility |
|---|---|
| app/layout.tsx | Root layout, Geist font setup, Mantine provider, metadata |
| app/page.tsx | CodeShare landing page and prototype scope |
| app/editor/page.tsx | Active local workspace route |

## Active UI components

### Editor

app/components/Editor.tsx renders sample JavaScript in a contenteditable preformatted block. The language selector changes only the local language label. It does not provide syntax highlighting, language services, parsing, compilation, execution, or synchronization. The footer explicitly indicates that sync is not connected.

### ChatPanel

app/components/ChatPanel.tsx contains Team and AI Preview tabs. Team messages append to local React state. AI Preview appends local messages and returns a fixed canned response after a delay. No message or prompt is sent to a server or model provider.

### UserPresence

app/components/UserPresence.tsx renders a static list of sample profiles and requests remote images from pravatar.cc. These are not authenticated or connected collaborators.

### Active editor route

app/editor/page.tsx composes Editor, ChatPanel, and UserPresence. It owns workspace theme and chat panel visibility and labels the bottom indicators as a local demo and sample profiles.

## Alternate component shell

app/components/EditorApp.tsx is an alternate or duplicate workspace shell. The active App Router page does not import it as its route component. Avoid adding new route behavior there without first consolidating ownership and confirming all references.

## Legacy experiment

pagebackup.tsx is outside the app route tree and is not imported by the active page. It contains a Socket.IO client experiment targeting a local WebSocket URL. No matching server implementation exists. It is not supported runtime behavior.

## State ownership

| State | Owner | Persistence |
|---|---|---|
| Editor code | Editor | Component state only |
| Language label | Editor | Component state only |
| Theme | Editor route | Component state only |
| Chat panel visibility | Editor route | Component state only |
| Team messages | ChatPanel | Component state only |
| AI Preview messages | ChatPanel | Component state only |
| Sample presence list | UserPresence | Static source data |

## Component change checklist

- Keep browser-state components client-rendered.
- Keep props explicit and narrow.
- Render user-controlled text as text, not injected HTML.
- Avoid fake connection logs, indicators, or service calls.
- Add tests when extracting non-trivial behavior.
- Update architecture, project structure, and this component inventory whenever ownership or routing changes.

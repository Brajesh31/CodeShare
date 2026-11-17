# 🐛 Known Issues and Product Gaps

This list is based on source inspection and repository contract tests, not a complete browser acceptance test.

| Area | Current state | Impact |
|---|---|---|
| Collaboration | No synchronization server or active socket in routed UI | Multiple browsers do not share editor content |
| Chat | React local state only | Messages are not delivered to another user and reset on reload |
| AI | Fixed canned response in an AI preview panel | No model reasoning, code context, or provider integration |
| Presence | Three hard-coded sample profiles | No real connection or room membership state |
| Authentication | Not implemented | No private workspaces or account boundaries |
| Persistence | Not implemented | No saved projects, history, or chat storage |
| Editor | `contentEditable` preformatted element | No syntax highlighting, diagnostics, language services, or robust editing model |
| Language picker | Local selection state | Does not change parsing or code behavior |
| Voice | Product concept copy only | No microphone permission flow or audio service |
| Socket.IO | Legacy unreferenced file only | No supported protocol or server |
| External avatars | pravatar.cc URLs | External availability/privacy dependency |
| Browser testing | Contract tests only | No automated browser-level interaction or accessibility checks |
| Linting | No standalone ESLint config or lint script | Dedicated static lint rules remain future work |
| Dependency security | npm audit currently reports advisories | Runtime dependency updates and verification are required |

## Priority recommendations

1. Resolve dependency advisories and update Next.js/React to patched compatible versions before public production use.
2. Decide whether this project is a UI demo or a real collaboration product.
3. For real product work, design auth, room permissions, WebSocket backend, and persistence before adding UI-only claims.
4. Replace `contentEditable` with a maintained editor engine only when the scope and dependencies are chosen.
5. Add browser integration tests, accessibility validation, and security tests.

Do not resolve these issues by adding fake online indicators, placeholder endpoints, or sample credentials.

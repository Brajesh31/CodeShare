# 🐛 Known Issues and Product Gaps

This list is based on the inspected source, not a complete user acceptance test.

| Area | Current state | Impact |
|---|---|---|
| Collaboration | No synchronization server or active socket in routed UI | Multiple browsers do not share editor content |
| Chat | React local state only | Messages are not delivered to another user and reset on reload |
| AI | Fixed canned response | No model reasoning, code context, or provider integration |
| Presence | Three hard-coded sample users | No real connection or room membership state |
| Authentication | Not implemented | No private workspaces or account boundaries |
| Persistence | Not implemented | No saved projects, history, or chat storage |
| Editor | `contentEditable` preformatted element | No syntax highlighting, diagnostics, language services, or robust editing model |
| Language picker | Local selection state | Does not change parsing or code behavior |
| Voice | Landing-page “Coming soon” copy | No voice session or permissions flow |
| Socket.IO | Legacy unreferenced file only | No supported protocol or server |
| Metadata | Generic Next.js starter title/description | Search/social previews are not product-specific |
| External avatars | pravatar.cc URLs | External availability/privacy dependency |
| Tests | No test framework/script | UI regressions require manual checks |
| Lint script | `next lint` may not match Next.js 15 CLI | Needs modernization after verifying compatibility |

## Priority recommendations

1. Correct the mismatch between marketing copy and prototype behavior.
2. Decide whether this project is a UI demo or a real collaboration product.
3. For real product work, design auth, room permissions, WebSocket backend, and persistence before adding UI-only claims.
4. Replace `contentEditable` with a maintained editor engine only when the scope and dependencies are chosen.
5. Add tests, accessibility validation, and explicit data/privacy design.

Do not resolve these issues by adding fake online indicators, placeholder endpoints, or sample credentials.

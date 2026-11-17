# 🧩 Product Overview

## Product idea

CodeShare is presented as a collaborative coding workspace. The repository currently contains a Next.js UI prototype for exploring that product direction.

## Current user experience

- Landing page at `/` with CodeCollab branding, feature descriptions, and navigation.
- Editor workspace at `/editor`.
- Editable sample source displayed inside a `contentEditable` preformatted element.
- Language selector that changes local UI state.
- Local team chat tab.
- AI assistant tab with a canned placeholder answer.
- Theme toggle and collapsible workspace controls.
- Static sample users and connected-state indicators.

## Reality check: implemented versus advertised

| Capability | Current status | Evidence in source |
|---|---|---|
| Landing page | Implemented UI | `app/page.tsx` |
| Editor screen | Implemented prototype UI | `app/editor/page.tsx`, `EditorApp.tsx` |
| Editing text | Local browser state | `Editor.tsx` |
| Language selection | Local selector state | `Editor.tsx` |
| Real-time code sync | Not implemented | No active socket/server on route |
| Team chat transport | Not implemented | `ChatPanel.tsx` updates React state |
| AI model integration | Not implemented | Fixed delayed response |
| Online presence | Not implemented | Hard-coded user array |
| Authentication and room permissions | Not implemented | No auth/server modules |
| Persistence | Not implemented | No database/storage layer |
| Voice chat | Coming soon copy only | Landing page |

## Intended audiences

The prototype's UI suggests small development teams, learners, and collaborators who want to work in one shared coding space. This audience definition is inferred from the product copy, not validated by user research.

## Product honesty rule

Do not describe a mock UI as a working service in README, marketing pages, screenshots, or release notes. When the product gains a server, persistence, or AI provider, update this matrix with implementation evidence and test coverage.

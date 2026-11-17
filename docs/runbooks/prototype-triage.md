# Runbook: Editor and Chat Prototype Triage

1. Identify the route (`/` or `/editor`) and exact component.
2. Reproduce in a fresh browser tab.
3. Check React/browser console messages and the actual DOM state.
4. Confirm whether the expected behavior is implemented or only a visual placeholder.
5. For editor text and chat, remember state is local and resets on reload.
6. For presence, remember users are hard-coded sample data.
7. For AI, expect the generic delayed canned response only.
8. Record browser/version, viewport, action sequence, expected result, and actual result.

Do not investigate as a WebSocket outage unless a real server and supported transport have been added in a separately reviewed change.

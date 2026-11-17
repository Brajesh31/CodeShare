# 🧹 Technical Debt Register

## Register status

This register is based on source inspection. It is not a complete static-analysis or manual QA audit. Priorities indicate suggested order, not a committed delivery date.

| ID | Priority | Debt | Impact | Suggested action |
|---|---|---|---|---|
| TD-01 | Critical | Next.js 15.3.1 has unresolved npm advisory findings; npm reports 15.5.29 as the fix candidate | Security exposure | Upgrade through npm, regenerate lockfile, and rerun full checks |
| TD-02 | High | No backend/auth/authorization for collaboration | Product cannot safely support private rooms | Design trust boundary before adding connected features |
| TD-03 | High | Editor uses raw contenteditable | Weak editing model and accessibility risks | Evaluate maintained editor engines and test keyboard behavior |
| TD-04 | Medium | Chat is local React state | No cross-user messaging or history | Define message service and persistence requirements if scope approved |
| TD-05 | Medium | AI response is canned | UI can be mistaken for real assistant | Keep preview disclosure; design provider policy before integration |
| TD-06 | Medium | Presence avatars use external service | Third-party privacy and reliability dependency | Replace with local initials or approved assets |
| TD-07 | Medium | No browser-level test harness | Interaction regressions may escape CI | Add Playwright or equivalent after selecting the test scope |
| TD-08 | Medium | No dedicated ESLint configuration | Static lint rules not consistently enforced | Add reviewed ESLint config and CI lint step |
| TD-09 | Low | `EditorApp.tsx` overlaps with route composition | Duplicate shell can drift | Decide whether to extract it or remove only after confirming imports |
| TD-10 | Low | `pagebackup.tsx` retains legacy Socket.IO experiment | Confusing unsupported behavior and unused dependency | Archive/remove via separate reviewed cleanup decision |

## Review cadence

Review the register during significant release planning and at least quarterly while active development continues. Close an item only when its acceptance evidence is available and linked from the change.

## Risk acceptance

Do not accept a critical dependency issue solely because an upgrade is inconvenient. Record any temporary exception, owner, compensating control, and expiry date in a security review.

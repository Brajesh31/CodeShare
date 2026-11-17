# 🗺️ CodeShare Diagrams

The Mermaid sources below distinguish current code from future concepts. The future collaboration diagram is explicitly proposed and is not a deployed architecture.

<p align="center">
  <img src="../assets/architecture-overview.svg" alt="CodeShare current application component architecture" width="950">
</p>

| Diagram | What it explains | Status |
|---|---|---|
| [Current architecture](current-architecture.mmd) | Actual Next.js routes and UI components | Current |
| [Application workflow](application-workflow.mmd) | Visitor, routes, local state, and reload behavior | Current |
| [Component hierarchy](component-hierarchy.mmd) | Route-level composition and inactive files | Current |
| [UI flow](ui-flow.mmd) | Landing, editor, and local chat UI transitions | Current |
| [Editor state](editor-state.mmd) | Local editing lifecycle | Current |
| [Local chat sequence](local-chat-sequence.mmd) | Message append and fixed AI preview response | Current |
| [Current data boundary](current-data-boundary.mmd) | Local state and absence of app persistence | Current |
| [External data flow](external-data-flow.mmd) | External avatar and font asset requests | Current |
| [Security boundaries](security-boundaries.mmd) | Current data exposure and absent services | Current |
| [Error recovery](error-recovery.mmd) | Contributor troubleshooting flow | Operational process |
| [Testing flow](testing-flow.mmd) | Current quality gate sequence | Current CI |
| [CI and release flow](ci-release-flow.mmd) | Build and review pipeline | Current CI |
| [Deployment flow](deployment-flow.mmd) | Deployment decision and smoke test | Proposed manual process |
| [Future collaboration](future-collaboration.mmd) | Possible server-backed collaboration topology | Proposed only |

## Not applicable today

There are no database entities, ER diagram, authentication flow, authorization flow, REST API request lifecycle, or production deployment infrastructure in the current repository. Do not add diagrams that imply those systems exist.

## Editing guidance

- Keep each diagram readable and focused on one question.
- Use explicit labels for current and proposed components.
- Update source references when code paths change.
- Prefer Mermaid source over screenshots of diagrams so changes remain reviewable.
- Run the CI Mermaid source check. It currently checks non-empty files, not full semantic rendering.

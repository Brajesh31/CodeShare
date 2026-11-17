# 🧪 Testing and Verification

## Automated checks

The repository now uses Node's built-in test runner, so no additional test framework dependency is required.

```bash
npm ci
npm test
npm run typecheck
npm run validate
npm run build
```

### Test coverage

`tests/repository-contract.test.mjs` checks:
- Package and lockfile name, version, dependencies, development dependencies, and Node engine consistency.
- Availability of the standard project scripts.
- Node runtime pin consistency with CI.
- Presence and navigation of the landing and editor routes.
- Honest UI labels for local-only editing and sample presence.
- Separation between the routed UI and the legacy Socket.IO experiment.
- Landing-page copy that does not promise unavailable live services.
- Security documentation that describes the actual trust boundary.

These tests protect repository contracts and prevent misleading prototype claims. They do not mount React components or automate a browser.

## Manual smoke test

| ID | Route/action | Expected observation |
|---|---|---|
| CS-01 | Open `/` | Landing page describes a prototype and offers an editor link |
| CS-02 | Select Open editor | Navigation reaches `/editor` |
| CS-03 | Open `/editor` directly | Workspace shell renders |
| CS-04 | Edit sample text | Current tab's editor content updates locally |
| CS-05 | Change language selector | Selected label changes; editor parser does not |
| CS-06 | Toggle theme | Workspace theme state changes |
| CS-07 | Open/close chat | Chat panel visibility changes |
| CS-08 | Send a team message | Message appears in local team tab |
| CS-09 | Send an AI preview message | Fixed demo response appears after delay |
| CS-10 | Reload editor | Local editor/chat state resets |
| CS-11 | Inspect presence | Three static sample profiles display if remote requests succeed |
| CS-12 | Inspect browser network | No application API or Socket.IO session is present on the routed screen |

## CI boundary

The quality workflow runs on pushes, pull requests, and a weekly schedule. It installs the committed lockfile, reports dependency advisories, runs contract tests, type-checks, validates repository files and documentation links, builds the Next.js app, and parses GitHub YAML metadata.

A passing type check or production build verifies compilation, not real collaboration, authentication, AI, persistence, accessibility, or data protection. Manual route checks and browser-level tests remain necessary.

## Linting

There is no standalone ESLint configuration or `npm run lint` command in this repository yet. The production build performs Next.js compilation and its configured validation. Add a dedicated ESLint configuration only with a pinned, reviewed toolchain rather than keeping a script that invokes an unavailable or unconfigured command.

## Future test investment

When business logic is extracted from UI components, add unit tests for that logic. Add component tests for interactions and browser automation for route navigation, chat state, theme state, and responsive layouts. A real collaboration backend additionally needs integration and authorization tests.

## Reporting

Record the commit, Node/npm versions, browser, OS, viewport, route, steps, expected and actual behavior, plus sanitized console output. Mark only tests actually run as passed.

# 🧪 Testing and Verification

## Current baseline

The repository currently has no configured automated test framework or test script in `package.json`. The quality workflow should therefore focus on deterministic static validation and production build until a real test harness is introduced.

## Available checks

```bash
npm ci
npx tsc --noEmit
npm run build
```

The configured `npm run lint` command currently invokes `next lint`, which may not be available in this Next.js version. Confirm the actual command behavior before relying on it.

## Manual smoke test

| ID | Route/action | Expected observation |
|---|---|---|
| CS-01 | Open `/` | Landing page loads without runtime errors |
| CS-02 | Select Launch Editor | Navigation reaches `/editor` |
| CS-03 | Open `/editor` directly | Workspace shell renders |
| CS-04 | Edit sample text | Current tab's editor content updates locally |
| CS-05 | Change language selector | Selected label changes; editor parser does not |
| CS-06 | Toggle theme | Workspace theme state changes |
| CS-07 | Open/close chat | Chat panel visibility changes |
| CS-08 | Send a team message | Message appears in local team tab |
| CS-09 | Send an AI message | Fixed placeholder reply appears after delay |
| CS-10 | Reload editor | Local editor/chat state resets |
| CS-11 | Inspect presence | Three static sample avatars display if remote requests succeed |
| CS-12 | Inspect browser network | No application API or Socket.IO session is present on routed screen |

## CI boundary

A passing type check or production build verifies compilation, not product functionality. It does not prove real collaboration, authentication, AI, persistence, secure room access, or accessibility.

## Future test investment

When business logic is extracted from UI components, add unit tests. Add component tests for interactions and browser automation for landing/editor navigation, chat state, theme state, and responsive layouts. A real collaboration backend would additionally need integration and authorization tests.

## Reporting

Record the commit, Node/npm versions, browser, OS, viewport, route, steps, expected and actual behavior, plus sanitized console output. Mark only tests actually run as passed.

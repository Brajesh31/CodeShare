# 🧪 Test Strategy

## Strategy statement

The current test strategy focuses on protecting repository contracts and ensuring the app remains type-checkable and buildable. A browser test suite is not currently installed, and the existing tests are not component or end-to-end tests.

## Current test portfolio

| Test category | Implemented? | Location/command |
|---|---|---|
| Package metadata contracts | Yes | `tests/repository-contract.test.mjs`, `npm test` |
| Route and prototype copy contracts | Yes | `tests/repository-contract.test.mjs` |
| Type checking | Yes | `npm run typecheck` |
| Markdown link and file validation | Yes | `npm run validate` |
| Production build | Yes | `npm run build` |
| React component unit tests | No | Not configured |
| Browser E2E tests | No | Not configured |
| API integration tests | Not applicable | No API routes |
| Database integration tests | Not applicable | No database |
| Real collaboration tests | Not applicable | No collaboration server |
| AI provider tests | Not applicable | No provider integration |
| Accessibility automation | Not configured | See accessibility audit plan |

## Test design principles

- Test observable behavior rather than matching implementation details unnecessarily.
- Keep Node contract tests deterministic and independent of external network services.
- Add regression coverage when a bug is fixed.
- Avoid asserting an unverified feature exists.
- Do not create fake service fixtures that could be confused with production data.
- Separate unit, component, integration, and browser test results.

## Future browser testing

When a browser framework is introduced, prioritize:
1. landing navigation and editor route load;
2. editing sample text and language selection;
3. theme and chat panel interactions;
4. team message append and AI preview behavior;
5. mobile layout and keyboard operation;
6. console/network assertions that no unexpected service is called.

If real services are added, create integration tests for identity, authorization, document sync, chat ordering, reconnect, persistence, export, and deletion.

## Exit criteria

A test suite is useful when it runs reliably in CI, produces actionable failures, has known coverage limits, and is maintained with the feature code. Test count alone is not a quality metric.

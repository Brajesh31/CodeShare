# 📊 Test Coverage and Gaps

## Current evidence

The repository has Node-native contract tests, TypeScript checks, repository validation, Next.js production build checks, GitHub YAML parsing, Mermaid source presence checks, SVG XML parsing, CodeQL analysis, and dependency review.

These checks are intentionally described by what they exercise. The repository does not currently publish a code coverage percentage, and no coverage threshold is configured. Do not invent a coverage badge or claim comprehensive application tests.

## Automated coverage map

| Area | Current automated coverage | Important gap |
|---|---|---|
| Package/lock metadata | Root name/version/dependencies/dev dependencies/engine consistency | Full transitive graph semantics are handled by npm ci |
| Routes | Route files, navigation markers, editor component marker | No rendered browser route assertion |
| Prototype disclosures | Landing copy, local demo/sample labels, security warning | No full copy review of every page |
| Workflows | Key CodeQL/dependency review configuration assertions | No live PR execution of every workflow path |
| README/assets | Logo/banner/project structure references | No image pixel/layout validation |
| Project structure | Generated tree compared with Git index | Does not explain behavior quality |
| Markdown | Local relative link existence | No remote link health, full CommonMark parsing, or anchor validation |
| SVG | XML parse in CI | No visual inspection or cross-browser rendering |
| Mermaid | Non-empty source files in CI | Not a full semantic render of every diagram |
| TypeScript | TypeScript compiler | Not runtime interaction coverage |
| Build | Next production build | Not production deployment or browser compatibility |
| Security | npm audit report, CodeQL, dependency review | Not penetration testing or production configuration review |

## Manual test requirements

Use the [testing guide](testing.md) for route, editor, chat, theme, reload, and viewport smoke tests. Record the browser, device, viewport, actual steps, expected behavior, observed behavior, and result.

## Future test investment

Prioritize browser automation for landing navigation, editor route load, local editing, theme toggle, chat panel visibility, message append, mobile layout, and keyboard operation. Add component tests when component logic is extracted into stable testable units.

If collaboration services are added, build integration tests for identity, room authorization, document synchronization, message delivery, reconnect, persistence, export, and deletion.

## Reporting

Coverage numbers are useful only when the collection method and denominator are clear. Record the test command, tool version, included paths, excluded files, and the commit tested. A high line percentage does not prove security, usability, or correct product behavior.

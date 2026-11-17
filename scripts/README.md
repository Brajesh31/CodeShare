# 🧰 Repository Scripts

Run commands from the repository root. Node.js 22 is the tested development runtime.

| Command | Purpose |
|---|---|
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm test` | Run Node's built-in test runner |
| `npm run validate` | Check required files, package/lock consistency, npm scripts, routes, and local Markdown links |
| `npm run audit:security` | Query npm audit and publish severity counts to the CI summary |
| `npm run build` | Compile the production Next.js application |

## validate-repository.mjs

The validator checks core source and governance files, verifies the manifest and lockfile agree, checks required npm scripts, scans project Markdown for relative links, and verifies the expected App Router route markers.

It does not resolve remote URLs or GitHub heading anchors. It is not a complete Markdown parser, and it does not test rendered React interactions.

## audit-dependencies.mjs

This script runs `npm audit --json`, summarizes advisory counts by severity, and writes a table to the GitHub Actions job summary when available. It is informational while existing dependency advisories are being reviewed. A non-zero advisory count is not a clean bill of health.

## Test suite

See [../tests/repository-contract.test.mjs](../tests/repository-contract.test.mjs). The tests verify repository metadata, routes, and prototype disclosures. They are contract checks, not browser tests or proof of collaboration behavior.

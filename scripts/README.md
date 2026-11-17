# 🧰 Repository Scripts

Run commands from the repository root. Node.js 22 is the tested development runtime.

| Command | Purpose |
|---|---|
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm test` | Run Node's built-in test runner |
| `npm run validate` | Check required files, package/lock consistency, npm scripts, routes, project-tree freshness, and local Markdown links |
| `npm run docs:tree` | Regenerate the complete tracked-file tree in `docs/project-structure.md` |
| `npm run docs:tree:check` | Fail when the documented tree differs from `git ls-files` |
| `npm run audit:security` | Query npm audit and publish package/severity counts to the CI summary |
| `npm run build` | Compile the production Next.js application |

## generate-project-tree.mjs

This script reads the Git index with `git ls-files`, builds a deterministic directory tree, and replaces the tracked-tree section of [docs/project-structure.md](../docs/project-structure.md). It preserves the responsibility descriptions below the tree.

Run `npm run docs:tree` after adding, removing, or renaming tracked files. CI uses `npm run docs:tree:check` so stale documentation fails validation instead of being silently changed during a build.

## validate-repository.mjs

The validator checks core source, governance, documentation, workflow, and visual asset paths. It verifies manifest/lockfile consistency, required npm scripts, Markdown relative links, App Router markers, and the generated project-tree contents.

It does not resolve remote URLs or GitHub heading anchors. The Markdown parser is intentionally lightweight and is not a complete CommonMark implementation.

## audit-dependencies.mjs

This script runs `npm audit --json`, summarizes vulnerable packages and severity counts, and writes a table to the GitHub Actions job summary when available. It is informational and does not remediate advisories. A green report step does not mean the dependency tree is free of vulnerabilities.

## Test suite

See [../tests/repository-contract.test.mjs](../tests/repository-contract.test.mjs). Tests verify package metadata, routes, security disclosures, workflows, assets, and project-tree freshness. They are contract checks, not browser tests or proof of collaboration behavior.

# 📦 Dependencies and Supply Chain

## Runtime dependencies

The package currently declares Next.js 15.3.1, React 19, Mantine 7, lucide-react, and socket.io-client. The routed UI uses Next.js, React, Mantine, and Lucide. Socket.IO remains declared for the legacy unreferenced experiment and is not imported by the routed editor.

## Development dependencies

TypeScript, React/Node type definitions, Tailwind CSS 4, and the Tailwind PostCSS integration are declared. The project uses npm and commits package-lock.json.

## Runtime and reproducibility

- Node.js 20.9.0 or newer is required by the package manifest.
- Node 22 is selected in .nvmrc and the GitHub Actions workflow.
- Use npm ci to reproduce the committed dependency graph.
- Keep package.json and package-lock.json synchronized. The repository validator checks root metadata and dependency declarations.
- Run npm run docs:tree after tracked paths change. CI checks that the documented tree is current.
- Commit lockfile changes with dependency updates.

## Dependency policy

Review package maintenance, licenses, transitive dependencies, bundle impact, and security advisories before adoption. Do not run npm audit fix --force blindly. Major upgrades can introduce breaking changes, and automatic remediation must be checked with type, test, and production-build results.

## Current cleanup candidate

socket.io-client is declared but not used by the routed UI. pagebackup.tsx is a standalone unreferenced Socket.IO experiment. Remove the dependency only after deciding how to preserve or refactor that experiment and ensuring TypeScript and build checks remain valid.

## Security audit status, 2026-11-18

The CI run on 2026-11-17 reported 8 npm audit findings: 1 critical, 6 high, and 1 moderate. The affected package list included engine.io-client, nanoid, next, postcss, sharp, socket.io-parser, source-map-js, and ws.

The audit output identified next@15.5.29 as the remediation hint for the direct Next.js finding. The repository still pins Next.js 15.3.1. The update has **not** been applied or verified in package-lock.json.

**This is an outstanding security blocker. Do not deploy the current dependency tree to production.** See [dependency security remediation](dependency-security.md).

## Framework support

The Next.js support policy currently lists 16.x as Active LTS and 15.x as Maintenance LTS, with Next.js 15 security releases extended through 31 January 2027. Plan a move to the supported 16.x line before that date. See the [official Next.js support policy](https://nextjs.org/support-policy).

## Automation

Dependabot checks npm packages and GitHub Actions weekly. Review each update PR and its changelog, advisory details, compatibility, and CI results before merging.

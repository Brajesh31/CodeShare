# 📦 Dependencies and Supply Chain

## Runtime dependencies

The current package declares Next.js 15.3.1, React 19, Mantine 7, lucide-react, and socket.io-client. The routed UI uses Next.js, React, Mantine, and Lucide. Socket.IO remains declared for the legacy unreferenced experiment and is not imported by the routed editor.

## Development dependencies

TypeScript, React/Node type definitions, Tailwind CSS 4, and the Tailwind PostCSS integration are declared. The project uses npm and commits `package-lock.json`.

## Runtime and reproducibility

- Node.js 20.9.0 or newer is required by the package manifest.
- Node 22 is selected in `.nvmrc` and the GitHub Actions workflow.
- Use `npm ci` to reproduce the committed dependency graph.
- Keep `package.json` and `package-lock.json` synchronized. The repository validator checks root metadata and dependency declarations.
- Commit lockfile changes with dependency updates.

## Dependency policy

Review package maintenance, licenses, transitive dependencies, bundle impact, and security advisories before adoption. Do not run `npm audit fix --force` blindly. Major upgrades can introduce breaking changes, and automatic remediation must be checked with type, test, and production-build results.

## Current cleanup candidate

`socket.io-client` is declared but not used by the routed UI. `pagebackup.tsx` is a standalone unreferenced Socket.IO experiment. Remove the dependency only after deciding whether to retain that experiment and checking the resulting lockfile.

## Security audit status

The CI run on 2026-11-17 reported 8 npm audit findings: 1 moderate, 6 high, and 1 critical. The repository now reports current npm audit severity counts on every quality run and in a weekly scheduled run. The report is informational and does not make the build fail while remediation is assessed.

**This is an outstanding security task, not a resolved issue.** The committed Next.js version is old and should be updated to a patched compatible release together with the lockfile. Do not treat a successful build as evidence that dependencies are safe. Review current advisory output, update compatible packages, and rerun all checks before deployment.

## Automation

Dependabot checks npm packages and GitHub Actions weekly. Review each update PR and its changelog, advisory details, compatibility, and CI results before merging.

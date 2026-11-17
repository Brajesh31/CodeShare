# 📦 Dependencies and Supply Chain

## Runtime dependencies

The current package declares Next.js 15.3.1, React 19, Mantine 7, lucide-react, and socket.io-client. The active routed UI uses the framework, Mantine, icons, and Socket.IO is declared but not used by the routed workspace.

## Development dependencies

TypeScript, React/Node type definitions, Tailwind CSS 4, and the Tailwind PostCSS integration are declared. The project uses npm and commits `package-lock.json`.

## Dependency policy

- Use `npm ci` to reproduce the committed lockfile.
- Do not add a dependency for a feature that can be implemented safely with existing platform APIs.
- Review package maintenance, license, transitive dependencies, bundle impact, and security advisories before adoption.
- Commit `package-lock.json` when package metadata changes.
- Keep application secrets out of package scripts and client bundles.
- Remove unused dependencies only after confirming imports and build behavior.

## Current known cleanup candidate

`socket.io-client` is present in `package.json`, while the routed pages do not import it. `pagebackup.tsx` is a standalone unreferenced experiment. Decide whether to remove or intentionally use this dependency only as a separate, tested product change.

## Automation

Dependabot is configured to check npm dependencies and GitHub Actions monthly. Automated update PRs still require review and CI; do not merge blindly.

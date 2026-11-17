# 🧰 Technology Stack

## Verified package stack

| Technology | Version declared | Usage |
|---|---:|---|
| Next.js | 15.3.1 | App framework and App Router |
| React | 19.x range | UI runtime |
| React DOM | 19.x range | DOM rendering |
| Mantine Core | 7.17.5 range | UI components |
| Mantine Hooks | 7.17.5 range | Disclosure hook |
| lucide-react | 0.503.0 range | Icons |
| Tailwind CSS | 4.x range | Utility styling |
| Tailwind PostCSS | 4.x range | CSS pipeline |
| TypeScript | 5.x range | Static type checking |
| Node.js | 22 in CI; manifest allows >=20.9.0 | Build scripts and test runner |
| npm | lockfile v3 | Package management |

The exact transitive versions are defined by `package-lock.json`. Do not infer them from semver ranges in `package.json`.

## Dependencies not used by the routed UI

`socket.io-client` is declared for an unreferenced experiment in `pagebackup.tsx`. The active editor, chat panel, and route do not establish a Socket.IO connection. Reassess whether that experiment and dependency should remain.

## Stack usage rules

1. Use npm, not a second package manager, to keep the committed lockfile authoritative.
2. Prefer existing platform and library APIs over unnecessary dependencies.
3. Review security advisories, maintenance activity, license terms, bundle impact, and breaking changes before upgrades.
4. Keep package manifest and lockfile synchronized.
5. Avoid importing server credentials into browser components.
6. Pin toolchain changes through lockfile and CI changes.

## Upgrade process

Use [dependency review template](templates/dependency-review.md). Update one compatible dependency group at a time where practical, then run install, tests, type check, validator, and production build. Record breaking changes and any migration work.

## Security note

The pinned framework dependency tree has emitted npm audit advisories in CI. The current audit reporting step surfaces counts but does not remediate packages. Resolve the outstanding advisories before treating the app as production-ready.

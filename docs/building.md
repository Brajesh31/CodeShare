# 🏗️ Building CodeShare

## Build requirements

Use Node.js 22 and npm. The project manifest supports Node.js 20.9.0 or newer. The committed lockfile is the source of truth for the dependency graph.

## Reproducible build

```bash
nvm use
npm ci
npm run typecheck
npm run build
```

## Output

Next.js writes generated build output beneath .next/. Do not commit this directory. The production server command is:

```bash
npm start
```

## Build verification

The CI workflow also runs Node contract tests, repository validation, YAML parsing, Mermaid source checks, and npm advisory reporting.

A successful build confirms compilation and static generation for the configured routes. It does not prove browser usability, cross-browser layout correctness, collaboration, authentication, or accessibility conformance.

## Troubleshooting

- Confirm the Node runtime with node --version.
- Reinstall with npm ci rather than mixing package managers.
- Inspect the first meaningful Next.js or TypeScript error.
- Check that package.json and package-lock.json remain synchronized.
- Avoid force-upgrading the framework without a migration plan and complete validation.

See [build failure runbook](runbooks/build-failure.md).

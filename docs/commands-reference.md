# ⌨️ Commands Reference

Run from the repository root with Node.js 22 and npm.

| Command | Description |
|---|---|
| `npm ci` | Install the exact committed dependency graph |
| `npm run dev` | Start Next.js development server |
| `npm run build` | Compile optimized production app |
| `npm start` | Serve the production build |
| `npm test` | Run Node built-in tests |
| `npm run typecheck` | Run TypeScript without output |
| `npm run validate` | Validate repository contracts and Markdown local links |
| `npm run audit:security` | Summarize npm audit severity counts |

## Local workflow

```bash
nvm use
npm ci
npm test
npm run typecheck
npm run validate
npm run build
```

Then run `npm run dev` and inspect `http://localhost:3000`.

## Audit command behavior

The audit script uses the configured npm registry. It writes a severity summary to the console and, in GitHub Actions, to the job summary. It currently warns rather than fails when advisories exist. Review [dependency security](dependency-security.md) and do not interpret a successful audit-report step as a vulnerability-free dependency tree.

## Troubleshooting

- If Node differs from CI, install Node 22 or use `nvm use`.
- If installation fails, verify registry access and lockfile integrity before regenerating anything.
- If a quality check fails, run that exact command locally and preserve its complete non-sensitive output.
- Do not commit `.next/`, `node_modules/`, or local environment secrets.

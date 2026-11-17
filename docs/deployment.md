# Deployment

## Current architecture

CodeShare is a Next.js App Router application. A deployment needs a host capable of running the Next.js production output. The repository does not provide a separate collaboration server or database.

## Pre-deployment gates

1. Review the current feature/limitation matrix in [product overview](product-overview.md).
2. Install from the committed lockfile using `npm ci`.
3. Run `npx tsc --noEmit`.
4. Run `npm run build`.
5. Test `/` and `/editor` using a production-like environment.
6. Confirm there are no secrets in browser code or `NEXT_PUBLIC_*` values.
7. Review external avatar requests and font build configuration.
8. Ensure the release notes do not describe mock UI as live collaboration or model-backed AI.

## Runtime

Typical production commands:

```bash
npm ci
npm run build
npm start
```

The host must use a supported Node.js runtime and configure the start command/port according to its Next.js hosting model.

## Environment variables

No environment variables are currently required by the routed prototype. Do not invent dummy credentials or server endpoints to satisfy a deployment check.

## Rollback

Redeploy a previously verified Next.js build or revert a known problematic commit. See [deployment-rollback.md](runbooks/deployment-rollback.md).

## Not included

No collaboration WebSocket server, auth provider, AI proxy, database, migration, or room storage is deployed by this repository.

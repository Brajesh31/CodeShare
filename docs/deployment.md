# 🚀 Deployment

## Current architecture

CodeShare is a Next.js App Router application. A deployment target must support the Next.js production build and start process. This repository does not configure a specific host, domain, CI deployment, collaboration server, or database.

## Pre-deployment gates

1. Review the feature and limitation matrix in [product overview](product-overview.md).
2. Resolve or explicitly block on critical/high dependency advisories.
3. Install from the committed lockfile using npm ci.
4. Run npm test.
5. Run npm run typecheck.
6. Run npm run validate.
7. Run npm run build.
8. Test / and /editor using the production build on the target runtime.
9. Confirm there are no secrets in browser code or NEXT_PUBLIC_ values.
10. Review external avatar requests and font build configuration.
11. Ensure release notes do not describe mock UI as live collaboration or model-backed AI.
12. Record the host, Node runtime, environment configuration, deployment operator, and rollback process.

## Runtime commands

```bash
npm ci
npm run build
npm start
```

The host must use Node.js 20.9.0 or newer; Node 22 is the tested runtime. Configure the port and start command according to the selected Next.js hosting model.

## Environment variables

No environment variables are currently required by the routed prototype. Do not invent dummy credentials or server endpoints to satisfy a deployment check.

## Deployment and rollback

No automated deployment workflow or specific production target is configured in this repository. Use a host's verified deployment process, retain a known-good revision, and follow [deployment rollback runbook](runbooks/deployment-rollback.md).

## Not included

No collaboration WebSocket server, authentication provider, AI proxy, database, migration, or room storage is deployed by this repository. A successful production build does not make those capabilities available.

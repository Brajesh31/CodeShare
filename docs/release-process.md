# 🚀 Release Process

## Current release model

The repository has no tagged semantic release cadence or deployment manifest. Production output is a Next.js build.

## Pre-release checks

1. Confirm README and docs match implemented behavior.
2. Review the diff for secrets, local environment files, build output, and unrelated changes.
3. Run `npm ci`.
4. Run `npx tsc --noEmit`.
5. Run `npm run build`.
6. Verify `/` and `/editor` in a production-like environment.
7. Confirm mock collaboration and AI behavior are disclosed.
8. Review security, privacy, dependency, and asset terms.
9. Update `CHANGELOG.md` and roadmap where applicable.

## Publish

Deploy using the hosting provider's supported Next.js workflow. No collaboration server or database deployment is configured by this repository.

## Rollback

Redeploy a previously verified build or revert the specific code commit. Follow [the rollback runbook](runbooks/deployment-rollback.md).

## Release honesty

A deploy of the UI prototype is not a release of a secure real-time collaboration service. Do not use release notes to imply functionality that has not been implemented.

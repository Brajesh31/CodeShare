# 🚀 Deployment Checklist

## Release metadata

| Field | Value |
|---|---|
| Release/version | |
| Commit | |
| Environment | |
| Deployment owner | |
| Reviewer | |
| Planned window | |
| Rollback owner | |

## Pre-deployment

- [ ] Scope and release notes reviewed
- [ ] Dependency advisories reviewed and accepted/remediated
- [ ] Lockfile is committed and `npm ci` succeeds
- [ ] `npm test` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run validate` passes
- [ ] `npm run build` passes
- [ ] Environment variables and secrets are configured in the host, not source
- [ ] Hosting runtime and Node version are supported
- [ ] Backup and restore requirements are understood if data is persisted
- [ ] Security/privacy changes have been reviewed
- [ ] Known limitations are disclosed to users

## Deployment

Record host, artifact, build ID, operator, start/end time, and commands or platform action used. Do not put secrets in this record.

## Post-deployment verification

| Check | Expected result | Actual result | Evidence |
|---|---|---|---|
| Landing route | | | |
| Editor route | | | |
| Browser console | | | |
| Main interaction smoke test | | | |
| Security headers/configuration | | | |
| Monitoring/health check | | | |

## Rollback decision

- [ ] No rollback required
- [ ] Rollback initiated

Reason, approver, revision restored, and verification evidence:

## Sign-off

Deployment owner, reviewer, timestamp, residual risks:

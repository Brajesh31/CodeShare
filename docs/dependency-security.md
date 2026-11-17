# 🧬 Dependency Security

## Current baseline

The project uses npm with a committed v3 lockfile. A GitHub Actions run on 2026-11-17 reported eight npm audit findings: one moderate, six high, and one critical. CI now calls `npm audit` through `scripts/audit-dependencies.mjs` and reports severity counts. That script is informational and is not a remediation.

## Dependency review process

For every significant update:
1. Identify direct and transitive package changes.
2. Read the advisory and determine affected versions and attack conditions.
3. Check whether a patched release exists in the current compatible framework line.
4. Read upgrade and migration notes.
5. Update the manifest and regenerate the lockfile with npm.
6. Run `npm ci`, `npm test`, `npm run typecheck`, `npm run validate`, and `npm run build`.
7. Inspect the application behavior for regressions.
8. Record the reason, versions, test evidence, and residual risk.

## Avoid unsafe remediation

Do not run `npm audit fix --force` without a reviewed migration plan. A forced major update may break Next.js, React, Mantine, or the build pipeline. On the other hand, leaving critical advisories unresolved is not an acceptable production posture. Balance compatibility work with risk reduction and do not deploy sensitive or public production workloads until a reviewed patch path has been completed.

## Current candidates

- Next.js is pinned to 15.3.1 and requires urgent review/update.
- React and React DOM use major-version ranges resolved by the lockfile; the actual locked versions must be inspected during an update.
- `socket.io-client` is not imported by the routed UI; decide whether to remove it or retain the experiment.
- GitHub Actions use major-version tags. Review action permissions and release/security guidance regularly.

## Automation

Dependabot checks npm and GitHub Actions weekly. The quality workflow reports npm audit counts weekly and on pushes/PRs. Future CodeQL and dependency-review workflows provide additional checks, but no automated scanner replaces human review.

## Evidence

Attach the npm audit report or summarized advisory output to the dependency-review record. Never mark the backlog resolved based only on a successful TypeScript compile or build.

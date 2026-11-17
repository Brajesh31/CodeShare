# 🛠️ Operations

## Current operational scope

CodeShare has no deployed backend, database, persistent user content, or configured production hosting target in this repository. Operational procedures currently focus on local development, dependency maintenance, repository CI, and source recovery.

## Current operational commands

| Task | Command or location |
|---|---|
| Install exact dependencies | `npm ci` |
| Run contract tests | `npm test` |
| Type check | `npm run typecheck` |
| Validate docs and repository paths | `npm run validate` |
| Check tracked project tree | `npm run docs:tree:check` |
| Review dependency advisories | `npm run audit:security` |
| Build production output | `npm run build` |
| Run local app | `npm run dev` |

## Operational ownership

The repository owner reviews Dependabot proposals, quality workflow failures, CodeQL results, private vulnerability reports, and documentation issues. No formal on-call rotation or response SLA is declared.

## Routine maintenance

- Review critical/high npm audit findings and update PRs.
- Review GitHub Actions permissions and failures.
- Verify generated project structure after adding or removing tracked paths.
- Keep runbooks and known issues aligned with actual code.
- Preserve credentials outside Git.
- Review third-party resources and license boundaries.

## Future service operations

If a backend is introduced, define health checks, monitoring, log redaction, alert ownership, capacity, backups, restore procedures, incident response, deployment rollback, and retention. Do not publish operational status claims until the controls are live and verified.

# 🛠️ Maintenance Guide

## Maintenance responsibilities

The repository maintainer should keep the application source, package manifest, lockfile, workflows, documentation, and issue templates consistent. Maintenance should prioritize security and correctness over adding visible file count.

## Routine schedule

| Frequency | Activity | Evidence |
|---|---|---|
| Each change | Run tests, typecheck, validate, build | CI run and PR summary |
| Weekly | Review Dependabot PRs and audit summaries | Reviewed PRs/advisory notes |
| Monthly | Review known issues, technical debt, and workflow noise | Updated issue/register |
| Quarterly | Review supported runtime, dependencies, external assets, and docs | Maintenance review entry |
| Before release | Verify release checklist, dependency risks, and route smoke tests | Release evidence |

## Dependency maintenance

Use weekly Dependabot pull requests as input, not automatic approval. Review release notes, security advisories, peer dependency constraints, and upgrade steps. Regenerate lockfiles using npm and run the complete quality suite.

## Documentation maintenance

When a component or route changes, update:
- component and route references;
- README and project structure;
- architecture and data-flow diagrams;
- tests and manual smoke procedures;
- known issues and roadmap;
- security/privacy documentation if data behavior changes.

## Removing files

Preserve project code and assets unless a reviewed change proves a file is unused and the owner agrees to remove it. Before deleting:
1. search imports and references;
2. check scripts, CI, README and docs;
3. verify no external consumers depend on it;
4. retain useful history or an intentional migration note;
5. review the diff before merge.

## Maintenance record

Record date, commit, files reviewed, tests run, open risks, decisions, and next owner. Use the maintenance checklist template.

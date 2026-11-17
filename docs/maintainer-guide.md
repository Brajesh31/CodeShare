# 🧑‍🔧 Maintainer Guide

## Maintainer responsibilities

Maintain the public accuracy of the repository, review changes, protect credentials, triage issues, keep dependencies current, and ensure the documentation reflects the tracked code. A merged PR or green build does not remove the need to assess operational and security risk.

## Pull request review

1. Verify the request matches project scope.
2. Inspect the complete diff, including assets and generated files.
3. Confirm tests cover changed behavior.
4. Review dependency and license changes.
5. Check accessibility and privacy implications.
6. Ensure the README, project structure, diagrams, and related docs are current.
7. Require the configured CI workflows to pass.
8. Document accepted risks and follow-up owners.

## Security response

Use private reporting as described in SECURITY.md. Never request a reporter to publish a credential or exploit payload in a public issue. Rotate exposed secrets and identify affected systems before considering the incident closed.

## Dependency maintenance

Review Dependabot PRs weekly. Prioritize critical/high advisories. For major framework upgrades, use a dedicated branch, review migration notes, regenerate the lockfile with npm, and run the entire quality suite.

## Releases

Use the release and deployment checklists. Do not imply a deployment target exists until one is configured. Keep release notes factual and list remaining product/security limitations.

## Repository housekeeping

Review issue templates, stale docs, unused files, workflow permissions, branch protection, project status, and technical debt periodically. Preserve tracked IDE metadata and sample assets unless a dedicated cleanup change verifies their removal is safe.

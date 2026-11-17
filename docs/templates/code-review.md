# 🔍 Code Review Checklist

## Review metadata

| Field | Value |
|---|---|
| Pull request | |
| Author | |
| Reviewer | |
| Revision | |
| Review date | |

## Change summary

Describe what changed, why it changed, and how a reviewer can reproduce the behavior.

## Correctness and maintainability

- [ ] Change solves the stated problem.
- [ ] Existing behavior is preserved unless intentionally changed.
- [ ] No fake or misleading product claims were introduced.
- [ ] Types, error states, and boundaries are clear.
- [ ] No dead imports, unused state, or misleading comments remain.
- [ ] New dependencies are justified and reviewed.
- [ ] No secrets or personal data are committed.

## Quality and evidence

- [ ] `npm test` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run validate` passes.
- [ ] `npm run build` passes.
- [ ] Relevant manual browser tests are recorded.
- [ ] Screenshots are real and include useful context, where relevant.

## Security, privacy and accessibility

- [ ] New inputs and external data are handled safely.
- [ ] Data flow and retention documentation is updated where needed.
- [ ] Server operations are authorized if backend functionality is added.
- [ ] Keyboard and focus behavior is preserved.
- [ ] Icon-only controls have accessible names.
- [ ] Color contrast and reduced motion are considered.
- [ ] Threat model and dependency review are updated where relevant.

## Review outcome

- [ ] Approve
- [ ] Request changes
- [ ] Comment only

Blocking findings, evidence, and required follow-up:

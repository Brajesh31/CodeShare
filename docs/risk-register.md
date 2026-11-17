# ⚠️ Project Risk Register

## Risk rating

This register is a qualitative review of the current source and likely product expansion. It is not a formal risk assessment performed by a security auditor.

| ID | Risk | Likelihood | Impact | Rating | Treatment |
|---|---|---|---|---|---|
| R-01 | Vulnerable locked dependencies remain unresolved | High | Critical | Critical | Prioritize patched compatible upgrades and evidence |
| R-02 | Visitor assumes prototype protects confidential code | Medium | High | High | Strong copy disclosures; no fake connection states |
| R-03 | External avatar host availability/privacy changes | Medium | Low | Medium | Replace with local initials or reviewed assets |
| R-04 | contenteditable behavior causes data entry/accessibility issues | High | Medium | High | Evaluate robust editor engine and add interaction tests |
| R-05 | Duplicate editor shell drifts from active route | Medium | Low | Medium | Consolidate only after import and user-impact review |
| R-06 | Legacy Socket.IO experiment is mistaken for a supported service | Medium | Medium | Medium | Document as inactive; decide retention |
| R-07 | Future auth/rooms are added without isolation controls | Medium | Critical | Critical | Threat model and authorization tests before launch |
| R-08 | AI provider receives user source without clear consent | Medium | High | High | Provider/privacy assessment and explicit UX |
| R-09 | No browser test suite misses interaction regressions | High | Medium | High | Add E2E coverage when test environment is selected |
| R-10 | Accessibility issues remain unidentified | Medium | High | High | Complete keyboard, screen reader, contrast, and zoom audit |

## Risk treatment

- **Mitigate:** reduce probability or impact through engineering controls and tests.
- **Avoid:** do not ship the feature until required controls exist.
- **Accept:** only with documented owner, rationale, time limit, and compensating controls.
- **Transfer:** use a provider or service contract where appropriate, without assuming liability disappears.

## Review rules

Review critical risks before any production deployment. Update rating only when there is new evidence. A document update or a passing compile is not mitigation evidence for a runtime vulnerability.

## Related registers

See [technical debt](technical-debt.md), [threat model](threat-model.md), [dependency security](dependency-security.md), and [known issues](known-issues.md).

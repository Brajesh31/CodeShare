# ⚠️ Security Risk Register

## Status

This register records known security concerns from source inspection and the current dependency audit. It is not a formal independent security assessment.

| ID | Risk | Severity | Current control | Required action |
|---|---|---|---|---|
| SR-01 | Critical/high dependency advisories in committed lockfile | Critical/High | npm audit report, Dependabot | Upgrade compatible patched packages and re-run verification |
| SR-02 | Prototype mistaken for a secure collaboration product | High | README and UI disclosures | Keep local/demo limitations prominent |
| SR-03 | No authentication or authorization | High if private data is introduced | No private-data use warning | Design identity and resource-level access controls before server features |
| SR-04 | No persistence or backup system | Medium | Data boundary documentation | Define backup/restore before adding durable user data |
| SR-05 | External avatar image requests | Low/Medium | External dependency documented | Consider local initial avatars or an approved asset source |
| SR-06 | Legacy unreferenced Socket.IO experiment | Medium | Not imported by active routes | Decide retention and remove stale dependency only after review |
| SR-07 | No completed accessibility audit | Medium | Audit plan and checklist | Perform keyboard, screen-reader, contrast, and reflow review |
| SR-08 | No browser E2E suite | Medium | Manual smoke test and contract tests | Add repeatable browser interaction coverage |

## Risk acceptance

Do not accept a critical dependency issue only because an upgrade is inconvenient. If a temporary exception is unavoidable, document the exact advisory, exposure, compensating control, accountable owner, expiry, and approval.

## Review cadence

Review this register before any public production deployment and after adding identity, network APIs, real-time transport, persistence, file uploads, or AI provider access.

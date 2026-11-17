# 🛡️ Threat Model

## Scope

This is a lightweight threat assessment of the current repository and its likely future expansion. It is not a formal penetration test, security certification, or proof of vulnerability absence.

## Assets and trust boundaries today

| Asset | Current location | Exposure |
|---|---|---|
| Sample source text | Browser component state | Visible to the current browser user |
| Chat examples and messages | Browser component state | Visible in the active page; lost on reload |
| Static profile names | Frontend source | Public sample data |
| Dependencies | npm lockfile and build pipeline | Supply-chain risk |
| External avatar requests | Browser to pravatar.cc | Third-party request metadata |
| Font assets | Next font build/runtime pipeline | External asset dependency |

There is no account store, private room, server document, real message service, model provider, or database in the current implementation.

## Threat scenarios

| ID | Scenario | Current relevance | Mitigation or decision |
|---|---|---|---|
| TM-01 | User assumes “Connected” UI means private transport | Prototype UI risk | Use explicit local-demo labels; test copy |
| TM-02 | User enters confidential code believing it is protected | High impact misuse | Prominent warning; no claims of private storage |
| TM-03 | Malicious dependency compromises build or users | Current supply-chain risk | Audit, review updates, least privilege, lockfile |
| TM-04 | External avatar host tracks requests or fails | Current third-party risk | Consider local initials or approved asset hosting |
| TM-05 | Unsafe HTML rendering creates injection risk | Future UI risk | Render content as text; avoid unsafe HTML |
| TM-06 | Cross-room access leaks documents | Future only | Server authorization and isolation tests before rooms |
| TM-07 | AI provider receives source code without informed consent | Future only | Explicit disclosure, server proxy, data minimization |
| TM-08 | Stolen session permits workspace abuse | Future only | Session lifecycle, revocation, CSRF/origin protections |

## Required future controls

- Threat-model every server or data-flow change.
- Validate all request and event payloads server-side.
- Authorize each document, message, room, and export operation.
- Use WSS with strict origin validation.
- Set payload size limits, rate limits, and abuse handling.
- Keep provider credentials on a server and rotate them.
- Define retention, deletion, backups, and audit access.
- Test authorization failures and data-isolation boundaries.

## Review triggers

Update this model when adding authentication, APIs, WebSockets, persistent storage, file uploads, AI provider access, external integrations, or deployment infrastructure. Record decisions using [security/privacy review template](templates/security-privacy-review.md).

## Residual risk

The most important current risk is misuse of the prototype as though it were a secure collaboration service. The dependency tree also has unresolved npm audit advisories; see [dependencies](dependencies.md).

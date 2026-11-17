# 📋 Functional Requirements

## Purpose

This document records the observable requirements for the current CodeShare prototype. It separates requirements satisfied by the UI from requirements needed by a future connected collaboration service.

## Current prototype requirements

| ID | Requirement | Current status | Verification |
|---|---|---|---|
| FR-01 | The application shall render a landing page at `/`. | Implemented | Production build and route smoke test |
| FR-02 | The landing page shall link to the editor route. | Implemented | Contract test and browser check |
| FR-03 | The editor shall be directly reachable at `/editor`. | Implemented | Production build and route smoke test |
| FR-04 | The editor shall display editable sample text. | Implemented locally | Manual browser check |
| FR-05 | The language control shall expose the supported labels in its selector. | Implemented as local state | Manual browser check |
| FR-06 | The workspace shall allow a local theme toggle. | Implemented | Manual browser check |
| FR-07 | The chat panel shall open and close. | Implemented | Manual browser check |
| FR-08 | The team chat tab shall append local messages. | Implemented in React state | Manual browser check |
| FR-09 | The AI preview shall show a fixed demo response. | Implemented | Manual browser check |
| FR-10 | Sample presence shall be visually represented. | Static sample state | Manual browser check |
| FR-11 | UI copy shall not imply live connectivity or real AI where none exists. | Required contract | Automated test and copy review |
| FR-12 | The source shall build and pass the repository checks. | CI-gated | GitHub Actions |

## Future connected-product requirements

The following are not current implementation requirements. They are a starting point for future product discovery and must be refined before development.

| ID | Proposed requirement | Preconditions |
|---|---|---|
| FUT-01 | A user can authenticate and manage a session. | Identity provider decision and threat model |
| FUT-02 | An authorized user can create a private room. | Server-side identity and authorization |
| FUT-03 | A room member can invite another user. | Invitation lifecycle, expiry, abuse controls |
| FUT-04 | Authorized participants can edit a shared document. | Editor engine and synchronization protocol |
| FUT-05 | Document state survives reload. | Persistence and retention design |
| FUT-06 | Team messages reach room members. | Authenticated real-time transport |
| FUT-07 | Presence reflects actual connected sessions. | Heartbeats, disconnect, reconnect behavior |
| FUT-08 | AI requests are routed through a protected server service. | Provider, consent, data minimization, budget policy |
| FUT-09 | Users can export and delete stored work. | Data lifecycle implementation |
| FUT-10 | Administrators can investigate security events. | Audit design and access policy |

## Acceptance and traceability

Do not mark a future requirement as implemented when only its UI exists. A completed requirement needs:
- a testable user scenario;
- permission and failure behavior where relevant;
- evidence from a passing test or review;
- updated documentation and known-issue status;
- an owner for maintenance.

Use the [feature specification template](templates/feature-brief.md) and [test plan template](templates/test-plan.md) for substantial changes.

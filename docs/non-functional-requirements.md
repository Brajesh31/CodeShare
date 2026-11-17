# ⚙️ Non-Functional Requirements

## Status and interpretation

This is a prototype, not a production service. The requirements below describe a baseline for responsible maintenance and identify quality attributes that must be measured before a production promise is made.

## Current engineering baseline

| Attribute | Current expectation | Evidence or limitation |
|---|---|---|
| Reproducibility | Install from committed npm lockfile | `npm ci` in CI |
| Runtime consistency | Node 22 in development and CI | `.nvmrc` and workflow |
| Type safety | TypeScript compilation succeeds | `npm run typecheck` |
| Regression control | Contract tests protect repository assumptions | `npm test` |
| Documentation integrity | Required files and local links checked | `npm run validate` |
| Buildability | Next.js production build completes | `npm run build` |
| Security | Known dependency advisories must be reviewed and fixed | Audit currently reports outstanding findings |
| Privacy | Do not treat the UI as a secure collaboration channel | No auth, server, or persistence |
| Accessibility | Keyboard and assistive-technology review is required | No audit result claimed |
| Performance | Measure actual browser behavior before making budgets | No RUM or benchmark baseline |

## Future production quality attributes

Before a production launch, define measurable requirements for:

1. **Availability:** service objective, maintenance windows, and failure communication.
2. **Latency:** editor input response, document propagation, chat delivery, and reconnect time.
3. **Consistency:** behavior for concurrent edits, reconnects, stale tabs, and lost messages.
4. **Security:** identity assurance, least privilege, isolation between rooms, secure transport, and abuse prevention.
5. **Privacy:** data categories, provider disclosures, retention, export, and deletion.
6. **Accessibility:** keyboard operation, focus, screen reader semantics, contrast, zoom, and reduced motion.
7. **Compatibility:** supported browsers, devices, and viewport widths.
8. **Operability:** monitoring, alerting, logs, backups, restore tests, and incident ownership.
9. **Scalability:** concurrent rooms, users, documents, message rates, and storage growth.
10. **Maintainability:** dependency ownership, test coverage for critical logic, release notes, and rollback.

## Performance budgets

Do not invent numeric performance targets. Establish them with a representative browser, device, network profile, and measurement method. Capture baseline bundle sizes, interaction performance, memory use for larger documents, and server latency once a real server exists.

## Quality gates

A passing CI workflow means only the steps in that workflow passed. It is not a warranty of uptime, security, accessibility conformance, or production readiness.

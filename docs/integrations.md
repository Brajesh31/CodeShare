# 🔌 Integrations

## Current integration status

The active CodeShare UI has no supported product integrations. It does not communicate with a third-party collaboration API, identity provider, database, AI provider, or voice service.

The repository does include development/build integrations:
- npm package registry for dependency installation;
- GitHub Actions for CI and static security workflows;
- Dependabot for package update proposals;
- CodeQL for code analysis;
- dependency review for pull-request dependency changes;
- external avatar and font asset sources.

## Legacy Socket.IO experiment

pagebackup.tsx contains an unreferenced Socket.IO client experiment aimed at a localhost endpoint. There is no matching server implementation, and the active routed editor does not import the client. The event names in that file are not a supported integration contract.

## Integration approval checklist

Before implementing an external service:
1. Document the exact user task and data exchanged.
2. Identify system owner, credentials, permissions, and secret location.
3. Define request/event schemas, timeouts, retries, idempotency, and rate limits.
4. Define failure UX and degraded behavior.
5. Review provider terms, privacy, retention, and regional handling.
6. Add integration tests and observability.
7. Document how to rotate credentials and disconnect/replace the provider.

## No fake adapters

Do not add empty clients, placeholder endpoints, or hard-coded “connected” statuses to imply an integration works. Update this document only when a real provider connection and verification path exist.

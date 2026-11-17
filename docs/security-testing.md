# 🧪 Security Testing

## Current test coverage

The current application has no authentication, server API, database, private rooms, or collaboration transport. There are therefore no meaningful authorization integration tests for those absent services.

Existing automation includes:
- npm audit reporting;
- CodeQL JavaScript/TypeScript analysis;
- dependency review on pull requests;
- repository contract tests;
- type checking and production build.

These checks are not a penetration test and do not establish that the deployed hosting environment is secure.

## Current review checklist

- [ ] No private key or credential is committed.
- [ ] No private value is exposed through NEXT_PUBLIC configuration.
- [ ] External asset requests are documented.
- [ ] Dependencies and npm audit results are reviewed.
- [ ] UI copy does not claim authentication, private rooms, or connected services.
- [ ] User-controlled editor/chat text is rendered as text.
- [ ] Workflow permissions are limited to what each job requires.

## Required tests before adding server features

For authentication, test invalid/expired/revoked sessions, account recovery, CSRF/origin behavior, and rate limits. For authorization, test cross-user and cross-room access, stale memberships, and direct calls to server actions. For WebSockets, test origin checks, message validation, payload limits, replay, reconnect, room isolation, and revocation. For persistence, test export/deletion, backup protection, and restore. For AI integration, test data minimization, secret isolation, provider failure, and policy enforcement.

## Evidence standard

Record revision, environment, scope, tools, findings, remediation, and residual risks. Do not publish a security-pass badge based only on static analysis or build completion.

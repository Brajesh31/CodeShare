# 📈 Monitoring and Observability

## Current state

The repository does not configure application metrics, tracing, error-reporting SDKs, uptime monitors, alert routes, or a production observability provider. There is no application backend to instrument.

The browser may log ordinary development diagnostics, but console output is not production monitoring.

## Future monitoring requirements

If a production service is introduced, decide which signals are necessary and privacy-safe:

- service availability and route error rates;
- request latency and saturation;
- WebSocket connection and reconnect rates;
- document synchronization failures;
- message queue and persistence health;
- authentication and authorization failures;
- external provider errors and rate limits;
- dependency/runtime health.

## Privacy and security constraints

Do not capture source code, chat contents, AI prompts, credentials, session tokens, or full request bodies by default. Use correlation IDs and minimal event context. Restrict access to telemetry, set retention periods, and review third-party processor terms.

## Alert design

Define severity, actionable condition, owner, escalation, runbook link, and recovery criteria for every alert. Avoid noisy alerts with no clear action.

## Verification

Test alert delivery, redaction, access permissions, retention, and response runbooks in the actual deployed environment. Document the provider and configuration before claiming monitoring is enabled.

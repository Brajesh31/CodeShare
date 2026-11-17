# 🧯 Operational Runbooks

These runbooks cover the current Next.js prototype and the boundaries of its local-only behavior.

| Runbook | Use when |
|---|---|
| [Local startup](local-startup.md) | Running the app locally |
| [Build failure](build-failure.md) | A production build fails |
| [Editor/chat prototype triage](prototype-triage.md) | A UI interaction does not behave as expected |
| [Dependency update](dependency-update.md) | Reviewing package updates |
| [Deployment rollback](deployment-rollback.md) | Reverting a deployment |
| [Secret exposure](secret-exposure.md) | A credential is committed or exposed |

## Important

There is no collaboration server, database, or AI provider to restart or recover. Do not treat hard-coded presence or chat UI as a production incident signal.

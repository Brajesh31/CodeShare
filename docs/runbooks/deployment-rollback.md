# Runbook: Deployment Rollback

1. Identify the failed deployment and its commit SHA.
2. Locate the previous known-good build.
3. Review database/migration effects. The current repository has no database migrations.
4. Redeploy the prior verified Next.js artifact or revert the problematic code commit.
5. Check both `/` and `/editor`.
6. Inspect runtime logs and browser console.
7. Record the reason, impact, rollback revision, and verification performed.

Rolling back the UI does not create or restore collaboration-server functionality. No collaboration backend is defined in this repository.

# 🔑 Secret Management

## Current state

The routed application currently reads no environment variables. The `.env.example` file is informational and contains no real values. No private AI key, database password, auth secret, or Socket.IO server credential should be present in the repository.

## Rules for contributors

1. Never commit API keys, passwords, tokens, private certificates, or personal access tokens.
2. Treat every `NEXT_PUBLIC_*` value as browser-visible.
3. Do not place secrets in client components, page props, static assets, screenshots, logs, issue reports, or documentation examples.
4. Use clearly fake placeholders in examples, for example `replace-with-local-secret`.
5. Keep local environment files out of Git.
6. Rotate any credential that may have been exposed. Deleting it from the latest commit is not sufficient because Git history may retain it.

## Future server-side configuration

When a backend or AI proxy is added, choose a secret manager or deployment platform's protected environment configuration. Restrict access by environment and role, rotate credentials, audit access where supported, and document incident ownership.

## Suspected exposure procedure

1. Do not copy or repost the secret in an issue.
2. Revoke or rotate the credential with its provider immediately.
3. Determine which systems and data the credential could access.
4. Review available provider audit logs.
5. Remove the secret from current source and history using an approved repository process.
6. Add a regression scan and record the incident without storing the value.
7. Follow [SECURITY.md](../SECURITY.md) for private reporting.

## Local files

Use `.env.local` only for future local-only values if the app begins to require them. Keep it ignored by Git, and update `.env.example` with names, purpose, and safe placeholder values only.

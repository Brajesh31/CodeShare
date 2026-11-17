# Runbook: Secret Exposure

1. Revoke or rotate the exposed credential immediately at its issuer.
2. Identify the repository file, commit, branch, artifact, or deployment where it appeared.
3. Remove the secret from active source/configuration.
4. Review Git history and public artifacts. Deleting the latest line does not remove history.
5. Follow the provider's procedure for invalidating leaked tokens and reviewing access logs.
6. Avoid repeating the secret in issues, logs, or chat.
7. Review `NEXT_PUBLIC_*` variables. Values with this prefix are public to the browser.
8. Document the incident and add prevention checks.

Contact the maintainer privately according to [SECURITY.md](../../SECURITY.md). Do not treat a public issue as a secure disclosure channel.

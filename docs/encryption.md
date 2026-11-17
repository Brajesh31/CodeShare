# 🔒 Encryption

## Current implementation

The current application does not persist editor documents or chat messages to a CodeShare server. It does not implement application-level encryption, key management, encrypted backups, or an encrypted collaboration protocol. Standard HTTPS behavior depends on the eventual hosting configuration and is not configured by this repository.

## Future transport requirements

Any production web deployment must use HTTPS. Real-time collaboration must use WSS. Enforce secure transport at the host and reverse proxy, disable insecure origins, and verify redirects and security headers in the deployed environment.

## Future storage requirements

If private documents or messages are persisted, assess encryption at rest through the chosen storage provider, backup encryption, key rotation, key access boundaries, and recovery. Define whether field-level encryption is justified by the data classification and query requirements.

## Key management

- Keep secrets and encryption keys on the server or in a managed secret/key service.
- Do not expose keys through Next.js client bundles or NEXT_PUBLIC variables.
- Separate production and development keys.
- Restrict who and what can use key material.
- Document rotation, revocation, backup, and emergency procedures.
- Avoid implementing custom cryptography.

## Verification

Review TLS configuration and certificate renewal on the actual host. Test that secrets do not appear in bundles, logs, source maps, browser storage, or error reports. Test backup restore with encrypted artifacts if backups are introduced.

## Status

No encryption-at-rest or application-managed key-management claim is made for this prototype. See [secret management](secret-management.md), [data protection](data-protection.md), and [security](security.md).

# 💾 Backup and Restore

## Current state

CodeShare does not store user documents or messages in a database. There is no application backup job, restore endpoint, or persistent user content to recover. The current application is built from source and an npm lockfile.

## Source recovery

The Git repository is the versioned source of truth. Preserve the main branch, release references where used, and required repository configuration. Keep private credentials outside the repository and recover them through the deployment provider's approved secret-management process.

## Future application data backups

If persistence is introduced, define:
- backup frequency and recovery-point objective;
- restore-time objective and service ownership;
- encryption and access control for backup artifacts;
- retention schedule and deletion requirements;
- geographic and provider failure assumptions;
- backup monitoring and alerting;
- tested restore procedures and evidence.

## Restore test requirements

A backup is not proven until it has been restored into an isolated environment and verified. Test document integrity, access controls, deletion semantics, encryption/key availability, and consistency between related records.

## Current limitation

Do not tell users that CodeShare can recover saved work. No saved document service currently exists. Any host-specific infrastructure backup is outside this repository and must be documented by the actual operator.

# 🗄️ Database and Persistence

## Current implementation

There is no database, ORM, migration system, server-side storage adapter, or persistent document store in this repository.

Editor text, selected language, theme state, chat messages, and panel visibility are stored in React component state. A page reload resets them.

## Future storage requirements

Before adding persistence, define:
- User identity and workspace/room ownership.
- Document and message schemas, validation, and versioning.
- Server-side authorization for every read/write.
- Backup, restore, retention, export, and deletion behavior.
- Audit events and abuse monitoring.
- Encryption and secret management requirements.

Never trust client-supplied room IDs or member identifiers without server-side authorization.

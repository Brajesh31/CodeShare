# Database and Persistence

## Current state

There is no database, storage adapter, or server-side persistence. Editor content, language selection, chat messages, active tab, theme, and presence UI are held in React component state. Reloading the page resets them.

## Future collaboration storage

Before introducing persistence, define ownership and access rules for rooms, files, messages, and user identities. Document data schemas, migrations, backups, retention/deletion, authorization, and recovery. Do not store private team code in a public bucket or trust client-submitted room/user identifiers without server validation.

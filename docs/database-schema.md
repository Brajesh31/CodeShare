# 🗄️ Database Schema Status

## Current status

There is no database schema or persistence layer in the checked-in CodeShare application. No SQL/NoSQL client, ORM, migration directory, schema definition, database configuration, or server-side storage code is present.

## Current state storage

The editor text, language selection, chat panel visibility, theme, and chat messages are held in React component state. This state is not a database record and is lost when the component remounts or page reloads.

## No ER diagram is applicable

A database ER diagram would be fabricated because no tables or entities are implemented. The current [data boundary diagram](diagrams/current-data-boundary.mmd) and [data retention document](data-retention.md) describe the actual local-only state.

## Future data model review

Before introducing persistence, define:
- user and project ownership;
- room membership and authorization rules;
- document versioning and concurrent update strategy;
- message lifecycle and moderation requirements;
- data classification and retention;
- export and deletion semantics;
- backup, recovery, and audit;
- indexes, query patterns, and data isolation.

Use [database schema template](templates/database-schema-template.md) for an approved future design. Clearly mark any proposal as proposed until schema migrations and runtime code exist.

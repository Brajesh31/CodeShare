# 🗑️ Data Deletion

## Current state

CodeShare does not have accounts, a backend, a database, saved documents, or server-side chat history. Editor and chat state exists only in the current component tree and is lost when the component is remounted or the page is reloaded.

There is no account deletion page, document deletion API, message deletion service, retention worker, or backup deletion process in the current repository.

## Current practical guidance

Do not enter confidential or sensitive content into the prototype with an expectation of protected storage or a managed deletion workflow. A browser reload resets the local React state, but that is not a formal data deletion guarantee for browser caches, browser extensions, screenshots, copied text, or third-party systems.

## Requirements before persistence

If user data is persisted in a future release, define:
- data categories and storage locations;
- who can request deletion and how identity is verified;
- object and relationship deletion semantics;
- behavior for shared documents and team messages;
- retention periods, legal holds, and abuse-investigation exceptions;
- backup expiry and restore behavior;
- third-party provider deletion requests;
- audit evidence without retaining deleted content;
- completion status and expected processing time.

## Verification

Test deletion for owners, members, removed users, expired accounts, shared content, replicas, exports, and backups. Verify that deleted data cannot be restored through ordinary application flows and document any backup retention exceptions.

## Related documents

See [data retention](data-retention.md), [data protection](data-protection.md), [backup and restore](backup-and-restore.md), and [privacy](privacy.md).

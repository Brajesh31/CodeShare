# 📏 Scope and Limitations

## In scope

- A Next.js App Router landing page.
- A local editor workspace route.
- Local code text and language label state.
- Local light/dark display state.
- A sample chat panel with local message state.
- A canned AI preview response.
- Static sample presence UI.
- Documentation, Node contract tests, repository validation, and GitHub Actions quality checks.

## Out of scope in this revision

- Multi-user synchronization.
- Authentication, sessions, and private rooms.
- Backend APIs, databases, and durable storage.
- Server-side AI provider integration.
- Voice or video services.
- Production observability, backups, and service-level guarantees.
- An IDE-grade editor with language server support.

## Limitations affecting use

The editor content is local and unpersisted. Chat messages reset on reload. Presence is hard-coded. The AI response is not generated. The language selector does not alter parsing or validation. External avatars may fail to load and disclose requests to the avatar host. The legacy Socket.IO experiment in `pagebackup.tsx` is not wired to a server and is not part of the routed app.

## Security and privacy boundary

Do not enter confidential code, credentials, customer data, or private discussions under the assumption that the prototype offers secure rooms or private accounts. There is no server-side identity or access-control boundary. The browser may request third-party avatar and font assets.

## How scope changes are approved

A major scope increase should include:
1. a feature brief and acceptance criteria;
2. a current-state and proposed architecture update;
3. security and privacy threat review;
4. dependency and license review;
5. test plan and rollback plan;
6. explicit product owner approval.

## Known unknowns

The repository does not establish the final target user, deployment environment, expected concurrent users, data retention period, authentication model, document conflict policy, or AI provider. These need product decisions rather than guesses.

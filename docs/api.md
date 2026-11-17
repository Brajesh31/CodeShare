# API and Route Reference

## Next.js routes

| Path | Source | Current behavior |
|---|---|---|
| `/` | `app/page.tsx` | Landing page |
| `/editor` | `app/editor/page.tsx` | Local editor/chat UI |

There are no `app/api` route handlers or server actions in the current tree.

## Current browser interactions

The editor, chat, language selection, theme, and panel visibility are local React state. They are not backed by a REST API or collaboration transport.

## Legacy Socket.IO experiment

`pagebackup.tsx` connects to `ws://localhost:3000/` and references these sample event names:
- `join-room`
- `code-changed`
- `code-changed-on-join`
- `get-room-users`
- `room-users`
- `user-connected`

This file is not the active `/` route and no server implementation exists here. These event names are not a supported API contract.

## Requirements for a future supported API

Document authentication, room authorization, request/event schemas, validation, message limits, rate limiting, error semantics, ordering, retry/reconnect behavior, version compatibility, logging, and retention. Include tests for unauthorized and cross-room access.

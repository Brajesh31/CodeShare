# API Reference

## Current routes

| Path | Behavior |
| --- | --- |
| `/` | Landing page component from `app/page.tsx` |
| `/editor` | Local editor/chat mock from `app/editor/page.tsx` |

There are no `app/api` handlers, application HTTP endpoints, or running Socket.IO server in this repository.

## Socket.IO status

`socket.io-client` is a dependency, but the routed editor components do not import it or establish a socket connection. `pagebackup.tsx` is an unreferenced experiment that connects to `ws://localhost:3000/` and emits `join-room`, `code-changed`, and `get-room-users` events. There is no server here to implement those events, so they are not a supported API.

## Chat behavior

The Team tab appends messages to local component state. The AI tab appends the same local user message and a generic fixed assistant reply after one second. No HTTP request, model API, or provider is involved.

If an API is added, document route/event schemas, authentication, authorization, errors, rate limits, data retention, and reconnect behavior before calling it supported.

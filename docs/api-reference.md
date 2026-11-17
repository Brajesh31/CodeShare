# 🔌 API and Route Reference

## Application routes

| Method | Path | Implementation | Behavior |
|---|---|---|---|
| GET | / | app/page.tsx | Landing page |
| GET | /editor | app/editor/page.tsx | Local workspace UI |

These are Next.js page routes, not JSON API endpoints.

## API status

The repository has no app/api route handlers, server actions, supported REST endpoints, GraphQL service, or WebSocket server. No API base URL or authentication scheme exists.

## Legacy experiment

pagebackup.tsx contains unreferenced client-side Socket.IO experiment code. It points to a local host URL and there is no matching server in this repository. It is not a supported API or integration contract.

## External requests

The UI may request avatar images from pravatar.cc. The root layout configures fonts with next/font/google. These are external assets, not CodeShare APIs.

## Future API documentation requirements

If endpoints are introduced, document method/path, version, request and response schemas, authentication, per-resource authorization, validation, error codes, rate limits, idempotency, event ordering, retention, and examples. Use [API documentation template](templates/api-documentation-template.md).

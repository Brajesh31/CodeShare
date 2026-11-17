# 🔐 Security Model and Limitations

## Current trust boundary

The routed application is primarily client-side UI. It has no authentication, session management, API routes, room membership checks, authorization middleware, database, or collaboration backend.

**Do not use it for confidential source code, private team discussion, or sensitive business information.** UI presence and “Connected” text do not represent authenticated users or a protected connection.

## Client-side exposure

- Browser-delivered code and values are visible to visitors.
- A `NEXT_PUBLIC_*` variable is public by design. Never store private keys there.
- Do not embed credentials in source, page props, browser storage, or public assets.
- Render untrusted editor and chat content as text. Avoid unsafe HTML injection.

## External resources

The presence component requests avatars from `pravatar.cc`. The root layout uses `next/font/google`, which may fetch font assets during build. Review third-party availability, privacy, and supply-chain behavior before public deployment.

## Legacy Socket.IO experiment

`pagebackup.tsx` contains an unreferenced experiment connecting to `ws://localhost:3000/`. No server is implemented in this repository. Do not expose this experiment as a supported endpoint or blindly deploy it.

## Requirements before real collaboration

A production collaboration service needs at minimum:
- Verified user identity and session lifecycle.
- Server-side room and project authorization on every operation.
- Secure WebSocket transport (WSS) with origin validation.
- Input validation, payload size limits, rate limits, and abuse controls.
- Membership and presence handling on disconnect and reconnect.
- Private secret management and least-privilege service credentials.
- Clear persistence, retention, backup, deletion, and audit policies.
- Tests for unauthorized room access, cross-room leaks, replay, and disconnect behavior.

## Reporting

Report suspected vulnerabilities privately according to [SECURITY.md](../SECURITY.md). Do not publish tokens, private source code, or exploit instructions in an ordinary issue.

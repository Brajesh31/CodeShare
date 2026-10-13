# Security Policy

## Supported versions

No release or support matrix is published. Reports should identify the affected commit or current default branch. This prototype has not been security audited.

## Reporting a vulnerability

Do not post exploit details, credentials, or confidential code in a public issue. Use GitHub's private vulnerability reporting for this repository when available. Otherwise, contact `@brajesh31` privately through the contact method on the GitHub profile. Include the affected file, impact, reproduction steps, and a safe follow-up route. A maintainer will coordinate a response when possible; no response-time guarantee is made.

Ordinary UI bugs can be reported publicly. Do not send real secrets as proof.

## Current security considerations

- The routed editor and chat screens keep content in local React state; they do not provide server-side access control or durable storage.
- The “Connected” label, online users, real-time collaboration, and AI assistant are mock UI. Do not rely on them for security or team communication.
- `pagebackup.tsx` contains an unreferenced Socket.IO experiment targeting `ws://localhost:3000/`; it has no corresponding server in this repository.
- Do not enter confidential source or chat content into this prototype under the assumption that it has a protected collaboration service.
- Any future `NEXT_PUBLIC_*` variable is delivered to the browser and must not contain secrets.
- Review external avatar/image and dependency behavior before deployment.

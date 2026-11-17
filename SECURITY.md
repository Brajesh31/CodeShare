# 🔐 Security Policy

## Supported versions

CodeShare currently publishes no tagged release or formal support matrix. Security reports should identify the affected commit and deployment context. The repository has not received a formal penetration test or independent security audit.

The current app is a front-end prototype, not a protected collaboration service. It has no authentication, authorization, private rooms, application API, database, persistent document storage, or real-time collaboration server.

## Reporting a vulnerability

Do not disclose secrets, exploit payloads, or confidential source code in a public issue.

Use GitHub's private vulnerability reporting for this repository when it is enabled. Otherwise, contact the maintainer privately through the contact method on the [GitHub profile](https://github.com/Brajesh31). Include the affected file/commit, impact, safe reproduction summary, and a private follow-up route. A maintainer will coordinate investigation on a best-effort basis; no response-time or remediation SLA is guaranteed.

Ordinary reproducible UI bugs and documentation defects may be reported publicly through the issue forms.

## Current security considerations

- Editor text, theme settings, and chat messages are held in client-side React state. The app does not transmit them to a CodeShare backend, persist them, or provide server-side room isolation.
- The active workspace labels its status as **Local demo** and its participants as **sample profiles**. These labels are not authentication or connection guarantees.
- The AI Preview returns a fixed response. No AI provider or server-side proxy is connected.
- `pagebackup.tsx` is an unreferenced Socket.IO experiment targeting a local URL. There is no corresponding server in this repository.
- Do not enter confidential source code, credentials, customer data, or private team discussion into the prototype under the assumption that it is protected.
- Any `NEXT_PUBLIC_*` value is browser-visible and must never contain secrets.
- The UI requests external avatar images from pravatar.cc. The root layout uses next/font/google for font assets.
- The dependency audit has reported a critical and multiple high-severity advisories in the currently locked dependency graph. Review [dependency security](docs/dependency-security.md); do not deploy the vulnerable dependency set as a public production service.

## Required before real collaboration

A connected product must have a reviewed authentication/session design, server-side authorization for each resource, secure transport, input validation, rate limits, secret management, privacy/data retention policies, audit and incident handling, and negative tests for cross-room access. UI indicators alone are not security controls.

## Security documentation

- [Threat model](docs/threat-model.md)
- [Security architecture boundary](docs/security.md)
- [Secret management](docs/secret-management.md)
- [Dependency security](docs/dependency-security.md)
- [Incident response](docs/incident-response.md)
- [Private reporting guidance](.github/ISSUE_TEMPLATE/config.yml)

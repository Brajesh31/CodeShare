# 🔒 Privacy and Data Handling

## Current routed behavior

The current app does not implement accounts, authentication, or server-side storage. Editor text and chat messages live in React state in the current browser tab. A reload clears them.

## Third-party requests

- `UserPresence.tsx` references avatar URLs on `pravatar.cc`. The browser sends a request to that external service when those images load.
- `app/layout.tsx` uses `next/font/google`. Font assets are obtained during the Next.js build process and bundled according to Next.js behavior.

## Information not currently collected by application code

No first-party analytics, in-app tracking, user account data, API-backed messages, or persistent editor documents are implemented in the routed application. Hosting infrastructure may independently collect request logs.

## Confidential information

Do not paste sensitive source, credentials, customer data, or private team discussions into this prototype. There are no room access controls or server-side isolation guarantees.

## Future changes

Before adding authentication, persistence, AI providers, analytics, or real-time transport, document:
- Data types collected and why.
- Where data is sent and stored.
- Who can access rooms, source, and messages.
- Retention, export, and deletion behavior.
- AI/model provider data terms where applicable.
- Consent, user notice, and security controls.

Update this notice before shipping any new data-processing behavior.

# 🔐 Authentication

## Current status

Authentication is **not implemented** in CodeShare. There is no sign-in or registration route, user identity provider, session cookie, password store, account recovery flow, or protected server endpoint. The static profile cards in the workspace do not represent authenticated users.

## Why this matters

Without a verified identity, the application cannot reliably distinguish one user from another or establish who owns a project or room. A client-side display name or user ID is not proof of identity and must never be used as the basis for server authorization.

## Requirements before adding authentication

A future implementation must define:
- supported identity methods and account lifecycle;
- registration/invitation policy and account recovery;
- secure session creation, renewal, expiry, and revocation;
- cookie attributes and CSRF protections for browser sessions;
- rate limiting and abuse controls for sign-in and recovery;
- account deletion, export, and data retention;
- administrative access and support recovery procedures;
- threat scenarios such as credential stuffing, session theft, and account enumeration.

## Architecture boundary

Authentication must be performed and verified server-side. Do not embed provider secrets in client components or trust a client-supplied user identifier. A future identity layer should expose only the minimum user claims needed by server-side authorization.

## Testing requirements

Include tests for invalid credentials, expired and revoked sessions, session fixation, account enumeration, recovery token reuse, and unauthorized requests. Validate cookie and origin behavior in the actual deployment environment.

## Documentation status

No login, session, or account feature should be described as available until its implementation, provider configuration, security review, and tests exist. See [authorization](authorization.md), [access control](access-control.md), and [threat model](threat-model.md).

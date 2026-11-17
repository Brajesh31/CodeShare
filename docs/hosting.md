# ☁️ Hosting

## Current deployment state

The repository does not configure a named production host, domain, reverse proxy, CDN, or automated production deployment. It is a Next.js App Router application and needs a compatible Node.js runtime to run its production build.

## Generic host requirements

A selected deployment platform should support:
- Node.js 20.9.0 or newer, with Node 22 as the tested runtime;
- npm install from the committed lockfile;
- Next.js build and start commands;
- environment-specific secret storage;
- TLS/HTTPS and security headers;
- log access and operational rollback;
- a documented support and incident owner.

## Build and start

    npm ci
    npm run build
    npm start

## Do not assume hosting controls

The app has no configured session service, database, WebSocket backend, or AI proxy. A host deployment does not add those capabilities automatically. Validate the public URL, HTTPS, runtime version, build logs, and routes after deploying.

## Production readiness

The current dependency audit has unresolved advisories. Resolve critical/high findings and verify the patched lockfile before public production deployment.

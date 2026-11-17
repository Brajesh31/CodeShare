# 🏭 Production Setup

## Current readiness

The repository does not declare a production hosting target, deployment domain, environment secret set, database, authentication provider, or collaboration server. The current application is a UI prototype and has outstanding dependency security findings.

Do not treat a successful Next.js build as production approval.

## Minimum application build

Use Node.js 22 and npm.

    npm ci
    npm test
    npm run typecheck
    npm run docs:tree:check
    npm run validate
    npm run audit:security
    npm run build
    npm start

## Required host configuration

A chosen platform must provide a supported Node runtime, Next.js start command, TLS/HTTPS, log access, rollback, secret storage if future variables exist, and an owner for incidents. No provider-specific setup has been validated in this repository.

## Pre-launch blockers

- Resolve critical and high dependency advisories and verify the locked versions.
- Complete a browser-level route and interaction smoke test.
- Complete security and accessibility review for the actual deployed configuration.
- Review external avatar and font asset requests.
- Confirm that the production copy continues to identify this as a prototype unless real collaboration is implemented.

## Post-deployment checks

Verify the landing and editor routes, HTTPS, browser console, asset loading, expected UI interactions, and deployment logs. Record the exact commit and host configuration reviewed.

## Not included

Do not invent environment variables, database migrations, health endpoints, collaboration ports, or AI provider credentials to fill this document. Add these only when the application actually uses them.

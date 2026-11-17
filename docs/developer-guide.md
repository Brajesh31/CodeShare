# 👩‍💻 Developer Guide

## Repository layout

The application lives in app/. Shared React components live in app/components/. Product and engineering documentation is organized under docs/. Repository scripts live in scripts/, and Node contract tests live in tests/.

See [project structure](project-structure.md) for the tracked-file tree and responsibilities.

## Local workflow

```bash
nvm use
npm ci
npm run dev
```

Use the landing route and /editor route to inspect the app. The current interaction state is local and ephemeral.

## Contribution expectations

- Preserve unrelated source and assets.
- Keep copy aligned with actual behavior.
- Avoid mock online indicators or fake backend calls.
- Add a regression test for a fixed bug.
- Update affected docs, diagrams, and known-issue records.
- Review dependency advisories and licensing.
- Run tests, type check, validator, and production build.

## Component boundaries

The active editor page composes the Editor, ChatPanel, and UserPresence components. The route owns theme and chat visibility. Editor owns code and language state. ChatPanel owns local message state. UserPresence renders static sample data.

## Future feature work

A server, database, authentication, or AI provider must not be integrated casually into a client component. Start with a reviewed architecture, data-flow and threat model, server-only secrets, access-control policy, tests, and operational ownership.

## Useful references

- [Code standards](code-standards.md)
- [Component architecture](component-architecture.md)
- [Test strategy](test-strategy.md)
- [Security](security.md)
- [Contributing policy](../CONTRIBUTING.md)

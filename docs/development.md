# Development

## Scripts

Use `npm ci` to install from the lockfile. The root package defines `npm run dev`, `npm run build`, `npm start`, and `npm run lint`. There is no test script or automated test suite.

## Working on a change

1. Create a focused branch from the current default branch.
2. Start the app with `npm run dev` and reproduce the relevant route.
3. Keep changes cohesive and follow the Next.js App Router/TypeScript structure.
4. Run lint/build checks when useful and report only checks actually performed.
5. Verify `/` and `/editor`, including the edited UI behavior.
6. Review the final diff for `.next`, build output, environment files, secrets, and unrelated files.
7. Update docs when routes, data flows, or setup change.

## Current implementation conventions

- Interactive components use the client component directive and React state.
- The current editor is a `contentEditable` element; do not describe it as Monaco, CodeMirror, or a compiler.
- Team chat and AI replies are in-memory simulations. Do not imply that they are synchronized or model-generated.
- Keep untrusted user content rendered as text rather than HTML.
- `pagebackup.tsx` is an unreferenced socket experiment; it is not the active `/` route or a supported collaboration protocol.

## Future networking

Before adding collaboration or AI services, define server endpoints/events, authentication, room permissions, validation, reconnect behavior, rate limits, provider secret handling, and data retention. Avoid sending confidential code to a provider without explicit handling and user disclosure.

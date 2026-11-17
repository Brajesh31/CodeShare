# Runbook: Dependency Update

1. Inspect the exact dependency and version change.
2. Review release notes, supported Node.js range, license, maintenance status, and security advisories.
3. Run `npm install <package>@<version>` or the chosen update command intentionally.
4. Review both `package.json` and `package-lock.json`.
5. Run `npm ci`, `npx tsc --noEmit`, and `npm run build`.
6. Review browser bundle impact for client-side dependencies.
7. Check whether the dependency is actually used by routed application code.
8. Update [dependencies.md](../dependencies.md) and release notes as needed.

The existing `socket.io-client` dependency is not imported by the routed editor screen.

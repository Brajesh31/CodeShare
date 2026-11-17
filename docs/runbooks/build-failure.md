# Runbook: Build Failure

1. Capture the full output of `npm run build`.
2. Record commit SHA, Node.js and npm versions.
3. Confirm dependencies are installed from the committed lockfile using `npm ci`.
4. Run `npx tsc --noEmit` to separate TypeScript errors from Next.js build errors.
5. Check the first actionable error, not only the final failure summary.
6. Verify environment configuration. The current app should not require secrets.
7. Reproduce on a clean checkout before changing dependency versions.
8. Apply a focused fix and rerun the checks.

Do not add placeholder environment credentials to make a build pass.

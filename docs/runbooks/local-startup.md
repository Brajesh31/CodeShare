# Runbook: Local Startup

1. Confirm Node.js and npm are installed.
2. Open a terminal at the repository root.
3. Install the lockfile dependencies with `npm ci`.
4. Start development mode using `npm run dev`.
5. Open the URL printed by Next.js, normally `http://localhost:3000`.
6. Verify `/` and `/editor`.
7. Open browser developer tools and inspect console/network errors.
8. Stop the process with Ctrl+C.

The editor, chat, AI reply, and presence are local prototype UI. No collaboration service should be expected.

# ⚙️ Configuration

## Current configuration

The routed Next.js app does not read application environment variables. The repository's `.env.example` is informational and no API key is needed for local use.

## Framework configuration

| File | Purpose |
|---|---|
| `next.config.ts` | Next.js options; strict mode is currently disabled |
| `tsconfig.json` | Strict TypeScript configuration and `@/*` import alias |
| `tailwind.config.ts` | Tailwind theme extension/settings |
| `postcss.config.mjs` | PostCSS/Tailwind plugin integration |
| `package.json` | Framework scripts and dependencies |
| `package-lock.json` | npm dependency resolution lockfile |

## Environment variable safety

- Never commit real `.env` files, tokens, passwords, or private keys.
- Any variable prefixed with `NEXT_PUBLIC_` is bundled for browser exposure.
- Server-only credentials belong only in server-side runtime configuration and must never be imported into client components.
- The current project has no server API or secret-consuming code.

## Before adding configuration

Document the variable name, purpose, required/optional status, example format without real secrets, runtime scope, and deployment configuration. Update `.env.example` only with safe placeholders.

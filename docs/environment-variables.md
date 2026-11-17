# 🔧 Environment Variables

## Current application requirement

The current CodeShare application does not read application environment variables. No API key, database connection string, authentication secret, or server URL is required to run the local prototype.

The root .env.example is an informational placeholder. Do not add fake example keys simply to populate it.

## Safe future configuration

When a server-side service is added, document each variable with:
- exact name and whether it is required;
- purpose and owning component;
- whether it is server-only or browser-visible;
- example value that is clearly non-secret;
- default behavior if omitted;
- rotation and deployment instructions.

## Client exposure warning

Any variable prefixed with NEXT_PUBLIC_ is embedded for browser visibility. It must never contain a private API key, database password, session secret, or provider credential.

## Local files

If local secrets become necessary, use a gitignored .env.local file. Add names and safe placeholders to .env.example, never actual credentials. Verify ignore behavior before committing.

## Validation

When variables are introduced, add safe startup validation for required server-only settings. Fail closed with clear variable names but never print their values.

# Deployment

## Current deployment model

The project is a Next.js application. Build it with `npm run build`; the production command is `npm start`. Deploy it to a host that supports the Next.js runtime and use that host's current Next.js deployment instructions. No database or separate collaboration backend is defined in this repository.

## Before publishing

- Confirm the landing page and `/editor` route render in the production build.
- Do not present static presence, local chat, or the canned AI reply as working online features.
- Do not use confidential source code in the prototype; no authentication or server-side room isolation is implemented.
- Review the external avatar service and font build behavior for privacy and availability requirements.
- Keep credentials out of `NEXT_PUBLIC_*` values and client code.
- Add server-side authorization, validation, monitoring, and persistence before deploying a real collaboration product.

The app has no deployment-specific environment variables or database migrations. `pagebackup.tsx` is an unreferenced local socket experiment and is not a production backend.

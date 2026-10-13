# Contributing

Thanks for considering a contribution. CodeShare is currently a Next.js UI prototype. Please distinguish implemented behavior from proposed real-time, AI, or presence features.

## Before starting

1. Read the README and the relevant pages in `docs/`.
2. Check existing issues and pull requests for duplicate work.
3. Open an issue before substantial changes such as adding a server, authentication, model provider, or persistence.
4. Do not submit private code, credentials, or real team chat data.

## Local setup

Install dependencies using `npm ci` and run `npm run dev`. The current UI needs no environment variables or external service credentials. See [docs/installation.md](docs/installation.md).

## Change guidelines

- Follow the Next.js App Router and TypeScript patterns used by the project.
- Keep server/client component boundaries explicit; interactive components use the client directive.
- Avoid claiming collaboration, AI, or online presence until the corresponding backend behavior exists.
- Keep user input rendered as text. Do not inject untrusted content as HTML.
- If adding a server or model provider, document authentication, authorization, transport, secrets, errors, privacy, and retention before enabling the feature.
- Run available lint/build checks when useful and state what you actually ran. There is no automated test script.
- Update documentation when routes, setup, or runtime behavior changes.

## Pull requests

Describe the behavior change, reason, configuration/data effects, and validation performed. Include screenshots for material UI changes. Review the diff for secrets, generated `.next`/`out` files, local environment files, and unrelated changes.

Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Licensing

Submit work you have the right to contribute and identify third-party code, icons, fonts, or assets. The MIT grant added here covers original CodeShare source and documentation by Brajesh Kumar within the scope in [LICENSE](LICENSE); dependencies and framework materials retain their own terms.

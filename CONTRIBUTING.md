# 🤝 Contributing

Thanks for considering a contribution. CodeShare is currently a Next.js UI prototype. Please distinguish implemented behavior from proposed real-time, AI, and presence features.

## Before starting

1. Read the [README](README.md) and the relevant pages in [docs](docs/README.md).
2. Check existing issues and pull requests for duplicate work.
3. Open an issue before substantial changes such as adding a server, authentication, a model provider, or persistence.
4. Do not submit private code, credentials, or real team chat data.

## Local setup

Use Node.js 22 and npm:

```bash
nvm use
npm ci
npm run dev
```

The current UI requires no application environment variables or external service credentials. See [installation](docs/installation.md) and [getting started](docs/getting-started.md).

## Change guidelines

- Follow the Next.js App Router and TypeScript patterns used by the project.
- Keep server/client component boundaries explicit; interactive components use the client directive.
- Avoid claiming collaboration, AI, or online presence until the corresponding backend behavior exists.
- Keep user input rendered as text. Do not inject untrusted content as HTML.
- If adding a server or model provider, document authentication, authorization, transport, secrets, errors, privacy, and retention before enabling the feature.
- Preserve existing source and assets unless a separate reviewed change proves a removal is safe.
- Update the project tree with `npm run docs:tree` after adding, removing, or renaming tracked paths.
- Update related documentation, diagrams, tests, and known-issue entries when behavior changes.

## Required local checks

Run the checks that apply to your change:

```bash
npm test
npm run typecheck
npm run docs:tree:check
npm run validate
npm run audit:security
npm run build
```

The audit command is informational while the current dependency remediation is open. Read the report and do not interpret a successful audit-report step as a vulnerability-free dependency tree.

There is no standalone ESLint configuration or `npm run lint` command at present. Do not add a script that invokes an unconfigured or unavailable linter.

## Pull requests

Describe the behavior change, motivation, configuration/data effects, and validation performed. Include screenshots for material UI changes only when they are real captures of the running application. Review the full diff for secrets, generated `.next`/output files, local environment files, and unrelated changes.

Follow the [Code of Conduct](CODE_OF_CONDUCT.md). Use the [pull request template](.github/PULL_REQUEST_TEMPLATE.md).

## Licensing

Submit work you have the right to contribute and identify third-party code, icons, fonts, or assets. The scoped MIT grant covers original CodeShare source and documentation by Brajesh Kumar within the boundaries in [LICENSE](LICENSE); dependencies and framework materials retain their own terms.

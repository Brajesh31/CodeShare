# 🏛️ Project Governance

## Project scope

CodeShare is a Next.js UI prototype for a collaborative coding workspace. It does not currently operate a collaboration service, AI service, account system, or persistent workspace.

## Maintainer

The repository is maintained by Brajesh Kumar through [@Brajesh31](https://github.com/Brajesh31). GitHub repository permissions determine who may merge changes and administer project settings.

## Decision process

- Focused UI and documentation changes may be proposed through pull requests.
- Larger changes, especially authentication, real-time transport, database, AI provider, and privacy-sensitive behavior, should start with an issue and an architecture decision record.
- Security concerns should be reported privately using [SECURITY.md](SECURITY.md).
- Contributions must accurately distinguish implemented services from mock UI.
- Third-party code, assets, icons, and fonts must retain proper license and attribution information.

## Review expectations

Review correctness, TypeScript quality, accessibility, security, data boundaries, operational impact, dependency implications, and documentation. A passing build is not proof of production readiness.

## Releases

There is no fixed release cadence or service-level guarantee. Releases should follow [docs/release-process.md](docs/release-process.md) and update [CHANGELOG.md](CHANGELOG.md).

# 🌐 Third-Party Services and Assets

## Current external resources

| Provider/library | Current use | Data/request boundary |
|---|---|---|
| pravatar.cc | Avatar image URLs in UserPresence | Browser makes image requests to the external host |
| Google Fonts via next/font/google | Geist and Geist Mono build-time font configuration | Next.js fetches font assets during build and bundles them according to its behavior |
| npm registry | npm ci and dependency installation | Build environment fetches package metadata and tarballs |
| GitHub Actions | Quality, CodeQL, dependency review, README timestamp workflows | CI workflow execution and repository metadata |
| Dependabot | Weekly dependency update proposals | Reads manifest/lockfile and opens dependency update PRs |

## Not integrated

No authentication provider, database, chat service, Socket.IO server, AI model provider, voice/video provider, analytics platform, or payment service is configured for the active application.

## Review before adding a provider

Review purpose, data categories, region, retention, security, authentication method, costs, rate limits, failure modes, terms, privacy policy, license, and exit strategy. Keep provider credentials server-side and document user notice requirements.

## External avatar consideration

Sample avatars are decorative. Consider replacing remote profile images with local initials or approved local assets to reduce third-party requests and improve deterministic rendering.

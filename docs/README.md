# 📚 CodeShare Documentation Hub

This handbook describes the repository as it exists today: a Next.js App Router prototype with a landing page and a local editor/chat workspace. It distinguishes implemented UI from mock collaboration services and future architecture.

## 🧭 Start here

| Topic | Document |
|---|---|
| What CodeShare currently does | [Product overview](product-overview.md) |
| Local setup | [Installation](installation.md) |
| Source architecture | [Architecture](architecture.md) |
| Routes and current interfaces | [API and route reference](api.md) |
| Component inventory | [Component reference](components.md) |
| Development workflow | [Development](development.md) |
| Build and deployment | [Deployment](deployment.md) |
| Data and persistence | [Database and data model](database.md) |
| Security boundaries | [Security](security.md) |
| Privacy and data handling | [Privacy](privacy.md) |
| Testing and quality checks | [Testing](testing.md) |
| Accessibility | [Accessibility](accessibility.md) |
| Known limitations | [Known issues](known-issues.md) |
| Common fixes | [Troubleshooting](troubleshooting.md) |

## 🗂️ Reference and operations

- [Environment configuration](configuration.md)
- [Dependencies and supply chain](dependencies.md)
- [Performance notes](performance.md)
- [Release process](release-process.md)
- [Decision log](decision-log.md)
- [Glossary](glossary.md)
- [FAQ](faq.md)
- [Architecture diagrams](diagrams/README.md)
- [Operational runbooks](runbooks/README.md)
- [Reusable contribution templates](templates/README.md)
- [Scripts and checks](../scripts/README.md)

## 🧪 Automated checks

Run `npm test`, `npm run typecheck`, `npm run validate`, and `npm run build`. The tests protect repository contracts and prototype disclosures; they do not replace browser-level tests. See [testing.md](testing.md).

## ⚠️ Scope disclaimer

The current editor, chat, AI, connection status, and presence are prototype UI. The editor is a `contentEditable` element. Chat and editor state are local to the browser. The AI response is canned. No collaboration server, auth layer, API, database, or model provider is included.

Do not use this prototype to share confidential source code under the assumption that rooms, members, or messages are protected.

## 🧾 Licensing

The root MIT grant applies only to original CodeShare source and documentation within its stated scope. Next.js starter files, external avatars, dependencies, icons, and other third-party material remain under their respective terms. See [LICENSE](../LICENSE).

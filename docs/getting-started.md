# 🚀 Getting Started

## What you are running

CodeShare is a local Next.js prototype. It includes a landing page and editor workspace UI. It does not provide connected multi-user editing, accounts, persistent documents, server chat, or an AI provider.

## Prerequisites

- Node.js 22 recommended (the project declares Node.js 20.9.0 or newer).
- npm 10 or newer.
- Git and a modern browser.

## First run

```bash
git clone https://github.com/Brajesh31/CodeShare.git
cd CodeShare
nvm use
npm ci
npm run dev
```

Open http://localhost:3000.

## Explore the routes

- / provides the landing page and describes the prototype boundary.
- /editor opens the local workspace.

Try editing the sample text, changing the language label, switching the theme, and opening the chat panel. Team messages are local to the page. AI Preview returns a fixed response.

## Before contributing

Run:

```bash
npm test
npm run typecheck
npm run validate
npm run build
```

Read [development](development.md), [code standards](code-standards.md), and [contributing](../CONTRIBUTING.md).

## Common setup failures

See [troubleshooting](troubleshooting.md) and the [local startup runbook](runbooks/local-startup.md).

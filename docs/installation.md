# Installation

## Requirements

- Node.js and npm compatible with the installed Next.js release
- Git
- A modern browser

No API key, backend, database, or environment variable is required for the current UI.

## Install and run

From the repository root:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. Use **Launch Editor** on the landing page or open `http://localhost:3000/editor` directly.

## Build and start

```sh
npm run build
npm start
```

`npm start` runs the built Next.js app. See [deployment.md](deployment.md) before publishing.

## Configuration

The current routed pages read no environment variables. `.env.example` is comment-only. A future browser-exposed variable using `NEXT_PUBLIC_` must not contain a private key or credential.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Run Next.js with Turbopack |
| `npm run build` | Build the application |
| `npm start` | Start the production server after a build |
| `npm run lint` | Run the configured `next lint` script |

There is no automated test script in the current package.

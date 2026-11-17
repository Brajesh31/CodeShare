# 🚀 Installation and Local Setup

## Requirements

- Node.js 20.9.0 or newer. Node 22 is pinned in `.nvmrc` and used by CI.
- npm 10 or newer is recommended.
- Git and a modern browser.

No API credentials, database, or separate backend is needed for the current prototype.

## Clone and install

```bash
git clone https://github.com/Brajesh31/CodeShare.git
cd CodeShare
nvm use
npm ci
```

On systems without nvm, install Node.js 22 directly and continue with `npm ci`.

## Development server

```bash
npm run dev
```

Open `http://localhost:3000`. The landing page is `/`; the editor workspace is `/editor`.

## Quality checks

```bash
npm test
npm run typecheck
npm run validate
npm run audit:security
```

## Production build

```bash
npm run build
npm start
```

The app currently reads no environment variables. `.env.example` is informational. Do not put secrets in `NEXT_PUBLIC_*` variables because those values are exposed to browser code.

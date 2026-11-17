# 🚀 Installation and Local Setup

## Requirements

- Node.js compatible with Next.js 15.3.1 and the committed lockfile.
- npm, Git, and a modern browser.

No API credentials, database, or separate backend is needed for the current prototype.

## Clone and install

```bash
git clone https://github.com/Brajesh31/CodeShare.git
cd CodeShare
npm ci
```

## Development server

```bash
npm run dev
```

Open `http://localhost:3000`. The landing page is `/`; the editor workspace is `/editor`.

## Production build

```bash
npm run build
npm start
```

## Type checking

```bash
npx tsc --noEmit
```

There is no configured automated test script yet. See [testing.md](testing.md).

## Environment configuration

The routed application currently reads no environment variables. `.env.example` is informational. Do not put secrets in `NEXT_PUBLIC_*` variables because those values are exposed to browser code.

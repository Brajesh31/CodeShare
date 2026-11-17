# 🧰 Repository Scripts

## validate-repository.mjs

Run from the repository root:

```bash
node scripts/validate-repository.mjs
```

The script verifies a core set of required project files, scans root/docs/scripts Markdown for relative links, and checks the two expected App Router route markers.

### Scope limitations

- It does not validate remote URLs or GitHub heading anchors.
- It is not a complete Markdown parser.
- It does not test user interactions, render React, validate accessibility, or prove network behavior.
- It does not scan all repository content for secrets.
- Passing it does not mean collaboration, AI, authentication, or persistence has been implemented.

Use this together with TypeScript, production build, and manual route checks.

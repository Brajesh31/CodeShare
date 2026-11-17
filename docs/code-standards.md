# ✍️ Code Standards

## TypeScript and React

- Use TypeScript for application code.
- Prefer explicit prop interfaces for reusable components.
- Keep state close to the component that owns the interaction.
- Use functional state updates when the next value depends on the previous value.
- Add stable keys to rendered lists.
- Keep component names PascalCase and file names aligned with exported component names.
- Keep App Router pages under `app/` and reusable UI under `app/components/`.

## Maintainability

- Remove dead imports and unused state when safely confirmed.
- Avoid placeholder comments that describe missing code as though it is active.
- Do not add console logging that implies a service is connected when it is not.
- Prefer descriptive function and variable names over abbreviations.
- Extract non-trivial pure logic to small modules that can be tested with Node's test runner.
- Keep changes focused and explain the reason in the commit.

## UI copy and product claims

A rendered control must describe its real behavior. Use “Local demo”, “Sample profiles”, and “AI Preview” where appropriate. Never label a mock state “Connected”, claim multi-user synchronization, or imply that a real model provider is active unless the underlying implementation is present and verified.

## Accessibility expectations

- Use semantic elements for navigation, headings, forms, and buttons.
- Ensure icon-only controls have accessible names.
- Preserve keyboard operation and visible focus.
- Do not encode status with color alone.
- Respect reduced-motion preferences when adding animation.
- Validate contrast and zoom behavior before release.

## Dependency and security practices

- Do not hard-code tokens or private keys.
- Treat browser bundles and `NEXT_PUBLIC_*` values as public.
- Render untrusted content as text, not unsanitized HTML.
- Review new dependencies and lockfile changes.
- Do not run broad force upgrades without compatibility verification.

## Review checklist

Before requesting review, run `npm test`, `npm run typecheck`, `npm run validate`, and `npm run build`. Include the relevant manual test steps and screenshots only when they come from the actual application.

# 🐞 Debugging Guide

## Reproduce before changing code

Record the route, browser, OS, viewport, runtime versions, exact steps, expected behavior, and observed behavior. Confirm whether the failure is local UI state, build-time behavior, an external asset request, or an actual application service. The current routed app does not have an application API or collaboration backend.

## Useful commands

```bash
node --version
npm --version
npm test
npm run typecheck
npm run validate
npm run build
```

## Browser debugging

1. Reproduce with a clean page reload.
2. Check browser console errors and warnings.
3. Inspect the element's accessible name and focus state.
4. Inspect network requests to separate app requests from external fonts and avatar image requests.
5. Use React devtools to inspect local state and component rendering.
6. Re-test at a narrow viewport and with keyboard navigation.

## Safe evidence collection

Remove tokens, cookies, private source code, account details, and personal data from console logs, network traces, and screenshots before sharing them.

## Debugging limits

The current editor uses a contenteditable element. It does not offer a complete programming editor model, language server, diagnostics, or reliable collaboration semantics. Do not debug nonexistent synchronization by adding fake socket logs.

# 🎨 UI and UX Guidelines

## Current visual direction

The current landing page uses a light canvas, blue accent surfaces, a centered hero, and a three-column feature grid. The editor route uses a dense workspace layout with a header, navigation/sidebar region, editor area, collapsible chat panel, and bottom status labels. Mantine supplies interactive controls; Tailwind utilities provide much of the page layout and spacing.

## Interaction principles

1. Keep navigation obvious and make the editor directly reachable.
2. Make local/demo behavior visible in the interface.
3. Provide labels for controls whose meaning is not obvious from their icon.
4. Keep focus order aligned with the visual layout.
5. Prefer clear text states over color-only status indicators.
6. Avoid fake connectivity, fake participant activity, or simulated backend states presented as real.
7. Keep forms and message entry usable with a keyboard.
8. On narrow viewports, prevent the editor and chat panel from forcing horizontal page overflow.

## Current UX limitations

The editor is a contenteditable preformatted element and does not provide IDE-grade editing, syntax highlighting, diagnostics, or a reliable multi-line keyboard model. The language selector is a label selection only. The sidebar shell includes prototype scaffolding. Sample presence is static. Chat state is local. These limits should remain visible in product copy until resolved.

## Responsive design review

Test at minimum:
- narrow mobile viewport;
- tablet portrait and landscape;
- laptop width;
- wide desktop display;
- browser zoom at 200%;
- keyboard-only navigation.

Verify that controls remain visible, text does not overlap, the chat can be opened and dismissed, and the editor remains usable without horizontal page scrolling.

## Accessibility review

Use [accessibility guidelines](accessibility.md) as the baseline. This document does not certify WCAG conformance. Use semantic navigation, heading hierarchy, accessible names for icon-only buttons, visible focus indicators, sufficient contrast, and reduced-motion support.

## Design change process

For material UI changes, capture the current state, describe the user task, list responsive states, document loading/empty/error behavior, and include accessibility evidence in the pull request. Do not submit fabricated application screenshots.

# 🧱 Design System Notes

## Status

CodeShare does not currently have a formal design-token package or a standalone design-system module. The UI is composed from Mantine components, Tailwind utility classes, and Lucide icons. This page documents the existing conventions rather than implying a larger design system.

## Existing building blocks

| Concern | Current implementation |
|---|---|
| Component primitives | Mantine Core 7 |
| Layout and spacing | Tailwind utility classes and Mantine layout components |
| Typography | Geist and Geist Mono via `next/font/google` |
| Icons | lucide-react |
| Color styling | Tailwind color utilities and Mantine props |
| Theme | Local boolean state in editor route |

## Current theme behavior

The landing page is light. The editor route switches classes between light and dark modes. This is local page state, not a persistent user preference or a global preference system.

## Suggested token categories for future formalization

If the UI grows, define and document tokens for:
- surface, text, border, accent, and status colors;
- spacing and layout widths;
- typography family, scale, line height, and weight;
- corner radius and elevation;
- focus ring and interactive states;
- responsive breakpoints;
- motion duration and easing.

Do not create a token inventory from colors or components that are not present in the implementation.

## Component usage principles

- Use Mantine for established interaction primitives where it fits.
- Use native semantic HTML for page structure.
- Keep icon-only actions accessible with an explicit label.
- Avoid conflicting Mantine and Tailwind visual overrides without a clear need.
- Ensure interactive controls have hover, focus, disabled, and error states where applicable.

## Future theme requirements

A formal theme system should define shared color tokens, contrast targets, high-contrast behavior, reduced motion, and how preferences persist. Persistence is not implemented in the current app.

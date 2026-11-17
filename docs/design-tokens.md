# 🧩 Design Tokens

## Current status

CodeShare does not currently have a central design-token package, CSS custom-property token map, or documented token source of truth. The UI uses Mantine component props, Tailwind utility classes, and the root font variables.

## Existing styling sources

| Concern | Current source | Notes |
|---|---|---|
| Typography | next/font Geist and Geist Mono | Defined in app/layout.tsx |
| Layout and spacing | Tailwind utility classes | Used directly in route/component markup |
| Component styling | Mantine props and theme defaults | Provider is in root layout |
| Color | Tailwind utility colors and Mantine defaults | Some values are inline in component markup |
| Theme | Local boolean in editor page | Not persisted and not a global preference |
| Motion | CSS transitions and component defaults | No central motion token table |

## Future token structure

If the interface grows, define named tokens for:
- color roles rather than raw color names;
- surface and content elevation;
- spacing and responsive layout;
- typography family, scale, weight and line-height;
- borders, radius and shadow;
- focus ring and disabled states;
- motion duration, easing and reduced-motion handling.

## Governance

Do not add a token value without identifying the component usage and contrast effect. Keep token changes aligned across light and dark themes. Include migration notes when replacing utility classes or Mantine defaults.

## No invented tokens

This document intentionally does not publish unverified hex palettes or spacing scales. Capture computed values from the actual application before formalizing them.

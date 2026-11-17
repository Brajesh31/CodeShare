# 🌈 Color System

## Current status

There is no centralized CodeShare color system. The landing page uses blue accent styling on a light background. The workspace provides light and dark class combinations. Mantine defaults may also influence controls.

## Current limitations

- Colors are authored directly in utility classes and component props.
- Theme state exists only within the editor route.
- Theme selection is not stored between visits.
- No contrast audit has been completed.
- No semantic status-color contract is documented.

## Future semantic roles

A maintainable color system should define named roles for page background, elevated surface, primary text, secondary text, border, brand accent, focus ring, selected state, error, warning, success, and disabled state. Each role needs a tested value in each theme.

## Acceptance requirements

Any future color-system change must include:
1. exact token definitions and component usage;
2. contrast measurements for text and relevant controls;
3. selected, hover, disabled, error, and focus states;
4. light and dark theme screenshots captured from the actual app;
5. updated accessibility findings.

Do not claim a color palette meets WCAG until measurements are recorded.

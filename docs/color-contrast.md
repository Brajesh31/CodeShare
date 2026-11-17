# 🎨 Color Contrast

## Current design notes

The landing page uses a white/light background with blue accents. The editor route toggles between light and dark utility-class palettes. Muted labels, borders, selected controls, and status chips need direct measurement in both modes.

## Review requirements

- Measure normal text against its actual rendered surface.
- Measure large text separately from normal text.
- Check focus indicators, control boundaries, and selected states.
- Check icons and non-text UI state indicators.
- Do not infer contrast from a color name or from a screenshot viewed on an uncalibrated display.
- Ensure status is understandable without color alone.

## Test record

| Route/state | Foreground | Background | Measured ratio | Criterion | Result |
|---|---|---|---:|---|---|
| Landing page | Not yet measured | Not yet measured | Not measured | WCAG 1.4.3 | Not assessed |
| Editor light theme | Not yet measured | Not yet measured | Not measured | WCAG 1.4.3 | Not assessed |
| Editor dark theme | Not yet measured | Not yet measured | Not measured | WCAG 1.4.3 | Not assessed |
| Focus indicators | Not yet measured | Not yet measured | Not measured | WCAG 1.4.11 | Not assessed |

## Required evidence

Record exact tokens/computed color values, measurement tool, rendered state, route, browser and revision. Re-test after any color or theme change. See [WCAG status](wcag-compliance.md) and [accessibility audit](accessibility-audit.md).

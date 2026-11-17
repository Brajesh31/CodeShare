# 🔤 Typography

## Current implementation

The root layout configures Geist and Geist Mono using next/font/google. The generated CSS variables are `--font-geist-sans` and `--font-geist-mono`. The landing page and workspace mix Tailwind text utility classes with Mantine component typography props.

## Typography responsibilities

- Sans-serif family is used for general UI copy.
- Monospace family is intended for code-oriented content.
- Heading hierarchy should be semantic and consistent across routes.
- Line length and line height should support reading at mobile and desktop widths.
- Text must remain legible at browser zoom and in both workspace themes.

## Current limitations

There is no standalone typography token scale or formal type ramp. No font-loading performance measurement or text-resize audit has been recorded.

## Future documentation

If the UI establishes a formal type scale, record role, family, size, weight, line height, letter spacing, responsive behavior, and examples. Re-test contrast and reflow after typography changes.

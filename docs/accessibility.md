# ♿ Accessibility

## Current observations

The app uses buttons, links, input controls, and Mantine components. Some icon-only controls have little or no explicit accessible naming. The editor is a content-editable preformatted element and does not provide the full keyboard, screen-reader, or editing semantics of a dedicated code editor.

## Review areas

- Keyboard access to navigation, editor, chat tabs, controls, and message entry.
- Visible focus indicators in both light and dark themes.
- Accessible labels for icon-only buttons.
- Appropriate semantics and keyboard behavior for the editable code area.
- Live announcements for newly sent chat messages where appropriate.
- Contrast of text, muted labels, selected tabs, status chips, and controls.
- Zoom/reflow on narrow viewports.
- Reduced motion for transitions and animated feedback.
- Clear distinction between static sample presence and real user status.

## Current claim boundary

No WCAG conformance audit or assistive-technology test is documented. Do not describe the prototype as WCAG compliant without an agreed scope, tested criteria, and evidence.

## Practical verification

Test keyboard-only operation, browser zoom, at least one screen reader, dark/light theme contrast, and narrow mobile widths. Record browser and assistive-technology versions in the manual test report.

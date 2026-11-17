# ♿ Accessibility Audit Plan and Findings

## Audit status

No formal accessibility audit or WCAG conformance test has been completed for this repository. This document is a review plan and an initial source-inspection checklist, not a conformance statement.

The target for future review is WCAG 2.2 Level AA where applicable. A target is not a claim that the current app conforms.

## Current review areas

| Area | Source observation | Required verification |
|---|---|---|
| Navigation | Landing page has nav links and editor CTA | Keyboard order, visible focus, accessible link names |
| Icon actions | Theme and chat controls include icons and text/visual states | Accessible names and announcement of state changes |
| Editor | Native `contentEditable` pre element | Keyboard model, role/name, caret behavior, screen reader usability |
| Chat | Text input, tabs, message list | Label, submission semantics, new-message announcement, focus |
| Presence | Avatar images and tooltip labels | Decorative vs informative image semantics; non-color identification |
| Theme | Local color classes | Contrast in both states |
| Layout | Responsive Tailwind classes and fixed panel width | Reflow, zoom, horizontal scrolling |
| Motion | CSS transitions | Reduced-motion preference and motion sensitivity |

## Manual audit procedure

1. Navigate every route with keyboard only.
2. Verify a visible focus indicator on each interactive element.
3. Test logical heading hierarchy and landmarks.
4. Inspect each icon-only control with a screen reader.
5. Test the editor and chat without a mouse.
6. Check text and interactive contrast in light and dark workspace themes.
7. Zoom to 200% and verify reflow and operation.
8. Test a narrow 320 px viewport.
9. Check reduced-motion behavior.
10. Record browser, assistive technology, version, steps, evidence, severity, and remediation.

## Automated tools

Automated accessibility scanners may help identify issues, but they do not replace manual keyboard, screen reader, zoom, and interaction testing. Add a tool to CI only after its setup and false-positive handling are reviewed.

## Reporting format

Use [accessibility audit template](templates/accessibility-audit.md). Each issue should identify the affected route/component, barrier, impacted user task, reproducible steps, severity, and verified remediation.

## Current declaration

**WCAG 2.2 AA status: not assessed.** Do not display an accessibility compliance badge or make an accessibility compliance claim until an appropriate audit and evidence are recorded.

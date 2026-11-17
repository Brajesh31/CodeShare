# ♿ WCAG Compliance Status

## Current statement

CodeShare has **not been assessed for WCAG 2.2 AA conformance**. No formal audit report, assistive technology test evidence, or conformance statement exists for the current prototype.

WCAG 2.2 AA is the intended review target where applicable. This target must not be described as a completed compliance result.

## Areas requiring review

| Area | Current implementation concern | Evidence needed |
|---|---|---|
| Perceivable | Light/dark palette and muted text | Contrast measurements for text and UI states |
| Operable | Workspace controls, tabs, editable area | Keyboard-only task completion and focus sequence |
| Understandable | Language selector and editor interactions | Clear labels, instructions, state changes and errors |
| Robust | Custom contenteditable region and component library controls | Semantic roles and screen-reader testing |
| Reflow | Dense editor/chat workspace | 320 CSS px and 200% zoom review |
| Focus appearance | Buttons, links, selected tabs | Visible focus and focus not obscured |

## Required audit process

1. Define the pages, components, browser and assistive technologies in scope.
2. Test each user task with keyboard only.
3. Test screen-reader name, role, value, and dynamic announcements.
4. Measure text and non-text contrast.
5. Test zoom, reflow, orientation, and reduced motion.
6. Run automated checks and manually triage every finding.
7. Record each issue against the relevant success criterion.
8. Re-test the corrected revision and publish the exact scope and limitations.

## Conformance language

Do not use “WCAG compliant”, “accessible to everyone”, or a conformance badge until an appropriate audit has been completed. A passing automated scan alone is insufficient.

Use [accessibility audit template](templates/accessibility-audit.md) and maintain results in [accessibility audit](accessibility-audit.md).

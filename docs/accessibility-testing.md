# 🧪 Accessibility Testing

## Current test status

No automated accessibility test framework or completed manual accessibility test suite is configured. The project has an audit plan but does not claim WCAG compliance.

## Manual test matrix

| Task | Method | Result status |
|---|---|---|
| Navigate landing page | Keyboard only | Not tested |
| Open editor route | Keyboard and Enter | Not tested |
| Toggle theme | Keyboard and screen reader | Not tested |
| Open/close chat | Keyboard and focus observation | Not tested |
| Switch chat tabs | Keyboard and screen reader | Not tested |
| Enter and send message | Keyboard and screen reader | Not tested |
| Edit sample code | Keyboard and screen reader | Not tested |
| Read status/profile content | Screen reader | Not tested |
| Use 200% zoom | Browser zoom | Not tested |
| Reflow on 320px viewport | Responsive inspection | Not tested |
| Reduced motion | OS/browser preference | Not tested |

## Automated testing options

A future Playwright-based workflow could run axe-core against representative routes. Automated results must be triaged and supplemented by keyboard, screen-reader, zoom, and task-based evaluation. Do not add a scanner merely to report a passing badge.

## Reporting

Use the [accessibility audit template](templates/accessibility-audit.md). Every defect should include the relevant route, test environment, steps, expected result, actual barrier, severity, and verified remediation.

# 🗣️ Screen Reader Support

## Current status

The repository has no documented screen-reader acceptance test or conformance result. Some icon-driven controls, status labels, sample avatars, tabs, and the editable preformatted area require manual inspection with assistive technology.

## Review targets

- Landmarks and page headings identify each route.
- Every icon-only button has an accessible name and state.
- The theme control communicates its action or current state.
- The chat panel has a labelled region and meaningful tab semantics.
- Sending a message results in an understandable update announcement where appropriate.
- Avatar images are either decorative or have a concise useful alternative.
- Static profiles are not announced as real connected users.
- The editor has a meaningful role, label, and instructions for text editing.

## Manual test approach

Test the routes with at least one desktop screen reader and browser combination. Record versions, navigation method, exact task, unexpected announcements, missing labels, and workarounds. Test both themes and the open/closed chat panel states.

## Current limitation

No test results are published yet. Do not claim screen-reader support solely because the application uses Mantine or semantic React components.

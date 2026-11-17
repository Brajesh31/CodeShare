# ⌨️ Keyboard Navigation

## Current review scope

The app includes internal links, buttons, Mantine selectors/tabs, an editable content area, and a chat input. No formal keyboard-only audit has been recorded. The contenteditable editor needs particular attention because a preformatted editable region does not automatically provide a complete code-editor interaction model.

## Manual test sequence

1. Load the landing page without using a pointer.
2. Tab through navigation and the main editor action.
3. Activate the editor link using Enter.
4. Tab through the workspace header, theme action, presence content, and chat action.
5. Open and close the chat panel without losing keyboard access.
6. Reach tabs, message input, and send action.
7. Edit and select sample code using the keyboard.
8. Verify Shift+Tab returns through controls in reverse order.
9. Confirm focus is always visible and not trapped behind a collapsed panel.
10. Repeat at a narrow viewport and browser zoom.

## Expected implementation principles

- Use native anchors and buttons for actions.
- Keep tab order aligned with visual reading and task order.
- Provide visible focus indicators in both themes.
- Avoid clickable non-semantic div elements.
- Manage focus intentionally when showing or hiding overlays and panels.
- Do not use color alone to communicate focus or selected state.

## Findings

No completed keyboard test results are currently available. Record any barriers, browser, viewport, steps, and affected component in an accessibility audit rather than assuming the current control structure is sufficient.

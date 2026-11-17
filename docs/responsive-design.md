# 📱 Responsive Design

## Current layout

The landing page uses responsive container widths and changes the feature grid to multiple columns at medium screens. The editor workspace is a full-height flex layout with a collapsible navigation area, editor region, and optional chat panel.

## Responsive risks

- A fixed-width chat panel can consume most of a narrow viewport.
- The editor's full-height layout needs a defined mobile strategy.
- The sidebar width transition should not make primary actions inaccessible.
- A long code line may require horizontal scrolling inside the editing surface.
- Avatar rows and toolbar controls must not push the page beyond its viewport.

## Manual viewport matrix

| Viewport class | Suggested width | Checks |
|---|---:|---|
| Small mobile | 320–375 px | No clipped header actions; editor remains reachable |
| Large mobile | 390–430 px | Chat open/close behavior; safe spacing |
| Tablet | 768 px | Sidebar and editor proportions |
| Laptop | 1280 px | Typical workspace composition |
| Desktop | 1440 px and above | Content max width and usable editor area |

These widths are test targets, not claims that all layouts have passed.

## Manual validation steps

1. Open landing and editor routes at each target width.
2. Use browser devtools to inspect horizontal overflow.
3. Navigate with keyboard only.
4. Open and close chat at mobile width.
5. Zoom to 200% and verify controls remain operable.
6. Check text selection and editing behavior in the code area.
7. Capture actual screenshots for future visual regression only after a real browser run.

## Future responsive acceptance criteria

A production workspace should define how the sidebar and chat collapse, how panels become overlays or tabs, how keyboard focus is trapped/released if a dialog is used, and how editing remains usable on touch devices.

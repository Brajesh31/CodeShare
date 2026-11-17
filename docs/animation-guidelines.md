# ✨ Animation Guidelines

## Current status

The UI uses some utility/component transitions for panel and navigation presentation. There is no formal motion design system or reduced-motion audit. No custom animation package is part of the declared stack.

## Principles

- Motion should communicate state change, not decorate every interaction.
- Keep transitions short and avoid delaying access to core controls.
- Do not use flashing, rapid scaling, or large unexpected movement.
- Respect the user's reduced-motion preference.
- Provide an immediate functional state even when a transition is disabled.
- Avoid motion that causes layout shifts or obscures keyboard focus.

## Review checklist

- [ ] Inspect the workspace with reduced motion enabled.
- [ ] Verify panel open/close state remains understandable without animation.
- [ ] Check that motion does not hide focus or cause scroll jumps.
- [ ] Check animation timing on low-end mobile hardware.
- [ ] Avoid automatic motion that cannot be paused where required.

## Current claim boundary

No reduced-motion conformance audit has been completed. Add motion tokens and tests only when there is a clear, maintained set of animations to govern.

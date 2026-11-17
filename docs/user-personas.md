# 👥 User Personas and Stakeholders

## Important caveat

These are working personas for product discovery, not research-backed demographic profiles. No interviews, surveys, analytics, or customer data are included in this repository. Validate these needs before making roadmap commitments.

## Persona A: Individual developer exploring the interface

**Goal:** Understand whether a combined coding workspace suits a personal workflow.

**Needs to evaluate:** A clear editor area, visible language control, theme choice, and easy navigation.

**Current prototype support:** The visitor can edit sample text locally and open the chat panel.

**Current limitation:** No file system, syntax engine, saved project, keyboard shortcut system, or local export is guaranteed.

## Persona B: Pair-programming partners

**Goal:** Work on the same code and discuss decisions without repeatedly switching tools.

**Needs:** Shared document state, participant identity, presence, reconnect behavior, and permission boundaries.

**Current prototype support:** A visual editor/chat arrangement only.

**Critical gap:** There is no synchronization server or identity system. Two visitors do not share editor or chat state.

## Persona C: Small team facilitator

**Goal:** Bring a team into a project room and keep discussion tied to code.

**Needs:** Room creation, invitation controls, member roles, message history, moderation, and auditability.

**Current prototype support:** Static sample profiles and local sample messages.

**Critical gap:** No room concept is implemented on the server, and no real user is represented by the sample avatars.

## Persona D: Repository maintainer

**Goal:** Make safe changes and understand the codebase without accidentally overstating product behavior.

**Needs:** Current source documentation, repeatable checks, security guidance, dependency review, contribution process, and clear ownership.

**Current prototype support:** Documentation, Node contract tests, repository validator, and CI workflow.

## Persona E: Security or privacy reviewer

**Goal:** Determine what data leaves the browser, where it is stored, and who can access it.

**Needs:** Data flow, identity and access controls, threat model, retention, deletion, provider review, and incident procedures.

**Current prototype support:** Documentation of current local-only and external-resource boundaries.

**Critical gap:** There is no production security architecture to assess because there is no backend.

## How to validate personas

Record interview date, participant role (with consent), scenario, observed friction, direct quotes only with permission, severity, and follow-up decision. Do not record personal identifiers unnecessarily. Keep research records outside this public repository unless contributors explicitly consent.

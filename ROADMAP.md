# 🧭 Roadmap

This roadmap describes possible product and engineering work. It has no delivery dates and does not imply that an item is implemented.

## ✅ Repository and prototype foundation

- [x] Document current UI and mock feature boundaries.
- [x] Document Next.js routes, components, and complete tracked project structure.
- [x] Add product requirements, personas, journeys, use cases, and known limitations.
- [x] Add security, privacy, retention, incident, and operations guidance.
- [x] Add current-state Mermaid diagrams and original SVG project identity assets.
- [x] Add issue, discussion, and pull request templates.
- [x] Add npm and GitHub Actions dependency automation.
- [x] Add repository validation, package contract tests, and CI quality checks.
- [x] Generate and validate the complete tracked-file tree from Git.
- [x] Add explicit security, accessibility, hosting, integration, and compliance boundary guides.
- [x] Add CodeQL analysis and pull-request dependency review.
- [x] Correct the landing page and editor status copy to disclose local-only behavior.

## 🚨 Immediate engineering priorities

- [ ] Resolve the currently reported critical/high npm dependency advisories and verify with a clean audit.
- [ ] Decide whether the project remains a front-end prototype or becomes a production collaboration product.
- [ ] Complete a browser-level test baseline and formal accessibility assessment.
- [ ] Review whether the legacy Socket.IO experiment and its dependency should remain.

## 🧱 If real collaboration is approved

- [ ] Design identity, session lifecycle, and authorization.
- [ ] Design room membership and server-side access checks.
- [ ] Implement a supported WebSocket/Socket.IO server and protocol with secure transport.
- [ ] Implement document synchronization, ordering, conflict behavior, and reconnect handling.
- [ ] Implement real presence and disconnect cleanup.
- [ ] Add persistence, document history, backups, retention, export, and deletion.
- [ ] Add abuse controls, rate limits, audit logging, and cross-room authorization tests.

## 🤖 If real AI integration is approved

- [ ] Design a server-side AI proxy.
- [ ] Select a provider and document data handling and retention terms.
- [ ] Keep provider credentials server-side.
- [ ] Add request validation, rate limits, cancellation, and error handling.
- [ ] Document which code/context is sent to the model and provide appropriate user notice.

## ♿ Quality and operations

- [ ] Add component and browser integration tests.
- [ ] Complete keyboard, screen-reader, contrast, zoom, and responsive reviews.
- [ ] Add production hosting, health checks, monitoring, and recovery procedures only when a deployment target is selected.
- [ ] Remove unused dependencies only after verifying their role and testing the result.

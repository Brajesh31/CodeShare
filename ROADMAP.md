# 🧭 Roadmap

This roadmap describes possible product and engineering work. It has no delivery dates and does not imply that an item is implemented.

## ✅ Repository and prototype foundation

- [x] Document current UI and mock feature boundaries.
- [x] Document Next.js routes and existing components.
- [x] Add security and privacy guidance.
- [x] Add architecture and data-boundary diagrams.
- [x] Add issue, PR, and discussion templates.
- [x] Add dependency automation and repository CI.
- [x] Add local setup, build, deployment, and operations guidance.

## 🔜 Product decisions needed

- [ ] Decide whether CodeShare remains a UI prototype or becomes a production collaboration product.
- [ ] Replace or complete the current contentEditable editor with a maintained code-editor engine.
- [ ] Correct the landing-page claims so they match delivered capabilities.

## 🧱 If real collaboration is approved

- [ ] Design identity, session lifecycle, and authorization.
- [ ] Design room membership and server-side access checks.
- [ ] Implement WebSocket/Socket.IO server and protocol with secure transport.
- [ ] Implement document synchronization, ordering, conflict behavior, and reconnect handling.
- [ ] Implement real presence and disconnect cleanup.
- [ ] Add persistence, document history, backups, retention, export, and deletion.
- [ ] Add abuse controls, rate limits, audit logging, and cross-room authorization tests.

## 🤖 If real AI integration is approved

- [ ] Design a server-side AI proxy.
- [ ] Select a provider and document data handling/retention terms.
- [ ] Keep provider credentials server-side.
- [ ] Add request validation, rate limits, cancellation, and error handling.
- [ ] Document which code/context is sent to the model and obtain appropriate user notice.

## ♿ Quality improvements

- [ ] Add component and browser integration tests.
- [ ] Add keyboard, screen-reader, contrast, and responsive reviews.
- [ ] Add monitoring and deployment health checks.
- [ ] Review and remove unused dependencies only after verifying their intended role.

# 🔒 Data Privacy

## Current data handling

The current routed app keeps editor text and chat message state in the browser's React component memory. It has no first-party account database, document persistence, server chat store, analytics SDK, or AI provider integration.

The browser may request avatar images from pravatar.cc and the font pipeline uses next/font/google. Hosting providers may separately collect HTTP access logs.

## Data minimization

Do not add collection, analytics, tracking, storage, or external processing without an explicit purpose. Collect only the data needed for a defined user task and document where it is sent, who can access it, and when it is deleted.

## User expectations

The prototype must not be presented as a confidential coding room. The absence of a backend means there is no server-side storage or access-control guarantee for code and discussion.

## Future privacy review

Before adding accounts, persistent workspaces, file sharing, analytics, or AI assistance, define:
- categories and sensitivity of personal data;
- purpose and lawful basis as reviewed by appropriate counsel;
- data flow and service providers;
- retention, export, and deletion;
- user notice and consent where required;
- security measures and access restrictions;
- incident response and contact path.

This document is technical project guidance, not legal advice or a compliance certification.

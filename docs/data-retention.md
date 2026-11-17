# 🗃️ Data Retention and Deletion

## Current state

The routed CodeShare prototype does not persist project documents or chat messages to a backend or database. The editor string and chat message arrays are held in React state and reset when the relevant component is remounted or the page is reloaded.

This does not establish a product-level data deletion guarantee for every browser, network, or external resource. The application may request external avatar images and font assets.

## Current data inventory

| Data | Current handling | Retention |
|---|---|---|
| Sample editor text and edits | Component state in the current page | Until component lifecycle ends or reload |
| Chat messages | Component state in the current page | Until component lifecycle ends or reload |
| Sample profile names | Static source data | Shipped with app code |
| Avatar requests | Browser request to third-party host | Governed by provider behavior, not CodeShare |
| Font assets | Next font pipeline | Governed by build/runtime configuration |

## No backend deletion endpoint exists

There is no export endpoint, account deletion flow, workspace deletion, server retention schedule, or database backup to restore. Do not document a delete control that is not implemented.

## Requirements before persistence

If saved documents, rooms, accounts, or chat are introduced, document:
- data categories and purpose;
- data owner and access permissions;
- default retention and user-configurable retention if applicable;
- deletion request workflow and completion evidence;
- backup retention and deletion limitations;
- legal hold and abuse-investigation exceptions, if applicable;
- third-party processors and their retention terms;
- export format and portability;
- incident and breach notification ownership.

## Change control

Any change that persists user code or conversations must update [privacy](privacy.md), [security](security.md), [database](database.md), and the data-flow diagram before release.

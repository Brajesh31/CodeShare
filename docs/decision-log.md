# 🧠 Decision Log

This log records observable project choices and their trade-offs. It is not a record of formal approvals.

## DEC-001: Next.js App Router

**Status:** Current

The application uses Next.js 15 App Router with routes under `app/`. The package defines development, build, production start, and lint scripts.

## DEC-002: Local UI state for editor/chat prototype

**Status:** Current

Editor content, language selection, theme, chat messages, and panel state are stored in React state. No server synchronization or persistence exists.

## DEC-003: Prototype presence and AI behavior

**Status:** Current

Presence uses fixed sample users; the AI tab returns a canned answer. These elements allow UI exploration but must not be described as production services.

## DEC-004: Socket.IO experiment is outside the routed app

**Status:** Current

`pagebackup.tsx` contains an unreferenced Socket.IO experiment and targets localhost. There is no corresponding server implementation. It is not treated as a supported integration.

## DEC-005: No database or account model

**Status:** Current

There are no data schemas, migrations, authorization rules, or persistence adapters. A real collaboration product requires these design decisions before public launch.

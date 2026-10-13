# FAQ

## Does this support real-time collaborative editing?

No. The editor keeps text in local React state. No server or synchronization protocol is implemented.

## Does the AI assistant call a model?

No. It appends a fixed generic response after a short timeout.

## Are the online users real?

No. The presence component uses a hard-coded list of three sample people. The “Connected” label is also static.

## Is there a Socket.IO backend?

No. `socket.io-client` is installed, but the routed screens do not use it. `pagebackup.tsx` is an unreferenced experiment targeting localhost; there is no server source here.

## Are editor/chat messages saved?

No. They are held in client component state and disappear on reload.

## How do I run the app?

Run `npm ci` and `npm run dev`, then open `http://localhost:3000`. See [installation.md](installation.md).

## What does the MIT license cover?

It covers the original CodeShare source and handbook within the explicit scope in [LICENSE](../LICENSE). Framework starter material, dependencies, and third-party assets remain under their own terms.

# ⚡ Performance Notes

## Current UI characteristics

- Next.js App Router application with client-side editor/chat components.
- Mantine component styles and Tailwind utility classes.
- Three sample presence avatars are loaded from pravatar.cc.
- Geist font assets are configured through `next/font/google`.
- The editor content is a small in-memory text value; no large document model exists.
- Chat content is kept in component state without pagination or persistence.

## Potential costs

- Remote avatar requests add third-party network dependencies.
- Client components increase browser-side JavaScript and hydration work.
- `contentEditable` is a prototype editing surface, not optimized for large documents.
- React state updates in the chat re-render its message list as content grows.

## Measurement-first guidance

Record a production build, route, browser, device, network profile, and bundle/build output before making performance claims. Consider local avatar assets, message virtualization, code editor bundle splitting, and measured server/client boundaries only after a real product requirement is agreed.

No benchmark, Lighthouse score, or performance budget has been published.

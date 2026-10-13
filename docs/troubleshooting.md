# Troubleshooting

## `npm run dev` does not start

- Run the command from the repository root.
- Confirm `npm ci` completed and check the terminal for the actual Next.js error.
- If port 3000 is in use, stop the other process or use the alternate URL printed by Next.js.

## `/editor` shows a mock rather than a shared editor

That is the current behavior. The editor is a browser-local `contentEditable` sample pane; no collaboration server or synchronization transport is implemented.

## The AI tab gives a generic answer

The AI tab is a mock and returns a fixed canned response after a delay. It does not call an AI model or API.

## “Connected” or user presence does not change

The status label and three sample users are hard-coded. They do not represent real connections.

## Socket.IO experiment cannot connect

`pagebackup.tsx` is an unreferenced scratch file targeting `ws://localhost:3000/`. The repository does not contain a Socket.IO server or a supported event protocol. The active `/editor` route does not use that file.

## Build or lint issues

Run `npm run build` or `npm run lint` from the root and include the relevant error in an issue after removing local paths and secrets. There is no test script in this package.

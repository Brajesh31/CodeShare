import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { buildProjectTree } from "./project-tree-lib.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const target = resolve(root, "docs/project-structure.md");
const checkOnly = process.argv.includes("--check");

let paths;
try {
  paths = execFileSync("git", ["ls-files"], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).split(/\r?\n/).filter(Boolean);
} catch (error) {
  console.error("Unable to read the Git index. Run this script inside a Git checkout.");
  console.error(error.stderr?.toString() || error.message);
  process.exit(1);
}

const source = readFileSync(target, "utf8");
const startMarker = "## Complete tracked tree";
const endMarker = "This is a tracked-file tree.";
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker, start);

if (start < 0 || end < 0 || end <= start) {
  console.error("Could not locate the tracked-tree section markers in docs/project-structure.md.");
  process.exit(1);
}

const tree = buildProjectTree(paths);
const replacement = `${startMarker}\n\n    ${tree.replaceAll("\n", "\n    ")}\n\n`;
const updated = source.slice(0, start) + replacement + source.slice(end);

if (updated === source) {
  console.log(`Project tree is current (${paths.length} tracked files).`);
  process.exit(0);
}

if (checkOnly) {
  console.error("docs/project-structure.md is out of date. Run npm run docs:tree and commit the result.");
  process.exit(1);
}

writeFileSync(target, updated);
console.log(`Updated docs/project-structure.md from ${paths.length} tracked files.`);

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "package.json",
  "package-lock.json",
  "README.md",
  "LICENSE",
  "SECURITY.md",
  "PRIVACY.md",
  "CONTRIBUTING.md",
  "CODE_OF_CONDUCT.md",
  "GOVERNANCE.md",
  "ACKNOWLEDGMENTS.md",
  "app/layout.tsx",
  "app/page.tsx",
  "app/editor/page.tsx",
  "app/components/EditorApp.tsx",
  "app/components/Editor.tsx",
  "app/components/ChatPanel.tsx",
  "app/components/UserPresence.tsx",
  "docs/README.md",
  "docs/product-overview.md",
  "docs/architecture.md",
  "docs/security.md",
  "docs/privacy.md",
  "docs/testing.md",
  "docs/diagrams/README.md",
  "docs/runbooks/README.md",
  "docs/templates/README.md",
  "scripts/README.md",
];

const failures = [];
for (const file of requiredFiles) {
  if (!existsSync(resolve(root, file))) failures.push(`Missing required file: ${file}`);
}

function collectMarkdown(directory, result = []) {
  if (!existsSync(directory)) return result;
  for (const entry of readdirSync(directory)) {
    const absolute = resolve(directory, entry);
    if (statSync(absolute).isDirectory()) collectMarkdown(absolute, result);
    else if (entry.endsWith(".md")) result.push(absolute.slice(root.length + 1));
  }
  return result;
}

const markdownFiles = [
  "README.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "PRIVACY.md",
  "GOVERNANCE.md",
  "ACKNOWLEDGMENTS.md",
  ...collectMarkdown(resolve(root, "docs")),
  ...collectMarkdown(resolve(root, "scripts")),
];

for (const path of new Set(markdownFiles)) {
  const source = readFileSync(resolve(root, path), "utf8");
  const withoutFences = source.replace(/```[\s\S]*?```/g, "");
  for (const match of withoutFences.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].trim().replace(/^<|>$/g, "");
    if (!target || /^(https?:|mailto:|tel:|#)/i.test(target)) continue;
    const local = target.split("#")[0].split("?")[0];
    if (!local) continue;
    let decoded;
    try {
      decoded = decodeURIComponent(local);
    } catch {
      failures.push(`Malformed local Markdown link in ${path}: ${target}`);
      continue;
    }
    if (!existsSync(resolve(root, dirname(path), decoded))) {
      failures.push(`Broken Markdown link in ${path}: ${target}`);
    }
  }
}

const expectedRoutes = [
  ["app/page.tsx", "LandingPage"],
  ["app/editor/page.tsx", "EditorApp"],
];
for (const [path, token] of expectedRoutes) {
  if (!readFileSync(resolve(root, path), "utf8").includes(token)) {
    failures.push(`Expected route marker '${token}' not found in ${path}`);
  }
}

if (failures.length) {
  console.error(failures.map((failure) => `❌ ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`✅ Repository validation passed: ${requiredFiles.length} required files, ${new Set(markdownFiles).size} Markdown files, and local links checked.`);
}

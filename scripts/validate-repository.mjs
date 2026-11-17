import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  ".nvmrc", "package.json", "package-lock.json", "README.md", "LICENSE",
  "SECURITY.md", "PRIVACY.md", "CONTRIBUTING.md", "CODE_OF_CONDUCT.md",
  "GOVERNANCE.md", "ACKNOWLEDGMENTS.md", "AUTHORS.md", "CITATION.cff", "CODEOWNERS",
  "app/layout.tsx", "app/page.tsx", "app/editor/page.tsx",
  "app/components/EditorApp.tsx", "app/components/Editor.tsx",
  "app/components/ChatPanel.tsx", "app/components/UserPresence.tsx",
  "docs/README.md", "docs/project-structure.md", "docs/product-overview.md",
  "docs/project-background.md", "docs/project-objectives.md", "docs/problem-statement.md",
  "docs/solution-overview.md", "docs/features.md", "docs/functional-requirements.md",
  "docs/non-functional-requirements.md", "docs/architecture.md",
  "docs/technical-overview.md", "docs/component-architecture.md",
  "docs/security.md", "docs/threat-model.md", "docs/privacy.md",
  "docs/data-flow.md", "docs/data-retention.md", "docs/testing.md",
  "docs/test-strategy.md", "docs/qa.md", "docs/accessibility.md",
  "docs/accessibility-audit.md", "docs/deployment.md", "docs/ci-cd.md",
  "docs/maintenance.md", "docs/risk-register.md", "docs/technical-debt.md",
  "docs/diagrams/README.md", "docs/diagrams/current-architecture.mmd",
  "docs/diagrams/current-data-boundary.mmd", "docs/diagrams/future-collaboration.mmd",
  "docs/runbooks/README.md", "docs/templates/README.md",
  "docs/templates/feature-brief.md", "docs/templates/architecture-template.md",
  "docs/templates/api-documentation-template.md", "docs/templates/database-schema-template.md",
  "docs/templates/accessibility-audit.md", "docs/templates/threat-assessment.md",
  "docs/templates/test-report.md", "docs/templates/deployment-checklist.md",
  "docs/templates/rollback-checklist.md", "docs/templates/maintenance-checklist.md",
  "docs/assets/logo.svg", "docs/assets/project-banner.svg",
  "docs/assets/architecture-overview.svg",
  ".github/workflows/quality-checks.yml", ".github/workflows/codeql.yml",
  ".github/workflows/dependency-review.yml", ".github/dependabot.yml",
  ".github/ISSUE_TEMPLATE/bug_report.yml", ".github/ISSUE_TEMPLATE/feature_request.yml",
  ".github/ISSUE_TEMPLATE/documentation.yml", ".github/ISSUE_TEMPLATE/security_report.yml",
  ".github/ISSUE_TEMPLATE/accessibility_report.yml", ".github/ISSUE_TEMPLATE/performance_issue.yml",
  ".github/PULL_REQUEST_TEMPLATE.md",
  "scripts/README.md", "scripts/audit-dependencies.mjs",
  "tests/repository-contract.test.mjs",
];

const failures = [];
for (const file of requiredFiles) {
  if (!existsSync(resolve(root, file))) failures.push(`Missing required file: ${file}`);
}

const manifest = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
const lock = JSON.parse(readFileSync(resolve(root, "package-lock.json"), "utf8"));
if (manifest.name !== lock.name || manifest.name !== lock.packages?.[""]?.name) {
  failures.push("package.json and package-lock.json package names do not match.");
}
if (manifest.version !== lock.version || manifest.version !== lock.packages?.[""]?.version) {
  failures.push("package.json and package-lock.json versions do not match.");
}
for (const section of ["dependencies", "devDependencies", "engines"]) {
  if (JSON.stringify(manifest[section] || {}) !== JSON.stringify(lock.packages?.[""]?.[section] || {})) {
    failures.push(`package.json and package-lock.json ${section} do not match.`);
  }
}
for (const script of ["dev", "build", "start", "typecheck", "test", "validate", "audit:security"]) {
  if (!manifest.scripts?.[script]) failures.push(`Missing npm script: ${script}`);
}

function collectFiles(directory, predicate, result = []) {
  if (!existsSync(directory)) return result;
  for (const entry of readdirSync(directory)) {
    const absolute = resolve(directory, entry);
    if (statSync(absolute).isDirectory()) collectFiles(absolute, predicate, result);
    else if (predicate(absolute)) result.push(absolute.slice(root.length + 1));
  }
  return result;
}

const markdownFiles = [
  "README.md", "CONTRIBUTING.md", "SECURITY.md", "PRIVACY.md",
  "GOVERNANCE.md", "ACKNOWLEDGMENTS.md", "AUTHORS.md",
  ...collectFiles(resolve(root, "docs"), (path) => path.endsWith(".md")),
  ...collectFiles(resolve(root, "scripts"), (path) => path.endsWith(".md")),
];

for (const path of new Set(markdownFiles)) {
  const source = readFileSync(resolve(root, path), "utf8");
  const withoutFences = source.replace(/```[\s\S]*?```/g, "");
  for (const match of withoutFences.matchAll(/!\[[^\]]*\]\(([^)]+)\)|\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = (match[1] || match[2]).trim().replace(/^<|>$/g, "");
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

const workflows = [
  ".github/workflows/quality-checks.yml",
  ".github/workflows/codeql.yml",
  ".github/workflows/dependency-review.yml",
];
for (const workflow of workflows) {
  if (!existsSync(resolve(root, workflow))) failures.push(`Missing workflow: ${workflow}`);
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

const svgFiles = collectFiles(resolve(root, "docs/assets"), (path) => path.endsWith(".svg"));
if (svgFiles.length < 3) failures.push("Expected original logo, banner, and architecture SVG assets.");

if (failures.length) {
  console.error(failures.map((failure) => `❌ ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`✅ Repository validation passed: ${requiredFiles.length} required paths, package/lock consistency, ${new Set(markdownFiles).size} Markdown files, local links, workflows, and visual asset paths checked.`);
}

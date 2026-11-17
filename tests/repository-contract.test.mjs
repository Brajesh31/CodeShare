import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(resolve(root, path), "utf8");
const parse = (path) => JSON.parse(read(path));

test("package manifest and lockfile stay in sync", () => {
  const manifest = parse("package.json");
  const lock = parse("package-lock.json");
  assert.equal(manifest.name, "codeshare");
  assert.equal(lock.name, manifest.name);
  assert.equal(lock.packages[""].name, manifest.name);
  assert.equal(lock.version, manifest.version);
  assert.deepEqual(lock.packages[""].dependencies, manifest.dependencies);
  assert.deepEqual(lock.packages[""].devDependencies, manifest.devDependencies);
  assert.deepEqual(lock.packages[""].engines, manifest.engines);
});

test("the package exposes reproducible project checks", () => {
  const scripts = parse("package.json").scripts;
  assert.equal(scripts.typecheck, "tsc --noEmit");
  assert.equal(scripts.test, "node --test");
  assert.equal(scripts.validate, "node scripts/validate-repository.mjs");
  assert.ok(scripts.build);
  assert.ok(scripts.dev);
  assert.ok(scripts.start);
});

test("Node runtime pin matches the CI runtime", () => {
  assert.equal(read(".nvmrc").trim(), "22");
  assert.match(read("package.json"), /"node": ">=20\.9\.0"/);
  assert.match(read(".github/workflows/quality-checks.yml"), /node-version:\s*"22"/);
});

test("the App Router exposes the documented routes", () => {
  assert.ok(existsSync(resolve(root, "app/page.tsx")));
  assert.ok(existsSync(resolve(root, "app/editor/page.tsx")));
  assert.match(read("app/page.tsx"), /href="\/editor"/);
  assert.match(read("app/editor/page.tsx"), /<Editor\s+darkMode=/);
});

test("the editor UI does not advertise a live connection or synchronization", () => {
  assert.match(read("app/editor/page.tsx"), /Local demo/);
  assert.match(read("app/editor/page.tsx"), /sample profiles/i);
  assert.match(read("app/components/Editor.tsx"), /Sync: Not connected/);
  assert.doesNotMatch(read("app/editor/page.tsx"), />Connected</);
  assert.doesNotMatch(read("app/components/Editor.tsx"), /Collaborative Editing:\s*On/);
});

test("routed prototype components do not import the legacy socket experiment", () => {
  for (const path of [
    "app/editor/page.tsx",
    "app/components/Editor.tsx",
    "app/components/ChatPanel.tsx",
    "app/components/EditorApp.tsx",
  ]) {
    assert.doesNotMatch(read(path), /from\s+['"]socket\.io-client['"]/);
  }
});

test("landing page avoids unsupported production claims", () => {
  const landing = read("app/page.tsx");
  assert.match(landing, /prototype/i);
  assert.match(landing, /local editor/i);
  assert.doesNotMatch(landing, /join thousands of developers/i);
  assert.doesNotMatch(landing, /code together in real-time/i);
  assert.doesNotMatch(landing, /intelligent code suggestions/i);
});

test("security documentation states the actual prototype boundary", () => {
  const security = read("docs/security.md");
  assert.match(security, /no authentication/i);
  assert.match(security, /collaboration backend/i);
  assert.match(security, /Do not use it for confidential source code/i);
});

test("documentation indexes the complete project reference set", () => {
  assert.ok(existsSync(resolve(root, "docs/project-structure.md")));
  assert.match(read("docs/README.md"), /Functional requirements/);
  assert.match(read("docs/README.md"), /Risk register/);
  assert.match(read("docs/README.md"), /Accessibility audit/);
  assert.match(read("docs/project-structure.md"), /repository-contract\.test\.mjs/);
});

test("security workflows use the project’s current language and review scope", () => {
  const codeql = read(".github/workflows/codeql.yml");
  const dependencyReview = read(".github/workflows/dependency-review.yml");
  assert.match(codeql, /languages:\s*javascript-typescript/);
  assert.match(codeql, /github\/codeql-action\/analyze@v4/);
  assert.match(dependencyReview, /actions\/dependency-review-action@v5/);
  assert.match(dependencyReview, /fail-on-severity:\s*high/);
});

test("README links to the real visual assets and repository docs", () => {
  const readme = read("README.md");
  assert.match(readme, /docs\/assets\/project-banner\.svg/);
  assert.match(readme, /docs\/assets\/logo\.svg/);
  assert.match(readme, /docs\/project-structure\.md/);
});

test("project structure generator stays synchronized with Git-tracked paths", async () => {
  const { execFileSync } = await import("node:child_process");
  const { buildProjectTree } = await import("../scripts/project-tree-lib.mjs");
  const tracked = execFileSync("git", ["ls-files"], { encoding: "utf8" })
    .split(/\r?\n/)
    .filter(Boolean);
  const doc = read("docs/project-structure.md");
  const start = doc.indexOf("## Complete tracked tree");
  const end = doc.indexOf("This is a tracked-file tree.", start);
  assert.ok(start >= 0 && end > start, "tracked-tree section markers should exist");
  const actualLines = doc.slice(start, end).split(/\r?\n/).slice(2);
  const actual = actualLines.map((line) => line.startsWith("    ") ? line.slice(4) : line).filter(Boolean).join("\n");
  assert.equal(actual, buildProjectTree(tracked));
});

test("security remediation is explicitly tracked and not falsely marked resolved", () => {
  const security = read("docs/dependency-security.md");
  const manifest = parse("package.json");
  assert.equal(manifest.dependencies.next, "15.3.1");
  assert.match(security, /15\.3\.1/);
  assert.match(security, /15\.5\.29/);
  assert.match(security, /not been applied or verified/i);
  assert.match(security, /Do not deploy/i);
});

test("quality workflow checks the generated project tree and citation metadata", () => {
  const workflow = read(".github/workflows/quality-checks.yml");
  assert.match(workflow, /npm run docs:tree:check/);
  assert.match(workflow, /CITATION\.cff/);
});

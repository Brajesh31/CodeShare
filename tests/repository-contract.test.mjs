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
  assert.match(security, /no collaboration backend/i);
  assert.match(security, /Do not use it for confidential source code/i);
});

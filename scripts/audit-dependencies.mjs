import { appendFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const command = process.platform === "win32" ? "npm.cmd" : "npm";
const audit = spawnSync(command, ["audit", "--json"], {
  encoding: "utf8",
  maxBuffer: 10 * 1024 * 1024,
  shell: process.platform === "win32",
});

if (audit.error) {
  console.error("Unable to run npm audit:", audit.error.message);
  process.exit(1);
}

let report;
try {
  report = JSON.parse(audit.stdout || "{}");
} catch {
  console.error("npm audit did not return valid JSON.");
  console.error(audit.stderr || audit.stdout);
  process.exit(1);
}

const counts = report.metadata?.vulnerabilities;
if (!counts) {
  console.error("npm audit response did not include vulnerability metadata.");
  console.error(report.error?.summary || audit.stderr || "No additional details were returned.");
  process.exit(1);
}

const total = Number(counts.total || 0);
const severities = ["critical", "high", "moderate", "low", "info"];
const rows = severities.map((severity) => `| ${severity} | ${Number(counts[severity] || 0)} |`);
const summary = [
  "## Dependency security audit",
  "",
  `Total advisories reported by npm: **${total}**`,
  "",
  "| Severity | Count |",
  "|---|---:|",
  ...rows,
  "",
  "This report is informational. Review advisory details and update dependencies deliberately; do not apply force upgrades without checking compatibility.",
  "",
].join("\n");

console.log(summary);
if (process.env.GITHUB_STEP_SUMMARY) {
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
}

if (total > 0) {
  console.warn(`::warning::npm audit reported ${total} dependency advisories. Review the security summary and update plan.`);
} else {
  console.log("No dependency advisories were reported.");
}

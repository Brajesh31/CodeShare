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

const severities = ["critical", "high", "moderate", "low", "info"];
const total = Number(counts.total || 0);
const rows = severities.map((severity) => `| ${severity} | ${Number(counts[severity] || 0)} |`);
const packages = Object.entries(report.vulnerabilities || {});
const packageRows = packages.map(([name, info]) => {
  const fix = info.fixAvailable === false
    ? "No automatic fix reported"
    : typeof info.fixAvailable === "object"
      ? `${info.fixAvailable.name || name}@${info.fixAvailable.version || "version unspecified"}${info.fixAvailable.isSemVerMajor ? " (major update)" : ""}`
      : "Review npm advisory details";
  return `| ${name} | ${info.severity || "unknown"} | ${info.isDirect ? "Direct" : "Transitive"} | ${fix.replaceAll("|", "\\|")} |`;
});

const summary = [
  "## Dependency security audit",
  "",
  `Total advisories reported by npm: **${total}**`,
  "",
  "| Severity | Count |",
  "|---|---:|",
  ...rows,
  "",
  "### Affected package summary",
  "",
  "| Package | Severity | Dependency | npm fix hint |",
  "|---|---|---|---|",
  ...(packageRows.length ? packageRows : ["| None reported | - | - | - |"]),
  "",
  "This report is informational. Review advisory details and compatibility before updating dependencies. Do not apply force upgrades without a migration plan.",
  "",
].join("\n");

console.log(summary);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary + "\n");

if (total > 0) {
  console.warn(`::warning::npm audit reported ${total} dependency advisories. See the package summary and remediation guidance.`);
} else {
  console.log("No dependency advisories were reported.");
}

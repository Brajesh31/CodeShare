# 🗂️ Project Structure and File Responsibilities

> This tracked-file tree was inspected on 2026-11-18. It describes the current repository, not a proposed backend architecture. Update it whenever paths are added, renamed, or removed.

## Complete tracked tree

    CodeShare/
    ├── .github/
    │   ├── DISCUSSION_TEMPLATE/
    │   │   ├── ideas.yml
    │   │   └── question.yml
    │   ├── ISSUE_TEMPLATE/
    │   │   ├── accessibility_report.yml
    │   │   ├── bug_report.yml
    │   │   ├── config.yml
    │   │   ├── documentation.yml
    │   │   ├── feature_request.yml
    │   │   ├── performance_issue.yml
    │   │   └── security_report.yml
    │   ├── workflows/
    │   │   ├── codeql.yml
    │   │   ├── dependency-review.yml
    │   │   ├── quality-checks.yml
    │   │   └── update-readme.yml
    │   ├── dependabot.yml
    │   └── PULL_REQUEST_TEMPLATE.md
    ├── .idea/
    │   ├── .gitignore
    │   ├── CodeShare.iml
    │   ├── modules.xml
    │   └── vcs.xml
    ├── app/
    │   ├── components/
    │   │   ├── ChatPanel.tsx
    │   │   ├── Editor.tsx
    │   │   ├── EditorApp.tsx
    │   │   └── UserPresence.tsx
    │   ├── editor/
    │   │   └── page.tsx
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── docs/
    │   ├── assets/
    │   │   ├── architecture-overview.svg
    │   │   ├── logo.svg
    │   │   └── project-banner.svg
    │   ├── diagrams/
    │   │   ├── application-workflow.mmd
    │   │   ├── ci-release-flow.mmd
    │   │   ├── component-hierarchy.mmd
    │   │   ├── current-architecture.mmd
    │   │   ├── current-data-boundary.mmd
    │   │   ├── deployment-flow.mmd
    │   │   ├── editor-state.mmd
    │   │   ├── error-recovery.mmd
    │   │   ├── external-data-flow.mmd
    │   │   ├── future-collaboration.mmd
    │   │   ├── local-chat-sequence.mmd
    │   │   ├── README.md
    │   │   ├── security-boundaries.mmd
    │   │   ├── testing-flow.mmd
    │   │   └── ui-flow.mmd
    │   ├── runbooks/
    │   │   ├── build-failure.md
    │   │   ├── dependency-update.md
    │   │   ├── deployment-rollback.md
    │   │   ├── local-startup.md
    │   │   ├── prototype-triage.md
    │   │   ├── README.md
    │   │   └── secret-exposure.md
    │   ├── templates/
    │   │   ├── accessibility-audit.md
    │   │   ├── api-documentation-template.md
    │   │   ├── api-event-specification.md
    │   │   ├── architecture-decision.md
    │   │   ├── architecture-template.md
    │   │   ├── bug-report.md
    │   │   ├── change-request.md
    │   │   ├── code-review.md
    │   │   ├── database-schema-template.md
    │   │   ├── dependency-review.md
    │   │   ├── deployment-checklist.md
    │   │   ├── feature-brief.md
    │   │   ├── incident-report.md
    │   │   ├── maintenance-checklist.md
    │   │   ├── meeting-notes.md
    │   │   ├── migration-template.md
    │   │   ├── project-status.md
    │   │   ├── qa-test-case.md
    │   │   ├── README.md
    │   │   ├── release-checklist.md
    │   │   ├── risk-assessment.md
    │   │   ├── rollback-checklist.md
    │   │   ├── security-privacy-review.md
    │   │   ├── test-plan.md
    │   │   ├── test-report.md
    │   │   └── threat-assessment.md
    │   ├── accessibility-audit.md
    │   ├── accessibility.md
    │   ├── api-reference.md
    │   ├── api.md
    │   ├── application-lifecycle.md
    │   ├── architecture.md
    │   ├── building.md
    │   ├── ci-cd.md
    │   ├── code-standards.md
    │   ├── commands-reference.md
    │   ├── component-architecture.md
    │   ├── components.md
    │   ├── configuration.md
    │   ├── data-flow.md
    │   ├── data-retention.md
    │   ├── database-schema.md
    │   ├── database.md
    │   ├── debugging.md
    │   ├── decision-log.md
    │   ├── dependencies.md
    │   ├── dependency-security.md
    │   ├── deployment.md
    │   ├── design-system.md
    │   ├── developer-guide.md
    │   ├── development.md
    │   ├── environment-variables.md
    │   ├── error-handling.md
    │   ├── faq.md
    │   ├── features.md
    │   ├── functional-requirements.md
    │   ├── getting-started.md
    │   ├── glossary.md
    │   ├── installation.md
    │   ├── known-issues.md
    │   ├── maintainer-guide.md
    │   ├── maintenance.md
    │   ├── navigation-structure.md
    │   ├── non-functional-requirements.md
    │   ├── performance.md
    │   ├── privacy.md
    │   ├── problem-statement.md
    │   ├── product-overview.md
    │   ├── project-background.md
    │   ├── project-objectives.md
    │   ├── project-structure.md
    │   ├── qa.md
    │   ├── README.md
    │   ├── release-process.md
    │   ├── responsive-design.md
    │   ├── risk-register.md
    │   ├── scope-and-limitations.md
    │   ├── secret-management.md
    │   ├── security.md
    │   ├── solution-overview.md
    │   ├── technical-debt.md
    │   ├── technical-overview.md
    │   ├── technology-stack.md
    │   ├── test-strategy.md
    │   ├── testing.md
    │   ├── threat-model.md
    │   ├── troubleshooting.md
    │   ├── ui-ux-guidelines.md
    │   ├── use-cases.md
    │   ├── user-journeys.md
    │   └── user-personas.md
    ├── public/
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── scripts/
    │   ├── audit-dependencies.mjs
    │   ├── README.md
    │   └── validate-repository.mjs
    ├── tests/
    │   └── repository-contract.test.mjs
    ├── .editorconfig
    ├── .env.example
    ├── .gitattributes
    ├── .gitignore
    ├── .nvmrc
    ├── ACKNOWLEDGMENTS.md
    ├── AUTHORS.md
    ├── CHANGELOG.md
    ├── CITATION.cff
    ├── CODE_OF_CONDUCT.md
    ├── CODEOWNERS
    ├── CONTRIBUTING.md
    ├── GOVERNANCE.md
    ├── LICENSE
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── pagebackup.tsx
    ├── postcss.config.mjs
    ├── PRIVACY.md
    ├── README.md
    ├── ROADMAP.md
    ├── SECURITY.md
    ├── SUPPORT.md
    ├── tailwind.config.ts
    └── tsconfig.json

This is a tracked-file tree. Git metadata, installed dependencies, generated build output, ignored local secrets, and build cache are intentionally excluded.

## Root-level configuration

| File | Responsibility |
|---|---|
| README.md | Public project introduction, badges, prototype scope, setup and route map |
| package.json | Project metadata, scripts, runtime and development dependencies, Node engine |
| package-lock.json | Exact npm dependency graph |
| .nvmrc | Selects Node 22 for local development |
| .env.example | Documents current lack of required app environment variables |
| .gitignore | Excludes dependency installs, build output, local environment values, and temporary files |
| .editorconfig | Shared whitespace and newline conventions |
| .gitattributes | Git text and line-ending normalization |
| next.config.ts | Next.js build/runtime configuration |
| postcss.config.mjs | Tailwind/PostCSS integration |
| tailwind.config.ts | Tailwind configuration |
| tsconfig.json | TypeScript compiler options |

The .idea directory contains IDE project metadata. It is retained because the repository already tracked it, not because the web application requires it.

## Application source

| Path | Responsibility |
|---|---|
| app/layout.tsx | Root layout, metadata, font setup, global styles, Mantine provider |
| app/page.tsx | Landing page and prototype disclosure |
| app/editor/page.tsx | Active editor workspace route and local UI state |
| app/components/Editor.tsx | Sample editor content and language selector |
| app/components/ChatPanel.tsx | Local team chat and fixed AI Preview interaction |
| app/components/UserPresence.tsx | Three static sample profiles and avatar display |
| app/components/EditorApp.tsx | Alternate/duplicate workspace shell, not the active route |
| app/globals.css | Global stylesheet and Tailwind import |
| app/favicon.ico | Application icon |

There is no app/api directory, server folder, database schema, authentication module, or active WebSocket server.

## Public and design assets

- docs/assets/logo.svg and project-banner.svg are original CodeShare identity artwork.
- architecture-overview.svg explains the current application boundary.
- docs/diagrams/*.mmd contain editable Mermaid source.
- public/*.svg are retained starter/sample assets. Their presence does not imply the active UI uses them as feature illustrations.
- No fabricated browser screenshots are included. Add screenshots only after capturing real app states.

## Documentation and engineering resources

| Directory | Purpose |
|---|---|
| docs/ | Product, architecture, UX, security, privacy, testing, deployment, and maintenance handbook |
| docs/assets/ | Original project identity and architecture artwork |
| docs/diagrams/ | Current-state and explicitly proposed future Mermaid diagrams |
| docs/runbooks/ | Practical troubleshooting and operational procedures |
| docs/templates/ | Reusable engineering, QA, security, and change-management records |
| scripts/ | Repository validation and dependency audit reporting |
| tests/ | Node-native repository contract tests |

API and database documentation explains that no such services exist in the current application. API and database templates are future-use materials, not claims of deployed infrastructure.

## GitHub automation

| Path | Responsibility |
|---|---|
| .github/workflows/quality-checks.yml | Tests, type check, repository validation, production build, YAML and Mermaid checks, npm audit summary |
| .github/workflows/codeql.yml | CodeQL JavaScript/TypeScript analysis |
| .github/workflows/dependency-review.yml | Review dependency changes introduced by pull requests |
| .github/workflows/update-readme.yml | README timestamp automation |
| .github/dependabot.yml | Weekly npm and GitHub Actions update proposals |
| .github/ISSUE_TEMPLATE/ | Structured bug, feature, docs, security, accessibility, and performance reports |
| .github/DISCUSSION_TEMPLATE/ | Question and idea prompts |
| .github/PULL_REQUEST_TEMPLATE.md | Change summary and review checklist |

## Scripts and tests

- scripts/validate-repository.mjs checks required paths, npm metadata consistency, required scripts, route markers, and relative Markdown links.
- scripts/audit-dependencies.mjs reports npm audit advisory counts. It is informational and does not remediate advisories.
- tests/repository-contract.test.mjs protects package consistency and accurate prototype disclosures.

## Build output and naming

.next/ is generated by Next.js; node_modules/ is installed by npm. Neither should be committed. Local environment files must remain ignored.

- React components: PascalCase component names and .tsx files.
- App Router routes: page.tsx files beneath app/.
- Documentation: lowercase kebab-case Markdown names.
- Diagrams: lowercase kebab-case .mmd names.
- Scripts: descriptive kebab-case .mjs names.
- Templates: descriptive kebab-case Markdown names.

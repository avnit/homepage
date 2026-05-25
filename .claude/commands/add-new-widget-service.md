---
name: add-new-widget-service
description: Workflow command scaffold for add-new-widget-service in homepage.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-new-widget-service

Use this workflow when working on **add-new-widget-service** in `homepage`.

## Goal

Adds a new widget/service to the homepage dashboard, including implementation, documentation, localization, and registration.

## Common Files

- `docs/widgets/services/{widget}.md`
- `docs/widgets/services/index.md`
- `mkdocs.yml`
- `public/locales/en/common.json`
- `src/utils/config/service-helpers.js`
- `src/widgets/{widget}/component.jsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update documentation for the new widget in docs/widgets/services/{widget}.md
- Update docs/widgets/services/index.md to include the new widget
- Update mkdocs.yml to register the new documentation page
- Update public/locales/en/common.json for localization
- Update src/utils/config/service-helpers.js to add service config helpers

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.
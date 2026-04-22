---
name: add-or-enhance-widget-service
description: Workflow command scaffold for add-or-enhance-widget-service in homepage.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-enhance-widget-service

Use this workflow when working on **add-or-enhance-widget-service** in `homepage`.

## Goal

Adds a new widget service or enhances an existing one, including implementation, documentation, and localization.

## Common Files

- `docs/widgets/services/*.md`
- `src/widgets/*/component.jsx`
- `src/widgets/*/widget.js`
- `src/widgets/*/proxy.js`
- `public/locales/en/common.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update or create documentation in docs/widgets/services/{service}.md
- Update or create implementation files in src/widgets/{service}/component.jsx and/or src/widgets/{service}/widget.js
- Optionally update localization in public/locales/en/common.json
- Optionally update proxy or helper files in src/widgets/{service}/proxy.js

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.
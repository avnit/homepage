---
name: update-existing-widget-for-breaking-changes
description: Workflow command scaffold for update-existing-widget-for-breaking-changes in homepage.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /update-existing-widget-for-breaking-changes

Use this workflow when working on **update-existing-widget-for-breaking-changes** in `homepage`.

## Goal

Updates an existing widget to handle upstream service breaking changes, including code and documentation updates.

## Common Files

- `docs/widgets/services/{widget}.md`
- `src/widgets/{widget}/widget.js`
- `src/widgets/{widget}/component.jsx`
- `src/utils/config/service-helpers.js`
- `src/widgets/{widget}/component.test.jsx`
- `src/widgets/{widget}/widget.test.js`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update docs/widgets/services/{widget}.md to document the breaking change
- Update src/widgets/{widget}/widget.js and/or component.jsx to handle new API/behavior
- Update src/utils/config/service-helpers.js if config helpers need changes
- Update or add tests as needed

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.
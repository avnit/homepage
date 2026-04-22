---
name: dependency-update-via-dependabot
description: Workflow command scaffold for dependency-update-via-dependabot in homepage.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /dependency-update-via-dependabot

Use this workflow when working on **dependency-update-via-dependabot** in `homepage`.

## Goal

Automated dependency update for npm packages or GitHub Actions via Dependabot.

## Common Files

- `package.json`
- `pnpm-lock.yaml`
- `.github/workflows/*.yml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update package.json and pnpm-lock.yaml for npm packages
- Update .github/workflows/*.yml for GitHub Actions
- Commit with a standard Dependabot message

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.
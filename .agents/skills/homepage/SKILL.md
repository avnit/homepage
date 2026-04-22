```markdown
# homepage Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill provides a comprehensive guide to the development patterns, coding conventions, and common workflows in the `homepage` repository. The codebase is a JavaScript project built with Next.js, focusing on modular widget services, robust localization, and clear documentation. Automated workflows streamline dependency management, translation syncing, and service enhancements.

## Coding Conventions

- **File Naming:** Use `camelCase` for file and directory names.
  - Example: `widgetService.js`, `serviceHelpers.js`
- **Import Style:** Use absolute imports.
  - Example:
    ```js
    import { getWidgetConfig } from 'src/utils/config/service-helpers';
    ```
- **Export Style:** Use named exports.
  - Example:
    ```js
    // src/widgets/weather/widget.js
    export function fetchWeatherData() { ... }
    export const WEATHER_WIDGET_ID = 'weather';
    ```
- **Commit Messages:** Use prefixes such as `chore`, `enhancement`, `fix`, `documentation`, `feature`. Keep messages concise (~49 characters).
  - Example: `fix: correct widget refresh interval handling`

## Workflows

### Add or Enhance Widget Service
**Trigger:** When adding a new widget service or enhancing an existing one  
**Command:** `/add-widget-service`

1. Update or create documentation in `docs/widgets/services/{service}.md`.
2. Implement or update the widget in:
   - `src/widgets/{service}/component.jsx`
   - `src/widgets/{service}/widget.js`
3. Optionally update localization in `public/locales/en/common.json`.
4. Optionally update proxy or helper logic in `src/widgets/{service}/proxy.js`.
5. Commit changes with an appropriate message.

**Example:**
```js
// src/widgets/clock/widget.js
export function getCurrentTime() { ... }
```
```json
// public/locales/en/common.json
{
  "clock_widget_title": "Clock"
}
```

---

### Dependency Update via Dependabot
**Trigger:** When dependencies (npm packages or GitHub Actions) need updating  
**Command:** `/update-dependency`

1. Update `package.json` and `pnpm-lock.yaml` for npm packages.
2. Update `.github/workflows/*.yml` for GitHub Actions.
3. Commit with a standard Dependabot message.

**Example:**
```json
// package.json
"dependencies": {
  "next": "^13.4.0"
}
```

---

### Documentation Update
**Trigger:** When clarifying, updating, or adding documentation  
**Command:** `/update-docs`

1. Edit relevant markdown files in `docs/` (e.g., configs, installation, troubleshooting, widgets/services).
2. Commit with a documentation-focused message.

**Example:**
```markdown
// docs/widgets/services/clock.md
# Clock Widget
Describes configuration and usage of the Clock widget.
```

---

### Crowdin Translation Sync
**Trigger:** When new translations are available from Crowdin  
**Command:** `/sync-crowdin`

1. Update one or more `public/locales/{lang}/common.json` files.
2. Commit with a Crowdin sync message.

**Example:**
```json
// public/locales/es/common.json
{
  "clock_widget_title": "Reloj"
}
```

---

### Service Helper Logic Update
**Trigger:** When updating or fixing logic in the service-helpers utility  
**Command:** `/update-service-helper`

1. Edit `src/utils/config/service-helpers.js` to add features or fix bugs.
2. Optionally update related widget/component files.
3. Commit with a `feature` or `fix` message.

**Example:**
```js
// src/utils/config/service-helpers.js
export function normalizeServiceConfig(config) { ... }
```

## Testing Patterns

- **Framework:** [vitest](https://vitest.dev/)
- **Test File Pattern:** `*.test.js` (located alongside source files)
- **Example:**
  ```js
  // src/widgets/clock/widget.test.js
  import { getCurrentTime } from './widget';

  test('returns current time as string', () => {
    expect(typeof getCurrentTime()).toBe('string');
  });
  ```

## Commands

| Command                | Purpose                                                      |
|------------------------|--------------------------------------------------------------|
| /add-widget-service    | Add or enhance a widget service                              |
| /update-dependency     | Update npm or GitHub Action dependencies                     |
| /update-docs           | Update or clarify documentation                              |
| /sync-crowdin          | Sync translations from Crowdin                               |
| /update-service-helper | Update or fix logic in service-helpers utility               |
```

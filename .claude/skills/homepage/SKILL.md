```markdown
# homepage Development Patterns

> Auto-generated skill from repository analysis

## Overview

This skill teaches you how to contribute to the `homepage` repository, a Next.js-based JavaScript project for building customizable dashboards with widgets and services. You'll learn the project's coding conventions, how to add or update widgets, manage documentation, handle localization, upgrade dependencies, and write effective tests. The guide includes step-by-step workflows and example commands to streamline your contributions.

## Coding Conventions

- **File Naming:**  
  Use camelCase for file and directory names.  
  _Example:_  
  ```
  src/widgets/weatherWidget/component.jsx
  src/utils/config/serviceHelpers.js
  ```

- **Import Style:**  
  Use absolute imports from the project root.  
  _Example:_  
  ```js
  import { getServiceConfig } from 'src/utils/config/serviceHelpers';
  import WeatherWidget from 'src/widgets/weatherWidget/component';
  ```

- **Export Style:**  
  Use named exports for modules and components.  
  _Example:_  
  ```js
  // src/widgets/weatherWidget/widget.js
  export const WeatherWidgetConfig = { ... };
  export function fetchWeatherData() { ... }
  ```

- **Commit Patterns:**  
  - Prefixes: `chore`, `enhancement`, `documentation`, `fix`, `feature`
  - Messages are concise (~51 chars on average)
  - _Example:_  
    ```
    fix: handle null response in weather widget
    feature: add support for new calendar service
    ```

## Workflows

### Add New Widget/Service
**Trigger:** When someone wants to add support for a new service/widget.  
**Command:** `/add-widget`

1. Create or update documentation:  
   `docs/widgets/services/{widget}.md`
2. Update the index:  
   `docs/widgets/services/index.md`
3. Register the doc page:  
   Update `mkdocs.yml`
4. Add localization:  
   Update `public/locales/en/common.json`
5. Add service config helpers:  
   Update `src/utils/config/service-helpers.js`
6. Implement the widget:  
   - `src/widgets/{widget}/component.jsx`
   - `src/widgets/{widget}/widget.js`
   - Optionally: `src/widgets/{widget}/proxy.js`
7. Register the widget:  
   - `src/widgets/components.js`
   - `src/widgets/widgets.js`
8. Add tests:  
   - `src/widgets/{widget}/component.test.jsx`
   - `src/widgets/{widget}/widget.test.js`

_Example:_
```js
// src/widgets/weatherWidget/widget.js
export const WeatherWidgetConfig = { ... };

// src/widgets/weatherWidget/component.jsx
export function WeatherWidget(props) { ... }
```

### Update Existing Widget for Breaking Changes
**Trigger:** When an upstream service changes its API or behavior and the widget needs to be updated.  
**Command:** `/update-widget-breaking`

1. Update documentation:  
   `docs/widgets/services/{widget}.md`
2. Update widget logic:  
   - `src/widgets/{widget}/widget.js`
   - `src/widgets/{widget}/component.jsx`
3. Update config helpers if needed:  
   `src/utils/config/service-helpers.js`
4. Update or add tests:  
   - `src/widgets/{widget}/component.test.jsx`
   - `src/widgets/{widget}/widget.test.js`

### Add or Update Widget Tests
**Trigger:** When a widget is added or modified, or when improving test coverage.  
**Command:** `/widget-tests`

1. Add or update component tests:  
   `src/widgets/{widget}/component.test.jsx`
2. Add or update logic tests:  
   `src/widgets/{widget}/widget.test.js`
3. Optionally update shared test logic:  
   `src/test-utils/widget-assertions.js`

_Example:_
```js
// src/widgets/weatherWidget/component.test.jsx
import { render } from '@testing-library/react';
import { WeatherWidget } from './component';

test('renders weather data', () => {
  render(<WeatherWidget ... />);
  // assertions
});
```

### Add or Update Documentation
**Trigger:** When a new feature is added or clarification is needed in the docs.  
**Command:** `/docs-update`

1. Edit or add markdown files:  
   - `docs/widgets/services/`
   - `docs/widgets/info/`
   - `docs/configs/`
2. Update `mkdocs.yml` if a new page is added

### Dependency Upgrade
**Trigger:** When a dependency update PR is merged.  
**Command:** `/upgrade-deps`

1. Update `package.json` with new versions
2. Update `pnpm-lock.yaml`
3. Optionally update config files (e.g., `eslint.config.mjs`)

### Localization Update
**Trigger:** When new or updated translations are imported.  
**Command:** `/update-locales`

1. Update translation files:  
   `public/locales/{lang}/common.json` for all supported languages

## Testing Patterns

- **Framework:** [vitest](https://vitest.dev/)
- **Test File Pattern:**  
  - Component tests: `*.test.jsx`
  - Logic tests: `*.test.js`
- **Structure:**  
  Place tests alongside their respective widget/component.

_Example:_
```js
// src/widgets/calendarWidget/component.test.jsx
import { render } from '@testing-library/react';
import { CalendarWidget } from './component';

test('displays upcoming events', () => {
  render(<CalendarWidget ... />);
  // assertions
});
```

## Commands

| Command            | Purpose                                                      |
|--------------------|--------------------------------------------------------------|
| /add-widget        | Add a new widget/service to the dashboard                    |
| /update-widget-breaking | Update a widget for upstream breaking changes           |
| /widget-tests      | Add or update tests for widgets                              |
| /docs-update       | Add or update documentation                                  |
| /upgrade-deps      | Upgrade npm or dev dependencies                              |
| /update-locales    | Update translation files for all supported languages         |
```

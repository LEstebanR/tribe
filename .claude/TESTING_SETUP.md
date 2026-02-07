# Testing Setup & GitHub Workflows

Reference guide for the Tribe project's testing infrastructure and CI/CD workflows.

## 📊 What Was Set Up

### Testing Framework
- **Vitest** - Fast unit testing with Jest-compatible API
- **@testing-library/react** - React component testing utilities
- **jsdom** - DOM environment for testing browser APIs

### GitHub Workflows
- **CI Pipeline** (`.github/workflows/ci.yml`)
  - Runs ESLint on every push/PR
  - Runs TypeScript type check on every push/PR
  - Runs Vitest tests on every push/PR
  - Comments on PRs with results

- **Build Verification** (`.github/workflows/build.yml`)
  - Verifies production build succeeds
  - Uploads build artifacts
  - Comments on PRs with status

## 🏃 Quick Commands

```bash
# Run tests once
bun test

# Run tests in watch mode (development)
bun test --watch

# Run tests with interactive UI
bun test:ui

# Generate coverage report
bun test:coverage

# Run linting
bun lint

# Run type checking
bun type-check

# Build for production
bun build

# Local quality checks (all 3)
bun lint && bun type-check && bun test
```

## 📁 Test Files Structure

Tests are placed next to the code they test:

```
app/
├── layout.tsx
├── page.tsx
└── __tests__/
    ├── layout.test.tsx       # Tests for layout.tsx
    └── page.test.tsx         # Tests for page.tsx

components/
├── navbar.tsx
├── hero.tsx
└── __tests__/
    ├── navbar.test.tsx       # Tests for navbar.tsx
    └── utils.test.ts         # Tests for lib/utils.ts
```

## ✅ Existing Tests

### Layout Tests (`app/__tests__/layout.test.tsx`)
- ✅ Verifies RootLayout renders correctly
- ✅ Checks metadata is correct
- ✅ Verifies viewport settings
- ✅ Confirms HTML lang="es"

### Page Tests (`app/__tests__/page.test.tsx`)
- ✅ Verifies Home page component exists
- ✅ Checks all section components are importable
- ✅ Verifies page structure with main element

### Utility Tests (`components/__tests__/utils.test.ts`)
- ✅ Tests `cn()` utility from lib/utils.ts
- ✅ Tests class merging and conditional classes
- ✅ Tests Tailwind conflict resolution

## 🔧 Configuration Files

### vitest.config.ts
Main Vitest configuration:
- Uses jsdom environment (DOM testing)
- Setup file for mocks and globals
- Coverage configuration
- Path alias for @/

### vitest.setup.ts
Test setup:
- Imports testing-library globals
- Mocks Next.js router
- Mocks Next.js Image component
- Suppresses console errors

### package.json Scripts
```json
{
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest --coverage"
}
```

## 🚀 GitHub Workflows

### CI Workflow (`.github/workflows/ci.yml`)

Runs on:
- Push to main, develop, feature/*, bugfix/*, hotfix/*
- Pull requests to main and develop

Steps:
1. **Lint Job**
   - Installs dependencies with bun
   - Runs `bun lint`
   - Comments on PR if fails

2. **Type-Check Job**
   - Installs dependencies with bun
   - Runs `bun type-check`
   - Comments on PR if fails

3. **Test Job**
   - Installs dependencies with bun
   - Runs `bun test`
   - Uploads coverage to codecov
   - Comments on PR if fails

4. **All-Checks Job**
   - Verifies all other jobs passed
   - Comments success/failure on PR

### Build Workflow (`.github/workflows/build.yml`)

Runs on:
- Push to main, develop, feature/*, bugfix/*
- Pull requests to main and develop

Steps:
1. Installs dependencies
2. Runs `bun build`
3. Verifies .next directory exists
4. Verifies BUILD_ID is present
5. Uploads build artifacts
6. Comments on PR with status

## 📝 Writing Tests

### Test Example (Utility)
```typescript
import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn utility', () => {
  it('should merge class names', () => {
    const result = cn('px-2', 'py-1')
    expect(result).toContain('px-2')
    expect(result).toContain('py-1')
  })
})
```

### Test Example (Component)
```typescript
import { render, screen } from '@testing-library/react'
import { Navbar } from '@/components/navbar'

describe('Navbar', () => {
  it('should render navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
```

## 🔍 Running Tests Locally

### Before Committing
```bash
# Run all checks in sequence
bun lint && bun type-check && bun test
```

### During Development
```bash
# Watch mode - runs tests on file changes
bun test --watch

# Interactive UI - visual test dashboard
bun test:ui
```

### Before Pushing
```bash
# Build to verify production build works
bun build

# Run all checks
bun lint && bun type-check && bun test && bun build
```

## 💡 Debugging Tests

### Run Single Test File
```bash
bun test components/__tests__/utils.test.ts
```

### Run Tests Matching Pattern
```bash
bun test --grep "cn utility"
```

### UI Mode (Recommended)
```bash
bun test:ui
# Opens interactive dashboard at http://localhost:51204
```

## 📊 Coverage

Generate coverage report:
```bash
bun test:coverage
```

This generates:
- HTML report in `./coverage/`
- JSON report for CI tools
- Text summary in console

## 🔗 Integration with Git

### Pre-Commit Hook (Optional)
Add to `.git/hooks/pre-commit`:
```bash
#!/bin/sh
bun test || exit 1
```

### Pre-Push Hook (Optional)
Add to `.git/hooks/pre-push`:
```bash
#!/bin/sh
bun lint && bun type-check && bun test || exit 1
```

## 🚫 Common Issues

### Tests Not Running
```bash
# Reinstall dependencies
rm -rf node_modules
bun install
bun test
```

### Module Not Found
- Check `@/` imports in test files
- Verify path alias in tsconfig.json
- Ensure files use correct extensions (.ts, .tsx)

### React Errors
- Ensure @vitejs/plugin-react is installed
- Check vitest.config.ts has react() plugin
- Verify jsdom environment is set

## 📚 Next Steps

1. ✅ **Install dependencies**
   ```bash
   bun install
   ```

2. ✅ **Run existing tests**
   ```bash
   bun test
   ```

3. ✅ **Watch tests during development**
   ```bash
   bun test --watch
   ```

4. ✅ **Add tests for components**
   - Create files in `__tests__/` directories
   - Follow patterns in existing tests

5. ✅ **Before pushing code**
   ```bash
   bun lint && bun type-check && bun test && bun build
   ```

## 🔗 Resources

- **Vitest**: https://vitest.dev/
- **Testing Library**: https://testing-library.com/
- **Bun**: https://bun.sh/
- **GitHub Actions**: https://docs.github.com/en/actions

## 📝 For Claude Code

When using Claude Code with this project:
- Use `/audit-performance` to check test efficiency
- Use `/audit-accessibility` on test files
- Use `/generate-tests` to create test scaffolds
- Check TESTING.md for detailed guide

All test infrastructure is git-ignored in local settings, so feel free to customize!

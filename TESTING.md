# Testing Guide

Guide for running tests and writing test cases for the Tribe project.

## Quick Start

### Install Dependencies
```bash
bun install
```

### Run Tests
```bash
# Run all tests
bun test

# Run tests in watch mode (development)
bun test --watch

# Run tests with UI (interactive dashboard)
bun test:ui

# Run tests with coverage report
bun test:coverage
```

## Testing Framework

This project uses **Vitest** for testing, which provides:
- ✅ Fast test execution (optimized for Bun)
- ✅ Jest-compatible API (familiar syntax)
- ✅ Built-in coverage reports
- ✅ TypeScript support out of the box
- ✅ React component testing with @testing-library/react

### Configuration Files
- **vitest.config.ts** - Main Vitest configuration
- **vitest.setup.ts** - Test setup and mocks (React, Next.js)

## Test Structure

Tests are organized following Next.js conventions:

```
.
├── app/
│   └── __tests__/
│       ├── layout.test.tsx      # Root layout tests
│       └── page.test.tsx         # Home page tests
│
├── components/
│   └── __tests__/
│       ├── utils.test.ts         # Utility function tests
│       └── navbar.test.tsx       # Component tests (example)
```

## Writing Tests

### Basic Test Example

```typescript
import { describe, it, expect } from 'vitest'

describe('Component Name', () => {
  it('should render correctly', () => {
    // Arrange
    const component = <MyComponent />

    // Act - nothing needed for this example

    // Assert
    expect(component).toBeDefined()
  })

  it('should handle props', () => {
    const props = { title: 'Test' }
    const component = <MyComponent {...props} />

    expect(component.props.title).toBe('Test')
  })
})
```

### Testing React Components

```typescript
import { render, screen } from '@testing-library/react'
import { MyComponent } from '@/components/my-component'

describe('MyComponent', () => {
  it('should render with text', () => {
    render(<MyComponent />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })

  it('should handle click events', () => {
    render(<MyComponent />)
    const button = screen.getByRole('button')
    button.click()
    // Assert the click was handled
  })
})
```

### Testing Utilities

```typescript
import { cn } from '@/lib/utils'

describe('cn utility', () => {
  it('should merge class names', () => {
    const result = cn('px-2', 'py-1')
    expect(result).toContain('px-2')
    expect(result).toContain('py-1')
  })

  it('should handle conditional classes', () => {
    const isActive = true
    const result = cn('base', isActive && 'active')
    expect(result).toContain('active')
  })
})
```

## Available Test Utilities

### From Vitest
- `describe()` - Group related tests
- `it()` or `test()` - Define a test case
- `expect()` - Assert values
- `beforeEach()` - Run before each test
- `afterEach()` - Run after each test
- `beforeAll()` - Run once before all tests
- `afterAll()` - Run once after all tests
- `vi.mock()` - Mock modules

### From Testing Library
- `render()` - Render a React component
- `screen` - Query rendered elements
- `fireEvent()` - Trigger user events
- `waitFor()` - Wait for async operations

### Common Assertions
```typescript
expect(value).toBe(expected)              // Strict equality
expect(value).toEqual(expected)           // Deep equality
expect(array).toContain(item)             // Array contains
expect(string).toContain('substring')     // String contains
expect(value).toBeDefined()               // Is defined
expect(value).toBeNull()                  // Is null
expect(value).toBeTruthy()                // Is truthy
expect(fn).toHaveBeenCalled()            // Function was called
expect(fn).toHaveBeenCalledWith(args)    // Called with specific args
```

## Test Coverage

Generate coverage reports:

```bash
# Generate HTML coverage report
bun test:coverage

# View the report
# Coverage report will be in ./coverage/index.html
```

Coverage is configured in `vitest.config.ts`:
- Excludes node_modules and config files
- Generates HTML, JSON, and text reports

## GitHub Actions

Tests run automatically on:
- ✅ Every push to main, develop, and feature branches
- ✅ Every pull request to main and develop
- ✅ Multiple checks in parallel:
  - Linting (ESLint)
  - Type checking (TypeScript)
  - Tests (Vitest)
  - Build verification (Next.js)

See `.github/workflows/` for workflow configurations.

## Running Tests Locally Before Push

Before pushing code, run:

```bash
# All quality checks
bun lint && bun type-check && bun test

# Or use a single command (if you create it)
bun run quality-check
```

## Mocking

### Mock Next.js Modules

Pre-configured in `vitest.setup.ts`:
- `next/navigation` - Router and path utilities
- `next/image` - Image component

### Mock Custom Modules

```typescript
import { vi } from 'vitest'

vi.mock('@/lib/api', () => ({
  fetchData: vi.fn().mockResolvedValue({ data: 'test' })
}))
```

## Common Testing Patterns

### Testing Components with Props
```typescript
it('should display props', () => {
  const { getByText } = render(<Component title="Test" />)
  expect(getByText('Test')).toBeInTheDocument()
})
```

### Testing Event Handlers
```typescript
it('should call onClick handler', () => {
  const handleClick = vi.fn()
  render(<Button onClick={handleClick} />)
  screen.getByRole('button').click()
  expect(handleClick).toHaveBeenCalled()
})
```

### Testing Async Operations
```typescript
it('should load data', async () => {
  render(<Component />)
  const element = await screen.findByText('Loaded Data')
  expect(element).toBeInTheDocument()
})
```

## Best Practices

1. **Test Behavior, Not Implementation**
   - ✅ Test what users see and interact with
   - ❌ Don't test internal state or implementation details

2. **Keep Tests Focused**
   - One assertion per test when possible
   - Clear, descriptive test names

3. **Use Descriptive Names**
   - ❌ `it('works')`
   - ✅ `it('should display error message when form submission fails')`

4. **Follow AAA Pattern**
   - **Arrange** - Set up test data and components
   - **Act** - Perform the action being tested
   - **Assert** - Verify the expected outcome

5. **Don't Test External Libraries**
   - Don't test React, Tailwind, Radix UI behavior
   - Only test your code that uses them

6. **Keep Tests Independent**
   - Tests shouldn't depend on other tests
   - No test order dependencies

## Debugging Tests

### Run a Single Test
```bash
bun test utils.test.ts
```

### Run Tests Matching a Pattern
```bash
bun test --grep "cn utility"
```

### Watch Mode (Recommended for Development)
```bash
bun test --watch
```

### Interactive UI
```bash
bun test:ui
```

Then open http://localhost:51204 in your browser.

## Continuous Integration

Tests run automatically via GitHub Actions:

1. On every push and PR
2. Runs in parallel: lint, type-check, test, build
3. Comments on PR with results
4. Blocks merge if checks fail

Workflows:
- `.github/workflows/ci.yml` - Lint, type check, test
- `.github/workflows/build.yml` - Build verification

## Troubleshooting

### Tests Not Running
```bash
# Clear cache and reinstall
rm -rf node_modules bun.lock
bun install
bun test
```

### Module Not Found Errors
- Check path aliases in `tsconfig.json` match `vitest.config.ts`
- Verify imports use `@/` prefix correctly

### React/JSX Errors
- Ensure `@vitejs/plugin-react` is configured in `vitest.config.ts`
- Check `jsdom` environment is set in config

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Matchers](https://vitest.dev/api/expect.html)
- [Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Next Steps

1. Install dependencies: `bun install`
2. Run existing tests: `bun test`
3. Watch mode: `bun test --watch`
4. Add tests for your components
5. Push code with confidence!

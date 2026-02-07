# Tribe

A modern, high-performance web application built with cutting-edge web technologies and best practices for component-driven development.

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Development](#-development)
- [Building](#-building)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Available Scripts](#-available-scripts)

## 🛠️ Tech Stack

This project is built with the following technologies:

### Core Framework
- **[Next.js 16.1.6](https://nextjs.org/)** - React framework for production with server-side rendering and static site generation
- **[React 19](https://react.dev/)** - JavaScript library for building user interfaces
- **[TypeScript 5.7.3](https://www.typescriptlang.org/)** - Typed superset of JavaScript for safer development

### UI & Styling
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
  - Comprehensive component library including dialogs, dropdowns, tooltips, and more
  - Built on WAI-ARIA standards for accessibility
- **[TailwindCSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TailwindCSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities for Tailwind
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Utility to merge Tailwind CSS classes safely

### Forms & Validation
- **[React Hook Form 7.54.1](https://react-hook-form.com/)** - Performant, flexible form library
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Validation resolvers for React Hook Form
- **[Zod 3.24.1](https://zod.dev/)** - TypeScript-first schema validation with static type inference

### Charts & Data Visualization
- **[Recharts 2.15.0](https://recharts.org/)** - Composable charting library built on React components

### UI Utilities
- **[Lucide React 0.544.0](https://lucide.dev/)** - Beautiful & consistent icon library
- **[Embla Carousel React 8.5.1](https://www.embla-carousel.com/)** - Carousel/slider component
- **[Input OTP 1.4.1](https://input-otp.js.org/)** - One-time password input component
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notification library
- **[Class Variance Authority 0.7.1](https://cva.style/)** - CSS-in-JS library for styling variants
- **[CLSX 2.1.1](https://github.com/lukeed/clsx)** - Utility for conditional className strings
- **[React Resizable Panels](https://github.com/bvaughn/react-resizable-panels)** - Resizable panel components
- **[Vaul](https://vaul.emilkowal.ski/)** - Drawer component library
- **[React Day Picker 8.10.1](https://daypicker.js.org/)** - Date picker component
- **[Date FNS 4.1.0](https://date-fns.org/)** - Modern date utility library

### Theming
- **[Next Themes 0.4.6](https://github.com/pacocoursey/next-themes)** - Dark mode and theme management for Next.js

### Package Management & Runtime
- **[Bun](https://bun.sh/)** - Fast all-in-one JavaScript runtime and package manager

### Development Tools
- **[ESLint](https://eslint.org/)** - JavaScript linting utility

## ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **[Bun](https://bun.sh/)** (v1.0.0 or higher)
  - Install from: https://bun.sh
  - Verify installation: `bun --version`

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tribe
   ```

2. **Install dependencies using Bun**
   ```bash
   bun install
   ```

   This will create a `bun.lock` file which should be committed to version control.

## 🚀 Development

### Start the development server
```bash
bun dev
```

The application will be available at `http://localhost:3000`

### Run linting
```bash
bun lint
```

### Run type checking
```bash
bun type-check
```

## 🏗️ Building

### Create a production build
```bash
bun build
```

This generates an optimized build in the `.next` directory.

### Start the production server
```bash
bun start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
tribe/
├── app/                      # Next.js App Router directory
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/              # Reusable React components
│   ├── ui/                  # Radix UI based components
│   └── [feature]/           # Feature-specific components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and helpers
├── styles/                  # Global styles
├── public/                  # Static assets (images, fonts, etc.)
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
├── bun.lock                 # Bun lock file (auto-generated)
└── README.md               # This file
```

## 🤝 Contributing

We follow a Git Flow branching strategy for managing code changes and releases. This section outlines the contribution process.

### Git Flow Overview

Our branching strategy uses the following branches:

- **`main`** - Production-ready code. Only updated through release PRs.
- **`develop`** - Integration branch for features. Base branch for feature PRs.
- **`feature/*`** - Feature branches for new functionality
- **`bugfix/*`** - Branches for bug fixes
- **`hotfix/*`** - Critical fixes for production issues

### Contributing Workflow

#### 1. **Create a Feature Branch**

Create a new feature branch from `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- Features: `feature/descriptive-name`
- Bugfixes: `bugfix/descriptive-name`
- Hotfixes: `hotfix/descriptive-name`

Use kebab-case for branch names.

#### 2. **Make Your Changes**

- Write clean, well-documented code
- Follow existing code style and conventions
- Commit with clear, descriptive messages:
  ```bash
  git commit -m "feat: add new component for user authentication"
  git commit -m "fix: resolve issue with theme toggle not persisting"
  ```

Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `refactor:` for code refactoring
- `docs:` for documentation changes
- `style:` for code style changes (formatting, etc.)
- `test:` for test additions
- `chore:` for build, dependencies, etc.

#### 3. **Keep Your Branch Updated**

Regularly sync your branch with `develop`:

```bash
git fetch origin
git rebase origin/develop
```

#### 4. **Push Your Changes**

```bash
git push origin feature/your-feature-name
```

#### 5. **Create a Pull Request**

1. Push your branch and create a PR from your feature branch to `develop`
2. Fill in the PR template with:
   - Clear description of changes
   - Related issue numbers (if any)
   - Testing instructions
3. Wait for code review and CI checks to pass
4. Address any feedback from reviewers

#### 6. **Merge to Develop**

Once approved:
- Squash and merge or regular merge (maintainers will specify)
- Delete the feature branch after merging

#### 7. **Release to Main**

Releases are handled through release PRs:

1. Create a release PR from `develop` to `main`
2. Update version in `package.json`
3. Update CHANGELOG (if maintained)
4. Merge to `main`
5. Tag the release: `git tag v1.0.0`

### Code Review Standards

- All PRs require at least one approval
- CI/CD checks must pass
- Code should follow project conventions
- Changes should be adequately tested

### Development Best Practices

1. **Before starting work:**
   - Check existing issues and PRs to avoid duplicate work
   - Discuss large features in an issue first

2. **While coding:**
   - Keep commits focused and logical
   - Write self-documenting code
   - Use TypeScript strict mode for type safety

3. **Before submitting PR:**
   - Run `bun lint` to check code style
   - Run `bun type-check` to verify types
   - Test your changes locally with `bun dev`
   - Update documentation if needed

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Development | `bun dev` | Start Next.js development server with hot reload |
| Build | `bun build` | Create optimized production build |
| Production | `bun start` | Start the production server |
| Linting | `bun lint` | Run ESLint to check code quality |
| Type Check | `bun type-check` | Run TypeScript compiler without emitting files |

## 📝 License

This project is private. All rights reserved.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Bun Documentation](https://bun.sh/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)

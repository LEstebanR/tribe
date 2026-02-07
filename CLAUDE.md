# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**Tribe** is a Spanish-language running club website built with Next.js 16, React 19, and TypeScript. It's a modern, performant web application showcasing a running community in Santa Bárbara.

## Development Commands

| Task | Command |
|------|---------|
| Start dev server | `bun dev` (runs on http://localhost:3000) |
| Build for production | `bun build` |
| Start production server | `bun start` |
| Lint code | `bun lint` |
| Type check | `bun type-check` |

**Key Notes:**
- Uses **Bun** as the package manager and runtime (not npm/yarn)
- TypeScript strict mode is enabled; all code must be properly typed
- ESLint is configured for code quality checks

## Code Architecture

### Technology Stack
- **Framework:** Next.js 16 with App Router (not Pages Router)
- **UI Components:** shadcn/ui (built on Radix UI primitives) + custom components
- **Styling:** TailwindCSS with CSS variables for theming
- **Fonts:** DM Sans (body) and Space Grotesk (display) from Google Fonts
- **Icons:** Lucide React
- **Theming:** next-themes for dark/light mode support

### Directory Structure

```
app/                     # Next.js App Router
  layout.tsx           # Root layout with Google Fonts setup
  page.tsx             # Home page (single-page site)
  globals.css          # Global TailwindCSS + CSS variables

components/            # React components
  ui/                  # shadcn/ui components (auto-generated)
  navbar.tsx           # Navigation component
  hero.tsx             # Hero section
  about.tsx            # About section
  schedule.tsx         # Running schedule section
  rules.tsx            # Club rules section
  footer.tsx           # Footer component
  animate-in.tsx       # Animation utility component
  theme-provider.tsx   # Theme setup component

lib/
  utils.ts            # cn() utility for safely merging TailwindCSS classes

hooks/
  use-mobile.tsx      # useIsMobile() hook (768px breakpoint)
  use-toast.ts        # Toast notification hook

styles/               # CSS files
public/               # Static assets (images, favicons, etc.)
```

### Styling Patterns

- Uses TailwindCSS utility classes exclusively (no CSS modules or BEM)
- Color system based on CSS custom properties (HSL values) in `globals.css`
- Custom animations: `accordion-down`, `accordion-up`, `bounce`
- Responsive design: standard Tailwind breakpoints (md = 768px)
- Use the `cn()` utility from `lib/utils.ts` to safely merge conditional TailwindCSS classes

**Example:**
```typescript
import { cn } from '@/lib/utils'

export function MyComponent({ isActive }) {
  return <div className={cn('p-4', isActive && 'bg-blue-500')} />
}
```

### Component Conventions

- Components are in `components/` (not nested in `app/`)
- Page layout is a single-page site; all sections are components imported in `page.tsx`
- shadcn/ui components are in `components/ui/` and should be imported via the `ui` alias
- Custom hook-based components should be client components (`'use client'` directive)

**Path Aliases (from `tsconfig.json`):**
- `@/*` → root directory
- `@/components` → `components/`
- `@/lib` → `lib/`
- `@/hooks` → `hooks/`
- `@/ui` → `components/ui/` (shadcn components)

### Git Workflow

Follows **Git Flow** branching strategy:
- `main` - Production-ready code (updated via release PRs only)
- `develop` - Integration branch for features
- `feature/*` - New features (branch from `develop`)
- `bugfix/*` - Bug fixes (branch from `develop`)
- `hotfix/*` - Critical production fixes (branch from `main`)

**Conventional Commits** are required:
- `feat:` new features
- `fix:` bug fixes
- `refactor:` code refactoring
- `docs:` documentation changes
- `style:` code formatting (not design)
- `test:` test additions
- `chore:` build/dependencies

### Next.js Configuration Notes

- `ignoreBuildErrors: true` is set in `next.config.mjs` (be cautious with this)
- `images.unoptimized: true` is enabled (for static export flexibility)
- No custom server-side routes; everything is SSR/SSG through the App Router

## Common Tasks

**Adding a new section to the home page:**
1. Create a new component in `components/[section-name].tsx`
2. Import and add it to the component list in `app/page.tsx`
3. Ensure responsive design with Tailwind breakpoints

**Adding a new shadcn/ui component:**
1. Use the shadcn/ui CLI or manually copy the component to `components/ui/`
2. Import via `@/ui/[component-name]` in your code

**Styling considerations:**
- All colors reference CSS variables (e.g., `text-foreground`, `bg-accent`)
- Dark mode is class-based (add `dark:` prefixes in Tailwind)
- Animations are defined in `tailwind.config.ts`

## Important Constraints & Notes

- The project is **Spanish-language** (metadata, content)
- TypeScript strict mode enforces null safety and type coverage
- No dependencies for state management (using React context/hooks only)
- Bun lockfile (`bun.lock`) should always be committed

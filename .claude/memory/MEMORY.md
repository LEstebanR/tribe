# Tribe Project Memory

Persistent notes and learnings about the Tribe codebase.

## IMPORTANT RULES

### Package.json Versioning
⚠️ **NEVER USE ^ (CARET) IN PACKAGE.JSON**
- Always use exact versions: `"package": "1.2.3"`
- Never: `"package": "^1.2.3"`
- This ensures consistent, reproducible builds

### ESLint Configuration
- Using ESLint 9.0.0+ (FlatConfig format)
- `eslint.config.js` is the config file (not .eslintrc.*)
- Currently validates only .js files (.ts files require typescript-eslint plugin)
- If you need TypeScript linting: install @typescript-eslint/parser and @typescript-eslint/eslint-plugin

## Project Overview
- **Type**: Next.js 16 single-page site (home page only)
- **Language**: Spanish
- **Purpose**: Running club website for Santa Bárbara
- **Stack**: React 19, TypeScript, TailwindCSS, shadcn/ui, Radix UI

## Key Architecture Patterns

### Component Structure
- Single-page layout: app/page.tsx imports all section components
- Components are in components/ directory, not nested in app/
- Using shadcn/ui for UI primitives (Button, Dialog, etc.)
- Custom components (Navbar, Hero, About, Schedule, Rules, Footer)

### Styling
- TailwindCSS utilities only (no CSS modules)
- CSS variables for colors (HSL values in globals.css)
- Responsive: md breakpoint at 768px
- Dark mode support via next-themes

### Important Files
- `app/layout.tsx` - Root layout with Google Fonts setup
- `app/page.tsx` - Home page (imports all sections)
- `tailwind.config.ts` - Theme configuration with CSS variables
- `components.json` - shadcn/ui configuration
- `CLAUDE.md` - Project guidance for Claude Code

## Development Setup
- **Package manager**: Bun (not npm/yarn)
- **Commands**:
  - `bun dev` - Start dev server
  - `bun build` - Production build
  - `bun lint` - ESLint checks
  - `bun type-check` - TypeScript validation

## Git Workflow
- **Strategy**: Git Flow (main, develop, feature/*, bugfix/*)
- **Commits**: Conventional format (feat:, fix:, refactor:, etc.)
- **Note**: Requires explicit confirmation for commits/pushes (not auto)

## Common Utilities
- `cn()` from lib/utils.ts - Merge TailwindCSS classes safely
- `useIsMobile()` from hooks/use-mobile.tsx - Responsive breakpoint detection (768px)

## Claude Code Configuration
- Settings stored in `.claude/` directory (git-ignored)
- Custom agents in `agents/` for code analysis and audits
- Custom skills in `skills/` for code generation
- Templates in `templates/` for consistent scaffolding
- See `.claude/README.md` for full documentation

## Next Steps to Explore
- [ ] Create custom agents for specific workflows
- [ ] Set up keybindings for common tasks
- [ ] Define MCP server for GitHub integration
- [ ] Create project-specific skills for Tribe features
- [ ] Experiment with agents for component analysis

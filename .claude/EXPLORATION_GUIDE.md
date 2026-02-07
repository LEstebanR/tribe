# Claude Code Exploration Guide

A structured guide to exploring and mastering Claude Code capabilities with the Tribe project.

## 📋 Phase 1: Understand Your Setup (15 minutes)

### Read the Documentation
- [ ] Read `CLAUDE.md` (at repo root) - Project guidance
- [ ] Read `.claude/README.md` - Configuration guide
- [ ] Read `.claude/QUICK_START.md` - Quick reference
- [ ] Skim `.claude/TRIBE_EXAMPLES.md` - Real-world scenarios

### Verify Configuration
- [ ] Check `settings.json` for permissions
- [ ] Check `keybindings.json` for available shortcuts
- [ ] Verify `hooks.json` setup
- [ ] Review `memory/MEMORY.md` for existing notes

### Summary
You'll understand:
- How Claude Code works
- What configurations exist
- What agents/skills are available
- How to invoke them

---

## 🔍 Phase 2: Explore Built-in Features (20 minutes)

### Test Basic Commands

#### 1. Analyze Current Component
```bash
# Navigate to any component file, e.g., components/navbar.tsx
# Then ask:

"Analyze this component for best practices"
```

**What you'll learn:**
- How Claude reviews code
- What issues it can identify
- How detailed it gets in feedback

#### 2. Analyze the Codebase
```bash
# Ask Claude a general question:

"What are the main patterns in this codebase?"
"How is the styling organized?"
"What components are reused the most?"
```

**What you'll learn:**
- Claude can understand full codebase structure
- It recognizes patterns across files
- It can summarize architectural decisions

#### 3. Ask for Type Safety Review
```bash
# Ask about TypeScript:

"Are there any TypeScript issues in this codebase?"
"Check for proper prop typing in all components"
```

**What you'll learn:**
- Claude can find type safety issues
- It understands TypeScript patterns
- It can suggest improvements

---

## 🤖 Phase 3: Explore Agents (20 minutes)

### Available Agents

#### Agent 1: Component Analyzer
```bash
# On any component file:
/analyze-component

# Watch Claude check:
# - TypeScript types
# - Accessibility
# - Performance
# - TailwindCSS patterns
# - Code quality
```

#### Agent 2: Performance Auditor
```bash
# On the whole codebase:
/audit-performance

# Watch Claude check:
# - Re-render issues
# - Bundle size
# - Code splitting opportunities
# - React hooks optimization
```

#### Agent 3: Accessibility Auditor
```bash
# On any component:
/audit-accessibility

# Watch Claude check:
# - WCAG compliance
# - ARIA attributes
# - Keyboard navigation
# - Color contrast
# - Screen reader support
```

#### Agent 4: Spanish Checker (custom)
```bash
# If you created it:
/check-spanish

# On any Spanish content file:
# Validates grammar and consistency
```

### Exercises
- [ ] Run `/analyze-component` on `components/navbar.tsx`
- [ ] Run `/audit-accessibility` on `components/hero.tsx`
- [ ] Run `/audit-performance` on the full codebase
- [ ] Create your own agent based on a pattern you want to check

**What you'll learn:**
- How agents work
- What each one specializes in
- When to use which agent
- How to create your own agents

---

## 🎯 Phase 4: Explore Skills (15 minutes)

### Available Skills

#### Skill 1: Generate Component
```bash
/generate-component

# Follow prompts to create:
# - Component name (e.g., "Testimonials")
# - Component type (functional/client/server)
# - Include shadcn/ui? (yes/no)

# Claude generates:
# - Full TypeScript component
# - TailwindCSS styling
# - JSDoc comments
# - Proper imports
```

#### Skill 2: Generate Tests
```bash
/generate-tests

# On a component file, choose:
# - Test framework (vitest/jest)
# - Coverage level (basic/standard/comprehensive)

# Claude generates:
# - Unit test file
# - Component render tests
# - Edge case tests
# - Accessibility tests
```

#### Skill 3: Git Commit
```bash
/commit

# Claude:
# - Suggests commit message
# - Shows what will be committed
# - Asks for your confirmation
# - Creates the commit
```

### Exercises
- [ ] Use `/generate-component` to create a "Newsletter" component
- [ ] Use `/generate-tests` on an existing component
- [ ] Try `/commit` (remember: requires your confirmation)

**What you'll learn:**
- How to generate consistent code
- How skills handle user inputs
- When to use generation vs. manual coding
- How to create custom skills

---

## 🔌 Phase 5: Explore Advanced Features (20 minutes)

### Keybindings
```bash
# Try some keybindings:
Ctrl+Shift+L        # Run lint
Ctrl+Shift+B        # Run build
Cmd+K Cmd+A         # Analyze codebase (chord)

# Edit .claude/keybindings.json to:
# - Add custom shortcuts
# - Remap existing ones
# - Create chord combinations
```

### Hooks
Edit `.claude/hooks.json`:
```json
"post-file-edit": {
  "enabled": true,
  "commands": ["bun lint {{file}}"]
}
```

Now every time you edit a file, Claude auto-lints it.

### Templates
In `.claude/templates/`:
- `component-template.tsx` - React component scaffold
- `hook-template.ts` - Custom hook scaffold
- `utility-template.ts` - Utility function scaffold

Skills use these to generate consistent code.

### Memory
Edit `.claude/memory/MEMORY.md`:
```markdown
# Observations About Tribe

## Component Patterns
- All components use Tailwind utilities
- Export function components, not classes
- Use {{ComponentName}}Props for typing

## Styling Tips
- Mobile-first design (no max-width first)
- Always use cn() for conditional classes
- Colors reference CSS variables

## Performance Notes
- Navbar re-renders too often
- Consider memoizing list items
```

Claude will include this in all future conversations.

---

## 🎨 Phase 6: Customize for Your Workflow (30 minutes)

### Create a Custom Agent

1. Copy a template from `.claude/agents/`
2. Modify it for Tribe:
```json
{
  "id": "tribe-design-reviewer",
  "name": "Tribe Design Reviewer",
  "description": "Checks if design follows Tribe brand guidelines",
  "trigger": {
    "command": "/review-design"
  },
  "instructions": [
    "Check design against Tribe brand:",
    "- Uses correct colors (check CSS variables)",
    "- Responsive layout (mobile-first)",
    "- Accessibility (WCAG 2.1 AA)",
    "- Consistent with Tribe style"
  ]
}
```

3. Restart Claude Code
4. Use it: `/review-design`

### Create Custom Keybindings

Add to `.claude/keybindings.json`:
```json
{
  "key": "cmd+shift+r",
  "command": "review-design",
  "description": "Review design against Tribe guidelines"
}
```

Now use: `Cmd+Shift+R`

### Set Up Auto-Checks

Enable in `.claude/hooks.json`:
```json
"post-file-edit": {
  "enabled": true,
  "commands": [
    "bun lint --fix {{file}}",
    "bun type-check"
  ]
}
```

Now every edit auto-fixes and type-checks.

---

## 🧪 Phase 7: Real-World Experiments (varies)

### Experiment 1: Add a New Section
```
Objective: Add a "Team Members" section
1. Generate component: /generate-component
2. Analyze it: /analyze-component
3. Generate tests: /generate-tests
4. Audit accessibility: /audit-accessibility
5. Commit: /commit
```

### Experiment 2: Refactor Existing Component
```
Objective: Improve the Hero component
1. Review current: "Analyze components/hero.tsx"
2. Suggest improvements: "How can I optimize this?"
3. Performance audit: /audit-performance
4. Accessibility audit: /audit-accessibility
5. Apply fixes: Ask Claude to implement
6. Commit: /commit
```

### Experiment 3: Create a Workflow

```
Objective: Automate component creation
1. Create custom skill in .claude/skills/
2. Define inputs and steps
3. Restart Claude Code
4. Use skill: /your-skill-name
5. Refine based on output
```

### Experiment 4: Extend with MCP

```
Objective: Connect GitHub
1. Configure .claude/mcp-servers/tribe-github.json
2. Set GitHub token in environment
3. Enable the server
4. Use commands like:
   - /github list-issues owner/tribe
   - /github create-issue --title "..."
```

---

## 📊 Phase 8: Build Your Workflow (ongoing)

### Document Your Patterns
Update `.claude/memory/MEMORY.md`:
```markdown
## Effective Workflows
- For quick feedback: /analyze-component
- For building new: /generate-component
- For polish: /audit-accessibility + /audit-performance
- For safety: bun lint && bun type-check

## Time Savers
- Keybinding: Cmd+Shift+A for accessibility audit
- Keybinding: Cmd+Shift+P for performance audit
- Hook: Auto-lint on file edit
- Skill: /generate-component for scaffolding
```

### Track What Works
```markdown
## What's Effective for Tribe
- Component analyzer catches accessibility issues
- Performance auditor finds re-render bugs
- Spanish checker ensures consistency
- Generation skills save time on boilerplate

## What Needs Improvement
- Manual accessibility fixes (non-AI part)
- Complex styling decisions (needs human design sense)
- Git workflow (always confirm pushes)
```

---

## ✅ Mastery Checklist

### Beginner ✅
- [ ] Understand configuration files
- [ ] Run all agents at least once
- [ ] Use both skills (generate-component, generate-tests)
- [ ] Try 2 keybindings
- [ ] Ask Claude 5 questions about the codebase

### Intermediate ✅
- [ ] Create custom keybinding
- [ ] Edit `.claude/memory/MEMORY.md` with insights
- [ ] Create custom agent or skill
- [ ] Use hooks for auto-validation
- [ ] Complete real workflow (analyze → improve → commit)

### Advanced ✅
- [ ] Create 3+ custom agents
- [ ] Set up MCP server integration
- [ ] Automate your entire component creation workflow
- [ ] Teach someone else how to use it
- [ ] Contribute improvements to templates

---

## 🚀 Next Steps

1. **Right now**: Pick Phase 1 and read the docs
2. **In 5 min**: Try Phase 2 - ask Claude a question
3. **In 20 min**: Complete Phase 3 - run all agents
4. **In 45 min**: Do Phase 4 - generate some code
5. **In 2 hours**: Finish all phases and understand everything
6. **This week**: Create custom agents for your workflow
7. **This month**: Master all features and optimize your workflow

---

## 💬 Questions to Ask Claude

Use these to explore:

```
"What are the accessibility issues in the codebase?"
"Which components have performance problems?"
"How can I optimize the Hero component?"
"Generate a Newsletter signup component"
"Create tests for the Schedule component"
"What TypeScript improvements should I make?"
"Review my changes before I commit"
"How does the styling system work?"
"What patterns are used throughout?"
"Which components could be refactored?"
```

---

## 🎯 Final Goals

By the end of exploration, you should:
1. ✅ Understand all Claude Code features
2. ✅ Have custom agents for your workflow
3. ✅ Know how to generate code quickly
4. ✅ Automatically audit for quality
5. ✅ Commit with confidence
6. ✅ Help others use Claude Code effectively

---

**You've got this! Start exploring! 🚀**

# Claude Code Examples for Tribe Project

Practical examples of using Claude Code features with the Tribe running club website.

## 🎯 Real-World Scenarios

### Scenario 1: Add a New "Testimonials" Section

**Goal**: Add a testimonials section to showcase what runners say about the club.

#### Step 1: Generate Component
```
User: /generate-component
Response: Creates components/testimonials.tsx with:
  - TypeScript types for testimonial data
  - Responsive grid layout
  - TailwindCSS styling
  - shadcn/ui Card components
```

#### Step 2: Analyze Component
```
User: Open components/testimonials.tsx
User: /analyze-component

Claude Response: Checks for:
  ✅ TypeScript safety
  ⚠️ Missing alt text on user images
  ⚠️ Poor keyboard navigation
  ✅ Good responsive design
```

#### Step 3: Run Accessibility Audit
```
User: /audit-accessibility

Claude Response:
  - Suggests aria-labels for star ratings
  - Recommends semantic HTML improvements
  - Checks color contrast
  - Provides WCAG fixes
```

#### Step 4: Integrate to Home Page
```
User: "Import Testimonials into app/page.tsx and add it after the Rules section"

Claude Response:
  - Adds import statement
  - Adds <Testimonials /> component
  - Positions it in correct section order
  - Shows you the diff
```

#### Step 5: Commit Changes
```
User: /commit

Claude asks: "Ready to commit these changes?"
Claude creates commit: "feat: add testimonials section with component"
```

---

### Scenario 2: Improve Performance of Navbar

**Goal**: The Navbar is re-rendering too often and has accessibility issues.

#### Step 1: Ask for Performance Review
```
User: "Review components/navbar.tsx for performance issues"

Claude Response:
  - Identifies unnecessary re-renders
  - Suggests memoization opportunities
  - Finds unused state
  - Recommends code splitting
```

#### Step 2: Run Accessibility Audit
```
User: /audit-accessibility

Claude runs on navbar and finds:
  - Missing aria-expanded on mobile menu toggle
  - Poor focus management in dropdown
  - Missing keyboard shortcuts
```

#### Step 3: Apply Fixes
```
Claude auto-generates fixes:
  - Adds React.memo() for menu items
  - Implements proper focus trapping
  - Adds aria attributes
  - Updates TypeScript types
```

#### Step 4: Verify Changes
```
User: bun lint && bun type-check

All checks pass ✅
```

#### Step 5: Commit
```
User: /commit

Commit: "refactor: improve navbar performance and accessibility"
```

---

### Scenario 3: Create a Custom Agent for Spanish Translation

**Goal**: Create a custom agent that helps maintain Spanish language consistency.

#### Step 1: Create Custom Agent
Edit `.claude/agents/spanish-checker.json`:
```json
{
  "id": "spanish-checker",
  "name": "Spanish Translation Checker",
  "description": "Checks Spanish text for grammar, consistency, and brand voice",
  "trigger": {
    "command": "/check-spanish",
    "description": "Check Spanish content for issues"
  },
  "instructions": [
    "Check Spanish text for:",
    "- Grammar and spelling (Spain Spanish)",
    "- Consistency with existing translations",
    "- Brand voice alignment",
    "- Proper use of accents (é, á, í, ó, ú, ü)",
    "Provide specific suggestions with context"
  ]
}
```

#### Step 2: Use Custom Agent
```
User: Open components/hero.tsx (Spanish content)
User: /check-spanish

Claude Response:
  - Verifies Spanish grammar
  - Checks consistency with README.md Spanish
  - Suggests improvements
```

---

### Scenario 4: Generate Tests for Critical Components

**Goal**: Add tests for the Schedule component showing running times.

#### Step 1: Generate Tests
```
User: Open components/schedule.tsx
User: /generate-tests
Choose: "comprehensive" coverage

Claude generates:
  - components/__tests__/schedule.test.tsx
  - Tests for rendering schedule items
  - Tests for responsive behavior
  - Tests for accessibility
```

#### Step 2: Review Generated Tests
```
Claude shows:
  - Unit tests for each schedule entry
  - Accessibility testing (ARIA labels)
  - Responsive breakpoint tests
  - Edge cases (no schedule, empty state)
```

#### Step 3: Run Tests
```
User: bun test

All tests pass ✅
```

---

### Scenario 5: Set Up Auto-Linting with Hooks

**Goal**: Automatically lint files after editing them.

#### Step 1: Enable Post-Edit Hook
Edit `.claude/hooks.json`:
```json
"post-file-edit": {
  "enabled": true,
  "commands": ["bun lint {{file}}"]
}
```

#### Step 2: Test Hook
```
User: Edit any file and save it

Automatically:
  - Claude runs: bun lint components/navbar.tsx
  - Shows any lint issues
  - Suggests fixes
```

#### Step 3: Auto-Fix Issues
```json
"post-file-edit": {
  "enabled": true,
  "commands": [
    "bun lint --fix {{file}}",
    "bun type-check"
  ]
}
```

---

### Scenario 6: Create Keybindings for Tribe Workflow

**Goal**: Add shortcuts for common Tribe-specific tasks.

Edit `.claude/keybindings.json`:
```json
{
  "key": "cmd+shift+s",
  "command": "check-spanish",
  "description": "Check Spanish content"
},
{
  "key": "cmd+shift+a",
  "command": "audit-accessibility",
  "description": "Audit for WCAG compliance"
},
{
  "key": "cmd+shift+p",
  "command": "audit-performance",
  "description": "Performance audit"
}
```

Now you can:
- `Cmd+Shift+S` → Spanish checker
- `Cmd+Shift+A` → Accessibility audit
- `Cmd+Shift+P` → Performance audit

---

## 💾 Using Memory for Tribe Insights

Record learnings in `.claude/memory/MEMORY.md`:

```markdown
## Component Patterns in Tribe

### Responsive Design
- Hero section uses full-width on mobile, constrained on desktop
- Schedule items stack on mobile, grid on desktop
- Mobile breakpoint is consistently at md (768px)

### Spanish Content
- Use "Santa Bárbara" (with accent)
- Use "Corremos" for "we run" (active)
- Avoid gender-specific forms, use inclusive language

### Performance Notes
- Navbar causes re-renders on scroll (needs memo)
- Footer component is heavy (image count)
- Consider lazy-loading images in footer

### Accessibility Wins
- Excellent semantic HTML usage
- Good color contrast throughout
- Missing: aria-expanded on mobile menu toggle
```

---

## 🔧 Tribe-Specific MCP Server Example

Imagine connecting GitHub to manage issues:

Edit `.claude/mcp-servers/tribe-github.json`:
```json
{
  "name": "Tribe GitHub",
  "description": "GitHub integration for Tribe project",
  "enabled": true,
  "config": {
    "repo": "username/tribe",
    "authToken": "ghp_your_token"
  },
  "capabilities": [
    "list-issues",
    "create-issue",
    "comment-on-issue",
    "create-pull-request"
  ]
}
```

Usage:
```
User: /github list-issues owner/tribe
User: /github create-issue --title "Fix navbar accessibility" --labels "a11y"
```

---

## 📊 Tribe Project Analytics

Commands to understand Tribe codebase:

```
User: "Analyze the entire Tribe codebase structure"
Claude uses: Glob + Grep to explore
Response: Maps out components, dependencies, patterns

User: "What's the largest/most complex component?"
Claude uses: Grep to find file sizes and complexity
Response: Shows Schedule and Rules components are largest

User: "Find all instances of hardcoded colors in Tailwind"
Claude uses: Grep for hardcoded hex values
Response: Suggests moving to CSS variables instead
```

---

## 🚀 Complete Workflow Example

Adding a new "Join Us" CTA button throughout the site:

1. **Plan**: Ask Claude to create a plan
   ```
   /prompt "Create a plan for adding a Join Us button to Tribe"
   ```

2. **Design**: Create the button component
   ```
   /generate-component
   → Creates button with proper styling
   ```

3. **Integrate**: Add to multiple sections
   ```
   "Add the JoinButton to hero, footer, and navbar sections"
   ```

4. **Test**: Generate tests
   ```
   /generate-tests
   ```

5. **Audit**: Check accessibility and performance
   ```
   /audit-accessibility
   /audit-performance
   ```

6. **Verify**: Run linting
   ```
   bun lint && bun type-check
   ```

7. **Commit**: Save changes
   ```
   /commit "feat: add Join Us CTA button across site"
   ```

8. **Record**: Update memory
   ```
   Update .claude/memory/MEMORY.md with implementation notes
   ```

---

## 📝 Notes for Future Sessions

When you restart Claude Code, it will remember:
- Project structure (from `.claude/CLAUDE.md`)
- Common patterns (from `.claude/memory/MEMORY.md`)
- Available agents and skills
- Your custom keybindings
- Configuration settings

Start each session by asking:
```
"What do I need to know about the Tribe project?"
```

Claude will review the memory and CLAUDE.md file automatically.

---

**Ready to explore? Start with `/analyze-component` on any component! 🚀**

# Quick Start Guide for Claude Code

Fast setup to start using Claude Code with the Tribe project.

## 🚀 Quick Commands

### Essential Development
```bash
bun dev              # Start development server (http://localhost:3000)
bun lint             # Check code quality
bun type-check       # TypeScript validation
bun build            # Production build
```

### Using Claude Code Features

#### 1. Ask Claude to Analyze Code
```
"Analyze this component for accessibility issues"
"Review the Hero section for performance improvements"
"Check the styling patterns in the navbar"
```

#### 2. Use Built-in Skills
```
/commit              # Create a git commit (requires your confirmation)
/review-pr          # Review a pull request
/help                # Get help with Claude Code
```

#### 3. Trigger Custom Agents (from .claude/agents/)
```
/analyze-component      # Deep component analysis
/audit-performance      # Performance audit
/audit-accessibility    # WCAG compliance check
```

#### 4. Generate Code with Skills (from .claude/skills/)
```
/generate-component     # Create a new React component
/generate-tests         # Generate test files
```

#### 5. Use Keyboard Shortcuts (from .claude/keybindings.json)
```
Ctrl+Shift+B        # Run build
Ctrl+Shift+L        # Run lint
Ctrl+Shift+T        # Type check
Ctrl+Shift+D        # Start dev server
Cmd+K Cmd+A         # Analyze codebase (chord)
Cmd+K Cmd+F         # Find pattern (chord)
```

## 📂 Configuration Files Reference

| File | Purpose | Edit When |
|------|---------|-----------|
| `.claude/settings.json` | Main config & permissions | Changing default behavior |
| `.claude/keybindings.json` | Keyboard shortcuts | Adding custom shortcuts |
| `.claude/hooks.json` | Event automation | Setting up auto-checks |
| `.claude/.claude-code-config.json` | Advanced settings | Fine-tuning AI behavior |
| `.claude/agents/*.json` | Custom agents | Adding new analysis tools |
| `.claude/skills/*.json` | Custom skills | Adding code generation |
| `.claude/templates/*` | Code templates | Standardizing output |
| `.claude/memory/MEMORY.md` | Persistent notes | Recording learnings |

## 🎯 Common Workflows

### Workflow 1: Add a New Section to Home Page
1. Ask: "Create a new component for a testimonials section"
2. Claude uses skill to generate component scaffold
3. You edit the component in your editor
4. Ask: "Analyze this testimonials component for issues"
5. Claude runs /audit-accessibility and /audit-performance
6. Review suggestions and make improvements
7. Use `/commit` to commit changes

### Workflow 2: Improve Existing Component
1. Open component file
2. Use keyboard shortcut `Cmd+K Cmd+A` to analyze codebase
3. Or type: "What can I improve in the navbar component?"
4. Claude suggests optimizations
5. Accept diffs for improvements
6. Run `bun lint` and `bun type-check` to verify
7. Use `/commit` when ready

### Workflow 3: Code Review Before Commit
1. Make changes to multiple files
2. Ask: "Review all my changes for issues"
3. Claude analyzes modifications
4. Fix any issues found
5. Run `bun lint && bun type-check`
6. Use `/commit` when everything passes

## 🔧 Customization Ideas

### Add a New Agent
1. Copy `example-agent.json` to new file
2. Modify:
   - `id`: unique identifier
   - `name`: display name
   - `instructions`: what Claude should do
   - `trigger.command`: command name
3. Restart Claude Code
4. Use: `/your-command-name`

### Add Custom Keybinding
1. Edit `.claude/keybindings.json`
2. Add new entry:
   ```json
   {
     "key": "ctrl+shift+x",
     "command": "my-custom-command",
     "description": "What it does"
   }
   ```
3. Restart Claude Code
4. Use: `Ctrl+Shift+X`

### Enable Auto-Linting
1. Edit `.claude/hooks.json`
2. Set `"enabled": true` for post-file-edit hook
3. Modify commands to run your linting
4. Now Claude will auto-lint after edits

### Create a Custom Skill
1. Copy `example-skill.json` to new file
2. Define inputs (parameters users provide)
3. Define steps (what Claude should do)
4. Restart Claude Code
5. Invoke with: `/your-skill-name`

## 📚 Learning Resources

### Documentation
- `.claude/README.md` - Full configuration guide
- `.claude/CLAUDE.md` (at repo root) - Project guidance
- `.claude/memory/MEMORY.md` - Project notes

### Configuration Examples
- `.claude/agents/` - Agent definitions
- `.claude/skills/` - Skill definitions
- `.claude/mcp-servers/` - MCP integrations
- `.claude/templates/` - Code generation templates

### Claude Code Docs
- Official: https://claude.ai/code
- Guides: https://docs.anthropic.com/

## ⚙️ Settings to Know

### Permissions (`.claude/settings.json`)
By default, Claude asks for confirmation before:
- `git add` - Staging files
- `git commit` - Creating commits
- `git push` - Pushing to remote
- `git rm` - Removing files

Other commands (bun, curl, grep) run automatically.

### Model Selection
- `haiku` - Fast, good for coding
- `sonnet` - Balanced speed/capability
- `opus` - Best quality, slower

Change default in `settings.json`:
```json
"model": "sonnet"
```

### Auto Memory
Stores notes across sessions in `.claude/memory/MEMORY.md`
- Enabled by default
- Keep under 200 lines
- Update with important learnings

## 🐛 Troubleshooting

### Claude asks for confirmation on basic commands
- This is intentional for safety
- You can approve one-time or add to `settings.json` permissions
- Remember: removing permissions makes it less safe

### Keybindings not working
- Restart Claude Code after editing `keybindings.json`
- Check JSON syntax is valid
- Verify key combination doesn't conflict with your OS

### Agent not found
- Restart Claude Code
- Check `.claude/agents/` for the file
- Verify JSON syntax in the agent definition
- Check trigger command is spelled correctly

### Git operations failing
- Verify git is initialized: `git status`
- Check you're on correct branch
- Ensure permissions are configured in `settings.json`

## 💡 Pro Tips

1. **Use Plan Mode**: For complex changes, ask Claude to create a plan first
2. **Review Diffs**: Always review changes before accepting
3. **Keep Notes**: Update `.claude/memory/MEMORY.md` with insights
4. **Test Before Commit**: Run `bun lint && bun type-check` first
5. **Commit Often**: Small, focused commits are easier to review
6. **Use Agents**: Let agents do detailed analysis on demand
7. **Create Skills**: Automate repetitive tasks with custom skills

## 🎓 Next Steps

1. Read `.claude/README.md` for complete documentation
2. Try each built-in feature (agents, skills, commands)
3. Create your first custom agent for a specific task
4. Set up keybindings for your workflow
5. Record learnings in `.claude/memory/MEMORY.md`
6. Experiment with MCP servers for external integrations

---

**Happy coding! 🚀**

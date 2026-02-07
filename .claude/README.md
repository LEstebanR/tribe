# .claude Configuration Directory

This directory contains all configurations for Claude Code when working with the Tribe project. Learn more at [claude.ai/code](https://claude.ai/code).

## 📁 Directory Structure

```
.claude/
├── settings.json                 # Main Claude Code settings
├── settings.local.json          # Local overrides (in .gitignore)
├── keybindings.json             # Custom keyboard shortcuts
├── hooks.json                   # Event hooks (post-edit, pre-commit, etc.)
├── .claude-code-config.json     # Advanced configuration
├── CLAUDE.md                    # Project guidance (at repo root)
├── agents/                      # Custom agent definitions
│   ├── example-agent.json
│   ├── component-analyzer.json
│   └── performance-auditor.json
├── skills/                      # Custom skill definitions
│   ├── example-skill.json
│   └── test-generator.json
├── mcp-servers/                 # MCP Server configurations
│   └── example-server.json
├── hooks/                       # Hook scripts (if applicable)
├── templates/                   # Code generation templates
│   ├── component-template.tsx
│   ├── hook-template.ts
│   └── utility-template.ts
├── memory/                      # Auto-managed memory directory
│   └── MEMORY.md               # Persistent notes across sessions
└── README.md                    # This file
```

## 🔧 Configuration Files

### settings.json
Main configuration file with:
- **permissions**: Allowed bash commands (requires confirmation for others)
- **model**: Default AI model (haiku/sonnet/opus)
- **max_turns**: Maximum turns per conversation
- **auto_memory**: Enable persistent memory across sessions
- **memory_dir**: Where to store memory files

Edit this to change default behaviors and permissions.

### keybindings.json
Define custom keyboard shortcuts:
- Standard bindings: `ctrl+shift+b`, `cmd+k cmd+a`, etc.
- Chord support: Multi-key combinations with `"chord": true`
- Commands map to actions like `run-build`, `analyze-codebase`

### hooks.json
Configure event-driven actions:
- **post-file-edit**: Runs after files are edited
- **pre-commit**: Runs before git commits
- **post-git-push**: Runs after pushing to remote
- **on-error**: Runs when errors occur

### .claude-code-config.json
Advanced settings:
- Codebase analysis and indexing
- Model overrides for different task types
- File watching patterns
- Auto-formatting settings
- Integration configurations (ESLint, TypeScript)

## 🤖 Agents

Agents are specialized subprocesses that handle complex, multi-step tasks autonomously.

### Built-in Agents
- **bash**: Command execution
- **general-purpose**: Research and multi-step tasks
- **Explore**: Fast codebase exploration
- **Plan**: Software architecture and planning

### Custom Agents (in agents/)

Each agent is defined with:
- **id**: Unique identifier
- **name**: Display name
- **description**: What it does
- **trigger**: How to invoke (command/shortcut)
- **instructions**: Step-by-step guidance
- **tools**: Allowed tools (Read, Grep, Glob, etc.)
- **context**: What it can access
- **model**: Which AI model to use

**Examples:**
- `component-analyzer.json`: Analyzes React components for best practices
- `performance-auditor.json`: Audits codebase for performance issues

**Usage:**
```bash
# Invoke an agent
/analyze-component           # or use the agent's keyboard shortcut
```

## 🎯 Skills

Skills are user-invocable commands that perform specific, well-defined tasks.

### Built-in Skills
- `/commit`: Create a git commit
- `/review-pr`: Review a pull request
- `/help`: Get help with Claude Code

### Custom Skills (in skills/)

Each skill defines:
- **id**: Unique identifier
- **name**: Display name
- **description**: What it does
- **trigger**: Command name
- **inputs**: Parameters with types and validation
- **steps**: Execution workflow
- **template**: Reference template if applicable

**Examples:**
- `example-skill.json`: Generate React components with scaffolding
- `test-generator.json`: Generate test files with proper coverage

**Usage:**
```bash
# Invoke a skill with interactive prompts
/generate-component
/generate-tests
```

## 📡 MCP Servers

MCP (Model Context Protocol) servers extend Claude's capabilities by connecting to external systems.

### Configuration
Each server needs:
- **name**: Display name
- **type**: `mcp` for MCP servers
- **enabled**: Boolean to activate/deactivate
- **config**: Authentication and endpoint details
- **capabilities**: What operations are supported

### Examples in mcp-servers/
- `example-server.json`: GitHub API integration for issues and PRs

**To enable a server:**
1. Update `enabled: true`
2. Set authentication (API tokens, environment variables)
3. Use available capabilities

## 📝 Templates

Code templates for generating common patterns.

### Available Templates
- **component-template.tsx**: React component with TypeScript, JSDoc, Tailwind
- **hook-template.ts**: React hook with proper typing
- **utility-template.ts**: Utility function with documentation

### Using Templates
Agents and skills reference templates to generate consistent code:
```json
{
  "template": "react-component"
}
```

## 💾 Memory Management

Auto-managed persistent memory across sessions.

### Location
`.claude/memory/MEMORY.md` - Automatically included in system prompt

### Best Practices
- Record insights about the codebase as you work
- Document patterns that worked or failed
- Keep it under 200 lines (will be truncated)
- Update/remove outdated information
- Organize semantically by topic

## 🎮 Using Claude Code Effectively

### Workflow
1. **Start dev server**: `bun dev`
2. **Make changes**: Edit files in your editor
3. **Ask Claude Code**: `/analyze-component` on the file
4. **Review suggestions**: Read recommendations
5. **Apply changes**: Claude will present diffs
6. **Test**: Run `bun lint`, `bun type-check`, `bun dev`
7. **Commit**: Use `/commit` skill (requires your confirmation)

### Tips
- Use agents for complex analysis (`/analyze-component`, `/audit-performance`)
- Use skills for code generation (`/generate-component`, `/generate-tests`)
- Use hooks to automate quality checks
- Customize keybindings for frequently used actions
- Keep permissions restrictive for git operations

### Avoiding Issues
- Always confirm before pushing to remote
- Run type-check and lint before committing
- Use plan mode for architectural decisions
- Check CLAUDE.md for project-specific guidance
- Review generated code before accepting changes

## 🔗 Resources

- [Claude Code Docs](https://claude.ai/code)
- [MCP Protocol](https://modelcontextprotocol.io)
- [Claude Models](https://docs.anthropic.com/en/docs/about-claude/models/latest)

## 📝 Next Steps

1. **Explore Agents**: Try invoking different agents to see capabilities
2. **Create Skills**: Define skills for common tasks in your workflow
3. **Set Keybindings**: Customize shortcuts for frequently used commands
4. **Configure MCP**: Connect external services via MCP servers
5. **Update CLAUDE.md**: Keep project guidance current

---

**Remember**: This configuration is part of `.gitignore`, so settings are local to your machine.

# .claude Configuration Index

**Quick navigation for all Claude Code configuration files and guides.**

## 🚀 Start Here

1. **New to Claude Code?** → Start with [QUICK_START.md](QUICK_START.md) (5 min read)
2. **Want to understand everything?** → Read [README.md](README.md) (15 min read)
3. **Ready to explore?** → Follow [EXPLORATION_GUIDE.md](EXPLORATION_GUIDE.md) (8 phases)
4. **Want Tribe examples?** → Check [TRIBE_EXAMPLES.md](TRIBE_EXAMPLES.md)

---

## 📁 File Directory

### Configuration Files

| File | Purpose | Learn | Customize |
|------|---------|-------|-----------|
| **settings.json** | Main config & permissions | [README §1](README.md#settingsjson) | Allow/block commands |
| **settings.local.json** | Local overrides | Auto-created | Your local settings |
| **keybindings.json** | Keyboard shortcuts | [README §2](README.md#keybindingsjson) | Add your shortcuts |
| **hooks.json** | Event automation | [README §3](README.md#hooksjson) | Auto-validate code |
| **.claude-code-config.json** | Advanced settings | [README §4](README.md#claude-code-configjson) | Fine-tune behavior |

### Documentation

| File | Purpose | Length | Audience |
|------|---------|--------|----------|
| **QUICK_START.md** | Fast reference | ~200 lines | Everyone |
| **README.md** | Complete guide | ~300 lines | Learners |
| **TRIBE_EXAMPLES.md** | Real scenarios | ~400 lines | Project-focused |
| **EXPLORATION_GUIDE.md** | Learning path | ~400 lines | Explorers |
| **INDEX.md** | This file | Navigation | All |

### Agents (AI-Powered Analysis)

| Agent | Command | Purpose | Learn |
|-------|---------|---------|--------|
| **component-analyzer.json** | `/analyze-component` | React component analysis | [TRIBE_EXAMPLES §1](TRIBE_EXAMPLES.md#scenario-1-add-a-new-testimonials-section) |
| **performance-auditor.json** | `/audit-performance` | Performance optimization | [TRIBE_EXAMPLES §2](TRIBE_EXAMPLES.md#scenario-2-improve-performance-of-navbar) |
| **accessibility-auditor.json** | `/audit-accessibility` | WCAG compliance | [TRIBE_EXAMPLES §3](TRIBE_EXAMPLES.md#scenario-3-create-a-custom-agent-for-spanish-translation) |
| **example-agent.json** | Template | How agents work | [README §Agents](README.md#-agents) |

### Skills (Code Generation)

| Skill | Command | Purpose | Learn |
|-------|---------|---------|--------|
| **example-skill.json** | `/generate-component` | Create React components | [README §Skills](README.md#-skills) |
| **test-generator.json** | `/generate-tests` | Generate test files | [TRIBE_EXAMPLES §4](TRIBE_EXAMPLES.md#scenario-4-generate-tests-for-critical-components) |

### Templates (Code Scaffolding)

| Template | Language | Purpose |
|----------|----------|---------|
| **component-template.tsx** | TypeScript/React | Component scaffold |
| **hook-template.ts** | TypeScript | Hook scaffold |
| **utility-template.ts** | TypeScript | Utility function scaffold |

### Integration

| File | Purpose | Status |
|------|---------|--------|
| **mcp-servers/example-server.json** | External API integration | Template (disabled) |

### Memory

| File | Purpose | Keep Under |
|------|---------|------------|
| **memory/MEMORY.md** | Persistent notes | 200 lines |

---

## 🎯 By Task

### I want to...

#### Analyze Code
- **Check component quality**: `/analyze-component`
- **Find performance issues**: `/audit-performance`
- **Check accessibility**: `/audit-accessibility`
- **Ask Claude directly**: "Analyze this component"

→ See: [TRIBE_EXAMPLES.md](TRIBE_EXAMPLES.md) for detailed examples

#### Generate Code
- **Create new component**: `/generate-component`
- **Generate tests**: `/generate-tests`
- **Create custom skill**: Edit `skills/*.json`

→ See: [EXPLORATION_GUIDE.md Phase 4](EXPLORATION_GUIDE.md#-phase-4-explore-skills-15-minutes)

#### Customize
- **Add keyboard shortcuts**: Edit `keybindings.json`
- **Create custom agent**: Edit `agents/*.json`
- **Auto-run commands**: Edit `hooks.json`
- **Change permissions**: Edit `settings.json`

→ See: [EXPLORATION_GUIDE.md Phase 6](EXPLORATION_GUIDE.md#-phase-6-customize-for-your-workflow-30-minutes)

#### Extend Capabilities
- **Connect GitHub**: Edit `mcp-servers/*.json`
- **Create templates**: Add files to `templates/`
- **Build workflow**: Follow [TRIBE_EXAMPLES.md](TRIBE_EXAMPLES.md)

→ See: [README.md § Advanced Features](README.md#-mcp-servers)

#### Learn
- **First-time setup**: [QUICK_START.md](QUICK_START.md)
- **All features**: [README.md](README.md)
- **Tribe examples**: [TRIBE_EXAMPLES.md](TRIBE_EXAMPLES.md)
- **Structured learning**: [EXPLORATION_GUIDE.md](EXPLORATION_GUIDE.md)

---

## 🔗 Navigation by Topic

### Settings & Permissions
- Want to allow more commands? → `settings.json` / [README §settings](README.md#settingsjson)
- Want safer defaults? → [QUICK_START.md § Troubleshooting](QUICK_START.md#-troubleshooting)
- Why ask for confirmation? → [QUICK_START.md § Permissions](QUICK_START.md#⚙️-settings-to-know)

### Agents
- How do agents work? → [README.md § Agents](README.md#-agents)
- What agents exist? → [TRIBE_EXAMPLES.md § Agents](TRIBE_EXAMPLES.md)
- How to create one? → [TRIBE_EXAMPLES.md § Create Custom Agent](TRIBE_EXAMPLES.md#scenario-3-create-a-custom-agent-for-spanish-translation)
- Try all agents → [EXPLORATION_GUIDE.md § Phase 3](EXPLORATION_GUIDE.md#-phase-3-explore-agents-20-minutes)

### Skills
- How do skills work? → [README.md § Skills](README.md#-skills)
- What skills exist? → [TRIBE_EXAMPLES.md § Skills](TRIBE_EXAMPLES.md)
- Try all skills → [EXPLORATION_GUIDE.md § Phase 4](EXPLORATION_GUIDE.md#-phase-4-explore-skills-15-minutes)

### Keybindings
- View available shortcuts → `keybindings.json`
- Add custom shortcut → [TRIBE_EXAMPLES.md § Set Up Keybindings](TRIBE_EXAMPLES.md#scenario-6-set-up-keybindings-for-tribe-workflow)
- Chord shortcuts → [EXPLORATION_GUIDE.md § Phase 5](EXPLORATION_GUIDE.md#-phase-5-explore-advanced-features-20-minutes)

### Hooks
- What hooks do? → [README.md § Hooks](README.md#hooksjson)
- Enable auto-linting → [TRIBE_EXAMPLES.md § Scenario 5](TRIBE_EXAMPLES.md#scenario-5-set-up-auto-linting-with-hooks)
- Available events → [EXPLORATION_GUIDE.md § Phase 5](EXPLORATION_GUIDE.md#hooks)

### Memory
- What is it? → [README.md § Memory](README.md#-memory-management)
- How to use? → [TRIBE_EXAMPLES.md § Using Memory](TRIBE_EXAMPLES.md#-using-memory-for-tribe-insights)
- Update tips → [EXPLORATION_GUIDE.md § Phase 8](EXPLORATION_GUIDE.md#-phase-8-build-your-workflow-ongoing)

### Templates
- What they are → [README.md § Templates](README.md#-templates)
- Available templates → `templates/` directory
- Create your own → [EXPLORATION_GUIDE.md § Phase 6](EXPLORATION_GUIDE.md#create-a-custom-agent)

### MCP Servers
- What are they? → [README.md § MCP Servers](README.md#-mcp-servers)
- Example setup → `mcp-servers/example-server.json`
- Enable GitHub → [TRIBE_EXAMPLES.md § MCP Example](TRIBE_EXAMPLES.md#-tribe-specific-mcp-server-example)

---

## 📚 Learning Roadmap

### Beginner (1-2 hours)
1. Read [QUICK_START.md](QUICK_START.md) (15 min)
2. Try one agent: `/analyze-component` (5 min)
3. Try one skill: `/generate-component` (10 min)
4. Ask Claude a question (5 min)
5. Read [README.md](README.md) (20 min)

### Intermediate (3-4 hours)
1. Follow [EXPLORATION_GUIDE.md Phase 1-4](EXPLORATION_GUIDE.md) (1 hour)
2. Create custom keybinding (10 min)
3. Review [TRIBE_EXAMPLES.md](TRIBE_EXAMPLES.md) (20 min)
4. Try real workflow from TRIBE_EXAMPLES (30 min)
5. Update [MEMORY.md](memory/MEMORY.md) (10 min)

### Advanced (ongoing)
1. Follow [EXPLORATION_GUIDE.md Phase 5-8](EXPLORATION_GUIDE.md) (2+ hours)
2. Create custom agent from `agents/example-agent.json`
3. Create custom skill from `skills/example-skill.json`
4. Set up MCP server in `mcp-servers/`
5. Master your complete workflow

---

## 🆘 Quick Troubleshooting

| Problem | Solution | Learn More |
|---------|----------|-----------|
| Agent/skill not found | Restart Claude Code, check JSON syntax | [QUICK_START.md](QUICK_START.md#-troubleshooting) |
| Commands asking for permission | This is intentional for safety | [QUICK_START.md § Permissions](QUICK_START.md#⚙️-settings-to-know) |
| Keybinding not working | Restart Claude Code after editing | [QUICK_START.md](QUICK_START.md#-troubleshooting) |
| Don't know what to try | Start with [EXPLORATION_GUIDE.md](EXPLORATION_GUIDE.md) | [EXPLORATION_GUIDE.md](EXPLORATION_GUIDE.md) |

---

## 💾 File Locations Quick Ref

```
.claude/
├── Configuration          Use for        Edit
│   ├── settings.json      Permissions    When changing behavior
│   ├── keybindings.json   Shortcuts      When adding shortcuts
│   ├── hooks.json         Automation     When auto-validating
│   └── .claude-code-config.json  Advanced  When fine-tuning
│
├── Documentation          Read for       Purpose
│   ├── QUICK_START.md     Fast answers   5 min reference
│   ├── README.md          Understanding  Complete guide
│   ├── TRIBE_EXAMPLES.md  Tribe project  Real scenarios
│   └── EXPLORATION_GUIDE.md  Learning    Structured path
│
├── agents/               Use command     When
│   ├── component-analyzer.json    /analyze-component      Check code quality
│   ├── performance-auditor.json   /audit-performance      Find slow code
│   └── accessibility-auditor.json /audit-accessibility    WCAG compliance
│
├── skills/              Use command     When
│   ├── example-skill.json         /generate-component    Create components
│   └── test-generator.json        /generate-tests        Create tests
│
├── templates/          Used by         For
│   ├── component-template.tsx     Skills/Agents     React scaffolding
│   ├── hook-template.ts           Skills/Agents     Hook scaffolding
│   └── utility-template.ts        Skills/Agents     Utility scaffolding
│
└── memory/
    └── MEMORY.md       Read & Edit     Track learnings
```

---

## ⚡ Most Common Actions

```bash
# Analyze current component
/analyze-component

# Generate new component
/generate-component

# Check accessibility
/audit-accessibility

# Check performance
/audit-performance

# Generate tests
/generate-tests

# Quick reference
Read: QUICK_START.md

# Full documentation
Read: README.md

# Real examples
Read: TRIBE_EXAMPLES.md

# Learn systematically
Read: EXPLORATION_GUIDE.md
```

---

## 🎓 Mastery Checklist

- [ ] Read QUICK_START.md
- [ ] Try `/analyze-component`
- [ ] Try `/generate-component`
- [ ] Try `/audit-accessibility`
- [ ] Try `/audit-performance`
- [ ] Read README.md
- [ ] Add custom keybinding
- [ ] Create custom agent
- [ ] Enable auto-linting with hooks
- [ ] Complete EXPLORATION_GUIDE.md
- [ ] Create complete workflow
- [ ] Update MEMORY.md with insights

---

## 🚀 Next Step

**Pick one:**

1. **5 minutes** → Read [QUICK_START.md](QUICK_START.md)
2. **2 minutes** → Try `/analyze-component`
3. **15 minutes** → Follow [EXPLORATION_GUIDE.md Phase 1](EXPLORATION_GUIDE.md#-phase-1-understand-your-setup-15-minutes)

**Then explore from there!**

---

Last updated: 2026-02-07
For Claude Code: https://claude.ai/code

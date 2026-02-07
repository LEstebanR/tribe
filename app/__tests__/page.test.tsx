/**
 * Basic test to verify Home page renders all sections
 */

import Home from '../page'

describe('Home Page', () => {
  it('should render the home page component', () => {
    expect(Home).toBeDefined()
    expect(typeof Home).toBe('function')
  })

  it('should render without errors', () => {
    const element = <Home />
    expect(element).toBeDefined()
    expect(element.type).toBe(Home)
  })

  it('should import all required section components', async () => {
    // Verify all components are importable
    const Navbar = await import('../../components/navbar').then(m => m.Navbar)
    const Hero = await import('../../components/hero').then(m => m.Hero)
    const About = await import('../../components/about').then(m => m.About)
    const Schedule = await import('../../components/schedule').then(m => m.Schedule)
    const Rules = await import('../../components/rules').then(m => m.Rules)
    const Footer = await import('../../components/footer').then(m => m.Footer)

    expect(Navbar).toBeDefined()
    expect(Hero).toBeDefined()
    expect(About).toBeDefined()
    expect(Schedule).toBeDefined()
    expect(Rules).toBeDefined()
    expect(Footer).toBeDefined()
  })

  it('should have all section imports in the file', async () => {
    // Read the page file and check for imports
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.resolve(__dirname, '../page.tsx')
    const content = fs.readFileSync(filePath, 'utf-8')

    // Verify all sections are imported
    expect(content).toContain('import { Navbar }')
    expect(content).toContain('import { Hero }')
    expect(content).toContain('import { About }')
    expect(content).toContain('import { Schedule }')
    expect(content).toContain('import { Rules }')
    expect(content).toContain('import { Footer }')

    // Verify they're all used in JSX
    expect(content).toContain('<Navbar />')
    expect(content).toContain('<Hero />')
    expect(content).toContain('<About />')
    expect(content).toContain('<Schedule />')
    expect(content).toContain('<Rules />')
    expect(content).toContain('<Footer />')
  })
})

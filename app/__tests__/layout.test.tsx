/**
 * Basic test to verify RootLayout configuration
 * This is a smoke test to ensure the layout structure is correct
 */

import { describe, it, expect } from 'vitest'

describe('RootLayout', () => {
  it('should have correct metadata in file', async () => {
    // Read the layout file and verify metadata configuration
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.resolve(__dirname, '../layout.tsx')
    const content = fs.readFileSync(filePath, 'utf-8')

    // Verify metadata object is defined
    expect(content).toContain('export const metadata')
    expect(content).toContain('TRIBE Club - Running Santa Bárbara')
    expect(content).toContain('title')
    expect(content).toContain('description')
  })

  it('should have correct viewport settings in file', async () => {
    // Read the layout file and verify viewport configuration
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.resolve(__dirname, '../layout.tsx')
    const content = fs.readFileSync(filePath, 'utf-8')

    // Verify viewport object is defined
    expect(content).toContain('export const viewport')
    expect(content).toContain('themeColor')
    expect(content).toContain('#0d0d0d')
  })

  it('should use Spanish language in HTML', async () => {
    // Read the layout file and verify lang attribute
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.resolve(__dirname, '../layout.tsx')
    const content = fs.readFileSync(filePath, 'utf-8')

    // Verify lang="es" is in the html element
    expect(content).toContain('lang="es"')
  })

  it('should import required fonts from Next.js', async () => {
    // Read the layout file and verify font imports
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.resolve(__dirname, '../layout.tsx')
    const content = fs.readFileSync(filePath, 'utf-8')

    // Verify fonts are imported from next/font/google
    expect(content).toContain('DM_Sans')
    expect(content).toContain('Space_Grotesk')
    expect(content).toContain('next/font/google')
  })

  it('should export default RootLayout component', async () => {
    // Read the layout file and verify default export
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.resolve(__dirname, '../layout.tsx')
    const content = fs.readFileSync(filePath, 'utf-8')

    // Verify default export of RootLayout
    expect(content).toContain('export default function RootLayout')
  })

  it('should return html with children', async () => {
    // Read the layout file and verify it returns html element with children
    const fs = await import('fs')
    const path = await import('path')
    const filePath = path.resolve(__dirname, '../layout.tsx')
    const content = fs.readFileSync(filePath, 'utf-8')

    // Verify html and body elements are returned
    expect(content).toContain('<html')
    expect(content).toContain('<body')
    expect(content).toContain('{children}')
  })
})

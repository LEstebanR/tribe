import '@testing-library/jest-dom'
import { vi } from 'vitest'

interface ImageProps {
  src: string
}

type FontConfig = Record<string, unknown>

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    pathname: '/',
    query: {},
    asPath: '/',
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// Mock Next.js image
vi.mock('next/image', () => ({
  default: (props: ImageProps) => props.src,
}))

// Mock Next.js fonts
vi.mock('next/font/google', () => ({
  DM_Sans: (_config: FontConfig) => ({
    variable: '--font-dm-sans',
    className: 'dm-sans',
  }),
  Space_Grotesk: (_config: FontConfig) => ({
    variable: '--font-space-grotesk',
    className: 'space-grotesk',
  }),
}))

// Suppress console errors in tests (optional)
const originalError = console.error
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: ReactDOM.render') ||
        args[0].includes('Not implemented: HTMLFormElement.prototype.submit'))
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})

/**
 * Tests for utility functions
 */

import { cn } from '@/lib/utils'

describe('Utils', () => {
  describe('cn function', () => {
    it('should be defined', () => {
      expect(cn).toBeDefined()
      expect(typeof cn).toBe('function')
    })

    it('should merge class names correctly', () => {
      const result = cn('px-2', 'py-1')
      expect(result).toContain('px-2')
      expect(result).toContain('py-1')
    })

    it('should handle conditional classes', () => {
      const isActive = true
      const result = cn('base-class', isActive && 'active-class')
      expect(result).toContain('base-class')
      expect(result).toContain('active-class')
    })

    it('should skip falsy values', () => {
      const result = cn('px-2', false && 'hidden', null, 'py-1')
      expect(result).toContain('px-2')
      expect(result).toContain('py-1')
      expect(result).not.toContain('hidden')
    })

    it('should handle Tailwind class conflicts correctly', () => {
      // When there are conflicting Tailwind classes, twMerge should handle it
      const result = cn('px-2', 'px-4')
      // The later px-4 should win
      expect(result).toContain('px-4')
    })

    it('should handle empty input', () => {
      const result = cn()
      expect(result).toBeDefined()
      expect(typeof result).toBe('string')
    })

    it('should handle array input', () => {
      const result = cn(['px-2', 'py-1'])
      expect(result).toContain('px-2')
      expect(result).toContain('py-1')
    })
  })
})

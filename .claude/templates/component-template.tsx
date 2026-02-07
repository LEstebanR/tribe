import React from 'react'
import { cn } from '@/lib/utils'

interface {{ComponentName}}Props {
  // Add your props here
  className?: string
  children?: React.ReactNode
}

/**
 * {{ComponentName}} component
 *
 * @description A brief description of what this component does
 *
 * @example
 * ```tsx
 * <{{ComponentName}}>Content</{{ComponentName}}>
 * ```
 */
export function {{ComponentName}}({
  className,
  children,
  ...props
}: {{ComponentName}}Props) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}

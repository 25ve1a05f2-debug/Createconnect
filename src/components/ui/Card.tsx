import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

type CardProps = {
  className?: string
  children: ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-line bg-white shadow-[0_8px_30px_rgba(15,15,20,0.06)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

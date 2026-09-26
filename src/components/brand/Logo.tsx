import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

type LogoProps = {
  className?: string
  compact?: boolean
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
        className,
      )}
      aria-label="CreateConnect home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 shadow-sm shadow-brand-600/25">
        <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
          <circle cx="10.5" cy="16" r="3.4" fill="white" />
          <circle cx="21.5" cy="16" r="3.4" fill="white" fillOpacity="0.9" />
          <path
            d="M13.8 16c1.2-2.2 3.2-2.2 4.4 0"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {!compact ? (
        <span className="flex flex-col leading-tight">
          <span className="text-[15px] font-extrabold tracking-tight text-ink">
            CreateConnect
          </span>
          <span className="hidden text-[11px] font-medium text-muted sm:block">
            Where Ideas Meet Creative Talent.
          </span>
        </span>
      ) : null}
    </Link>
  )
}

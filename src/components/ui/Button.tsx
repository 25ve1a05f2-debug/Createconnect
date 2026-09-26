import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined }

type ButtonAsLink = CommonProps & {
  to: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-600 text-white shadow-sm shadow-brand-600/20 hover:bg-brand-700',
  secondary: 'bg-ink text-white hover:bg-black',
  outline:
    'border border-line bg-white text-ink hover:border-brand-200 hover:bg-brand-50',
  ghost: 'text-ink hover:bg-surface',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]',
}

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-60'

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', size = 'md', className, children, ...rest } =
    props
  const classes = cn(baseClass, variantClass[variant], sizeClass[size], className)

  if ('to' in rest && rest.to) {
    const { to, ...linkRest } = rest
    return (
      <Link to={to} className={classes} {...linkRest}>
        {children}
      </Link>
    )
  }

  const buttonRest = rest as ButtonAsButton
  return (
    <button className={classes} type={buttonRest.type ?? 'button'} {...buttonRest}>
      {children}
    </button>
  )
}

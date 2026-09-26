import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo } from '../brand/Logo'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'

const links = [
  { to: '/', label: 'Home' },
  { to: '/talent', label: 'Find Talent' },
  { to: '/projects', label: 'Find Projects' },
  { to: '/#how-it-works', label: 'How It Works', hash: true },
  { to: '/about', label: 'About' },
]

function navLinkClass(active: boolean) {
  return cn(
    'rounded-full px-3 py-2 text-sm font-medium transition-colors',
    active ? 'text-brand-700' : 'text-muted hover:text-ink',
  )
}

function DesktopLink({
  to,
  label,
  hash,
}: {
  to: string
  label: string
  hash?: boolean
}) {
  const location = useLocation()

  if (hash) {
    const active = location.pathname === '/' && location.hash === '#how-it-works'
    return (
      <Link to={{ pathname: '/', hash: 'how-it-works' }} className={navLinkClass(active)}>
        {label}
      </Link>
    )
  }

  const active =
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <NavLink to={to} end={to === '/'} className={navLinkClass(active)}>
      {label}
    </NavLink>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <DesktopLink key={link.label} {...link} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button to="/login" variant="ghost" size="sm">
            Log In
          </Button>
          <Button to="/signup" size="sm">
            Join Free
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-white px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((link) =>
              link.hash ? (
                <Link
                  key={link.label}
                  to={{ pathname: '/', hash: 'how-it-works' }}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-ink hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-ink hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button to="/login" variant="outline" onClick={() => setOpen(false)}>
              Log In
            </Button>
            <Button to="/signup" onClick={() => setOpen(false)}>
              Join Free
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

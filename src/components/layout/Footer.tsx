import { Link } from 'react-router-dom'
import { Logo } from '../brand/Logo'

const columns = [
  {
    title: 'Marketplace',
    links: [
      { to: '/talent', label: 'Find Talent' },
      { to: '/projects', label: 'Find Projects' },
      { to: '/projects/new', label: 'Post a Project' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/#how-it-works', label: 'How It Works' },
    ],
  },
  {
    title: 'Account',
    links: [
      { to: '/login', label: 'Log In' },
      { to: '/signup', label: 'Join Free' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            A creative talent marketplace built for content creators, brands, and
            the professionals who bring ideas to screen.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-ink">{column.title}</p>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.to.startsWith('/#') ? (
                    <Link
                      to={{ pathname: '/', hash: 'how-it-works' }}
                      className="text-sm text-muted transition-colors hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-sm text-muted transition-colors hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} CreateConnect. Demo marketplace — matching
          and accounts use mock data until a backend is connected.
        </p>
      </div>
    </footer>
  )
}

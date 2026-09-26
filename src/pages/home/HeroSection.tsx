import { ArrowRight, Sparkles } from 'lucide-react'
import { heroMatches } from '../../data/matches'
import { formatInr } from '../../utils/cn'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_42%),linear-gradient(180deg,#faf7ff_0%,#ffffff_58%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            <Sparkles className="h-3.5 w-3.5" />
            Built for the content creation industry
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Find the right creative talent for your next project.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Connect with talented video editors, photographers, designers,
            videographers and other creative professionals based on skills,
            portfolio, budget and availability.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/projects/new" size="lg">
              Post a Project
            </Button>
            <Button to="/talent" variant="outline" size="lg">
              Find Talent
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Card className="p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-600">
                AI Match
              </p>
              <h2 className="mt-1 text-lg font-bold text-ink">
                AI-powered creative matching
              </h2>
            </div>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-bold text-brand-700">
              92% Match
            </span>
          </div>
          <ul className="space-y-3">
            {heroMatches.map((match) => (
              <li
                key={match.id}
                className="flex items-center gap-3 rounded-2xl border border-line bg-surface/70 p-3 transition-colors hover:border-brand-200 hover:bg-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {match.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-ink">{match.name}</p>
                  <p className="truncate text-sm text-muted">
                    {match.title} · {match.location}
                  </p>
                </div>
                <p className="text-sm font-semibold text-ink">
                  {formatInr(match.startingPriceInr)}+
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">
            Demo matching only. A live matching API can replace this later.
          </p>
        </Card>
      </div>
    </section>
  )
}

import {
  Briefcase,
  FolderKanban,
  MessageSquare,
  Search,
  Star,
  UserRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'

const creatorFeatures: Array<{ icon: LucideIcon; label: string }> = [
  { icon: FolderKanban, label: 'Post projects' },
  { icon: Search, label: 'Find professionals' },
  { icon: Briefcase, label: 'Compare portfolios' },
  { icon: MessageSquare, label: 'Chat' },
  { icon: UserRound, label: 'Hire' },
  { icon: FolderKanban, label: 'Track projects' },
  { icon: Star, label: 'Leave reviews' },
]

const professionalFeatures: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Briefcase, label: 'Create portfolio' },
  { icon: Search, label: 'Find projects' },
  { icon: FolderKanban, label: 'Apply for jobs' },
  { icon: Star, label: 'Set pricing' },
  { icon: UserRound, label: 'Show availability' },
  { icon: MessageSquare, label: 'Chat with clients' },
  { icon: Star, label: 'Build reputation' },
]

export function UserTypeSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="flex flex-col p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-600">
            For creators & clients
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Need creative talent?
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {creatorFeatures.map((feature) => (
              <li key={feature.label} className="flex items-center gap-2 text-sm text-ink">
                <feature.icon className="h-4 w-4 text-brand-600" />
                {feature.label}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button to="/projects/new">Post a Project</Button>
          </div>
        </Card>

        <Card className="flex flex-col bg-[linear-gradient(180deg,#f6f2ff_0%,#ffffff_48%)] p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-600">
            For creative professionals
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Looking for creative work?
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {professionalFeatures.map((feature) => (
              <li key={feature.label} className="flex items-center gap-2 text-sm text-ink">
                <feature.icon className="h-4 w-4 text-brand-600" />
                {feature.label}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button to="/projects" variant="secondary">
              Find Projects
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

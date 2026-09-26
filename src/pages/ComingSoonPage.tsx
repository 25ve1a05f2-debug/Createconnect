import { Button } from '../components/ui/Button'

type ComingSoonPageProps = {
  title: string
  description: string
}

export function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-start px-4 py-20 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-wide text-brand-600">
        Next phase
      </p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      <div className="mt-8">
        <Button to="/" variant="outline">
          Back to Home
        </Button>
      </div>
    </section>
  )
}

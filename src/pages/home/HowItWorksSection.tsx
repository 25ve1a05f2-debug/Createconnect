import { Card } from '../../components/ui/Card'

const steps = [
  {
    number: '01',
    title: 'Post Your Project',
    body: 'Tell professionals what you need, your budget and deadline.',
  },
  {
    number: '02',
    title: 'Get Matched',
    body: 'Find professionals based on skills, portfolio, budget and availability.',
  },
  {
    number: '03',
    title: 'Chat & Hire',
    body: 'Discuss the project and hire the right professional.',
  },
  {
    number: '04',
    title: 'Complete & Review',
    body: 'Complete the project and leave a rating.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-surface/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
          How it works
        </p>
        <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          From brief to published work, without the noise.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.number} className="h-full p-5 transition-transform duration-200 hover:-translate-y-0.5">
              <p className="text-sm font-bold text-brand-600">{step.number}</p>
              <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

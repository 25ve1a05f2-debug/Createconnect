import { useEffect, useRef, useState } from 'react'
import { useCountUp } from '../../hooks/useCountUp'

const stats = [
  { id: 'pros', value: 2500, suffix: '+', label: 'Creative Professionals' },
  { id: 'projects', value: 850, suffix: '+', label: 'Projects Posted' },
  { id: 'categories', value: 6, suffix: '+', label: 'Creative Categories' },
  { id: 'discovery', value: 24, suffix: '/7', label: 'Project Discovery' },
]

function StatItem({
  value,
  suffix,
  label,
  visible,
}: {
  value: number
  suffix: string
  label: string
  visible: boolean
}) {
  const counted = useCountUp(value, visible)
  return (
    <div className="rounded-2xl border border-line bg-white px-4 py-6 text-center shadow-[0_6px_24px_rgba(15,15,20,0.04)]">
      <p className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {counted}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-muted">{label}</p>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const revealIfVisible = () => {
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true)
      }
    }

    revealIfVisible()
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {stats.map((stat) => (
          <StatItem
            key={stat.id}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            visible={visible}
          />
        ))}
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, enabled: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!enabled || started.current) return
    started.current = true

    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      started.current = false
    }
  }, [durationMs, enabled, target])

  return value
}

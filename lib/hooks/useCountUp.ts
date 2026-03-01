'use client'

import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  end: number
  duration?: number
  start?: number
  enabled?: boolean
}

export function useCountUp({
  end,
  duration = 2000,
  start = 0,
  enabled = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start)
  const frameRef = useRef<number>(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(start + (end - start) * eased))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      startTimeRef.current = null
    }
  }, [end, duration, start, enabled])

  return count
}

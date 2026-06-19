import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — fires once when an element scrolls into view.
 * Returns [ref, isVisible]. Respects prefers-reduced-motion by revealing
 * immediately (no transition) for users who opt out of animation.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target) // reveal only once
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options },
    )

    observer.observe(node)
    return () => observer.disconnect()
    // Options are read once on mount; we intentionally don't re-subscribe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, isVisible]
}

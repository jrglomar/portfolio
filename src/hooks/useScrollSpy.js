import { useEffect, useState } from 'react'

/**
 * useScrollSpy — returns the id of the section currently in the viewport's
 * "active band" (roughly the upper third). Used to highlight the matching
 * nav link in the header.
 */
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      // Thin horizontal band near the top third of the viewport.
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}

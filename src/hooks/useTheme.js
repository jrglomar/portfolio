import { useEffect, useState } from 'react'

/**
 * useTheme — light/dark theme controller.
 * Initial value is read from the <html> class set by the no-FOUC bootstrap
 * script in index.html, so there is no flash on load. Persists to localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document === 'undefined') return 'dark'
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* localStorage may be unavailable (private mode) — ignore. */
    }
  }, [theme])

  const toggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}

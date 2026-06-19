import { useEffect, useState } from 'react'
import Container from './Container'
import ThemeToggle from './ThemeToggle'
import { Menu, Close, ArrowUpRight } from './icons'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { portfolio } from '../data/portfolio'

const NAV_IDS = portfolio.nav.map((n) => n.id)

/**
 * Header — fixed, glassy on scroll. Desktop shows numbered nav links with a
 * scroll-spy active state; mobile collapses into a full-width overlay menu.
 */
export default function Header() {
  const { person, nav } = portfolio
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(NAV_IDS)

  // Toggle the glassy background once the page has scrolled a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Monogram */}
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-foreground"
          aria-label={`${person.name} — home`}
        >
          {person.monogram}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`group relative rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                <span className="mr-1.5 font-mono text-xs text-accent/70">{item.no}</span>
                {item.label}
                <span
                  className={`pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left bg-accent transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 sm:inline-flex"
          >
            Get in touch
          </a>
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground md:hidden"
          >
            {mobileOpen ? <Close className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <nav
          className="border-b border-border bg-background/95 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col py-4">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={close}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <span className="font-mono text-xs text-accent">{item.no}</span>
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-accent-foreground"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </Container>
        </nav>
      )}
    </header>
  )
}

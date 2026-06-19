import Container from './Container'
import Button from './Button'
import { ArrowRight, ArrowDown, Mail } from './icons'
import { portfolio } from '../data/portfolio'

/**
 * Hero — full-height intro with a faint grid + radial accent glow backdrop,
 * headline, value proposition, CTAs, and a credibility stat strip.
 */
export default function Hero() {
  const { hero } = portfolio

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative background (non-interactive) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-[-12%] h-[420px] w-[680px] max-w-[92vw] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] motion-safe:animate-[drift_9s_ease-in-out_infinite]" />
      </div>

      <Container className="flex min-h-[88vh] flex-col justify-center pb-20 pt-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            {hero.headlineLead} <span className="text-gradient">{hero.headlineName}</span>.
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={hero.primaryCta.href} variant="solid">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              <Mail className="h-4 w-4" />
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/* Stats */}
          <ul className="mt-14 grid max-w-lg grid-cols-3 gap-x-6 gap-y-6">
            {hero.stats.map((s) => (
              <li key={s.label}>
                <div className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider text-subtle">
                  {s.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-subtle transition-colors hover:text-foreground md:block"
      >
        <ArrowDown className="h-5 w-5 motion-safe:animate-[bob_2s_ease-in-out_infinite]" />
      </a>
    </section>
  )
}

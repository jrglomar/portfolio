import Container from './Container'
import Reveal from './Reveal'

/**
 * Section — consistent vertical rhythm + an editorial numbered heading
 * ("01" eyebrow in accent mono, then the section title). `scroll-mt`
 * keeps anchored headings clear of the sticky header.
 */
export default function Section({ id, no, title, intro, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <Container>
        {(no || title) && (
          <Reveal className="mb-10 sm:mb-14">
            {no && (
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {no}
              </span>
            )}
            {title && (
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  )
}

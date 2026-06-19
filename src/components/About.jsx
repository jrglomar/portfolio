import Section from './Section'
import Reveal from './Reveal'
import { Sparkles, Check } from './icons'
import { portfolio } from '../data/portfolio'

/** About — professional summary alongside a "currently focused on" card. */
export default function About() {
  const { about } = portfolio

  return (
    <Section id="about" no="01" title={about.heading}>
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
        {/* Summary */}
        <Reveal className="lg:col-span-3">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        {/* Focus card */}
        <Reveal delay={120} className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-foreground">
              <Sparkles className="h-4 w-4 text-accent" />
              <h3 className="font-mono text-xs uppercase tracking-[0.15em]">
                {about.focusTitle}
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {about.focus.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

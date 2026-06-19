import Section from './Section'
import Reveal from './Reveal'
import { Award, GraduationCap } from './icons'
import { portfolio } from '../data/portfolio'

/** Credentials — certifications list + education card. */
export default function Credentials() {
  const { credentials } = portfolio
  const { certifications, education } = credentials

  return (
    <Section id="credentials" no="04" title={credentials.heading}>
      <div className="grid gap-6 lg:grid-cols-5 lg:gap-10">
        {/* Certifications */}
        <Reveal className="lg:col-span-3">
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex items-start gap-4 p-4 transition-colors hover:bg-surface-2 sm:p-5"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Award className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{cert.name}</p>
                  <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-subtle">
                    {cert.issuer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Education */}
        <Reveal delay={120} className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-accent">
              <GraduationCap className="h-5 w-5" />
              <h3 className="font-mono text-xs uppercase tracking-[0.15em]">Education</h3>
            </div>
            <p className="mt-5 text-base font-semibold text-foreground">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-4 inline-block rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-subtle">
              {education.period}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

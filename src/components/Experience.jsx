import Section from './Section'
import Reveal from './Reveal'
import Chip from './Chip'
import { portfolio } from '../data/portfolio'

/** Experience — vertical timeline of roles with stack chips + achievements. */
export default function Experience() {
  const { experience } = portfolio

  return (
    <Section id="experience" no="02" title={experience.heading}>
      <ol className="relative border-l border-border pl-6 sm:pl-8">
        {experience.roles.map((role, i) => (
          <Reveal
            as="li"
            key={`${role.company}-${role.period}`}
            delay={i * 80}
            className="relative pb-12 last:pb-0"
          >
            {/* Role + period */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                {role.role} <span className="text-muted">— {role.company}</span>
              </h3>
              <span className="font-mono text-xs uppercase tracking-wider text-subtle sm:shrink-0">
                {role.period}
              </span>
            </div>

            {/* Achievements */}
            <ul className="mt-4 space-y-2.5">
              {role.bullets.map((bullet, bi) => (
                <li key={bi} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {role.stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

import Section from './Section'
import Reveal from './Reveal'
import Chip from './Chip'
import { portfolio } from '../data/portfolio'

/** Skills — responsive grid of categorized tech clusters. */
export default function Skills() {
  const { skills } = portfolio

  return (
    <Section id="skills" no="03" title={skills.heading} intro={skills.intro}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 80}>
            <div className="h-full rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

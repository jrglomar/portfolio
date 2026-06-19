import Section from './Section'
import Reveal from './Reveal'
import Button from './Button'
import { Mail, Phone, MapPin, Github } from './icons'
import { portfolio } from '../data/portfolio'

/** Contact — closing CTA card with email/phone/location and social links. */
export default function Contact() {
  const { contact, person, links } = portfolio

  // Only open external links in a new tab when they are real (not placeholders).
  const githubLinkProps = links.github.isPlaceholder
    ? {}
    : { target: '_blank', rel: 'noreferrer' }

  return (
    <Section id="contact" no="05" title={contact.heading}>
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
          <h3 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.lead}
          </h3>
          <p className="mt-4 max-w-xl text-muted">{contact.text}</p>

          {/* Primary actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`mailto:${person.email}`} variant="solid">
              <Mail className="h-4 w-4" />
              {person.email}
            </Button>
            <Button href={links.github.href} variant="ghost" {...githubLinkProps}>
              <Github className="h-4 w-4" />
              GitHub
            </Button>
          </div>

          {/* Contact details */}
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            <ContactItem
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={person.email}
              href={`mailto:${person.email}`}
            />
            <ContactItem
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={person.phone}
              href={`tel:${person.phoneHref}`}
            />
            <ContactItem
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value={person.location}
            />
          </div>

          {links.github.isPlaceholder && (
            <p className="mt-6 font-mono text-xs text-subtle">
              Note: social links are placeholders — set real URLs in{' '}
              <span className="text-muted">src/data/portfolio.js</span>.
            </p>
          )}
        </div>
      </Reveal>
    </Section>
  )
}

/** A single contact detail tile; becomes a link when `href` is provided. */
function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex h-full items-center gap-3 bg-surface p-5 transition-colors hover:bg-surface-2">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="font-mono text-[0.65rem] uppercase tracking-wider text-subtle">
          {label}
        </div>
        <div className="truncate text-sm text-foreground">{value}</div>
      </div>
    </div>
  )

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  )
}

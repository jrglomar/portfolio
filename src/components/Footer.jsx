import Container from './Container'
import { ArrowUp } from './icons'
import { portfolio } from '../data/portfolio'

/** Footer — monogram, copyright, and back-to-top. */
export default function Footer() {
  const { person, footer } = portfolio
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-sm text-foreground">
          {person.monogram}
          <span className="text-accent">.</span>
        </p>
        <p className="text-center text-xs text-subtle">
          © {year} {person.name}. {footer.builtWith}.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-foreground"
        >
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </Container>
    </footer>
  )
}

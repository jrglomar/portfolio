import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * App — composes the portfolio sections in order. All content comes from
 * src/data/portfolio.js; these components are purely presentational.
 */
export default function App() {
  return (
    <>
      {/* Accessibility: keyboard users can skip straight to the content. */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-foreground"
      >
        Skip to content
      </a>

      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

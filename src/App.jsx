import { motion, useScroll, useSpring } from 'framer-motion'
import AboutPanel from './components/AboutPanel'
import Contact from './components/Contact'
import EducationPanel from './components/EducationPanel'
import Hero from './components/Hero'
import ProjectsPanel from './components/ProjectsPanel'
import Reveal from './components/Reveal'
import SkillsPanel from './components/SkillsPanel'
import { useLanguage } from './LanguageContext'
import './App.css'

function App() {
  const { t, locale, toggleLocale } = useLanguage()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app">
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <div className="wallpaper" aria-hidden="true">
        <span className="blob blob--pink" />
        <span className="blob blob--purple" />
        <span className="blob blob--sky" />
        <span className="blob blob--navy" />
        <span className="mesh" />
      </div>

      <header className="topbar glass">
        <button type="button" className="topbar__brand" onClick={() => scrollTo('hero')}>
          {t.brand}
        </button>
        <div className="topbar__cluster">
          <button
            type="button"
            className="glass-btn glass-btn--lang ltr"
            onClick={toggleLocale}
            aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
          >
            {t.langBtn}
          </button>
          <button type="button" className="glass-btn" onClick={() => scrollTo('projects')}>
            {t.navWorks}
          </button>
          <a className="glass-btn glass-btn--tint" href="#contact">
            {t.navContact}
          </a>
        </div>
      </header>

      <main className="page">
        <section id="hero">
          <Hero onExplore={() => scrollTo('projects')} />
        </section>

        <Reveal>
          <AboutPanel />
        </Reveal>

        <Reveal delay={0.04}>
          <EducationPanel />
        </Reveal>

        <Reveal delay={0.04}>
          <SkillsPanel />
        </Reveal>

        <Reveal delay={0.04}>
          <ProjectsPanel />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {t.footer}
        </p>
      </footer>
    </div>
  )
}

export default App

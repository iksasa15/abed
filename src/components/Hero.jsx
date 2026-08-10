import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'

export default function Hero({ onExplore }) {
  const { t } = useLanguage()
  const { profile } = t

  return (
    <section className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="hero__greeting">{profile.greeting}</p>
        <h1 className="hero__brand">{t.brand}</h1>
        <p className="hero__line">{profile.headline}</p>

        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={onExplore}>
            {t.heroCtaWorks}
          </button>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            {t.heroCtaHello}
          </a>
        </div>
      </motion.div>
    </section>
  )
}

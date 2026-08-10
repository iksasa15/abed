import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'

export default function AboutPanel() {
  const { t, isAr } = useLanguage()
  const { profile, about } = t

  return (
    <section className="panel about section-block" id="about">
      <header className="section-head">
        <p className="section-kicker">{about.kicker}</p>
        <h2 className="section-title">{about.title}</h2>
      </header>

      <motion.div
        className="about__copy"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <h3>{profile.name}</h3>
        <p className={`about__name-en ${isAr ? 'ltr' : ''}`}>{profile.nameEn}</p>
        <p className="about__objective">{profile.objective}</p>
        <p className="about__meta">{profile.location}</p>
      </motion.div>
    </section>
  )
}

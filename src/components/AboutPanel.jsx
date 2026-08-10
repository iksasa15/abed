import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'

export default function AboutPanel() {
  const { t } = useLanguage()
  const { profile, about, stats } = t

  return (
    <section className="panel about section-block" id="about">
      <header className="section-head">
        <p className="section-kicker">{about.kicker}</p>
        <h2 className="section-title">{about.title}</h2>
      </header>

      <ul className="stats-strip">
        {stats.map((stat) => (
          <li key={stat.label}>
            {stat.logo ? (
              <div className="stats-strip__logo">
                <img
                  src={stat.logo}
                  alt="Apple Developer Academy at Tuwaiq"
                  className="academy-logo academy-logo--stat"
                  width={100}
                  height={28}
                />
              </div>
            ) : (
              <strong className="ltr">{stat.value}</strong>
            )}
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>

      <motion.div
        className="about__copy"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5 }}
      >
        <p className="about__objective">{profile.objective}</p>
        <p className="about__meta">{profile.location}</p>
      </motion.div>
    </section>
  )
}

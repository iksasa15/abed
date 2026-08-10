import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import TechIcon, { TechChip, featuredTech } from './TechIcon'

export default function SkillsPanel() {
  const { t } = useLanguage()
  const { skills } = t

  return (
    <section className="panel skills section-block" id="skills">
      <header className="section-head">
        <p className="section-kicker">{skills.kicker}</p>
        <h2 className="section-title">{skills.title}</h2>
      </header>

      <motion.ul
        className="tech-logo-row"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45 }}
      >
        {featuredTech.map((tech) => (
          <li key={tech.name} className="tech-logo-card">
            {tech.logo ? (
              <img
                src={tech.logo}
                alt="Apple Developer Academy at Tuwaiq"
                className="academy-logo academy-logo--tech"
                width={64}
                height={24}
              />
            ) : (
              <TechIcon name={tech.name} className="tech-logo-card__icon" />
            )}
            <span className="ltr">{tech.label}</span>
          </li>
        ))}
      </motion.ul>

      <div className="skills__groups">
        {skills.groups.map((group) => (
          <div key={group.title} className="skills__group">
            <h3>{group.title}</h3>
            <ul className="chip-row">
              {group.items.map((item) => (
                <TechChip key={item} label={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ul className="chip-row skills__langs">
        {skills.languages.map((lang) => (
          <li key={lang.name}>
            {lang.name} · {lang.level}
          </li>
        ))}
      </ul>
    </section>
  )
}

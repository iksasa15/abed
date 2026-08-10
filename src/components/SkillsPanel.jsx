import { motion } from 'framer-motion'
import { languages, skillGroups } from '../data'
import TechIcon, { TechChip, featuredTech } from './TechIcon'

export default function SkillsPanel() {
  return (
    <section className="panel skills section-block" id="skills">
      <header className="section-head">
        <p className="section-kicker">الأدوات</p>
        <h2 className="section-title">المهارات</h2>
      </header>

      <motion.ul
        className="tech-logo-row"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        {featuredTech.map((tech) => (
          <li key={tech.name} className="tech-logo-card">
            <TechIcon name={tech.name} className="tech-logo-card__icon" />
            <span className="ltr">{tech.label}</span>
          </li>
        ))}
      </motion.ul>

      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            className="skills__card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <h3>{group.title}</h3>
            <ul className="chip-row chip-row--tech">
              {group.items.map((item) => (
                <TechChip key={item} label={item} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <ul className="chip-row chip-row--soft skills__langs">
        {languages.map((lang) => (
          <li key={lang.name}>
            {lang.name} · {lang.level}
          </li>
        ))}
      </ul>
    </section>
  )
}

import { motion } from 'framer-motion'
import { languages, skillGroups } from '../data'

export default function SkillsPanel() {
  return (
    <section className="panel skills section-block" id="skills">
      <header className="section-head">
        <p className="section-kicker">الأدوات</p>
        <h2 className="section-title">المهارات</h2>
      </header>

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
            <ul className="chip-row">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
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

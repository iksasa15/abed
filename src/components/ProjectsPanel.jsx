import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import { TechChip } from './TechIcon'

export default function ProjectsPanel() {
  const { t } = useLanguage()
  const { projects } = t

  return (
    <section className="panel projects section-block" id="projects">
      <header className="section-head">
        <p className="section-kicker">{projects.kicker}</p>
        <h2 className="section-title">{projects.title}</h2>
      </header>

      <div className="projects__list">
        {projects.items.map((project, i) => (
          <motion.article
            key={project.id}
            className={`project project--${project.color}`}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: i * 0.1,
              type: 'spring',
              stiffness: 240,
              damping: 22,
            }}
          >
            <div className="project__meta">
              <span className="project__status">{project.status}</span>
            </div>
            <h3 className="project__name ltr">{project.name}</h3>
            <p className="project__tagline">{project.tagline}</p>
            <p className="project__desc">{project.description}</p>
            <ul className="project__skills">
              {project.skills.map((skill) => (
                <TechChip key={skill} label={skill} className="ltr" />
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { projects } from '../data'
import { TechChip } from './TechIcon'

export default function ProjectsPanel() {
  return (
    <section className="panel projects section-block" id="projects">
      <header className="section-head">
        <p className="section-kicker">أعمالي</p>
        <h2 className="section-title">المشاريع</h2>
      </header>

      <div className="projects__list">
        {projects.map((project, i) => (
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

import { useLanguage } from '../LanguageContext'
import { TechChip } from './TechIcon'
import Timeline, { TimelineItem } from './Timeline'

export default function ProjectsPanel() {
  const { t } = useLanguage()
  const { projects } = t

  return (
    <section className="panel projects section-block" id="projects">
      <header className="section-head">
        <p className="section-kicker">{projects.kicker}</p>
        <h2 className="section-title">{projects.title}</h2>
      </header>

      <Timeline>
        {projects.items.map((project, i) => (
          <TimelineItem
            key={project.id}
            year={project.year}
            accent={project.color}
            edged
            delay={Math.min(i * 0.06, 0.24)}
          >
            <span className="project__status">{project.status}</span>
            <h3 className="project__name ltr">{project.name}</h3>
            <p className="project__tagline">{project.tagline}</p>
            <p className="project__desc">{project.description}</p>
            <ul className="project__skills">
              {project.skills.map((skill) => (
                <TechChip key={skill} label={skill} className="ltr" />
              ))}
            </ul>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}

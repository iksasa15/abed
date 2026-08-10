import { useLanguage } from '../LanguageContext'
import Timeline, { TimelineItem } from './Timeline'

export default function EducationPanel() {
  const { t } = useLanguage()
  const { education } = t

  return (
    <section className="panel education section-block" id="education">
      <header className="section-head">
        <p className="section-kicker">{education.kicker}</p>
        <h2 className="section-title">{education.title}</h2>
      </header>

      <Timeline>
        {education.items.map((item, i) => (
          <TimelineItem
            key={item.title}
            year={item.year}
            accent="purple"
            delay={Math.min(i * 0.04, 0.24)}
          >
            {item.logo ? (
              <img
                src={item.logo}
                alt="Apple Developer Academy at Tuwaiq"
                className="academy-logo academy-logo--card"
                width={96}
                height={36}
              />
            ) : null}
            <p className="timeline__meta">{item.meta}</p>
            <h3 className="timeline__title">{item.title}</h3>
            <p className="timeline__org">{item.org}</p>
            {item.points?.length ? (
              <ul className="timeline__points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </TimelineItem>
        ))}
      </Timeline>

      <div className="edu__activities">
        <h3 className="edu__activities-title">{education.activitiesTitle}</h3>
        <Timeline className="timeline--compact">
          {education.activities.map((act, i) => (
            <TimelineItem
              key={act.title}
              year={act.year}
              accent="purple"
              delay={Math.min(i * 0.04, 0.16)}
            >
              <h3 className="timeline__title">{act.title}</h3>
              <p className="timeline__org">
                {act.org} · {act.meta}
              </p>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  )
}

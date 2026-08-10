import { motion } from 'framer-motion'
import { activities, education } from '../data'

export default function EducationPanel() {
  return (
    <section className="panel education section-block" id="education">
      <header className="section-head">
        <p className="section-kicker">المسار</p>
        <h2 className="section-title">التعليم والخبرات</h2>
      </header>

      <ul className="edu__list">
        {education.map((item, i) => (
          <motion.li
            key={item.title}
            className="edu__item"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.45 }}
          >
            <div className="edu__dot" aria-hidden="true" />
            <div>
              <p className="edu__meta">{item.meta}</p>
              <h3>{item.title}</h3>
              <p className="edu__org">{item.org}</p>
              {item.points?.length ? (
                <ul className="edu__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="edu__activities">
        <h3 className="edu__activities-title">التطوع والأنشطة</h3>
        <ul className="about__acts">
          {activities.map((act) => (
            <li key={act.title}>
              <strong>{act.title}</strong>
              <span>
                {act.org} · {act.meta}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

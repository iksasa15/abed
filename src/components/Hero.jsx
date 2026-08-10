import { motion } from 'framer-motion'
import { profile, stats } from '../data'

export default function Hero({ onExplore }) {
  return (
    <section className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="hero__greeting">{profile.greeting}</p>
        <h1 className="hero__brand">{profile.name}</h1>
        <p className="hero__role">{profile.title}</p>
        <p className="hero__line">{profile.headline}</p>

        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={onExplore}>
            من أعمالي
          </button>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
            كلّمني
          </a>
        </div>

        <ul className="hero__stats">
          {stats.map((stat) => (
            <li key={stat.label}>
              <strong className="ltr">{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

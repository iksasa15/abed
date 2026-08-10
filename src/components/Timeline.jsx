import { motion } from 'framer-motion'

export default function Timeline({ children, className = '' }) {
  return <ol className={`timeline ${className}`}>{children}</ol>
}

export function TimelineItem({
  year,
  children,
  logo,
  accent = 'purple',
  delay = 0,
}) {
  return (
    <motion.li
      className={`timeline__item timeline__item--${accent}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="timeline__rail" aria-hidden="true">
        <span className="timeline__dot">
          {logo ? (
            <img src={logo} alt="" className="timeline__logo" width={28} height={16} />
          ) : null}
        </span>
      </div>
      <div
        className={`timeline__year ${/^\d/.test(String(year)) ? 'ltr' : ''}`}
      >
        {year}
      </div>
      <div className="timeline__card">{children}</div>
    </motion.li>
  )
}

import { motion } from 'framer-motion'

export default function Timeline({ children, className = '' }) {
  return <ol className={`timeline ${className}`}>{children}</ol>
}

export function TimelineItem({
  year,
  children,
  accent = 'purple',
  delay = 0,
  edged = false,
}) {
  return (
    <motion.li
      className={`timeline__item timeline__item--${accent}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`timeline__year ${/^\d/.test(String(year)) ? 'ltr' : ''}`}
      >
        {year}
      </div>
      <div className="timeline__rail" aria-hidden="true">
        <span className="timeline__dot" />
      </div>
      <div className={edged ? 'timeline__card timeline__card--edged' : 'timeline__card'}>
        {children}
      </div>
    </motion.li>
  )
}

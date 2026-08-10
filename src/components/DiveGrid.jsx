import { motion } from 'framer-motion'
import { diveTiles } from '../data'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const tileAnim = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function DiveGrid() {
  return (
    <section className="dive" id="dive">
      <div className="dive__header">
        <h2 className="dive__title">ابدأ الاستكشاف</h2>
        <p className="dive__note">
          انزلي للأسفل — كل جزء من رحلة عبير يظهر بالتسلسل.
        </p>
      </div>

      <motion.div
        className="dive__grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {diveTiles.map((tile, i) => (
          <motion.div
            key={tile.id}
            className={`dive__tile dive__tile--${tile.color} dive__tile--${i % 2 === 0 ? 'short' : 'tall'}`}
            variants={tileAnim}
          >
            <span className="dive__tile-title">{tile.title}</span>
            <span className="dive__tile-sub">{tile.subtitle}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

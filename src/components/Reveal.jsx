import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.22, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

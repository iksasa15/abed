import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { pathCards } from '../data'

export default function PathCarousel() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const startX = useRef(0)
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { amount: 0.45 })
  const autoplay = useRef(null)

  const card = pathCards[index]

  const go = (dir) => {
    setFlipped(false)
    setIndex((i) => (i + dir + pathCards.length) % pathCards.length)
  }

  useEffect(() => {
    if (!inView) {
      clearInterval(autoplay.current)
      return undefined
    }

    autoplay.current = setInterval(() => {
      setFlipped(false)
      setIndex((i) => (i + 1) % pathCards.length)
    }, 3200)

    return () => clearInterval(autoplay.current)
  }, [inView])

  const onPointerDown = (e) => {
    startX.current = e.clientX
    clearInterval(autoplay.current)
  }

  const onPointerUp = (e) => {
    const dx = e.clientX - startX.current
    if (dx > 50) go(1)
    if (dx < -50) go(-1)
  }

  return (
    <section className="panel path section-block" id="path" ref={sectionRef}>
      <header className="section-head">
        <p className="section-kicker">المسار</p>
        <h2 className="section-title">اكتشف مسارك</h2>
      </header>

      <div
        className="path__stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${index}-${flipped}`}
            className={`path__card ${flipped ? 'path__card--flipped' : ''}`}
            initial={{ opacity: 0, x: -48, rotateY: 8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: 48, rotateY: -8 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          >
            <button
              type="button"
              className="path__flip"
              aria-label="قلب البطاقة"
              onClick={() => setFlipped((f) => !f)}
            >
              ↻
            </button>
            {!flipped ? (
              <p className="path__question">هل تحبين التعامل مع…</p>
            ) : null}
            <h3 className="path__answer">
              {flipped ? card.detail : card.title}
            </h3>
          </motion.div>
        </AnimatePresence>

        {pathCards[index + 1] ? (
          <div className="path__peek" aria-hidden="true" />
        ) : null}
      </div>

      <div className="path__dots" role="tablist" aria-label="بطاقات المسار">
        {pathCards.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={`path__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => {
              setFlipped(false)
              setIndex(i)
              clearInterval(autoplay.current)
            }}
          />
        ))}
      </div>
    </section>
  )
}

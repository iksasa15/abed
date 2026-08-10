import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact__card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="section-head section-head--center">
          <p className="section-kicker">تواصل</p>
          <h2 className="section-title">خلينا نشتغل سوا</h2>
        </header>
        <p>تقدرين تراسليني على الإيميل أو تتواصلين بالجوال.</p>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            الإيميل
          </a>
          <a
            className="btn btn--ghost ltr"
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
          >
            {profile.phone}
          </a>
        </div>
        <p className="contact__email ltr">{profile.email}</p>
      </motion.div>
    </section>
  )
}

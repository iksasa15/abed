import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const { profile, contact } = t

  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact__card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="section-head section-head--center">
          <p className="section-kicker">{contact.kicker}</p>
          <h2 className="section-title">{contact.title}</h2>
        </header>
        <p>{contact.text}</p>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            {contact.emailBtn}
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

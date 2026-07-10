import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState({ text: '', color: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setSubmitting(true)
    setMessage({ text: '', color: '' })
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form) })
      const data = await res.json()
      if (data.success) {
        setMessage({
          text: t('contact.successMessage'),
          color: '#8FB8CC',
        })
        form.reset()
      } else {
        setMessage({ text: t('contact.errorMessage'), color: '#ff6b6b' })
      }
    } catch {
      setMessage({ text: t('contact.errorMessage'), color: '#ff6b6b' })
    }
    setSubmitting(false)
  }

  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <h2>{t('contact.heading')}</h2>
        <p>{t('contact.subheading')}</p>
        <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="ce19bb5f-1b2a-44b7-9b52-73dfa427bbbf" />
          <input type="hidden" name="subject" value={t('contact.emailSubject')} />
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <input type="text" name="name" placeholder={t('contact.namePlaceholder')} required />
          <input type="email" name="email" placeholder={t('contact.emailPlaceholder')} required />
          <input
            type="submit"
            className="btn-primary"
            style={{ cursor: 'pointer', border: 'none' }}
            value={submitting ? t('contact.submitting') : t('contact.submit')}
            disabled={submitting}
          />
        </form>
        {message.text && (
          <p style={{ marginTop: '20px', color: message.color, fontWeight: 600 }}>{message.text}</p>
        )}
      </div>
    </section>
  )
}

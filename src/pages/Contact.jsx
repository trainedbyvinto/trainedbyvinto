import { useState } from 'react'

export default function Contact() {
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
          text: 'Vielen Dank für deine Anfrage! Ich habe deine Nachricht erhalten und werde mich innerhalb von 48 Stunden bei dir melden.',
          color: '#8FB8CC',
        })
        form.reset()
      } else {
        setMessage({ text: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut.', color: '#ff6b6b' })
      }
    } catch {
      setMessage({ text: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut.', color: '#ff6b6b' })
    }
    setSubmitting(false)
  }

  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <h2>Bereit für dein System?</h2>
        <p>Vereinbare ein kostenloses 20-minütiges Erstgespräch. Gemeinsam besprechen wir deine Ziele und finden heraus, ob mein Coaching zu dir passt.</p>
        <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="ce19bb5f-1b2a-44b7-9b52-73dfa427bbbf" />
          <input type="hidden" name="subject" value="Neue Coaching-Anfrage von trainedbyvinto.com" />
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <input type="text" name="name" placeholder="Dein Name" required />
          <input type="email" name="email" placeholder="Deine E-Mail" required />
          <input
            type="submit"
            className="btn-primary"
            style={{ cursor: 'pointer', border: 'none' }}
            value={submitting ? 'Wird gesendet...' : 'Absenden'}
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

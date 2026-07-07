import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-tag">1:1 &amp; Online Coaching</div>
          <h1>Präzision. Fortschritt.<br /><em>Ergebnisse.</em></h1>
          <p className="hero-sub">Kein Rätselraten. Keine Standardpläne. Evidenzbasierte Trainings- und Ernährungsstrategien, individuell auf deine Ziele abgestimmt.</p>
          <div className="hero-actions">
            <Link className="btn-primary" to="/kontakt">Jetzt Erstgespräch sichern</Link>
            <Link className="btn-ghost" to="/ergebnisse">Ergebnisse ansehen</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><b>10+</b><span>Klienten betreut</span></div>
            <div className="stat"><b>100%</b><span>individuelle Pläne</span></div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="wrap">
          <span className="eyebrow">Über mich</span>
          <div className="about-grid">
            <div className="about-portrait">
              <img src="/images/about-portrait.jpg" alt="Vincent, Trainer bei trainedbyvinto" />
            </div>
            <div>
              <h2 style={{ color: 'var(--concrete)', fontSize: 'clamp(28px,4vw,42px)', marginBottom: '20px' }}>Vinto</h2>
              <p>Ich bin Vincent. Bodybuilding ist für mich mehr als ein Hobby – es ist ein Teil meines Lebens und absolute Leidenschaft. Mein Ziel ist es, dir nicht einfach einen Trainingsplan zu geben, sondern ein System, das zu deinem Alltag, deinem Körper und deinen Zielen passt.</p>
              <p>Jede Betreuung wird individuell angepasst. Mit strukturiertem Training, einer durchdachten Ernährung und regelmässigen Check-ins sorgen wir dafür, dass du konstant Fortschritte machst – ohne Rätselraten und ohne Standardpläne. Du weisst jederzeit, wo du stehst und was der nächste Schritt ist.</p>
              <div className="about-creds">
                <div>Individuelle<br />Betreuung</div>
                <div>Training &amp;<br />Ernährung</div>
                <div>Online &amp;<br />Luzern, CH</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

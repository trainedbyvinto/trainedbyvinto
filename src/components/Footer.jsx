import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© 2026 trainedbyvinto — Luzern, Schweiz</span>
        <span>
          <Link to="/#about">Über mich</Link> · <Link to="/programme">Programme</Link> · <Link to="/kontakt">Kontakt</Link>
        </span>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <Link className="logo" to="/">TRAINED<span>BY</span>VINTO</Link>
        <ul className="navlinks">
          <li><Link to="/#about">Über mich</Link></li>
          <li><Link to="/programme">Programme</Link></li>
          <li><Link to="/ergebnisse">Ergebnisse</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
        <Link className="navcta" to="/kontakt">Erstgespräch</Link>
      </nav>
    </header>
  )
}

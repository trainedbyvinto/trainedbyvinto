import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header>
      <nav>
        <Link className="logo" to="/">TRAINED<span>BY</span>VINTO</Link>
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navlinks${menuOpen ? ' open' : ''}`}>
          <li><Link to="/#about">Über mich</Link></li>
          <li><Link to="/programme">Programme</Link></li>
          <li><Link to="/ergebnisse">Ergebnisse</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
          <li className="navlinks-cta"><Link className="navcta" to="/kontakt">Erstgespräch</Link></li>
        </ul>
        <Link className="navcta navcta-desktop" to="/kontakt">Erstgespräch</Link>
      </nav>
    </header>
  )
}

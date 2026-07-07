import { Link } from 'react-router-dom'

export default function ProgramCard({ tag, title, features, price, priceUnit }) {
  return (
    <div className="program-card">
      <span className="program-tag">{tag}</span>
      <h3>{title}</h3>
      <ul className="program-features">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="program-price">{price}<span> {priceUnit}</span></div>
      <Link className="program-cta" to="/kontakt">Jetzt anfragen</Link>
    </div>
  )
}

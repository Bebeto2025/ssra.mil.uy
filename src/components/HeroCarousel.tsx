import { Link } from 'react-router-dom'
import { getLatestNoticias } from '../data/noticias'

export default function HeroCarousel() {
  const latest = getLatestNoticias(5)
  const items = [...latest, ...latest]

  if (latest.length === 0) return null

  return (
    <div className="hero-carousel" aria-label="Últimas noticias del SSRA">
      <div className="hero-carousel__fade hero-carousel__fade--left" aria-hidden="true" />
      <div className="hero-carousel__fade hero-carousel__fade--right" aria-hidden="true" />
      <div className="hero-carousel__track">
        {items.map((item, index) => (
          <Link
            key={`${item.id}-${index}`}
            to={`/noticias/${item.id}`}
            className="hero-carousel__item"
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <span className="hero-carousel__caption">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

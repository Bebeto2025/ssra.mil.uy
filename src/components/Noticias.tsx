import { Link } from 'react-router-dom'
import { noticiasItems } from '../data/noticias'

export default function Noticias() {
  return (
    <div className="noticias">
      <div className="noticias__grid">
        {noticiasItems.map((item) => (
          <article key={item.id} className="noticias__card">
            <Link to={`/noticias/${item.id}`} className="noticias__link">
              <div className="noticias__image-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="noticias__body">
                <time className="noticias__date" dateTime={item.publishedAt}>
                  {item.date}
                </time>
                {item.source && (
                  <span className="noticias__source">{item.source}</span>
                )}
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

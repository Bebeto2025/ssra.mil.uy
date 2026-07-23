import { Link, Navigate, useParams } from 'react-router-dom'
import Section from '../components/Section'
import { getNoticiaById } from '../data/noticias'

export default function NoticiaDetailPage() {
  const { id } = useParams()
  const noticia = id ? getNoticiaById(id) : undefined

  if (!noticia) {
    return <Navigate to="/noticias" replace />
  }

  return (
    <Section
      id="noticia"
      title={noticia.title}
      subtitle={noticia.source ? `Fuente: ${noticia.source}` : 'Noticias del SSRA'}
      variant="alt"
    >
      <article className="noticia-detail">
        <Link to="/noticias" className="noticia-detail__back">
          ← Volver a noticias
        </Link>
        <div className="noticia-detail__meta">
          <time dateTime={noticia.publishedAt}>{noticia.date}</time>
          {noticia.source && <span>{noticia.source}</span>}
        </div>
        <div className="noticia-detail__image-wrap">
          <img src={noticia.image} alt={noticia.title} />
        </div>
        <div className="noticia-detail__content">
          <p>{noticia.content}</p>
        </div>
      </article>
    </Section>
  )
}

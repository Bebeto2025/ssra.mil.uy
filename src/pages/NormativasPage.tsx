import Section from '../components/Section'
import { normativasItems } from '../data/normativas'
import { institution } from '../data/institution'

export default function NormativasPage() {
  const { name } = institution

  return (
    <Section
      id="normativas"
      title="Normativas"
      subtitle={`Marco legal y reglamentario del ${name.ssra}`}
    >
      <div className="normativas">
        <p className="normativas__intro">
          Referencias normativas aplicables a las actividades del Servicio de Sensores Remotos
          Aeroespaciales, trámites de registro y operación de drones, y servicios geoespaciales
          institucionales.
        </p>
        <ul className="normativas__list">
          {normativasItems.map((item) => (
            <li key={item.id} className="normativas__item">
              <article className="normativas__card">
                <header className="normativas__header">
                  <span className="normativas__reference">{item.reference}</span>
                  {item.date && <time className="normativas__date">{item.date}</time>}
                </header>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="normativas__link"
                  >
                    Consultar normativa →
                  </a>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

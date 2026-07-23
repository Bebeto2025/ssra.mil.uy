import { cursos, cursoToTramiteId } from '../data/cursos'
import type { TramiteId } from '../types/tramites'

interface CursosProps {
  onInscribirse: (tramiteId: TramiteId) => void
}

export default function Cursos({ onInscribirse }: CursosProps) {
  return (
    <div className="cursos">
      {cursos.map((curso) => (
        <article key={curso.id} id={`curso-${curso.id}`} className="cursos__card">
          <div className="cursos__header">
            <span className="cursos__icon" aria-hidden="true">
              {curso.icon}
            </span>
            <h3>{curso.title}</h3>
          </div>
          <p className="cursos__description">{curso.description}</p>
          <ul className="cursos__meta">
            <li>
              <span>Duración</span>
              <strong>{curso.duration}</strong>
            </li>
            <li>
              <span>Costo</span>
              <strong>{curso.cost}</strong>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => onInscribirse(cursoToTramiteId(curso.id))}
          >
            Inscribirse
          </button>
        </article>
      ))}
    </div>
  )
}

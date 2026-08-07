import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { cursos, cursoToTramiteId } from '../data/cursos'
import type { TramiteId, TramiteOption } from '../types/tramites'
import TramiteForm from './TramiteForm'

const tramitesGenerales: TramiteOption[] = [
  {
    id: 'registrar-sensor',
    title: 'Registrar Sensor',
    description: 'Alta de sensor aeroespacial en el Registro de Sensores del SSRA.',
    icon: '⬡',
    group: 'tramites',
    pageLink: '/tramites/registrar-sensor',
  },
  {
    id: 'solicitar-info',
    title: 'Solicitar información',
    description: 'Fotos, videos, documentos u otros materiales institucionales.',
    icon: '◫',
    group: 'tramites',
  },
  {
    id: 'registrar-satelite',
    title: 'Registrar satélite',
    description: 'Registro de activo espacial en órbita o en preparación.',
    icon: '◉',
    group: 'tramites',
  },
  {
    id: 'baja-satelite',
    title: 'Actualizar datos de satélite',
    description: 'Modificación de información registrada de un satélite en el registro nacional.',
    icon: '◎',
    group: 'tramites',
  },
]

const tramitesCursos: TramiteOption[] = cursos.map((curso) => ({
  id: cursoToTramiteId(curso.id),
  title: `Inscripción: ${curso.title}`,
  description: `${curso.duration} · ${curso.cost}`,
  icon: curso.icon,
  group: 'cursos' as const,
}))

const allTramites = [...tramitesGenerales, ...tramitesCursos]

interface TramitesModalProps {
  open: boolean
  initialTramiteId?: TramiteId | null
  onClose: () => void
}

export default function TramitesModal({
  open,
  initialTramiteId = null,
  onClose,
}: TramitesModalProps) {
  const [selected, setSelected] = useState<TramiteId | null>(null)

  useEffect(() => {
    if (!open) {
      setSelected(null)
      return
    }

    setSelected(initialTramiteId)

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, initialTramiteId, onClose])

  if (!open) return null

  const current = allTramites.find((t) => t.id === selected)

  const renderGroup = (title: string, items: TramiteOption[]) => (
    <>
      <li className="tramites-list__group" aria-hidden="true">
        {title}
      </li>
      {items.map((tramite) => (
        <li key={tramite.id}>
          {tramite.externalLink ? (
            <a
              href={tramite.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tramites-list__item"
            >
              <span className="tramites-list__icon" aria-hidden="true">
                {tramite.icon}
              </span>
              <span className="tramites-list__text">
                <strong>{tramite.title}</strong>
                <span>{tramite.description}</span>
              </span>
              <span className="tramites-list__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ) : tramite.pageLink ? (
            <Link
              to={tramite.pageLink}
              className="tramites-list__item"
              onClick={onClose}
            >
              <span className="tramites-list__icon" aria-hidden="true">
                {tramite.icon}
              </span>
              <span className="tramites-list__text">
                <strong>{tramite.title}</strong>
                <span>{tramite.description}</span>
              </span>
              <span className="tramites-list__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ) : (
            <button
              type="button"
              className="tramites-list__item"
              onClick={() => setSelected(tramite.id)}
            >
              <span className="tramites-list__icon" aria-hidden="true">
                {tramite.icon}
              </span>
              <span className="tramites-list__text">
                <strong>{tramite.title}</strong>
                <span>{tramite.description}</span>
              </span>
              <span className="tramites-list__arrow" aria-hidden="true">
                →
              </span>
            </button>
          )}
        </li>
      ))}
    </>
  )

  return (
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="modal modal--wide"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tramites-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal__header">
          <div>
            <p className="modal__label">Centro de trámites</p>
            <h2 id="tramites-title">
              {current ? current.title : 'Seleccione un trámite'}
            </h2>
          </div>
          <button
            type="button"
            className="modal__close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        </header>

        <div className="modal__body">
          {!selected ? (
            <ul className="tramites-list">
              {renderGroup('Trámites generales', tramitesGenerales)}
              {renderGroup('Inscripción a cursos', tramitesCursos)}
            </ul>
          ) : (
            <div className="tramite-form-wrap">
              <button
                type="button"
                className="tramite-form-wrap__back"
                onClick={() => setSelected(null)}
              >
                ← Volver al listado
              </button>
              <TramiteForm tramiteId={selected} onSuccess={onClose} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

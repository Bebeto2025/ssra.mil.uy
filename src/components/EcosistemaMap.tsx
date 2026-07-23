/**
 * Mapa semántico del ecosistema SSRA.
 * Las instituciones orbitan en elipse alrededor del logo central, sin rotar sobre sí mismas.
 */
import type { CSSProperties } from 'react'
import {
  ECOSISTEMA_ORBIT_DURATION_S,
  ecosistemaCentral,
  ecosistemaInstituciones,
} from '../data/ecosistema'

export default function EcosistemaMap() {
  const total = ecosistemaInstituciones.length

  return (
    <div
      className="ecosistema-map"
      role="img"
      aria-label="Mapa del ecosistema institucional del SSRA"
      style={{ '--orbit-duration': `${ECOSISTEMA_ORBIT_DURATION_S}s` } as CSSProperties}
    >
      <div className="ecosistema-map__orbit-guide" aria-hidden="true" />

      <div className="ecosistema-map__center">
        <div className="ecosistema-map__center-emblem">
          <img
            className="ecosistema-map__logo ecosistema-map__logo--center"
            src={ecosistemaCentral.logo}
            alt={ecosistemaCentral.name}
            decoding="async"
          />
        </div>
        <span className="ecosistema-map__label">{ecosistemaCentral.displayName}</span>
      </div>

      <div className="ecosistema-map__orbit-field">
        {ecosistemaInstituciones.map((inst, index) => (
          <a
            key={inst.id}
            href={inst.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ecosistema-map__node"
            style={{ '--orbit-start': `${(index / total) * 100}%` } as CSSProperties}
            title={inst.displayName}
          >
            <span className="ecosistema-map__node-ring">
              <img
                className="ecosistema-map__logo"
                src={inst.logo}
                alt={inst.name}
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="ecosistema-map__node-name">{inst.displayName}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

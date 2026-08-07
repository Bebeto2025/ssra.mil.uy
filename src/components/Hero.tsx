import HeroCarousel from './HeroCarousel'

const DINACIA_REGISTRO_VUELO_URL =
  'https://www.dinacia.gub.uy/tramite/servicio-de-trabajos-aereos-con-dispositivos-operado-distancia'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__content">
        <HeroCarousel />

        <p className="hero__text">
          Portal del Servicio de Sensores Remotos Aeroespaciales para trámites de
          registro de drones y satélites, solicitud de información geoespacial y
          acceso a servicios institucionales desde la Base Aérea General Cesáreo
          L. Berisso.
        </p>

        <div className="hero__actions">
          <a
            href={DINACIA_REGISTRO_VUELO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Registra tu vuelo
          </a>
        </div>
      </div>
    </section>
  )
}

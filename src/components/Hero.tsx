import HeroCarousel from './HeroCarousel'

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
      </div>
    </section>
  )
}

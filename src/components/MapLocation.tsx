import { institution } from '../data/institution'

export default function MapLocation() {
  const { location } = institution
  const lat = import.meta.env.VITE_MAP_LAT ?? String(location.lat)
  const lng = import.meta.env.VITE_MAP_LNG ?? String(location.lng)
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  const embedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=15`
    : `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`

  return (
    <div className="map-section">
      <div className="map-section__info">
        <div className="map-section__card">
          <h3>{location.name}</h3>
          <p>
            {location.address}
            <br />
            {location.country}
          </p>
          <ul className="map-section__details">
            <li>
              <span>Dependencia</span>
              <span>{institution.name.ssra}</span>
            </li>
            <li>
              <span>Comando</span>
              <span>{institution.name.cao}</span>
            </li>
            <li>
              <span>Coordenadas</span>
              <span>
                {lat}, {lng}
              </span>
            </li>
          </ul>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--sm"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
      <div className="map-section__map">
        <iframe
          title="Ubicación Base Aérea General Cesáreo L. Berisso"
          src={embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  )
}

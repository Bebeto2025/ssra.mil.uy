import { institution } from '../data/institution'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const { contact, shields, imageCredits } = institution

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__grid">
          <div className="footer__block">
            <h3 className="footer__heading">Dirección</h3>
            <p>{contact.addressLine1}</p>
            <p>{contact.addressLine2}</p>
          </div>

          <div className="footer__block">
            <h3 className="footer__heading">Teléfono</h3>
            <p>
              <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            </p>
            {contact.extensions.map((ext) => (
              <p key={ext.number}>
                Interno {ext.number} — {ext.label}
              </p>
            ))}
          </div>

          <div className="footer__block">
            <h3 className="footer__heading">Correo electrónico</h3>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>

          <div className="footer__block">
            <h3 className="footer__heading">{contact.hoursLabel}</h3>
            {contact.hours.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className="footer__social">
          <h3 className="footer__heading">Redes sociales</h3>
          <SocialLinks links={institution.social} variant="footer" />
        </div>

        <div className="footer__emblemas" aria-label="Emblemas institucionales">
          <div className="footer__emblema footer__emblema--roundel">
            <img
              src={shields.roundel}
              alt="Emblema I.S.R — Inteligencia, Vigilancia y Reconocimiento"
              title={imageCredits.fauRoundel}
            />
          </div>
          <div className="footer__emblema footer__emblema--wings">
            <img
              src={shields.wings}
              alt="Alas de la Fuerza Aérea Uruguaya"
              title={imageCredits.fauWings}
            />
          </div>
          <div className="footer__emblema footer__emblema--escrecce">
            <img
              src={shields.cao}
              alt="Escudo ESCRECCE — Comando Aéreo de Operaciones"
              title={imageCredits.caoEscudo}
            />
          </div>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} {institution.name.fau} — {institution.name.ssra}
        </p>
      </div>
    </footer>
  )
}

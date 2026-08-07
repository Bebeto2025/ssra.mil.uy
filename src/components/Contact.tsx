import { institution } from '../data/institution'
import SocialLinks from './SocialLinks'

export default function Contact() {
  const { contact, name } = institution

  return (
    <div className="contact">
      <div className="contact__grid">
        <div className="contact__card">
          <span className="contact__icon" aria-hidden="true">
            ✉
          </span>
          <h3>Correo electrónico</h3>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <p>{name.ssra}</p>
        </div>
        <div className="contact__card">
          <span className="contact__icon" aria-hidden="true">
            ☎
          </span>
          <h3>Teléfono</h3>
          <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          {contact.extensions.map((ext) => (
            <p key={ext.number}>
              Interno {ext.number} — {ext.label}
            </p>
          ))}
          <p>Mesa de ayuda — {name.aic}</p>
        </div>
        <div className="contact__card">
          <span className="contact__icon" aria-hidden="true">
            ⏱
          </span>
          <h3>{contact.hoursLabel}</h3>
          {contact.hours.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <SocialLinks links={institution.social} />

      <form
        className="contact__form"
        onSubmit={(e) => {
          e.preventDefault()
          alert('Mensaje enviado. Nos pondremos en contacto pronto.')
        }}
      >
        <h3>Formulario de contacto</h3>
        <div className="form-row">
          <label>
            Nombre completo
            <input type="text" name="nombre" required placeholder="Su nombre" />
          </label>
          <label>
            Correo
            <input
              type="email"
              name="email"
              required
              placeholder="correo@ejemplo.com"
            />
          </label>
        </div>
        <label>
          Asunto
          <input type="text" name="asunto" required placeholder="Motivo de consulta" />
        </label>
        <label>
          Mensaje
          <textarea
            name="mensaje"
            rows={4}
            required
            placeholder="Escriba su consulta..."
          />
        </label>
        <button type="submit" className="btn btn--primary">
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}

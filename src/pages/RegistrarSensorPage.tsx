import { Link } from 'react-router-dom'
import Section from '../components/Section'
import { registrarSensorTramite } from '../data/registrarSensor'

export default function RegistrarSensorPage() {
  const { title, subtitle, email, formDownloadPath, formFileName, utmUrl, steps } =
    registrarSensorTramite

  return (
    <Section id="registrar-sensor" title={title} subtitle={subtitle}>
      <article className="tramite-procedure">
        <Link to="/" className="tramite-procedure__back">
          ← Volver al inicio
        </Link>

        <div className="tramite-procedure__intro">
          <p>
            Para registrar un sensor aeroespacial ante el Servicio de Sensores Remotos
            Aeroespaciales (SSRA), siga el procedimiento indicado a continuación.
          </p>
        </div>

        <ol className="tramite-procedure__steps">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <div className="tramite-procedure__actions">
          <a
            href={formDownloadPath}
            download={formFileName}
            className="btn btn--primary"
          >
            Descargar formulario
          </a>
          <a href={`mailto:${email}`} className="btn btn--outline">
            Enviar por correo
          </a>
          <a
            href={utmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            Verificar en UTM (DINACIA)
          </a>
        </div>

        <div className="tramite-procedure__notes">
          <p>
            <strong>Correo de envío:</strong>{' '}
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            <strong>Plazo de resolución:</strong> hasta 72 horas desde la recepción del
            formulario.
          </p>
          <p>
            <strong>Verificación:</strong> una vez procesado, podrá consultar el registro en
            la plataforma UTM de DINACIA.
          </p>
        </div>
      </article>
    </Section>
  )
}

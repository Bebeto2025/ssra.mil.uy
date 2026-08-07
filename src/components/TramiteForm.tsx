import { useState } from 'react'
import { getCursoByTramiteId } from '../data/cursos'
import type { TramiteId, TipoSolicitudInfo } from '../types/tramites'

interface TramiteFormProps {
  tramiteId: TramiteId
  onSuccess: () => void
}

export default function TramiteForm({ tramiteId, onSuccess }: TramiteFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(onSuccess, 1800)
  }

  if (submitted) {
    const isInscripcion = tramiteId.startsWith('inscripcion-')
    return (
      <div className="form-success">
        <span className="form-success__icon" aria-hidden="true">
          ✓
        </span>
        <h3>{isInscripcion ? 'Inscripción enviada' : 'Solicitud enviada'}</h3>
        <p>
          {isInscripcion
            ? 'Su inscripción al curso fue registrada. Recibirá confirmación y detalles de pago por correo.'
            : 'Su trámite fue registrado correctamente. Recibirá confirmación por correo.'}
        </p>
      </div>
    )
  }

  const commonFields = (
    <>
      <div className="form-row">
        <label>
          Nombre / Razón social
          <input type="text" name="nombre" required />
        </label>
        <label>
          Documento / CUIT
          <input type="text" name="documento" required />
        </label>
      </div>
      <div className="form-row">
        <label>
          Correo electrónico
          <input type="email" name="email" required />
        </label>
        <label>
          Teléfono
          <input type="tel" name="telefono" required />
        </label>
      </div>
    </>
  )

  const inscripcionCursoForm = (tramiteId: TramiteId) => {
    const curso = getCursoByTramiteId(tramiteId)
    if (!curso) return null

    return (
      <form className="tramite-form" onSubmit={handleSubmit}>
        <div className="tramite-form__curso-info">
          <h3>{curso.title}</h3>
          <p>{curso.description}</p>
          <ul>
            <li>
              <span>Duración:</span> {curso.duration}
            </li>
            <li>
              <span>Costo:</span> {curso.cost}
            </li>
          </ul>
        </div>
        {commonFields}
        <label>
          Fecha de nacimiento
          <input type="date" name="fechaNacimiento" required />
        </label>
        <label>
          Edición / turno preferido
          <select name="turno" required defaultValue="">
            <option value="" disabled>
              Seleccione...
            </option>
            <option value="manana">Mañana</option>
            <option value="tarde">Tarde</option>
            <option value="finde">Fin de semana</option>
          </select>
        </label>
        <label>
          ¿Posee experiencia previa con drones?
          <select name="experiencia" required defaultValue="no">
            <option value="no">No</option>
            <option value="basica">Sí, básica</option>
            <option value="intermedia">Sí, intermedia</option>
            <option value="avanzada">Sí, avanzada</option>
          </select>
        </label>
        <label>
          Observaciones
          <textarea name="observaciones" rows={3} placeholder="Información adicional..." />
        </label>
        <button type="submit" className="btn btn--primary">
          Confirmar inscripción
        </button>
      </form>
    )
  }

  switch (tramiteId) {
    case 'inscripcion-curso-vant':
      return inscripcionCursoForm(tramiteId)

    case 'solicitar-info':
      return (
        <form className="tramite-form" onSubmit={handleSubmit}>
          {commonFields}
          <fieldset className="form-fieldset">
            <legend>Tipo de información solicitada</legend>
            <div className="form-checkboxes">
              {(
                [
                  ['fotos', 'Fotografías'],
                  ['videos', 'Videos'],
                  ['documentos', 'Documentos'],
                  ['carta-aeronautica', 'Carta aeronáutica'],
                  ['otros', 'Otros'],
                ] as [TipoSolicitudInfo, string][]
              ).map(([value, label]) => (
                <label key={value} className="form-checkbox">
                  <input type="checkbox" name="tipo" value={value} />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>
          <label>
            Descripción de la solicitud
            <textarea
              name="descripcion"
              rows={4}
              required
              placeholder="Indique qué información necesita y para qué fin..."
            />
          </label>
          <label>
            Urgencia
            <select name="urgencia" required defaultValue="normal">
              <option value="normal">Normal (5–10 días)</option>
              <option value="alta">Alta (2–3 días)</option>
            </select>
          </label>
          <button type="submit" className="btn btn--primary">
            Enviar solicitud
          </button>
        </form>
      )

    case 'registrar-satelite':
      return (
        <form className="tramite-form" onSubmit={handleSubmit}>
          {commonFields}
          <label>
            Nombre del satélite
            <input type="text" name="nombreSatelite" required />
          </label>
          <div className="form-row">
            <label>
              Tipo de órbita
              <select name="orbita" required defaultValue="">
                <option value="" disabled>
                  Seleccione...
                </option>
                <option value="leo">LEO (baja)</option>
                <option value="meo">MEO (media)</option>
                <option value="geo">GEO (geoestacionaria)</option>
                <option value="heo">HEO (altamente elíptica)</option>
              </select>
            </label>
            <label>
              Masa (kg)
              <input type="number" name="masa" min="0" step="0.1" required />
            </label>
          </div>
          <label>
            Propósito de la misión
            <textarea name="proposito" rows={3} required />
          </label>
          <label>
            Fecha estimada de lanzamiento
            <input type="date" name="fechaLanzamiento" required />
          </label>
          <button type="submit" className="btn btn--primary">
            Enviar registro
          </button>
        </form>
      )

    case 'baja-satelite':
      return (
        <form className="tramite-form" onSubmit={handleSubmit}>
          {commonFields}
          <label>
            Identificador del satélite (COSPAR / registro)
            <input type="text" name="identificador" required />
          </label>
          <label>
            Datos a actualizar
            <textarea
              name="datosActualizar"
              rows={4}
              required
              placeholder="Indique qué información debe modificarse (órbita, masa, operador, estado, etc.)"
            />
          </label>
          <label>
            Documentación de respaldo
            <textarea name="informe" rows={3} placeholder="Referencias o antecedentes de la actualización..." />
          </label>
          <button type="submit" className="btn btn--primary">
            Enviar actualización
          </button>
        </form>
      )
  }
}

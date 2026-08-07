export type CursoId = 'curso-vant'

export type TramiteId =
  | 'registrar-sensor'
  | 'solicitar-info'
  | 'registrar-satelite'
  | 'baja-satelite'
  | 'inscripcion-curso-vant'

export interface TramiteOption {
  id: TramiteId
  title: string
  description: string
  icon: string
  group?: 'tramites' | 'cursos'
  /** Si está definido, el ítem redirige a un trámite externo en lugar de abrir el formulario */
  externalLink?: string
  /** Si está definido, el ítem abre una página interna del portal */
  pageLink?: string
}

export type TipoSolicitudInfo = 'fotos' | 'videos' | 'documentos' | 'carta-aeronautica' | 'otros'

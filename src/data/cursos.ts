import type { CursoId } from '../types/tramites'

export interface Curso {
  id: CursoId
  title: string
  description: string
  duration: string
  cost: string
  icon: string
}

export const cursos: Curso[] = [
  {
    id: 'curso-vant',
    title: 'Curso VANT',
    description:
      'Formación en operación de Vehículos Aéreos No Tripulados (VANT): normativa vigente, seguridad operacional, planificación de vuelo, manejo de controles y procedimientos de despegue, vuelo y aterrizaje. Dirigido exclusivamente al personal militar, policial y de otras dependencias del Estado.',
    duration: 'Consultar edición vigente',
    cost: 'Consultar arancel',
    icon: '⬡',
  },
]

export function cursoToTramiteId(cursoId: CursoId) {
  return `inscripcion-${cursoId}` as const
}

export function getCursoByTramiteId(tramiteId: string) {
  const match = tramiteId.match(/^inscripcion-(.+)$/)
  if (!match) return undefined
  return cursos.find((c) => c.id === match[1])
}

import type { TramiteId } from './tramites'

export interface LayoutContext {
  openTramites: (tramiteId?: TramiteId) => void
}

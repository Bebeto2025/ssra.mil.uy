/**
 * Instituciones del ecosistema SSRA.
 * Para agregar una nueva institución:
 * 1. Coloque su logo en public/ecosistema/ (recomendado: PNG o SVG cuadrado).
 * 2. Añada un objeto al array `ecosistemaInstituciones`.
 * 3. El mapa recalculará automáticamente la disposición orbital.
 */
import { institution } from './institution'
export interface EcosistemaInstitucion {
  id: string
  name: string
  shortName: string
  /** Etiqueta visible: nombre completo y sigla entre paréntesis */
  displayName: string
  href: string
  /** Ruta local en /public o URL absoluta del logo */
  logo: string
}

/** Logo central — SSRA */
export const ecosistemaCentral = {
  name: 'Servicio de Sensores Remotos Aeroespaciales',
  shortName: 'SSRA',
  displayName: 'Servicio de Sensores Remotos Aeroespaciales (SSRA)',
  logo: institution.shields.ssra,
}

export const ecosistemaInstituciones: EcosistemaInstitucion[] = [
  {
    id: 'iau',
    name: 'Instituto Antártico Uruguayo',
    shortName: 'IAU',
    displayName: 'Instituto Antártico Uruguayo (IAU)',
    href: 'https://iau.gub.uy/',
    logo: '/ecosistema/iau.png',
  },
  {
    id: 'dinacia',
    name: 'Dirección Nacional de Aviación Civil e Infraestructura Aeronáutica',
    shortName: 'DINACIA',
    displayName: 'Dirección Nacional de Aviación Civil e Infraestructura Aeronáutica (DINACIA)',
    href: 'https://www.dinacia.gub.uy/',
    logo: '/ecosistema/dinacia.jpg',
  },
  {
    id: 'iaa',
    name: 'Instituto de Adiestramiento Aeronáutico',
    shortName: 'IAA',
    displayName: 'Instituto de Adiestramiento Aeronáutico (IAA)',
    href: 'https://iaauruguay.edu.uy/',
    logo: '/ecosistema/iaa.png',
  },
  {
    id: 'sne',
    name: 'Sistema Nacional de Emergencias',
    shortName: 'SNE',
    displayName: 'Sistema Nacional de Emergencias (SNE)',
    href: 'https://www.gub.uy/sistema-nacional-emergencias/',
    logo: '/ecosistema/sinae.png',
  },
  {
    id: 'ide',
    name: 'Infraestructura de Datos Espaciales',
    shortName: 'IDE',
    displayName: 'Infraestructura de Datos Espaciales (IDE)',
    href: 'https://www.gub.uy/infraestructura-datos-espaciales/',
    logo: '/ecosistema/ide.png',
  },
  {
    id: 'utec',
    name: 'Universidad Tecnológica del Uruguay',
    shortName: 'UTEC',
    displayName: 'Universidad Tecnológica del Uruguay (UTEC)',
    href: 'https://utec.edu.uy/es/',
    logo: '/ecosistema/utec.svg',
  },
  {
    id: 'picudo-rojo',
    name: 'Picudo Rojo Uruguay',
    shortName: 'PRU',
    displayName: 'Picudo Rojo Uruguay (PRU)',
    href: 'https://www.picudorojouruguay.com/',
    logo: '/ecosistema/picudo-rojo.svg',
  },
  {
    id: 'space-uruguay',
    name: 'Space Uruguay',
    shortName: 'SU',
    displayName: 'Space Uruguay (SU)',
    href: 'https://www.spaceuruguay.org/',
    logo: '/ecosistema/space-uruguay.svg',
  },
]

/** Duración de una vuelta orbital completa (segundos) */
export const ECOSISTEMA_ORBIT_DURATION_S = 100

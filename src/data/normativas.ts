export interface NormativaItem {
  id: string
  title: string
  reference: string
  date?: string
  summary: string
  link?: string
}

export const normativasItems: NormativaItem[] = [
  {
    id: 'decreto-369-991',
    title: 'Creación del Servicio de Sensores Remotos Aeroespaciales',
    reference: 'Decreto Nº 369/991',
    date: '1991',
    summary:
      'Establece la misión, funciones y dependencia orgánica del SSRA dentro de la Fuerza Aérea Uruguaya, como unidad encargada de las actividades vinculadas con sensores remotos aeroespaciales.',
    link: 'https://www.impo.com.uy/bases/decretos/369-1991',
  },
  {
    id: 'decreto-71-2022',
    title: 'Creación de la Junta Nacional de Política Espacial',
    reference: 'Decreto Nº 71/2022',
    date: '2022',
    summary:
      'Crea la Junta Nacional de Política Espacial en la órbita del Ministerio de Defensa Nacional, con el cometido de asesorar al Poder Ejecutivo en la Política Espacial de la República. Integra a la FAU, entre otros organismos, y establece competencias sobre autorización, regulación y fiscalización de actividades espaciales, así como el cumplimiento de los tratados internacionales en la materia.',
    link: 'https://www.impo.com.uy/bases/decretos/71-2022',
  },
  {
    id: 'dinacia-drones',
    title: 'Regulación de vehículos aéreos no tripulados',
    reference: 'DINACIA — Normativa de drones',
    summary:
      'Marco nacional para el registro, operación y habilitación de operadores de drones en el espacio aéreo uruguayo. Aplicable a trámites de alta, baja y certificación de operadores.',
    link: 'https://www.gub.uy/ministerio-defensa-nacional/politicas-y-gestion/dinacia',
  },
  {
    id: 'fau-reglamento-interno',
    title: 'Procedimientos internos del SSRA',
    reference: 'Reglamentación FAU / SSRA',
    summary:
      'Disposiciones operativas internas sobre captación, procesamiento, archivo y custodia de materiales de sensores remotos, así como prestación de servicios geoespaciales.',
  },
  {
    id: 'compromisos-internacionales',
    title: 'Compromisos internacionales en materia espacial',
    reference: 'Tratados y acuerdos aplicables',
    summary:
      'Normativa derivada de compromisos internacionales del Uruguay en observación terrestre, registro de objetos espaciales y uso pacífico del espacio ultraterrestre.',
  },
]

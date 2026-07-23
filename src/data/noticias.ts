import { publicUrl } from '../lib/publicUrl'

export interface NoticiaItem {
  id: string
  publishedAt: string
  date: string
  title: string
  excerpt: string
  content: string
  image: string
  source?: string
}

export const noticiasItems: NoticiaItem[] = [
  {
    id: '1',
    publishedAt: '2025-12-28',
    date: '28 de diciembre de 2025',
    title: 'SSRA en la agenda nacional',
    excerpt:
      'Cobertura sobre las actividades del Servicio de Sensores Remotos Aeroespaciales de la Fuerza Aérea Uruguaya.',
    content:
      'Cobertura sobre las actividades del Servicio de Sensores Remotos Aeroespaciales de la Fuerza Aérea Uruguaya. El SSRA continúa consolidando su rol en el monitoreo del territorio nacional mediante sensores remotos, apoyo a operaciones aéreas y generación de información geoespacial para organismos del Estado.',
    image: publicUrl('/galeria/el-pais-ssra.webp'),
    source: 'El País',
  },
  {
    id: '2',
    publishedAt: '2025-03-15',
    date: '15 de marzo de 2025',
    title: 'Uruguay en la Antártida',
    excerpt:
      'La Base Antártica Artigas consolida la presencia uruguaya en el continente blanco, en apoyo a la investigación y soberanía nacional.',
    content:
      'La Base Antártica Artigas consolida la presencia uruguaya en el continente blanco, en apoyo a la investigación y soberanía nacional. Las capacidades de sensores remotos del SSRA complementan las misiones antárticas con información satelital y aeroespacial para el seguimiento de campañas científicas.',
    image: publicUrl('/galeria/medios-publicos.jpg'),
    source: 'Medios Públicos',
  },
  {
    id: '3',
    publishedAt: '2026-05-31',
    date: '31 de mayo de 2026',
    title: 'La Fuerza Aérea abrió un llamado para incorporar soldados de primera en todo el país',
    excerpt:
      'La convocatoria está dirigida a personas de entre 18 y 29 años y contempla tareas de seguridad y servicios en bases aéreas y aeropuertos.',
    content:
      'La Fuerza Aérea Uruguaya abrió un llamado para incorporar personal en el grado de Soldado de Primera del Escalafón Servicios Generales, destinado a cubrir funciones de seguridad y apoyo en distintas dependencias de la institución. La convocatoria está dirigida a jóvenes de entre 18 y 29 años que cumplan con los requisitos establecidos para el ingreso. Quienes resulten seleccionados desempeñarán tareas vinculadas a la seguridad de bases e instalaciones militares, seguridad de centros penitenciarios y servicios generales, y deberán aprobar un curso específico de formación. Entre los requisitos se exige una altura mínima de 1,60 metros, ciclo completo de Enseñanza Primaria y reunir las condiciones exigidas para el ingreso a la función pública.',
    image: publicUrl('/noticias/fau-soldados-primera.jpg'),
    source: 'Montevideo Portal',
  },
  {
    id: '4',
    publishedAt: '2026-06-30',
    date: '30 de junio de 2026',
    title: 'Un Hércules KC-130H de la Fuerza Aérea Uruguaya partirá a Venezuela con equipos de ayuda',
    excerpt:
      'Las Fuerzas Armadas de Uruguay enviarán un KC-130H (FAU 595) con equipos de búsqueda, drones de mapeo y ayuda humanitaria tras los terremotos en Venezuela.',
    content:
      'Las Fuerzas Armadas de Uruguay enviarán esta semana a Venezuela un Hércules KC-130H de la Fuerza Aérea Uruguaya (FAU 595) transportando ayuda para el pueblo venezolano tras los terremotos. En la aeronave se trasladarán 3 binomios de equipos especializados K9, 4 equipos de drones para búsqueda de personas, equipos de drones de mapeo del Servicio Geográfico Militar, equipos móviles para comunicaciones de emergencia y técnicos especializados en operación de maquinaria para remover escombros. La aeronave portará frazadas y técnicos especializados en unidades potabilizadoras de agua y generadores eléctricos. Se evalúa integrar personal sanitario (médicos y enfermeros) oriundos principalmente del Ejército Nacional, que ya confirmó un mínimo de 4 efectivos.',
    image: publicUrl('/noticias/hercules-kc130h-venezuela.jpg'),
    source: 'defensa.com',
  },
  {
    id: '5',
    publishedAt: '2026-10-04',
    date: '4 de octubre de 2026',
    title: 'World Space Week Uruguay: la celebración global del espacio llega al país',
    excerpt:
      'Space Uruguay convoca a instituciones, escuelas y comunidad para la Semana Mundial del Espacio, observancia de la ONU del 4 al 10 de octubre con actividades en todo el territorio nacional.',
    content:
      'Space Uruguay promueve en Uruguay la World Space Week, la celebración global del espacio reconocida por las Naciones Unidas y coordinada internacionalmente por la World Space Week Association. Cada año, entre el 4 y el 10 de octubre, más de 90 países desarrollan actividades que conectan ciencia, tecnología, educación y cultura en torno al universo y la exploración espacial. En nuestro país, la iniciativa busca acercar el espacio a estudiantes, docentes y público general mediante talleres, charlas, encuentros y propuestas educativas en Montevideo y el interior. La agenda 2026 incluye el Mes Nacional del Espacio en septiembre como instancia preparatoria, una activación de apertura el 3 de octubre, la semana oficial del 4 al 10 —en conmemoración de hitos como el lanzamiento de Sputnik I (1957) y el Tratado del Espacio (1967)— y un cierre público nacional previsto en el Planetario de Montevideo. Space Uruguay invita a organismos públicos, empresas, centros educativos y voluntarios a sumarse como sedes, patrocinadores, difusores o colaboradores para ampliar el alcance de la celebración.',
    image: publicUrl('/noticias/world-space-week.png'),
    source: 'Space Uruguay',
  },
]

export function getLatestNoticias(limit = 5): NoticiaItem[] {
  return [...noticiasItems]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit)
}

export function getNoticiaById(id: string): NoticiaItem | undefined {
  return noticiasItems.find((item) => item.id === id)
}

export interface GalleryItem {
  id: string
  type: 'photo' | 'video'
  title: string
  description: string
  src: string
  thumbnail?: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'photo',
    title: 'Centro de Control',
    description: 'Sala de monitoreo de operaciones espaciales.',
    src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
  },
  {
    id: '2',
    type: 'photo',
    title: 'Lanzamiento',
    description: 'Preparación de vehículo de lanzamiento.',
    src: 'https://images.unsplash.com/photo-1457364554154-aa6c73db9777?w=800&q=80',
  },
  {
    id: '3',
    type: 'photo',
    title: 'Satélite en órbita',
    description: 'Representación de activo espacial en operación.',
    src: 'https://images.unsplash.com/photo-1614728894747-a83421e2b64c?w=800&q=80',
  },
  {
    id: '4',
    type: 'photo',
    title: 'Operaciones UAV',
    description: 'Unidad de drones en entrenamiento táctico.',
    src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
  },
  {
    id: '5',
    type: 'video',
    title: 'Misión orbital',
    description: 'Registro audiovisual de operación espacial.',
    src: 'https://www.youtube.com/embed/86YLFOog4GM',
    thumbnail: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80',
  },
  {
    id: '6',
    type: 'video',
    title: 'Despliegue de satélite',
    description: 'Secuencia de despliegue en órbita terrestre baja.',
    src: 'https://www.youtube.com/embed/yO2HbH4vOjY',
    thumbnail: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80',
  },
  {
    id: '7',
    type: 'photo',
    title: 'Operaciones SSRA',
    description: 'Registro de actividades del Servicio de Sensores Remotos Aeroespaciales.',
    src: '/galeria/el-pais-ssra.webp',
  },
  {
    id: '8',
    type: 'photo',
    title: 'Base Antártica Artigas',
    description: 'Instalaciones uruguayas en la Antártida — presencia nacional en el continente blanco.',
    src: '/galeria/medios-publicos.jpg',
  },
]

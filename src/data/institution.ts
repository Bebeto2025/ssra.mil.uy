import { publicUrl } from '../lib/publicUrl'

export const institution = {
  name: {
    fau: 'Fuerza Aérea Uruguaya',
    cao: 'Comando Aéreo de Operaciones',
    ssra: 'Servicio de Sensores Remotos Aeroespaciales',
    aic: 'A.I.C "Gral. Césareo L. Berisso"',
  },
  shields: {
    /** Escudo ESCRECCE — Comando Aéreo de Operaciones */
    cao: publicUrl('/escudos/escudo-escrecce.png'),
    /** Logo SSRA — Servicio de Sensores Remotos Aeroespaciales (FAU) */
    ssra: publicUrl('/escudos/ssra-logo.jpeg'),
    /** Emblema I.S.R — Inteligencia, Vigilancia y Reconocimiento */
    roundel: publicUrl('/escudos/isr.png'),
    /** Alas — Fuerza Aérea Uruguaya (Wikimedia Commons) */
    wings: publicUrl('/escudos/fau-alas.svg'),
    /** Bandera de Uruguay — Wikimedia Commons */
    flag: publicUrl('/escudos/uruguay-bandera.svg'),
  },
  imageCredits: {
    caoEscudo: 'Escudo ESCRECCE — Comando Aéreo de Operaciones, Fuerza Aérea Uruguaya',
    fauRoundel: 'Emblema I.S.R — Fuerza Aérea Uruguaya',
    uruguayFlag:
      'Bandera de Uruguay — Wikimedia Commons, dominio público (Flag of Uruguay.svg)',
    ssraLogo:
      'Logo SSRA — Servicio de Sensores Remotos Aeroespaciales, Fuerza Aérea Uruguaya',
    fauWings:
      'Alas de la Fuerza Aérea Uruguaya — Wikimedia Commons (Uruguayan_Air_Force_wings.svg), CC BY-SA 4.0',
  },
  social: [
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/fau_oficial/',
    },
    {
      id: 'x',
      label: 'X',
      href: 'https://x.com/Fuerza_aerea_uy',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      href: 'https://www.facebook.com/fau.mil.uy',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      href: 'https://www.youtube.com/@fau_oficial',
    },
  ],
  mission: {
    intro:
      'Conforme al Decreto Nº 369/991, el Servicio de Sensores Remotos Aeroespaciales tiene por misión:',
    items: [
      'Dirigir, ejecutar, supervisar, desarrollar y coordinar todas las actividades vinculadas con la técnica y el uso de Sensores Remotos Aeroespaciales a fin de apoyar la misión de la Fuerza Aérea.',
      'Brindar apoyo al desarrollo nacional mediante la realización de tareas de teleobservación, teledetección, interpretación y análisis.',
      'Participar de la representación del país en todas las actividades de su especialidad y derivadas de compromisos internacionales.',
    ],
    functions: [
      'Planificar y ejecutar la captación, procesamiento y utilización de la información proveniente de los Sensores Remotos Aeroespaciales.',
      'Registrar, clasificar, archivar y custodiar los materiales de primera generación obtenidos de la captación de SRA.',
      'Asesorar técnicamente, en el área de su especialidad, al Comando General de la Fuerza Aérea.',
      'Presupuestar y prestar servicios en su especialidad a personas o instituciones públicas o privadas, nacionales o extranjeras.',
    ],
  },
  vision: {
    statement:
      'Consolidarnos como la unidad de referencia en Uruguay para la obtención, procesamiento y análisis de información geoespacial y sensores remotos aeroespaciales, integrando tecnología de vanguardia al servicio de la defensa nacional, el desarrollo del país y la gestión responsable del espacio aéreo.',
    pillars: [
      {
        title: 'Apoyo operacional',
        text: 'Información oportuna y confiable para la Fuerza Aérea y organismos del Estado.',
      },
      {
        title: 'Desarrollo nacional',
        text: 'Teleobservación y análisis geoespacial al servicio del territorio y la ciudadanía.',
      },
      {
        title: 'Excelencia técnica',
        text: 'Personal capacitado, archivo histórico desde 1923 y equipamiento en evolución constante.',
      },
    ],
  },
  location: {
    name: 'Base Aérea General Cesáreo L. Berisso',
    address: 'Ruta 101, km. 19.500, Canelones',
    country: 'Uruguay',
    lat: -34.845013,
    lng: -56.024305,
  },
  contact: {
    addressLine1: 'Base Aérea General Cesáreo L. Berisso',
    addressLine2: 'Ruta 101, km. 19.500, Canelones, Uruguay',
    phone: '(+598) 2 200 0000',
    phoneHref: '+59822000000',
    extension: '4520',
    email: 'contacto@ssra.mil.uy',
    hoursLabel: 'Horarios de atención',
    hours: ['Lunes a viernes', '08:00 – 16:00 hs'],
  },
} as const

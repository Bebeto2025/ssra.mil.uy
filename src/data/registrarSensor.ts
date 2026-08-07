import { publicUrl } from '../lib/publicUrl'

export const registrarSensorTramite = {
  title: 'Registrar Sensor',
  subtitle: 'Registro de sensores aeroespaciales — SSRA',
  email: 'fotosverticales@gmail.com',
  formDownloadPath: publicUrl('/formularios/formulario-registro-sensores.xlsx'),
  formFileName: 'Formulario registro de Sensores.xlsx',
  utmUrl: 'https://utm.dinacia.gub.uy/',
  steps: [
    'Descargue el formulario «Formulario registro de Sensores».',
    'Complete todos los campos requeridos con la información del sensor a registrar.',
    `Envíe el formulario completado al correo ${'fotosverticales@gmail.com'}.`,
    'Recibirá una confirmación de recepción una vez enviado el trámite.',
    'El trámite quedará resuelto en un plazo de hasta 72 horas.',
    'Podrá verificar el estado en la página/app UTM de DINACIA.',
  ],
} as const

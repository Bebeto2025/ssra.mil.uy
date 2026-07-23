# Portal Espacial — Trámites y Servicios

Portal web institucional con estilo militar-espacial para gestión de drones, satélites e información pública.

## Características

- **Menú:** Misión, Visión, Galería (fotos y videos), Ubicación, Contacto
- **Google Maps:** mapa embebido con coordenadas configurables
- **Trámites:** registro/baja de drones y satélites, solicitud de información
- **Diseño:** sobrio, moderno, paleta verde militar y acentos dorados

## Inicio rápido

```bash
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) en el navegador.

## Configuración

Copie `.env.example` a `.env` y ajuste las coordenadas de su sede:

```
VITE_MAP_LAT=-34.6037
VITE_MAP_LNG=-58.3816
```

Opcionalmente, agregue una clave de Google Maps Embed API:

```
VITE_GOOGLE_MAPS_API_KEY=su_clave
```

## Producción

```bash
npm run build
npm run preview
```

## Personalización

- **Galería:** edite `src/data/gallery.ts`
- **Contacto:** modifique datos en `src/components/Contact.tsx` y `MapLocation.tsx`
- **Estilos:** variables CSS en `src/index.css`, componentes en `src/App.css`

Los formularios de trámites muestran confirmación local. Para producción, conecte un backend o servicio de formularios (API REST, email, etc.).

/** Ruta a un archivo en /public respetando el base de Vite (p. ej. /ssra.mil.uy/). */
export function publicUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path

  const base = import.meta.env.BASE_URL
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${base}${normalized}`
}

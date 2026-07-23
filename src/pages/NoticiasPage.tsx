import Section from '../components/Section'
import Noticias from '../components/Noticias'

export default function NoticiasPage() {
  return (
    <Section
      id="noticias"
      title="Noticias"
      subtitle="Novedades y cobertura institucional del SSRA"
      variant="alt"
    >
      <Noticias />
    </Section>
  )
}

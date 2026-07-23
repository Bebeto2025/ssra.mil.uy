import Section from '../components/Section'
import MapLocation from '../components/MapLocation'
import { institution } from '../data/institution'

export default function UbicacionPage() {
  const { name } = institution

  return (
    <Section id="ubicacion" title="Ubicación" subtitle={name.aic}>
      <MapLocation />
    </Section>
  )
}

import Section from '../components/Section'
import EcosistemaMap from '../components/EcosistemaMap'
import { institution } from '../data/institution'

export default function EcosistemaPage() {
  return (
    <Section
      id="ecosistema"
      title="Ecosistema"
      subtitle={`Red de instituciones vinculadas al ${institution.name.ssra}`}
    >
      <div className="ecosistema">
        <p className="ecosistema__intro">
          El SSRA forma parte de un ecosistema de organismos públicos, académicos y privados
          vinculados a la observación terrestre, la aviación civil, la formación aeronáutica,
          las emergencias y el sector espacial en Uruguay. Haga clic en cada institución para
          visitar su sitio web.
        </p>
        <EcosistemaMap />
      </div>
    </Section>
  )
}

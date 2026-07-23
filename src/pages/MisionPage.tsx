import Section from '../components/Section'
import { institution } from '../data/institution'

export default function MisionPage() {
  const { mission, name } = institution

  return (
    <Section
      id="mision"
      title="Misión"
      subtitle={`${name.ssra} — Decreto Nº 369/991`}
    >
      <div className="content-block">
        <p>{mission.intro}</p>
        <ol className="content-ordered">
          {mission.items.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ol>
        <h3 className="content-subheading">Cometidos operativos</h3>
        <ul className="content-list">
          {mission.functions.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

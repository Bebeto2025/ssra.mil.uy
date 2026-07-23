import Section from '../components/Section'
import { institution } from '../data/institution'

export default function VisionPage() {
  const { vision } = institution

  return (
    <Section
      id="vision"
      title="Visión"
      subtitle="Proyección institucional del SSRA"
      variant="alt"
    >
      <div className="content-block content-block--vision">
        <blockquote>{vision.statement}</blockquote>
        <div className="vision-pillars">
          {vision.pillars.map((pillar) => (
            <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

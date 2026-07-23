import { institution } from '../data/institution'

const ssraShield = {
  key: 'ssra' as const,
  alt: 'Logo del Servicio de Sensores Remotos Aeroespaciales',
  title: institution.imageCredits.ssraLogo,
  className: 'institution__shield--ssra',
}

export default function InstitutionBrand() {
  const { name, shields } = institution

  return (
    <div className="institution institution--header">
      <div className="institution__shields">
        <span className="institution__shield-ring">
          <img
            src={shields[ssraShield.key]}
            alt={ssraShield.alt}
            title={ssraShield.title}
            className={`institution__shield ${ssraShield.className}`}
          />
        </span>
      </div>
      <div className="institution__text">
        <span className="institution__line institution__line--ssra">{name.ssra}</span>
        <span className="institution__line institution__line--fau">{name.fau}</span>
      </div>
    </div>
  )
}

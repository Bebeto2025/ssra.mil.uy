import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  variant?: 'default' | 'alt'
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  variant = 'default',
}: SectionProps) {
  return (
    <section id={id} className={`section section--${variant}`}>
      <div className="container">
        <header className="section__header">
          <span className="section__line" aria-hidden="true" />
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

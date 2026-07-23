import { useEffect } from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
import Section from '../components/Section'
import Cursos from '../components/Cursos'
import type { LayoutContext } from '../types/layout'

export default function CursosPage() {
  const { openTramites } = useOutletContext<LayoutContext>()
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = hash.replace('#', '')
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)

    return () => window.clearTimeout(timer)
  }, [hash])

  return (
    <Section
      id="cursos"
      title="Cursos"
      subtitle="Formación de operadores de drones — Escuela Técnica de Aeronáutica / SSRA"
    >
      <Cursos onInscribirse={openTramites} />
    </Section>
  )
}

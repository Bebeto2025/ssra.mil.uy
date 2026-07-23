import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TramitesModal from './TramitesModal'
import type { TramiteId } from '../types/tramites'
import type { LayoutContext } from '../types/layout'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const [tramitesOpen, setTramitesOpen] = useState(false)
  const [initialTramiteId, setInitialTramiteId] = useState<TramiteId | null>(null)

  const openTramites = (tramiteId?: TramiteId) => {
    setInitialTramiteId(tramiteId ?? null)
    setTramitesOpen(true)
  }

  const closeTramites = () => {
    setTramitesOpen(false)
    setInitialTramiteId(null)
  }

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  const outletContext: LayoutContext = { openTramites }

  return (
    <div className="app">
      <Header onOpenTramites={openTramites} />
      <main>
        <Outlet context={outletContext} />
      </main>
      <Footer />
      <TramitesModal
        open={tramitesOpen}
        initialTramiteId={initialTramiteId}
        onClose={closeTramites}
      />
    </div>
  )
}

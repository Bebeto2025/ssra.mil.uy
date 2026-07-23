import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import InstitutionBrand from './InstitutionBrand'
import { cursos } from '../data/cursos'
import type { TramiteId } from '../types/tramites'

const navItems = [
  { to: '/noticias', label: 'Noticias' },
  { to: '/galeria', label: 'Galería' },
  { to: '/ubicacion', label: 'Ubicación' },
  { to: '/contacto', label: 'Contacto' },
]

const institucionalItems = [
  { to: '/institucional/mision', label: 'Misión' },
  { to: '/institucional/vision', label: 'Visión' },
  { to: '/institucional/normativas', label: 'Normativas' },
  { to: '/institucional/ecosistema', label: 'Ecosistema' },
]

interface HeaderProps {
  onOpenTramites: (tramiteId?: TramiteId) => void
}

export default function Header({ onOpenTramites }: HeaderProps) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [institucionalOpen, setInstitucionalOpen] = useState(false)
  const [cursosOpen, setCursosOpen] = useState(false)
  const institucionalRef = useRef<HTMLDivElement>(null)
  const cursosRef = useRef<HTMLDivElement>(null)

  const closeMenus = () => {
    setMenuOpen(false)
    setInstitucionalOpen(false)
    setCursosOpen(false)
  }

  useEffect(() => {
    closeMenus()
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (institucionalRef.current && !institucionalRef.current.contains(target)) {
        setInstitucionalOpen(false)
      }
      if (cursosRef.current && !cursosRef.current.contains(target)) {
        setCursosOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isInstitucionalActive = location.pathname.startsWith('/institucional')

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__brand" aria-label="Ir al inicio" onClick={closeMenus}>
          <InstitutionBrand />
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <div className="header__dropdown" ref={institucionalRef}>
            <button
              type="button"
              className={`header__link header__link--dropdown ${institucionalOpen || isInstitucionalActive ? 'header__link--active' : ''}`}
              aria-expanded={institucionalOpen}
              aria-haspopup="true"
              onClick={() => {
                setInstitucionalOpen(!institucionalOpen)
                setCursosOpen(false)
              }}
            >
              Institucional
              <span className="header__dropdown-caret" aria-hidden="true">
                ▾
              </span>
            </button>
            {institucionalOpen && (
              <ul className="header__dropdown-menu">
                {institucionalItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `header__dropdown-item${isActive ? ' header__dropdown-item--active' : ''}`
                      }
                      onClick={closeMenus}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="header__dropdown" ref={cursosRef}>
            <button
              type="button"
              className={`header__link header__link--dropdown ${cursosOpen || location.pathname.startsWith('/cursos') ? 'header__link--active' : ''}`}
              aria-expanded={cursosOpen}
              aria-haspopup="true"
              onClick={() => {
                setCursosOpen(!cursosOpen)
                setInstitucionalOpen(false)
              }}
            >
              Cursos
              <span className="header__dropdown-caret" aria-hidden="true">
                ▾
              </span>
            </button>
            {cursosOpen && (
              <ul className="header__dropdown-menu">
                {cursos.map((curso) => (
                  <li key={curso.id}>
                    <Link
                      to={`/cursos#curso-${curso.id}`}
                      className="header__dropdown-item"
                      onClick={closeMenus}
                    >
                      {curso.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
              onClick={closeMenus}
            >
              {item.label}
            </NavLink>
          ))}

          <button
            type="button"
            className="btn btn--primary header__tramites"
            onClick={() => {
              onOpenTramites()
              closeMenus()
            }}
          >
            Trámites
          </button>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

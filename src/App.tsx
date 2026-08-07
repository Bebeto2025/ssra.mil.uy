import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import MisionPage from './pages/MisionPage'
import VisionPage from './pages/VisionPage'
import NormativasPage from './pages/NormativasPage'
import EcosistemaPage from './pages/EcosistemaPage'
import CursosPage from './pages/CursosPage'
import NoticiasPage from './pages/NoticiasPage'
import NoticiaDetailPage from './pages/NoticiaDetailPage'
import GaleriaPage from './pages/GaleriaPage'
import RegistrarSensorPage from './pages/RegistrarSensorPage'
import UbicacionPage from './pages/UbicacionPage'
import ContactoPage from './pages/ContactoPage'
import './App.css'

function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <BrowserRouter basename={basename || undefined}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="institucional/mision" element={<MisionPage />} />
          <Route path="institucional/vision" element={<VisionPage />} />
          <Route path="institucional/normativas" element={<NormativasPage />} />
          <Route path="institucional/ecosistema" element={<EcosistemaPage />} />
          <Route path="cursos" element={<CursosPage />} />
          <Route path="noticias" element={<NoticiasPage />} />
          <Route path="noticias/:id" element={<NoticiaDetailPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="ubicacion" element={<UbicacionPage />} />
          <Route path="tramites/registrar-sensor" element={<RegistrarSensorPage />} />
          <Route path="contacto" element={<ContactoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { publicUrl } from './lib/publicUrl'
import './index.css'
import App from './App.tsx'

document.documentElement.style.setProperty(
  '--hero-bg',
  `url(${publicUrl('/fondos/tierra-uruguay.png')})`,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguajesProvider } from './contexts/Languajes.jsx'

createRoot(document.getElementById('root')).render(
  <LanguajesProvider>
    <App />
  </LanguajesProvider>,
)

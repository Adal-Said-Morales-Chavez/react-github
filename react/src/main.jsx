import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AlumnoProvider } from './context/AlumnoContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AlumnoProvider>
        <App />
      </AlumnoProvider>
    </BrowserRouter>
  </StrictMode>,
)

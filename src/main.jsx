import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavbarComponent from './components/NavbarComponent.jsx'
import SplashComponent from './components/SplashComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComponent/>
    <SplashComponent/>
    <App />
  </StrictMode>,
)

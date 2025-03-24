import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavbarComponent from './components/NavbarComponent.jsx'
import SplashComponent from './components/SplashComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComponent/>
    <App path="/"/>
    <FooterComponent/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegisterLoginScreen from './pages/RegisterLoginScreen/RegisterLoginScreen.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterLoginScreen />
  </StrictMode>,
)

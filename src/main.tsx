import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'cesium/Build/Cesium/Widgets/widgets.css';
(window as any).CESIUM_BASE_URL = '/cesium';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NGUxNzljMy1jNGE0LTQ1MWYtYmNiYy1iNWEyMWEyNGU3Y2EiLCJpZCI6MzI0NzMzLCJpYXQiOjE3NTMzNTA2MTl9.dh7CFEdeZDNr9-wDBgxwZrJsDXK6GTqvJLQKMGUFu1c'

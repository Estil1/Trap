import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Privacy from './Privacy.tsx'
import './index.css'

// Determine which component to render based on the URL path
const path = window.location.pathname.replace('/Trap', '')
const Component = path === '/privacy' ? Privacy : App

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>,
)

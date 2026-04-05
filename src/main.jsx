import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lenis from '@studio-freight/lenis'

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    // Make lenis work with scrollIntoView used across the site
    lenis.on('scroll', () => {})

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return children
}

// ← StrictMode removed — it runs effects twice in dev
// which creates two Lenis instances that fight each other
createRoot(document.getElementById('root')).render(
  <SmoothScroll>
    <App />
  </SmoothScroll>
)
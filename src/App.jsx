import { useEffect } from 'react'
import Contato from './components/Contato'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'
import Sobre from './components/Sobre'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.animate').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Hero />
      <Sobre />
      <Contato />
      <ScrollToTop />
    </div>
  )
}

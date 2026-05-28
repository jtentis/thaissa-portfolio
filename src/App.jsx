import Contato from './components/Contato'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'
import Sobre from './components/Sobre'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Sobre />
      <Contato />
      <ScrollToTop />
    </div>
  )
}

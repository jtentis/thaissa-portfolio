export default function Sobre() {
  return (
    <section id="sobre" className="about-section section-frame bg-cream text-olive" aria-labelledby="sobre-title">
      <h2 id="sobre-title" className="about-title font-heading animate animate-d1">
        SOBRE
      </h2>

      <div className="about-copy font-body animate animate-d2">
        <p>
          Sou Thaissa, designer visual focada em pequenos negócios. Professora
          bilíngue de formação, falo inglês e carrego o amor por desenho em
          tudo que crio.
        </p>

        <p>
          Faço identidade visual, posts e materiais gráficos para quem está
          começando e precisa de uma marca que funcione de verdade.
        </p>
      </div>

      <img className="leaf animate animate-d4" src="/folha.png" alt="" aria-hidden="true" />
    </section>
  )
}

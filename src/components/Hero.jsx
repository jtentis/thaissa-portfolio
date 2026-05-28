export default function Hero() {
  return (
    <section id="hero" className="hero-section section-frame bg-olive text-cream" aria-labelledby="hero-title">
      <div className="hero-left">
        <p className="hero-kicker font-body">Visual Designer</p>
        <h1 id="hero-title" className="hero-title font-heading">
          <span>TEN</span>
          <span>TIS</span>
        </h1>
      </div>

      <img className="hero-photo" src="/foto.png" alt="Thaissa sorrindo"/>

      <div className="hero-copy font-body">
        <p>Muito prazer, sou Thaissa - designer visual.</p>
        <p>
          Aqui você vai encontrar identidade visual e materiais que fazem o seu
          negócio ser levado a sério.
        </p>
      </div>
    </section>
  )
}

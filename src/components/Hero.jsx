export default function Hero() {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const y = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  
  return (
    <section id="hero" className="hero-section section-frame bg-olive text-cream" aria-labelledby="hero-title">
      <nav className="hero-nav" aria-label="Navegação principal">
        <ul className="hero-nav-list flex flex-row items-center">
          <li>
            <a href="#sobre" className="hero-nav-link" onClick={handleSmoothScroll} aria-label="Ir para seção sobre">SOBRE</a>
          </li>
          <li>
            <a href="#contato" className="hero-nav-link" onClick={handleSmoothScroll} aria-label="Ir para seção contato">CONTATO</a>
          </li>
        </ul>
      </nav>
      <div className="hero-left">
        <p className="hero-kicker font-body animate animate-d1">Visual Designer</p>
        <h1 id="hero-title" className="hero-title font-heading">
          <span className="animate animate-d2">TEN</span>
          <span className="animate animate-d3">TIS</span>
        </h1>
      </div>

      <img className="hero-photo animate animate-d4" src="/foto.png" alt="Thaissa sorrindo ao lado de uma árvore" />

      <div className="hero-copy font-body animate animate-d5">
        <p>Muito prazer, sou Thaissa - designer visual.</p>
        <p>
          Aqui você vai encontrar identidade visual e materiais que fazem o seu
          negócio ser levado a sério.
        </p>
      </div>
    </section>
  )
}
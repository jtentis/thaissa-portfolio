export default function Contato() {
  return (
    <footer id="contato" className="contact-section section-frame bg-olive text-cream" aria-labelledby="contato-title">
      <div className="contact-content">
        <h2 id="contato-title" className="contact-title font-heading">
          VAMOS CONVERSAR?
        </h2>

        <p className="contact-copy font-body">
          Pronta para transformar a sua marca? Entre em contato e solicite seu
          orçamento.
        </p>

        <div className="contact-links font-body" aria-label="Links de contato">
          <a href="https://instagram.com/thatentis" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.2" cy="6.8" r="1.1" />
            </svg>
            <span>@thatentis</span>
          </a>

          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.04 2.2A9.73 9.73 0 0 0 3.7 16.94L2.6 21l4.17-1.1a9.72 9.72 0 1 0 5.27-17.7Zm0 1.76a7.96 7.96 0 1 1-4.07 14.8l-.29-.17-2.48.65.66-2.42-.19-.3a7.96 7.96 0 0 1 6.37-12.56Zm-3.38 3.9c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.13.17 1.76 2.82 4.35 3.84 2.15.85 2.59.68 3.06.64.47-.04 1.51-.62 1.72-1.21.21-.6.21-1.1.15-1.22-.07-.1-.23-.17-.49-.3-.25-.12-1.5-.74-1.73-.82-.23-.09-.4-.13-.56.12-.17.26-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.1-.51.12-.12.26-.3.38-.45.13-.15.17-.25.26-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.36-.78-1.86-.2-.49-.41-.42-.56-.43h-.48Z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="contact-wave" aria-hidden="true" />
    </footer>
  )
}

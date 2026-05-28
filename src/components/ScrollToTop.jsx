import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="scroll-to-top"
      aria-label="Voltar ao topo"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4l-8 8h5v8h6v-8h5L12 4z" />
      </svg>
    </button>
  ) : null;
}

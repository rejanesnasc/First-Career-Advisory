import React from 'react';

export default function Hero({ t }) {
  return (
    <section className="hero-section" id="hero">
      {/* Imagem de Fundo com Overlay Escuro */}
      <div className="hero-bg-media">
        <img
          src="/assets/images/hero-bg-first-career-advisory.jpg"
          alt="Profissional executiva de branco"
          fetchPriority="high"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-inner">
        {/* Tipografia Editorial Centralizada */}
        <div className="hero-branding">
          <img src="/assets/images/logo-hero.png" alt="First Career Advisory" className="hero-title-first" />
        </div>

        {/* Tagline Dourada / Suave */}
        <p className="hero-tagline">{t.hero_tagline}</p>

        {/* Botão Pílula Minimalista */}
        <div className="hero-cta-wrapper">
          <a href="#servicos" className="btn btn-gold hero-pill-link">
            {t.hero_contact}
          </a>
        </div>
      </div>
    </section>
  );
}


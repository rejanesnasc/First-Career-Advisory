import React from 'react';

export default function CtaBanner({ t }) {
  return (
    <section className="section-cta-banner">
      {/* Imagem de Fundo com Overlay */}
      <div className="cta-banner-bg">
        <img src="/assets/images/hero-bg.jpg" alt="Transforme sua carreira" loading="lazy" />
        <div className="cta-banner-overlay"></div>
      </div>

      <div className="container cta-banner-container">
        <div className="cta-banner-content">
          <h2 className="cta-banner-title">{t.cta_banner_title}</h2>
          <p className="cta-banner-desc">{t.cta_banner_desc}</p>
          <a href="#contato" className="btn btn-gold btn-banner">
            {t.cta_banner_btn}
          </a>
        </div>

        {/* Monograma no Canto Inferior Direito */}
        <div className="cta-banner-corner-logo" aria-hidden="true">
          <span className="corner-first"><img src="/assets/images/logo-hero.png" alt="logo escrito first career advisory em destaque" /></span>
          {/* <span className="corner-sub">CAREER ADVISORY</span> */}
        </div>
      </div>
    </section>
  );
}


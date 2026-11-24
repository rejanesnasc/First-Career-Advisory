import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function Header({ currentLang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
      <div className="header-container">
        {/* Monograma 'f' em PNG */}
        <a href="#hero" className="header-logo" aria-label="First Career Advisory - Início">
          <img src="/assets/images/logo-f.png" alt="First Monogram" className="header-monogram" />
        </a>

        {/* Links de Navegação */}
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`} id="headerNav" aria-label="Navegação Principal">
          <a href="#sobre" className="nav-link" onClick={() => setMenuOpen(false)}>
            {t.nav_about}
          </a>
          <a href="#servicos" className="nav-link" onClick={() => setMenuOpen(false)}>
            {t.nav_services}
          </a>
          <a href="#contato" className="nav-link" onClick={() => setMenuOpen(false)}>
            {t.nav_contact}
          </a>
        </nav>

        {/* Ações do Header */}
        <div className="header-actions">
          {/* Botão Único Arredondado do Seletor de Idioma */}
          <button
            type="button"
            className="lang-toggle-btn"
            onClick={toggleLanguage}
            aria-label={`Mudar idioma / Switch language (Atual: ${currentLang.toUpperCase()})`}
          >
            <Globe size={16} className="lang-globe-icon" />
            <span className="lang-text">{currentLang.toUpperCase()}</span>
          </button>

          {/* Botão CTA Dourado Arredondado */}
          <a href="#contato" className="btn btn-gold btn-header">
            {t.cta_header}
          </a>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu de Navegação"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

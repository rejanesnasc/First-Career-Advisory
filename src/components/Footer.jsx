import React from 'react';

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Marca & Resumo */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/assets/images/logo-hero.png" alt="First Career Advisory" style={{ width: "120px", height: "auto" }} />
            </div>
            <p className="footer-desc">{t.footer_tagline}</p>
          </div>

          {/* Links de Navegação */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer_nav_title}</h4>
            <ul className="footer-links">
              <li><a href="#hero">Início</a></li>
              <li><a href="#sobre">{t.nav_about}</a></li>
              <li><a href="#servicos">{t.nav_services}</a></li>
              <li><a href="#contato">{t.nav_contact}</a></li>
            </ul>
          </div>

          {/* Redes & Conexões */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t.footer_contact_title}</h4>
            <div className="footer-social-links">
              {/* Link Oficial do LinkedIn */}
              <a
                href="https://www.linkedin.com/company/first-career-advisory/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
                aria-label="LinkedIn First Career Advisory"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/5531999739241"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-item"
                aria-label="WhatsApp First Career Advisory"
              >
                {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.814 2.796.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.767-5.768-5.767zm7.067 5.766c-.001 3.9-3.17 7.069-7.067 7.069-1.208 0-2.389-.311-3.432-.899l-4.599 1.206 1.229-4.484c-.655-1.085-1.002-2.336-1.002-3.622.001-3.9 3.17-7.069 7.067-7.069 3.899 0 7.069 3.169 7.069 7.069z" />
                </svg> */}
                {/* <span>WhatsApp</span> */}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2026 First Career Advisory. <span>{t.footer_rights}</span></p>
        </div>
      </div>
    </footer>
  );
}


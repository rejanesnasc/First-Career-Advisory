import React from 'react';

export default function About({ t }) {
  return (
    <section className="section-about" id="sobre">
      <div className="container about-container">
        {/* Coluna Esquerda: Logotipo 'f' no canto superior esquerdo + Moldura da Foto em Arco Romano com borda dourada */}
        <div className="about-left">
          {/* Logotipo da letra 'f' minúscula com o traço horizontal dourado característico */}
          <div className="about-brand-mark">
            <img src="/assets/images/logo-f.png" alt="First Logo Icon" className="about-monogram-img" />
            {/* <span className="about-gold-stroke" aria-hidden="true"></span> */}
          </div>

          {/* Moldura da Foto em Arco Vertical (ogiva/arco romano e base reta) com detalhe dourado sutil (#cda568) */}
          <div className="about-arch-frame">
            <div className="about-arch-inner">
              <img
                src="/assets/images/consultant-about.jpg"
                alt="Rejane Nascimento, Especialista em Posicionamento de Carreira"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Coluna Direita: Título 'Sobre nós' + Texto Descritivo (Intactos) */}
        <div className="about-right">
          <h2 className="about-title">
            <span>{t.about_title_1}</span>
            <br />
            <span>{t.about_title_2}</span>
          </h2>
          <div className="about-text-content">
            <p>{t.about_content_1}</p>
            <p>{t.about_content_2}</p>
            <p>{t.about_content_3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

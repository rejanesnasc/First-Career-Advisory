import React, { useState, useEffect, useRef } from 'react';

export default function Testimonials({ t }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const testimonials = [
    {
      id: 1,
      quote: t.t1_quote,
      author: t.t1_author,
      role: t.t1_role,
    },
    {
      id: 2,
      quote: t.t2_quote,
      author: t.t2_author,
      role: t.t2_role,
    },
    {
      id: 3,
      quote: t.t3_quote,
      author: t.t3_author,
      role: t.t3_role,
    },
    {
      id: 4,
      quote: t.t4_quote,
      author: t.t4_author,
      role: t.t4_role,
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    setIsPaused(false);
  };

  return (
    <section className="section-testimonials" id="depoimentos">
      <div className="container testimonials-container">
        {/* Coluna Esquerda: Monograma 'f' em PNG + Título em 3 Linhas */}
        <div className="testimonials-left">
          <img src="/assets/images/logo-f.jpg" alt="First Monogram" className="testimonials-monogram" />
          <h2 className="testimonials-title">
            <span>{t.testimonials_title_1}</span>
            <br />
            <span>{t.testimonials_title_2}</span>
            <br />
            <span>{t.testimonials_title_3}</span>
            <br />
            <span>{t.testimonials_title_4}</span>
          </h2>
        </div>

        {/* Coluna Direita: Card de Depoimento & Controles */}
        <div
          className="testimonials-right"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="testimonial-carousel-wrap">
            <div
              className="testimonial-cards-viewport"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="testimonial-cards-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <div key={item.id} className="testimonial-card">
                    <blockquote className="testimonial-quote">{item.quote}</blockquote>
                    <div className="testimonial-meta">
                      <h4 className="testimonial-author">{item.author}</h4>
                      <span className="testimonial-role">{item.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navegação (Setas e Dots) */}
            <div className="testimonial-nav">
              <button
                type="button"
                className="t-arrow"
                onClick={handlePrev}
                aria-label="Depoimento Anterior"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="t-dots">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`t-dot ${idx === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Depoimento ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                className="t-arrow"
                onClick={handleNext}
                aria-label="Próximo Depoimento"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

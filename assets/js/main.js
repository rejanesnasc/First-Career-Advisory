/**
 * First Career Advisory - Core JavaScript
 * Funcionalidades:
 * 1. Internacionalização (i18n PT-BR / EN)
 * 2. Carrossel de Depoimentos Automático com controles de navegação
 * 3. Formulário Fale Conosco integrado diretamente ao WhatsApp (+55 31 99973-9241)
 * 4. Botões "Saiba mais" conectados ao formulário de contato
 * 5. Header com efeito de scroll e menu mobile responsivo
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. SISTEMA DE INTERNACIONALIZAÇÃO (i18n)
     ========================================================================== */
  const DEFAULT_LANG = 'pt';
  let currentLang = localStorage.getItem('first_career_lang') || DEFAULT_LANG;

  const langButtons = document.querySelectorAll('.lang-btn');
  const serviceSelect = document.getElementById('formService');

  const serviceOptionsMap = {
    pt: [
      { value: 'Posicionamento no LinkedIn', text: 'Posicionamento no LinkedIn' },
      { value: 'Estratégia de Currículo', text: 'Estratégia de Currículo' },
      { value: 'Mentoria de Carreira', text: 'Mentoria de Carreira' },
      { value: 'Diagnóstico Geral de Carreira', text: 'Diagnóstico Geral de Carreira' }
    ],
    en: [
      { value: 'Strategic LinkedIn Positioning', text: 'Strategic LinkedIn Positioning' },
      { value: 'Resume Strategy & Review', text: 'Resume Strategy & Review' },
      { value: 'Career Mentorship', text: 'Career Mentorship' },
      { value: 'General Career Diagnosis', text: 'General Career Diagnosis' }
    ]
  };

  function updateServiceDropdown(lang, preserveIndex = -1) {
    if (!serviceSelect) return;
    const selectedIdx = preserveIndex >= 0 ? preserveIndex : serviceSelect.selectedIndex;
    const placeholderText = translations[lang].form_service_default;

    serviceSelect.innerHTML = `<option value="" disabled ${selectedIdx <= 0 ? 'selected' : ''}>${placeholderText}</option>`;

    serviceOptionsMap[lang].forEach((opt, idx) => {
      const optionEl = document.createElement('option');
      optionEl.value = opt.value;
      optionEl.textContent = opt.text;
      if (selectedIdx === idx + 1) {
        optionEl.selected = true;
      }
      serviceSelect.appendChild(optionEl);
    });
  }

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('first_career_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Botões de idioma
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Textos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Placeholders com data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    updateServiceDropdown(lang);
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.dataset.lang;
      if (targetLang && targetLang !== currentLang) {
        applyLanguage(targetLang);
      }
    });
  });

  // Inicializa o idioma salvo ou padrão
  applyLanguage(currentLang);


  /* ==========================================================================
     2. CARROSSEL DE DEPOIMENTOS
     ========================================================================== */
  const track = document.getElementById('testimonialTrack');
  const slides = track ? track.querySelectorAll('.testimonial-card') : [];
  const dotsContainer = document.getElementById('testimonialDots');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');

  let currentSlideIndex = 0;
  let autoplayTimer = null;
  const AUTOPLAY_INTERVAL = 6000;

  if (track && slides.length > 0) {
    // Cria os dots dinamicamente
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `t-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Depoimento ${i + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(i);
          restartAutoplay();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function updateCarousel() {
      const offset = currentSlideIndex * -100;
      track.style.transform = `translateX(${offset}%)`;

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.t-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentSlideIndex);
        });
      }
    }

    function goToSlide(index) {
      if (index < 0) {
        currentSlideIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentSlideIndex = 0;
      } else {
        currentSlideIndex = index;
      }
      updateCarousel();
    }

    function nextSlide() {
      goToSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentSlideIndex - 1);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        restartAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        restartAutoplay();
      });
    }

    function startAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    }

    function pauseAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
    }

    function restartAutoplay() {
      pauseAutoplay();
      startAutoplay();
    }

    // Pausa no hover
    const carouselWrapper = document.querySelector('.testimonial-carousel-wrap');
    if (carouselWrapper) {
      carouselWrapper.addEventListener('mouseenter', pauseAutoplay);
      carouselWrapper.addEventListener('mouseleave', startAutoplay);
    }

    // Suporte a swipe em telas touch
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      pauseAutoplay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      startAutoplay();
    }, { passive: true });

    startAutoplay();
  }


  /* ==========================================================================
     3. BOTÕES "SAIBA MAIS" CONECTADOS AO FORMULÁRIO
     ========================================================================== */
  const solutionButtons = document.querySelectorAll('.solution-btn');
  solutionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const serviceTarget = btn.getAttribute('data-service');
      if (serviceTarget && serviceSelect) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          const opt = serviceSelect.options[i];
          if (opt.value.toLowerCase().includes(serviceTarget.toLowerCase()) || 
              serviceTarget.toLowerCase().includes(opt.value.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });


  /* ==========================================================================
     4. FORMULÁRIO DE CONTATO INTEGRADO AO WHATSAPP
     ========================================================================== */
  const contactForm = document.getElementById('careerContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('formName');
      const emailInput = document.getElementById('formEmail');
      const phoneInput = document.getElementById('formPhone');
      const messageInput = document.getElementById('formMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const service = serviceSelect ? serviceSelect.value : '';
      const notes = messageInput ? messageInput.value.trim() : '';

      if (!name || !email) {
        alert(currentLang === 'pt' ? 'Por favor, preencha seu nome e e-mail.' : 'Please fill in your name and email.');
        return;
      }

      // Monta mensagem personalizada
      let message = `Olá! Conheci a First Career Advisory pelo site e gostaria de saber mais sobre as soluções de carreira.\n\n`;
      message += `• *Nome:* ${name}\n`;
      message += `• *E-mail:* ${email}\n`;
      if (phone) message += `• *Telefone/WhatsApp:* ${phone}\n`;
      if (service) message += `• *Serviço de Interesse:* ${service}\n`;
      if (notes) message += `• *Mensagem:* ${notes}\n`;

      const whatsappUrl = `https://wa.me/5531999739241?text=${encodeURIComponent(message)}`;

      // Abre o WhatsApp diretamente em nova aba
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }


  /* ==========================================================================
     5. HEADER SCROLL & MOBILE TOGGLE
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const headerNav = document.getElementById('headerNav');

  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  if (mobileToggle && headerNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileToggle.classList.toggle('active');
      headerNav.classList.toggle('active');
    });

    // Fecha ao clicar em um link
    headerNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        headerNav.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

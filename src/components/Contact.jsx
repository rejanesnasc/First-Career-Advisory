import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Contact({ t, currentLang, selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Apenas as 6 opções principais exigidas:
  const serviceOptions = [
    { value: t.form_service_opt_1, label: t.form_service_opt_1 },
    { value: t.form_service_opt_2, label: t.form_service_opt_2 },
    { value: t.form_service_opt_3, label: t.form_service_opt_3 },
    { value: t.form_service_opt_4, label: t.form_service_opt_4 },
    { value: t.form_service_opt_5, label: t.form_service_opt_5 },
    // { value: t.form_service_opt_6, label: t.form_service_opt_6 },
  ];

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectOption = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      alert(
        currentLang === 'pt'
          ? 'Por favor, preencha seu nome e e-mail.'
          : 'Please fill in your name and email.'
      );
      return;
    }

    let messageText = `Olá! Conheci a First Career Advisory pelo site e gostaria de saber mais sobre as soluções de carreira.\n\n`;
    messageText += `• *Nome:* ${formData.name.trim()}\n`;
    messageText += `• *E-mail:* ${formData.email.trim()}\n`;
    if (formData.phone.trim()) messageText += `• *Telefone/WhatsApp:* ${formData.phone.trim()}\n`;
    if (formData.service) messageText += `• *Serviço de Interesse:* ${formData.service}\n`;
    if (formData.message.trim()) messageText += `• *Mensagem:* ${formData.message.trim()}\n`;

    const whatsappUrl = `https://wa.me/5531999739241?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-contact" id="contato">
      <div className="container">
        {/* Título da Seção */}
        <h2 className="contact-section-title">{t.contact_title}</h2>

        <div className="contact-grid">
          {/* Coluna Esquerda: Moldura em Arco Arqueado (ogiva/arco romano: 150px 150px 0 0) com Detalhe Dourado (#cda568) */}
          <div className="contact-left">
            <div className="contact-arch-wrapper">
              <div className="contact-arch-inner">
                <img
                  src="/assets/images/consultant-contact.jpg"
                  alt="mulher negra sorridente com fundo amarelo, Especialista em Posicionamento de Carreira"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="contact-quick-info">
              <div className="info-block">
                <span className="info-label">{t.contact_box_email_label}</span>
                <a href="mailto:firstcareeradvisory@outlook.com" className="info-val">
                  firstcareeradvisory@outlook.com
                </a>
              </div>
              <div className="info-block">
                <span className="info-label">{t.contact_box_whatsapp_label}</span>
                <a
                  href="https://wa.me/5531999739241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-val"
                >
                  +55 (31) 99973-9241
                </a>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário de Contato */}
          <div className="contact-right">
            <div className="contact-card">
              <form id="careerContactForm" className="contact-form" onSubmit={handleSubmit}>
                {/* Nome Completo */}
                <div className="form-group">
                  <label htmlFor="formName" className="form-label">
                    {t.form_label_name}
                  </label>
                  <input
                    type="text"
                    id="formName"
                    name="name"
                    className="form-input"
                    required
                    placeholder={t.form_placeholder_name}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                {/* E-mail e WhatsApp em 2 colunas */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="formEmail" className="form-label">
                      {t.form_label_email}
                    </label>
                    <input
                      type="email"
                      id="formEmail"
                      name="email"
                      className="form-input"
                      required
                      placeholder={t.form_placeholder_email}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formPhone" className="form-label">
                      {t.form_label_phone}
                    </label>
                    <input
                      type="tel"
                      id="formPhone"
                      name="phone"
                      className="form-input"
                      required
                      placeholder={t.form_placeholder_phone}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Serviço de Interesse com Custom Select (#cda568 e sem azul padrão do navegador) */}
                <div className="form-group" ref={dropdownRef}>
                  <label className="form-label">{t.form_label_service}</label>
                  <div className="custom-select-container">
                    <button
                      type="button"
                      className={`custom-select-trigger ${formData.service ? 'selected' : ''} ${
                        isDropdownOpen ? 'active' : ''
                      }`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                    >
                      <span>{formData.service || t.form_service_default}</span>
                      <ChevronDown
                        size={18}
                        className={`select-chevron ${isDropdownOpen ? 'rotate' : ''}`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <ul className="custom-select-options" role="listbox">
                        {serviceOptions.map((opt, i) => {
                          const isSelected = formData.service === opt.value;
                          return (
                            <li
                              key={i}
                              role="option"
                              aria-selected={isSelected}
                              className={`custom-select-option ${isSelected ? 'active-gold' : ''}`}
                              onClick={() => handleSelectOption(opt.value)}
                            >
                              {opt.label}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Mensagem */}
                <div className="form-group">
                  <label htmlFor="formMessage" className="form-label">
                    {t.form_label_message}
                  </label>
                  <textarea
                    id="formMessage"
                    name="message"
                    className="form-textarea"
                    placeholder={t.form_placeholder_message}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Botão Enviar / WhatsApp */}
                <button type="submit" className="btn btn-form-submit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.814 2.796.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.767-5.768-5.767zm7.067 5.766c-.001 3.9-3.17 7.069-7.067 7.069-1.208 0-2.389-.311-3.432-.899l-4.599 1.206 1.229-4.484c-.655-1.085-1.002-2.336-1.002-3.622.001-3.9 3.17-7.069 7.067-7.069 3.899 0 7.069 3.169 7.069 7.069z" />
                  </svg>
                  <span>{t.form_btn_submit}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function ServiceModal({ isOpen, onClose, service, t }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  const handleContactRedirect = () => {
    // Fechar o modal
    onClose();
    // Rolar suavemente até a seção de contato (Fale Conosco)
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Botão Fechar 'X' no canto superior direito */}
        <button
          type="button"
          className="modal-close-x"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <X size={22} />
        </button>

        {/* Cabeçalho do Modal */}
        <div className="modal-header">
          <span className="modal-badge">{t.modal_scope_title}</span>
          <h3 className="modal-title">{service.name}</h3>
          <p className="modal-lead">{service.desc}</p>
        </div>

        {/* Lista Aprofundada do Escopo */}
        <div className="modal-body">
          <h4 className="modal-scope-heading">O que está incluso nesta solução:</h4>
          <ul className="modal-scope-list">
            {service.scope &&
              service.scope.map((item, idx) => (
                <li key={idx} className="modal-scope-item">
                  <CheckCircle2 size={18} className="modal-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Rodapé com Botão de Ação Dourado e Botão Fechar */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-gold modal-action-btn"
            onClick={handleContactRedirect}
          >
            {t.modal_cta_btn}
          </button>
          <button
            type="button"
            className="btn modal-secondary-btn"
            onClick={onClose}
          >
            {t.modal_close_btn}
          </button>
        </div>
      </div>
    </div>
  );
}


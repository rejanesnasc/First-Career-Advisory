import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

export default function Solutions({ t, onSelectService }) {
  const [selectedModalService, setSelectedModalService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const solutions = [
    {
      id: 1,
      image: '/assets/images/service-linkedin.jpg',
      name: t.service_1_name,
      desc: t.service_1_desc,
      scope: t.modal_service_1_scope,
    },
    {
      id: 2,
      image: '/assets/images/service-cv.jpg',
      name: t.service_2_name,
      desc: t.service_2_desc,
      scope: t.modal_service_2_scope,
    },
    {
      id: 3,
      image: '/assets/images/service-mentoria.jpg',
      name: t.service_3_name,
      desc: t.service_3_desc,
      scope: t.modal_service_3_scope,
    },
    {
      id: 4,
      image: '/assets/images/Líder negra conduz reunião corporativa.png',
      name: t.service_4_name,
      desc: t.service_4_desc,
      scope: t.modal_service_4_scope,
    },
    {
      id: 5,
      image: '/assets/images/Executiva e Executivo Tomando Notas no Escritório.jpg',
      name: t.service_5_name,
      desc: t.service_5_desc,
      scope: t.modal_service_5_scope,
    },
    // {
    //   id: 6,
    //   image: '/assets/images/executivas conversamos sobre planejamento estratégico.jpg',
    //   name: t.service_6_name,
    //   desc: t.service_6_desc,
    //   scope: t.modal_service_6_scope,
    // },
  ];

  const handleOpenModal = (service, e) => {
    e.preventDefault();
    setSelectedModalService(service);
    setIsModalOpen(true);
    if (onSelectService) {
      onSelectService(service.name);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedModalService(null);
  };

  return (
    <section className="section-solutions" id="servicos">
      <div className="container">
        {/* Título Centralizado */}
        <h2 className="solutions-title">{t.services_title}</h2>

        {/* Grid com os 3 Serviços */}
        <div className="solutions-grid">
          {solutions.map((item) => (
            <article key={item.id} className="solution-card">
              <div className="solution-oval-frame">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <h3 className="solution-name">{item.name}</h3>
              <p className="solution-desc">{item.desc}</p>
              <button
                type="button"
                className="btn btn-gold solution-btn"
                onClick={(e) => handleOpenModal(item, e)}
              >
                {t.service_btn_learn}
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Interativo de Detalhes do Serviço */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedModalService}
        t={t}
      />
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('first_career_lang') || 'pt';
  });
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    localStorage.setItem('first_career_lang', currentLang);
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  }, [currentLang]);

  const t = translations[currentLang] || translations.pt;

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <>
      <Header currentLang={currentLang} setLang={setCurrentLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Solutions t={t} onSelectService={handleSelectService} />
        <Testimonials t={t} />
        <CtaBanner t={t} />
        <Contact t={t} currentLang={currentLang} selectedService={selectedService} />
      </main>
      <Footer t={t} />
    </>
  );
}

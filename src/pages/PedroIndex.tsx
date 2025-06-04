
import React from 'react';
import Header from '../components/pedro/Header';
import Hero from '../components/pedro/Hero';
import About from '../components/pedro/About';
import Experience from '../components/pedro/Experience';
import Projects from '../components/pedro/Projects';
import Skills from '../components/pedro/Skills';
import Events from '../components/pedro/Events';
import Contact from '../components/pedro/Contact';
import Footer from '../components/pedro/Footer';
import { LanguageProvider } from '../contexts/PedroLanguageContext';

const PedroIndex = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Events />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default PedroIndex;

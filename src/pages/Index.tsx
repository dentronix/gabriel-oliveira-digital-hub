
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Events from '../components/Events';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';

const Index = () => {
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

export default Index;

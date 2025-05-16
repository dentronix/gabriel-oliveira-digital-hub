
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Gabriel Oliveira</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground">
            BI Intern | Python Automation | Data Science
          </h2>
          <p className="text-lg mb-8">
            {t('about.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href="#about">{t('nav.about')}</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">{t('nav.contact')}</a>
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center mt-20">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

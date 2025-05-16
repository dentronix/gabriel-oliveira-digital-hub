
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-secondary/10 py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm mb-4 md:mb-0">
          {t('footer.copyright')}
        </p>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 group" 
          onClick={scrollToTop}
        >
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          <span>{t('footer.backToTop')}</span>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;

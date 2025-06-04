
import React from 'react';
import { useLanguage } from '../../contexts/PedroLanguageContext';
import { Button } from '../ui/button';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-center md:text-left">
            {t('footer.copyright')}
          </p>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center gap-2 mt-4 md:mt-0"
          >
            <ArrowUp size={16} />
            {t('footer.backToTop')}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

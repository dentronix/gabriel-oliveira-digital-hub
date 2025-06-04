
import React from 'react';
import { useLanguage } from '../../contexts/PedroLanguageContext';
import { Button } from '../ui/button';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">
            Pedro Eduardo
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.experience')}
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.skills')}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Globe size={16} />
            {language === 'pt' ? 'EN' : 'PT'}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

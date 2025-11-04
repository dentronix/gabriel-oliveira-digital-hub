import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Globe } from 'lucide-react';

const Languages = () => {
  const { t } = useLanguage();
  
  const languages = [
    {
      name: t('languages.portuguese'),
      level: t('languages.native'),
      proficiency: 100,
    },
    {
      name: t('languages.french'),
      level: t('languages.advanced'),
      proficiency: 85,
    },
    {
      name: t('languages.english'),
      level: t('languages.intermediate'),
      proficiency: 70,
    },
  ];
  
  return (
    <section id="languages">
      <div className="container mx-auto">
        <h2 className="section-title">{t('languages.title')}</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="text-primary" size={28} />
                <CardTitle className="text-2xl">{t('languages.subtitle')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-3 bg-secondary/30 rounded-full overflow-hidden">
                      <div 
                        className="h-3 bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500" 
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Languages;
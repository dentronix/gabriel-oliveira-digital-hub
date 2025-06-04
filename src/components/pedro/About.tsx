
import React from 'react';
import { useLanguage } from '../../contexts/PedroLanguageContext';
import { Card, CardContent } from '../ui/card';
import { AspectRatio } from '../ui/aspect-ratio';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="bg-secondary/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <AspectRatio ratio={1/1} className="bg-background">
              <img 
                src="/lovable-uploads/9a6816ee-74aa-469d-80a7-89c0e006d080.png" 
                alt="Pedro Eduardo" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          
          <div>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mb-4">
              {t('about.brief')}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card/50 border-border card-hover">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
              <p className="text-muted-foreground">
                {t('about.description')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-border card-hover">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="font-medium">Bacharelado em Sistemas de Informação</span>
                  <span className="text-muted-foreground">FIAP (2021 - 2025)</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Técnico em Informática</span>
                  <span className="text-muted-foreground">Senac Brasil</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">First Certificate in English (FCE)</span>
                  <span className="text-muted-foreground">University of Cambridge</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

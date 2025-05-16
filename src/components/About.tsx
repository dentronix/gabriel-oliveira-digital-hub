
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="section-title">{t('about.title')}</h2>
        
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
                  <span className="font-medium">Data Science</span>
                  <span className="text-muted-foreground">Mackenzie University</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">Networks & Development</span>
                  <span className="text-muted-foreground">ETEC</span>
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

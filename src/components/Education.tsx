import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const { t } = useLanguage();
  
  const education = [
    {
      degree: t('education.mackenzie.degree'),
      institution: t('education.mackenzie.institution'),
      year: t('education.mackenzie.year'),
      description: t('education.mackenzie.description'),
    },
    {
      degree: t('education.etec_dev.degree'),
      institution: t('education.etec_dev.institution'),
      year: t('education.etec_dev.year'),
      description: t('education.etec_dev.description'),
    },
    {
      degree: t('education.etec_network.degree'),
      institution: t('education.etec_network.institution'),
      year: t('education.etec_network.year'),
      description: t('education.etec_network.description'),
    },
  ];
  
  return (
    <section id="education" className="bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="section-title">{t('education.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="h-full bg-card/50 border-border card-hover">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="text-primary" size={24} />
                  <span className="text-sm text-muted-foreground">{edu.year}</span>
                </div>
                <CardTitle className="text-lg">{edu.degree}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {edu.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
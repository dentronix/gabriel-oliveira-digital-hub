
import React from 'react';
import { useLanguage } from '../../contexts/PedroLanguageContext';
import { Card, CardContent } from '../ui/card';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t('experience.ferreira.company'),
      title: t('experience.ferreira.title'),
      period: t('experience.ferreira.period'),
      description: t('experience.ferreira.description'),
    },
    {
      company: t('experience.spc.company'),
      title: t('experience.spc.title'),
      period: t('experience.spc.period'),
      description: t('experience.spc.description'),
    },
    {
      company: t('experience.engeform.company'),
      title: t('experience.engeform.title'),
      period: t('experience.engeform.period'),
      description: t('experience.engeform.description'),
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 border-border card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <h4 className="text-lg font-medium">{exp.company}</h4>
                  </div>
                  <span className="text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      title: t('experience.engeform.title'),
      company: t('experience.engeform.company'),
      period: `2023 - ${t('experience.engeform.period')}`,
      description: t('experience.engeform.description'),
      skills: ['Python', 'SQL', 'API', 'AI agents', 'Microsoft Fabric', 'Power BI'],
    },
    {
      title: t('experience.bs.title'),
      company: t('experience.bs.company'),
      period: t('experience.bs.period'),
      description: t('experience.bs.description'),
      skills: ['Technical Support', 'Network Management', 'Asset Management'],
    },
    {
      title: t('experience.ykp.title'),
      company: t('experience.ykp.company'),
      period: t('experience.ykp.period'),
      description: t('experience.ykp.description'),
      skills: ['GCP', 'Windows Server', 'IT Support'],
    },
  ];
  
  return (
    <section id="experience">
      <div className="container mx-auto">
        <h2 className="section-title">{t('experience.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="h-full bg-card/50 border-border card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <Badge variant="outline" className="ml-2">{exp.period}</Badge>
                </div>
                <CardDescription className="text-base font-medium text-primary">
                  {exp.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-secondary/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

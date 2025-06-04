
import React from 'react';
import { useLanguage } from '../../contexts/PedroLanguageContext';
import { Card, CardContent } from '../ui/card';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.programming'),
      skills: ['SQL', 'Python', 'DAX', 'SQL Server', 'SSIS'],
    },
    {
      title: t('skills.tools'),
      skills: ['Power BI', 'Power Apps', 'Power Automate', 'SharePoint'],
    },
    {
      title: t('skills.automation'),
      skills: ['n8n', 'UiPath', 'BPMN', 'ETL', 'Process Mapping'],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 border-border card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
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

export default Skills;

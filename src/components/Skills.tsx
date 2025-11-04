
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t('skills.programming'),
      skills: [
        { name: 'Python', level: 90 },
        { name: 'SQL Server', level: 90 },
        { name: 'React Native', level: 85 },
        { name: 'ETL', level: 85 },
        { name: 'JavaScript', level: 70 },
      ],
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Power BI', level: 95 },
        { name: 'Microsoft Fabric', level: 90 },
        { name: 'APIs', level: 85 },
        { name: 'Git', level: 75 },
        { name: 'Scrum', level: 80 },
      ],
    },
    {
      title: t('skills.cloud'),
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Google Cloud Platform', level: 75 },
        { name: 'IA (Inteligência Artificial)', level: 80 },
      ],
    },
  ];
  
  return (
    <section id="skills">
      <div className="container mx-auto">
        <h2 className="section-title">{t('skills.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 border-border card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                        <div 
                          className="h-2 bg-primary rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
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

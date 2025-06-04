
import React from 'react';
import { useLanguage } from '../../contexts/PedroLanguageContext';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tech: ['Power BI', 'SQL', 'DAX'],
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tech: ['Power Apps', 'Power Automate', 'SharePoint'],
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tech: ['Power Automate', 'n8n', 'UiPath'],
    },
    {
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      tech: ['SSIS', 'SQL Server', 'Python'],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 border-border card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  {t('projects.viewGithub')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

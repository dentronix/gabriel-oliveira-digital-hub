
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { GitHub } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      github: 'https://github.com/httpg44b/python-automation',
      tech: ['Python', 'Pandas', 'SQLAlchemy'],
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      github: 'https://github.com/httpg44b/power-bi-dashboards',
      tech: ['Power BI', 'DAX', 'SQL'],
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      github: 'https://github.com/httpg44b/api-integration',
      tech: ['Python', 'Flask', 'REST API'],
    },
    {
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      github: 'https://github.com/httpg44b/sql-management',
      tech: ['SQL', 'Database Design', 'Performance Tuning'],
    },
  ];
  
  return (
    <section id="projects" className="bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="section-title">{t('projects.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 border-border card-hover h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-secondary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <GitHub size={16} />
                    <span>{t('projects.viewGithub')}</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

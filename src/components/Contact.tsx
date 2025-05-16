
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Mail, MessageSquare, Linkedin, GitHub } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: t('contact.email'),
      value: 'ogabriel867@gmail.com',
      href: 'mailto:ogabriel867@gmail.com',
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: t('contact.whatsapp'),
      value: '+55 11 95133-8478',
      href: 'https://wa.me/5511951338478',
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: t('contact.linkedin'),
      value: 'gabriel-oliveira-4675711a4',
      href: 'https://linkedin.com/in/gabriel-oliveira-4675711a4',
    },
    {
      icon: <GitHub className="h-6 w-6" />,
      title: t('contact.github'),
      value: 'httpg44b',
      href: 'https://github.com/httpg44b',
    },
  ];
  
  return (
    <section id="contact" className="bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="section-title">{t('contact.title')}</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8 text-center">{t('contact.description')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-card/50 border-border card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-medium mb-1">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.value}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.title}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

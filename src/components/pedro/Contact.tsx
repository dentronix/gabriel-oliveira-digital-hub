
import React from 'react';
import { useLanguage } from '../../contexts/PedroLanguageContext';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'pedro.eduardo@email.com',
      href: 'mailto:pedro.eduardo@email.com',
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: '+55 11 99999-9999',
      href: 'https://wa.me/5511999999999',
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'Pedro Eduardo',
      href: 'https://linkedin.com/in/pedro-eduardo',
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'pedro-eduardo',
      href: 'https://github.com/pedro-eduardo',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-card/50 border-border card-hover">
              <CardContent className="p-6 text-center">
                <method.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{method.label}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.value}</p>
                <Button variant="outline" size="sm" asChild>
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    Contatar
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

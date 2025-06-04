
import React from 'react';
import { useLanguage } from '../../contexts/PedroLanguageContext';

const Events = () => {
  const { t } = useLanguage();

  return (
    <section id="events" className="section-padding bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="section-title">Eventos e Participações</h2>
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            Participação ativa em eventos de tecnologia e inteligência artificial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;


import React from 'react';
import { useLanguage } from '../../contexts/PedroLanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import { Network, Monitor, Brain } from 'lucide-react';

const Events = () => {
  const { t } = useLanguage();
  
  const events = [
    {
      image: "/lovable-uploads/d2b1d86a-4c71-4c63-b956-061e439b2cdb.png",
      title: "Amazon AI Workshop",
      description: "Generative AI with Amazon Bedrock"
    },
    {
      image: "/lovable-uploads/e83c610f-9ef6-4f90-b24e-e62d3fd5ac23.png",
      title: "Amazon AWS",
      description: "Tech showcase event"
    },
    {
      image: "/lovable-uploads/2d93c9fb-51d2-49e4-a1a5-72440c3ef2c5.png",
      title: "Amazon Event",
      description: "Networking and technology innovation"
    },
    {
      image: "/lovable-uploads/b66f4121-a8a9-478e-a476-3436e8aa7f70.png",
      title: "Engeform & Amazon",
      description: "AI implementation collaboration"
    },
    {
      image: "/lovable-uploads/75484046-902e-4e25-9d4a-cd905901bf90.png",
      title: "Engeform AI",
      description: "Artificial Intelligence implementation"
    },
    {
      image: "/lovable-uploads/f5526b9c-95cd-4ac7-8895-4e09bfe6a613.png",
      title: "AWS Summit",
      description: "São Paulo tech event"
    },
    {
      image: "/lovable-uploads/22ddc404-bf47-4029-b504-8bd5c802c69c.png",
      title: "AWS Summit 2024",
      description: "Professional development event"
    }
  ];

  return (
    <section id="events" className="section-padding bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="section-title">Eventos e Participações</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8 text-center text-muted-foreground">
            Participação ativa em eventos de tecnologia e inteligência artificial.
          </p>
          
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {events.map((event, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none bg-transparent">
                      <CardContent className="flex flex-col items-center p-0">
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="mt-4 text-center">
                          <h3 className="text-xl font-medium">{event.title}</h3>
                          <p className="text-muted-foreground">{event.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </div>
            </Carousel>
            
            <div className="flex justify-center mt-8 gap-4">
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-3 mb-2">
                  <Network className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">Networking</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-3 mb-2">
                  <Brain className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">AI Learning</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="rounded-full bg-primary/10 p-3 mb-2">
                  <Monitor className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium">Tech Events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

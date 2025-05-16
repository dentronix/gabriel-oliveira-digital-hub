
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<string, Record<Language, string>> = {
  // Header
  'nav.about': {
    en: 'About',
    pt: 'Sobre',
  },
  'nav.experience': {
    en: 'Experience',
    pt: 'Experiência',
  },
  'nav.projects': {
    en: 'Projects',
    pt: 'Projetos',
  },
  'nav.skills': {
    en: 'Skills',
    pt: 'Habilidades',
  },
  'nav.contact': {
    en: 'Contact',
    pt: 'Contato',
  },
  
  // About
  'about.title': {
    en: 'About Me',
    pt: 'Sobre Mim',
  },
  'about.description': {
    en: 'I am a BI Intern with experience in automation using Python, ETL, SQL, Microsoft Fabric, and Power BI. I\'ve worked at companies like Engeform, BS Tecnologia, and YKP. I hold a degree in Data Science from Mackenzie and a technical certification in Networks/Development from ETEC.',
    pt: 'Sou um Estagiário de BI com experiência em automação com Python, ETL, SQL, Microsoft Fabric e Power BI. Trabalhei em empresas como Engeform, BS Tecnologia e YKP. Possuo formação em Data Science pela Mackenzie e técnico em Redes/Desenvolvimento pela ETEC.',
  },
  
  // Experience
  'experience.title': {
    en: 'Professional Experience',
    pt: 'Experiência Profissional',
  },
  'experience.engeform.title': {
    en: 'BI Intern',
    pt: 'Estagiário de BI',
  },
  'experience.engeform.company': {
    en: 'Engeform',
    pt: 'Engeform',
  },
  'experience.engeform.period': {
    en: 'Present',
    pt: 'Atual',
  },
  'experience.engeform.description': {
    en: 'Automation with Python, APIs integration, SQL database management, and implementation of AI agents for business intelligence solutions.',
    pt: 'Automação com Python, integração de APIs, gerenciamento de banco de dados SQL e implementação de agentes de IA para soluções de business intelligence.',
  },
  'experience.bs.title': {
    en: 'Support Analyst',
    pt: 'Analista de Suporte',
  },
  'experience.bs.company': {
    en: 'BS Tecnologia',
    pt: 'BS Tecnologia',
  },
  'experience.bs.period': {
    en: '2022 - 2023',
    pt: '2022 - 2023',
  },
  'experience.bs.description': {
    en: 'Technical support, network management, and asset management for clients.',
    pt: 'Suporte técnico, gerenciamento de redes e gerenciamento de ativos para clientes.',
  },
  'experience.ykp.title': {
    en: 'IT Intern',
    pt: 'Estagiário de TI',
  },
  'experience.ykp.company': {
    en: 'YKP',
    pt: 'YKP',
  },
  'experience.ykp.period': {
    en: '2021 - 2022',
    pt: '2021 - 2022',
  },
  'experience.ykp.description': {
    en: 'GCP implementation, Windows Server management, and IT troubleshooting.',
    pt: 'Implementação do GCP, gerenciamento do Windows Server e resolução de problemas de TI.',
  },
  
  // Projects
  'projects.title': {
    en: 'Projects',
    pt: 'Projetos',
  },
  'projects.viewGithub': {
    en: 'View on GitHub',
    pt: 'Ver no GitHub',
  },
  'projects.project1.title': {
    en: 'Python Automation',
    pt: 'Automação Python',
  },
  'projects.project1.description': {
    en: 'Automated ETL processes using Python with data integration from multiple sources.',
    pt: 'Processos ETL automatizados usando Python com integração de dados de múltiplas fontes.',
  },
  'projects.project2.title': {
    en: 'Power BI Dashboard',
    pt: 'Dashboard Power BI',
  },
  'projects.project2.description': {
    en: 'Interactive Business Intelligence dashboard created with Power BI for sales analysis.',
    pt: 'Dashboard interativo de Business Intelligence criado com Power BI para análise de vendas.',
  },
  'projects.project3.title': {
    en: 'API Integration',
    pt: 'Integração de API',
  },
  'projects.project3.description': {
    en: 'RESTful API integration project using Python to automate data extraction.',
    pt: 'Projeto de integração de API RESTful usando Python para automatizar a extração de dados.',
  },
  'projects.project4.title': {
    en: 'SQL Database Management',
    pt: 'Gerenciamento de Banco de Dados SQL',
  },
  'projects.project4.description': {
    en: 'SQL database optimization and management solutions for improved performance.',
    pt: 'Soluções de otimização e gerenciamento de banco de dados SQL para melhor desempenho.',
  },
  
  // Skills
  'skills.title': {
    en: 'Skills',
    pt: 'Habilidades',
  },
  'skills.programming': {
    en: 'Programming',
    pt: 'Programação',
  },
  'skills.tools': {
    en: 'Tools',
    pt: 'Ferramentas',
  },
  'skills.cloud': {
    en: 'AI & Cloud',
    pt: 'IA & Cloud',
  },
  
  // Contact
  'contact.title': {
    en: 'Contact',
    pt: 'Contato',
  },
  'contact.description': {
    en: 'Feel free to reach out to me through any of these channels:',
    pt: 'Sinta-se à vontade para entrar em contato comigo por qualquer um desses canais:',
  },
  'contact.email': {
    en: 'Email',
    pt: 'E-mail',
  },
  'contact.whatsapp': {
    en: 'WhatsApp',
    pt: 'WhatsApp',
  },
  'contact.linkedin': {
    en: 'LinkedIn',
    pt: 'LinkedIn',
  },
  'contact.github': {
    en: 'GitHub',
    pt: 'GitHub',
  },
  
  // Footer
  'footer.copyright': {
    en: '© 2025 Gabriel Oliveira. All rights reserved.',
    pt: '© 2025 Gabriel Oliveira. Todos os direitos reservados.',
  },
  'footer.backToTop': {
    en: 'Back to Top',
    pt: 'Voltar ao Topo',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

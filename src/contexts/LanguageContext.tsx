
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
  
  // Hero
  'hero.subtitle': {
    en: 'Mid-Level BI Analyst | Data Consultant | Power BI Specialist',
    pt: 'Analista de BI Pleno | Consultor de Dados | Especialista em Power BI',
  },
  
  // About
  'about.title': {
    en: 'About Me',
    pt: 'Sobre Mim',
  },
  'about.brief': {
    en: 'Resilient and dedicated data consultant with expertise in creating dashboards, KPIs, and management reports',
    pt: 'Consultor de dados resiliente e dedicado com expertise em criação de dashboards, KPIs e relatórios gerenciais',
  },
  'about.description': {
    en: 'I am a Mid-Level BI Analyst with extensive experience in automation using Python, ETL processes, SQL Server, Power BI, and Microsoft Fabric. I transform data into strategic insights to support business decisions. Currently working at B2B Mais, with previous experience at Engeform, BS Tecnologia, and YKP. I hold a degree in Data Science from Mackenzie and technical certifications in Systems Development and Computer Networks from ETEC.',
    pt: 'Sou um Analista de BI Pleno com ampla experiência em automação com Python, processos ETL, SQL Server, Power BI e Microsoft Fabric. Transformo dados em informações estratégicas para apoiar decisões empresariais. Atualmente trabalhando na B2B Mais, com experiências anteriores na Engeform, BS Tecnologia e YKP. Possuo formação em Ciência de Dados pela Mackenzie e certificações técnicas em Desenvolvimento de Sistemas e Redes de Computadores pela ETEC.',
  },
  
  // Experience
  'experience.title': {
    en: 'Professional Experience',
    pt: 'Experiência Profissional',
  },
  'experience.b2b.title': {
    en: 'Mid-Level BI Analyst',
    pt: 'Analista de BI Pleno',
  },
  'experience.b2b.company': {
    en: 'B2B Mais',
    pt: 'B2B Mais',
  },
  'experience.b2b.period': {
    en: 'Apr 2025 - Present',
    pt: 'Abr 2025 - Atual',
  },
  'experience.b2b.description': {
    en: 'Development of dashboards and KPIs in Power BI, data pipeline construction (ETL), API integration, data migration and governance, and participation in agile squads (Scrum).',
    pt: 'Desenvolvimento de dashboards e KPIs no Power BI, construção de pipelines de dados (ETL), integração com APIs, migração e governança de dados, e participação em squads ágeis (Scrum).',
  },
  'experience.engeform.title': {
    en: 'BI Analyst',
    pt: 'Analista de BI',
  },
  'experience.engeform.company': {
    en: 'Engeform',
    pt: 'Engeform',
  },
  'experience.engeform.period': {
    en: 'Nov 2023 - Apr 2025',
    pt: 'Nov 2023 - Abr 2025',
  },
  'experience.engeform.description': {
    en: 'Process automation with Python, data flow creation in Microsoft Fabric, API integration, SQL query optimization, and participation in innovation and AI projects.',
    pt: 'Automação de processos com Python, criação de fluxos de dados no Microsoft Fabric, integração de APIs, otimização de consultas SQL e participação em projetos de inovação e IA.',
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
    en: 'Jun 2022 - Nov 2023',
    pt: 'Jun 2022 - Nov 2023',
  },
  'experience.bs.description': {
    en: 'Local and remote technical support (TeamViewer, LogMeIn), asset and IT infrastructure management, server backup, and corporate network maintenance.',
    pt: 'Suporte técnico local e remoto (TeamViewer, LogMeIn), gestão de ativos e infraestrutura de TI, backup de servidores e manutenção de redes empresariais.',
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
    en: 'Jan 2021 - Jul 2021',
    pt: 'Jan 2021 - Jul 2021',
  },
  'experience.ykp.description': {
    en: 'Windows Server administration, hardware support, participation in Google Cloud Platform (GCP) projects, experience in local and cloud environments.',
    pt: 'Administração de Windows Server, suporte de hardware, participação em projetos com Google Cloud Platform (GCP), experiência em ambientes locais e em nuvem.',
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
  
  // Education
  'education.title': {
    en: 'Education',
    pt: 'Formação Acadêmica',
  },
  'education.mackenzie.degree': {
    en: 'Technology Degree in Data Science',
    pt: 'CST em Ciência de Dados',
  },
  'education.mackenzie.institution': {
    en: 'Mackenzie Presbyterian University',
    pt: 'Universidade Presbiteriana Mackenzie',
  },
  'education.mackenzie.year': {
    en: '2025',
    pt: '2025',
  },
  'education.mackenzie.description': {
    en: 'Higher education focused on data analysis, machine learning, and statistical modeling.',
    pt: 'Formação superior com foco em análise de dados, machine learning e modelagem estatística.',
  },
  'education.etec_dev.degree': {
    en: 'Technical in Systems Development',
    pt: 'Técnico em Desenvolvimento de Sistemas',
  },
  'education.etec_dev.institution': {
    en: 'ETEC',
    pt: 'ETEC',
  },
  'education.etec_dev.year': {
    en: '2021',
    pt: '2021',
  },
  'education.etec_dev.description': {
    en: 'Technical training in software development, programming, and database systems.',
    pt: 'Formação técnica em desenvolvimento de software, programação e sistemas de banco de dados.',
  },
  'education.etec_network.degree': {
    en: 'Technical in Computer Networks',
    pt: 'Técnico em Redes de Computadores',
  },
  'education.etec_network.institution': {
    en: 'ETEC',
    pt: 'ETEC',
  },
  'education.etec_network.year': {
    en: '2020',
    pt: '2020',
  },
  'education.etec_network.description': {
    en: 'Technical training in network infrastructure, administration, and maintenance.',
    pt: 'Formação técnica em infraestrutura, administração e manutenção de redes.',
  },
  
  // Languages
  'languages.title': {
    en: 'Languages',
    pt: 'Idiomas',
  },
  'languages.subtitle': {
    en: 'Language Proficiency',
    pt: 'Proficiência em Idiomas',
  },
  'languages.portuguese': {
    en: 'Portuguese',
    pt: 'Português',
  },
  'languages.english': {
    en: 'English',
    pt: 'Inglês',
  },
  'languages.french': {
    en: 'French',
    pt: 'Francês',
  },
  'languages.native': {
    en: 'Native',
    pt: 'Nativo',
  },
  'languages.advanced': {
    en: 'Advanced',
    pt: 'Avançado',
  },
  'languages.intermediate': {
    en: 'Intermediate',
    pt: 'Intermediário',
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

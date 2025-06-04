
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary for Pedro
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
  'about.brief': {
    en: 'Process-oriented data professional specialized in analysis, visualization and business intelligence',
    pt: 'Profissional de dados com abordagem orientada a processos, especializado em análise, visualização e inteligência de negócios',
  },
  'about.description': {
    en: 'Process-oriented data professional specialized in analysis, visualization and business intelligence. Experience in providing critical insights and detailed analysis for strategic decision making. Expertise in SQL, Power BI, SharePoint, Power Apps, Power Automate, SSIS, Python, n8n, and UiPath.',
    pt: 'Profissional de dados com abordagem orientada a processos, especializado em análise, visualização e inteligência de negócios. Experiência em fornecer insights críticos e análises detalhadas para tomada de decisões estratégicas. Especialista em SQL, Power BI, SharePoint, Power Apps, Power Automate, SSIS, Python, n8n e UiPath.',
  },
  
  // Experience
  'experience.title': {
    en: 'Professional Experience',
    pt: 'Experiência Profissional',
  },
  'experience.ferreira.title': {
    en: 'Business Intelligence Consultant',
    pt: 'Consultor de Business Intelligence',
  },
  'experience.ferreira.company': {
    en: 'Ferreira Civil',
    pt: 'Ferreira Civil',
  },
  'experience.ferreira.period': {
    en: 'Feb 2024 - Present',
    pt: 'Fev 2024 - Presente',
  },
  'experience.ferreira.description': {
    en: 'Specification meetings with clients for digital solutions design. Strategic dashboard development in Power BI. Power Apps applications creation and maintenance. Automated flow implementation with Power Automate. ChatGPT API utilization for conversational bots. Process automation with n8n and UiPath.',
    pt: 'Reuniões de especificação com clientes para desenho de soluções digitais. Desenvolvimento de dashboards estratégicos no Power BI. Criação e manutenção de aplicações no Power Apps. Implantação de fluxos automatizados com Power Automate. Utilização da API do ChatGPT para desenvolvimento de bots conversacionais. Automação de processos com n8n e UiPath.',
  },
  'experience.spc.title': {
    en: 'Business Intelligence Analyst',
    pt: 'Analista de Business Intelligence',
  },
  'experience.spc.company': {
    en: 'SPC Brasil',
    pt: 'SPC Brasil',
  },
  'experience.spc.period': {
    en: 'Aug 2024 - Oct 2024',
    pt: 'Ago 2024 - Out 2024',
  },
  'experience.spc.description': {
    en: 'Power BI dashboard development. SQL queries creation. Power Apps applications creation and support. Automated flow creation with Power Automate. Collaboration site development via SharePoint. Process mapping (BPMN) and bottleneck improvement.',
    pt: 'Desenvolvimento de dashboards em Power BI. Confecção de queries SQL. Criação e suporte de aplicações em Power Apps. Criação de fluxos automatizados com Power Automate. Desenvolvimento de sites de colaboração via SharePoint. Mapeamento de processos (BPMN) e melhoria de gargalos.',
  },
  'experience.engeform.title': {
    en: 'BI & Software Development Assistant',
    pt: 'Assistente de BI e Desenvolvimento',
  },
  'experience.engeform.company': {
    en: 'Engeform',
    pt: 'Engeform',
  },
  'experience.engeform.period': {
    en: 'Oct 2022 - Dec 2023',
    pt: 'Out 2022 - Dez 2023',
  },
  'experience.engeform.description': {
    en: 'Client specification meetings. Power BI dashboard development. Power Apps applications creation and maintenance. Power Automate flow automation. Leadership in multidisciplinary digital transformation squads. ETL and pipeline orchestration with SSIS.',
    pt: 'Reuniões de especificação com clientes. Desenvolvimento de dashboards em Power BI. Criação e manutenção de aplicações em Power Apps. Automação de fluxos com Power Automate. Liderança em squads multidisciplinares de transformação digital. ETL e orquestração de pipelines com SSIS.',
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
    en: 'Power BI Dashboards',
    pt: 'Dashboards Power BI',
  },
  'projects.project1.description': {
    en: 'Strategic dashboards for business intelligence with advanced visualizations and KPI monitoring.',
    pt: 'Dashboards estratégicos para business intelligence com visualizações avançadas e monitoramento de KPIs.',
  },
  'projects.project2.title': {
    en: 'Power Apps Solutions',
    pt: 'Soluções Power Apps',
  },
  'projects.project2.description': {
    en: 'Low-code applications for business process automation and digital transformation.',
    pt: 'Aplicações low-code para automação de processos de negócio e transformação digital.',
  },
  'projects.project3.title': {
    en: 'Process Automation',
    pt: 'Automação de Processos',
  },
  'projects.project3.description': {
    en: 'Automated workflows using Power Automate, n8n and UiPath for operational efficiency.',
    pt: 'Fluxos automatizados usando Power Automate, n8n e UiPath para eficiência operacional.',
  },
  'projects.project4.title': {
    en: 'ETL & Data Integration',
    pt: 'ETL e Integração de Dados',
  },
  'projects.project4.description': {
    en: 'Data pipeline orchestration and ETL processes using SSIS and SQL Server.',
    pt: 'Orquestração de pipelines de dados e processos ETL usando SSIS e SQL Server.',
  },
  
  // Skills
  'skills.title': {
    en: 'Skills',
    pt: 'Habilidades',
  },
  'skills.programming': {
    en: 'Programming & Databases',
    pt: 'Programação e Bancos',
  },
  'skills.tools': {
    en: 'Microsoft Tools',
    pt: 'Ferramentas Microsoft',
  },
  'skills.automation': {
    en: 'Automation & Integration',
    pt: 'Automação e Integração',
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
    en: '© 2025 Pedro Eduardo. All rights reserved.',
    pt: '© 2025 Pedro Eduardo. Todos os direitos reservados.',
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

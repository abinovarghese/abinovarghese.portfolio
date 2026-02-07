import { Injectable } from '@angular/core';

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    medium: string;
    twitter?: string;
  };
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getProfile(): Profile {
    return {
      name: 'Abin O Varghese',
      title: 'Senior Software Engineer',
      tagline: 'Building cloud-native distributed systems and AI-powered automation solutions',
      bio: `Senior Software Engineer with 8+ years of experience building cloud-native distributed systems and enterprise platforms. Expert in Java, Spring Boot, Kubernetes, and microservices architecture, with hands-on experience running production workloads on IBM Cloud. Proven track record of designing systems for scale, reliability, and cost efficiency. Currently delivering AI-powered automation solutions using LLMs, RAG pipelines, and agent-based architectures. Recognized as a Top 5% performer with multiple awards for innovation and client impact.`,
      location: 'Bangalore, India',
      email: 'abinovarghese@gmail.com',
      phone: '+91 9447708501',
      avatar: 'https://avatars.githubusercontent.com/u/9087797?v=4',
      resumeUrl: '/assets/resume.pdf',
      social: {
        github: 'https://github.com/abinovarghese',
        linkedin: 'https://linkedin.com/in/abinovarghese',
        medium: 'https://medium.com/@abinovarghese'
      }
    };
  }

  getSkills(): Skill[] {
    return [
      {
        category: 'Languages',
        items: [
          { name: 'Java', level: 95 },
          { name: 'Python', level: 85 },
          { name: 'JavaScript/TypeScript', level: 85 },
          { name: 'SQL', level: 80 }
        ]
      },
      {
        category: 'Backend & APIs',
        items: [
          { name: 'Spring Boot', level: 95 },
          { name: 'Microservices', level: 90 },
          { name: 'REST APIs', level: 95 },
          { name: 'GraphQL', level: 75 },
          { name: 'Hibernate', level: 85 }
        ]
      },
      {
        category: 'Cloud & DevOps',
        items: [
          { name: 'IBM Cloud', level: 90 },
          { name: 'Kubernetes', level: 88 },
          { name: 'Docker', level: 90 },
          { name: 'CI/CD (Jenkins, GitHub Actions)', level: 85 },
          { name: 'Terraform', level: 70 }
        ]
      },
      {
        category: 'Data & Caching',
        items: [
          { name: 'PostgreSQL', level: 88 },
          { name: 'Redis', level: 85 },
          { name: 'IBM Cloudant', level: 80 },
          { name: 'DB2', level: 75 },
          { name: 'MS SQL Server', level: 78 }
        ]
      },
      {
        category: 'Frontend',
        items: [
          { name: 'Angular', level: 90 },
          { name: 'HTML5/CSS3', level: 90 },
          { name: 'React', level: 60 }
        ]
      },
      {
        category: 'AI & Automation',
        items: [
          { name: 'LLMs (watsonx, GPT-4)', level: 85 },
          { name: 'RAG Pipelines', level: 85 },
          { name: 'Prompt Engineering', level: 88 },
          { name: 'LangChain', level: 80 },
          { name: 'AI Agents', level: 80 }
        ]
      }
    ];
  }

  getExperience(): Experience[] {
    return [
      {
        company: 'IBM India Pvt Ltd',
        role: 'Senior Software Engineer',
        period: 'April 2020 - Present',
        location: 'Bangalore, India',
        description: 'Architecting and delivering cloud-native microservices and AI-powered automation solutions on IBM Cloud.',
        achievements: [
          'Architected and delivered cloud-native microservices using Java 11+, Spring Boot, and REST APIs, deployed on IBM Cloud Kubernetes Service handling 10K+ daily requests',
          'Owned full-service lifecycle for 5+ production services — from system design and development to deployment, monitoring, and on-call support',
          'Built a custom ticketing platform integrated with ServiceNow REST APIs, serving 5,000+ internal users while reducing license costs by 85%',
          'Implemented Redis-based distributed caching, reducing average API response times by 35% and decreasing database load by 40%',
          'Developed LLM-powered AI assistants using watsonx and RAG pipelines, automating ticket classification and resolution, reducing manual handling effort by 30%',
          'Led technical design reviews and mentored 3 junior engineers, establishing code review standards and best practices',
          'Improved CI/CD pipelines with automated testing and deployment gates, increasing deployment frequency by 2x and reducing release failures by 50%'
        ],
        technologies: ['Java', 'Spring Boot', 'Kubernetes', 'IBM Cloud', 'Redis', 'watsonx', 'PostgreSQL', 'Docker', 'Jenkins']
      },
      {
        company: 'Infosys Ltd',
        role: 'Software Engineer',
        period: 'February 2017 - April 2020',
        location: 'India',
        description: 'Developed and maintained Java-based enterprise applications for Fortune 500 financial services clients.',
        achievements: [
          'Developed and maintained Java-based enterprise applications for a Fortune 500 financial services client, supporting 100K+ end users',
          'Optimized critical database queries and implemented connection pooling, reducing page load times by 45% for high-traffic modules',
          'Automated manual deployment processes using shell scripts and Jenkins, cutting release time from 4 hours to 30 minutes',
          'Recognized as a consistent high performer with top ratings across 6 consecutive review cycles'
        ],
        technologies: ['Java', 'Spring', 'SQL Server', 'Jenkins', 'Shell Scripting', 'Linux']
      }
    ];
  }

  getAwards(): { title: string; description: string }[] {
    return [
      { title: 'Consistent Outstanding Performer', description: 'Top 5% rating across multiple review cycles' },
      { title: 'IBM Entrepreneur Award', description: '2024 & 2023 — Innovation & Business Impact' },
      { title: 'IBM CIO Client & Partner Success Award', description: 'Q1 2022' },
      { title: 'IBM CIO Challenge Coin', description: '2021' },
      { title: 'INSTA Award', description: 'Infosys 2018' }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        title: 'AI-Powered Ticketing Platform',
        description: 'Custom enterprise ticketing platform integrated with ServiceNow REST APIs, serving 5,000+ internal users. Reduced ServiceNow license costs by 85% while improving user experience with AI-assisted ticket classification.',
        technologies: ['Java', 'Spring Boot', 'REST APIs', 'ServiceNow', 'Redis', 'PostgreSQL'],
        featured: true
      },
      {
        title: 'LLM-Powered AI Assistant',
        description: 'Intelligent automation system using watsonx LLMs and RAG pipelines for automated ticket classification, resolution suggestions, and knowledge retrieval. Reduced manual handling effort by 30%.',
        technologies: ['Python', 'watsonx', 'LangChain', 'RAG', 'AI Agents', 'FastAPI'],
        featured: true
      },
      {
        title: 'Advanced RAG System',
        description: 'Production-ready Retrieval-Augmented Generation system using LangChain and ChromaDB. Features hybrid search combining semantic and keyword matching with BM25 re-ranking for optimal retrieval accuracy.',
        technologies: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'FastAPI'],
        github: 'https://github.com/abinovarghese/AdvancedRAG',
        featured: true
      },
      {
        title: 'Interior Design AR',
        description: 'Augmented Reality application built on Google ARCore that allows users to visualize and customize 3D furniture in their space. Features real-time color and texture modification.',
        technologies: ['Android', 'ARCore', 'Java', 'OpenGL', '3D Modeling'],
        github: 'https://github.com/abinovarghese/Interior-Design-AR',
        featured: false
      },
      {
        title: 'Quote of the Day',
        description: 'Cross-platform mobile application built with React Native and Expo. Delivers daily inspirational quotes with beautiful UI and offline support.',
        technologies: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage'],
        github: 'https://github.com/abinovarghese',
        featured: false
      },
      {
        title: 'Jarviz Chatbot',
        description: 'Intelligent chatbot built using RiveScript for natural conversation flows. Integrated with web interface for seamless user interaction.',
        technologies: ['JavaScript', 'RiveScript', 'Node.js', 'HTML/CSS'],
        github: 'https://github.com/abinovarghese',
        demo: 'https://abinovarghese.github.io/jarviz',
        featured: false
      }
    ];
  }
}

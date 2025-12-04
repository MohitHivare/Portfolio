export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  features: string[];
  challenges: string;
  demoLink: string;
  githubLink: string;
  image?: string;
  category: 'fullstack' | 'ui' | 'creative';
  company: string; // Company where the project was performed
}

export const projects: Project[] = [
  // Project from First Company (1 project)
  {
    id: '1',
    name: 'E-Commerce Domain',
    description: 'Developed scalable e-commerce UI using Angular & RxJS with reusable components and full API integration for product catalog, cart, and checkout functionality.',
    techStack: ['Angular', 'RxJS', 'TypeScript', 'RESTful APIs', 'HTML5', 'CSS3'],
    features: [
      'Scalable and reusable UI components',
      'Product catalog with search and filtering',
      'Shopping cart functionality',
      'Checkout process integration',
      'Full API integration for product management',
    ],
    challenges: 'Built reusable component architecture for scalability. Implemented complex state management using RxJS observables for real-time cart updates and product synchronization across components.',
    demoLink: '',
    githubLink: '',
    category: 'fullstack',
    company: '',
  },
  
  // Projects from Current Company (4 projects)
  {
    id: '2',
    name: 'Real-Time Social & E-Commerce Platform',
    description: 'Built comprehensive Admin & User modules using React & Tailwind CSS with WebSocket & WebRTC integration for live chat and video consultation features.',
    techStack: ['React', 'Tailwind CSS', 'WebSocket', 'WebRTC', 'TypeScript', 'RESTful APIs'],
    features: [
      'Admin and User dashboard modules',
      'Real-time live chat using WebSocket',
      'Video consultation with WebRTC',
      'Full UI development and design',
      'Complete API integration',
    ],
    challenges: 'Implemented real-time communication with WebSocket for live chat while maintaining connection stability. Integrated WebRTC for video consultations with proper error handling and fallback mechanisms for network issues.',
    demoLink: '',
    githubLink: '',
    category: 'fullstack',
    company: '',
  },
  {
    id: '3',
    name: 'Job Portal',
    description: 'Designed and developed Admin and User dashboards similar to Indeed using React, featuring comprehensive job management, search functionality, and full API integration.',
    techStack: ['React', 'TypeScript', 'RESTful APIs', 'CSS3', 'Responsive Design'],
    features: [
      'Admin dashboard for job management',
      'User dashboard for job seekers',
      'Job search and filtering functionality',
      'Application tracking system',
      'Full API integration',
    ],
    challenges: 'Created a job portal interface similar to Indeed with complex filtering and search capabilities. Optimized performance for handling large datasets of job listings with efficient rendering and pagination.',
    demoLink: '',
    githubLink: '',
    category: 'fullstack',
    company: '',
  },
  {
    id: '4',
    name: 'Corporate Website',
    description: 'Developed responsive UI components with full cross-device compatibility, supporting all breakpoints and modern devices for optimal user experience.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Flexbox', 'Media Queries'],
    features: [
      'Fully responsive design',
      'Cross-device compatibility',
      'Support for all breakpoints',
      'Modern device optimization',
      'Accessible UI components',
    ],
    challenges: 'Ensured pixel-perfect responsive design across all devices and screen sizes. Implemented mobile-first approach with progressive enhancement for larger screens while maintaining consistent user experience.',
    demoLink: '',
    githubLink: '',
    category: 'ui',
    company: '',
  },
  {
    id: '5',
    name: 'Blockchain-Based Automation System',
    description: 'Created automation scripts using Python & Playwright to optimize workflow and testing processes for blockchain-based systems.',
    techStack: ['Python', 'Playwright', 'Automation', 'Testing'],
    features: [
      'Workflow automation scripts',
      'Automated testing processes',
      'Blockchain system integration',
      'Process optimization',
      'Error handling and reporting',
    ],
    challenges: 'Developed robust automation scripts to handle complex blockchain workflows. Implemented reliable test automation with Playwright while managing dynamic content and ensuring test stability across different environments.',
    demoLink: '',
    githubLink: '',
    category: 'fullstack',
    company: '',
  },
];


export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  projects: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'MarsDevs',
    period: 'Feb 2025 - Dec 2025',
    description: [
      'Developed and maintained multiple React-based web applications with modern UI/UX',
      'Collaborated with cross-functional teams to deliver high-quality, scalable products',
      'Implemented real-time features using WebSocket and WebRTC for enhanced user experience',
      'Built responsive and performant interfaces using React, TypeScript, and Tailwind CSS',
    ],
    projects: [
      'Real-Time Social & E-Commerce Platform',
      'Job Portal',
      'Corporate Website',
      'Blockchain-Based Automation System',
    ],
    technologies: [
      'React', 'TypeScript', 'Tailwind CSS', 'WebSocket', 'WebRTC', 
      'Python', 'Playwright', 'RESTful APIs', 'Responsive Design'
    ],
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Sculpture Tech',
    period: 'Apr 2024 - Jan 2025',
    description: [
      'Developed scalable e-commerce solutions using Angular and RxJS',
      'Built reusable component architecture for maintainability and scalability',
      'Implemented complex state management for real-time data synchronization',
      'Collaborated with backend teams for seamless API integration',
    ],
    projects: [
      'E-Commerce Domain',
    ],
    technologies: [
      'Angular', 'RxJS', 'TypeScript', 'RESTful APIs', 'HTML5', 'CSS3'
    ],
  },
];


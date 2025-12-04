import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaJava,
  FaBootstrap, FaCode, FaDesktop
} from 'react-icons/fa';
import { 
  SiTypescript, SiRedux, SiNextdotjs, SiAngular, SiTailwindcss,
  SiAxios, SiReactquery, SiReacthookform, SiReactrouter, SiWebrtc,
  SiStrapi, SiMysql, SiVite, SiGithub, SiPostman, SiJira
} from 'react-icons/si';

// Fallback icon for skills without specific icons
const DefaultIcon = FaCode;

export interface Skill {
  name: string;
  icon: React.ComponentType;
  level: number; // 0-100
  category: 'languages' | 'frontend' | 'stateData' | 'routingArchitecture' | 'realtimeAdvanced' | 'backendCms' | 'webCore' | 'buildTooling' | 'databases' | 'practices';
}

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript (ES6+)', icon: FaJs, level: 95, category: 'languages' },
  { name: 'TypeScript', icon: SiTypescript, level: 90, category: 'languages' },
  { name: 'Java', icon: FaJava, level: 75, category: 'languages' },
  { name: 'Python (basic)', icon: FaPython, level: 60, category: 'languages' },
  
  // Frontend
  { name: 'React', icon: FaReact, level: 95, category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, level: 85, category: 'frontend' },
  { name: 'Angular', icon: SiAngular, level: 75, category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, category: 'frontend' },
  { name: 'Bootstrap', icon: FaBootstrap, level: 85, category: 'frontend' },
  
  // State & Data
  { name: 'Redux Toolkit', icon: SiRedux, level: 90, category: 'stateData' },
  { name: 'TanStack Query (React Query)', icon: SiReactquery, level: 85, category: 'stateData' },
  { name: 'Axios', icon: SiAxios, level: 90, category: 'stateData' },
  { name: 'React Hook Form', icon: SiReacthookform, level: 88, category: 'stateData' },
  
  // Routing & Architecture
  { name: 'React Router', icon: SiReactrouter, level: 90, category: 'routingArchitecture' },
  { name: 'Micro-Frontend Architecture', icon: DefaultIcon, level: 80, category: 'routingArchitecture' },
  { name: 'System Design', icon: DefaultIcon, level: 75, category: 'routingArchitecture' },
  
  // Real-Time & Advanced Concepts
  { name: 'WebSocket', icon: DefaultIcon, level: 80, category: 'realtimeAdvanced' },
  { name: 'WebRTC', icon: SiWebrtc, level: 75, category: 'realtimeAdvanced' },
  { name: 'SSR / SSG / ISR (Next.js)', icon: SiNextdotjs, level: 85, category: 'realtimeAdvanced' },
  
  // Backend / CMS
  { name: 'Strapi (Headless CMS)', icon: SiStrapi, level: 80, category: 'backendCms' },
  { name: 'RESTful APIs', icon: DefaultIcon, level: 85, category: 'backendCms' },
  
  // Web Core
  { name: 'HTML5', icon: FaHtml5, level: 98, category: 'webCore' },
  { name: 'CSS3', icon: FaCss3Alt, level: 95, category: 'webCore' },
  { name: 'Flexbox', icon: FaCss3Alt, level: 95, category: 'webCore' },
  { name: 'DOM', icon: DefaultIcon, level: 90, category: 'webCore' },
  { name: 'JSON', icon: DefaultIcon, level: 95, category: 'webCore' },
  { name: 'AJAX', icon: DefaultIcon, level: 85, category: 'webCore' },
  
  // Build/Tooling
  { name: 'Vite', icon: SiVite, level: 90, category: 'buildTooling' },
  { name: 'Git', icon: FaGitAlt, level: 90, category: 'buildTooling' },
  { name: 'GitHub', icon: SiGithub, level: 90, category: 'buildTooling' },
  { name: 'Postman', icon: SiPostman, level: 85, category: 'buildTooling' },
  { name: 'Chrome DevTools', icon: DefaultIcon, level: 88, category: 'buildTooling' },
  { name: 'Jira', icon: SiJira, level: 80, category: 'buildTooling' },
  
  // Databases
  { name: 'MySQL (basic)', icon: SiMysql, level: 70, category: 'databases' },
  
  // Practices
  { name: 'Responsive Design', icon: FaDesktop, level: 95, category: 'practices' },
  { name: 'Performance Optimization', icon: DefaultIcon, level: 85, category: 'practices' },
  { name: 'Agile/Scrum', icon: DefaultIcon, level: 80, category: 'practices' },
];


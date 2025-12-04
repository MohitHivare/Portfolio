import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        name: "Mohit Rajesh Hivare",
        title: "Frontend / Full-Stack Developer (React Specialist)",
        tagline:
          "Crafting high-performance, scalable, and visually engaging web experiences using modern React technologies",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
        downloadResume: "Download Resume",
      },

      about: {
        title: "About Me",
        bio: 
          "I am a passionate Frontend / Full-Stack Developer specializing in React and modern JavaScript technologies. I focus on building scalable, responsive and high-performance applications with clean, maintainable code and a strong user experience.",
        
        passion:
          "I enjoy working on complex frontend architectures, real-time applications, and optimizing performance. I consistently stay up to date with modern trends like Next.js, advanced state management, real-time systems, and scalable UI architecture.",
        
        seeking:
          "Currently seeking an opportunity as a React Developer or Frontend Engineer where I can contribute my technical skills to impactful, real-world products.",
        
        funFact:
          "Fun fact: I love debugging complex UI issues and optimizing applications for better performance.",
      },

      skills: {
        title: "Technical Skills",
        all: "All Skills",
        languages: "Languages",
        frontend: "Frontend",
        stateData: "State & Data",
        routingArchitecture: "Routing & Architecture",
        realtimeAdvanced: "Real-Time & Advanced Concepts",
        backendCms: "Backend / CMS",
        webCore: "Web Core",
        buildTooling: "Build/Tooling",
        databases: "Databases",
        practices: "Practices",
      },

      projects: {
        title: "Projects",
        viewDemo: "Live Demo",
        viewCode: "Source Code",
        keyFeatures: "Key Features",
        challenges: "Challenges & Solutions",
        techStack: "Technology Stack",
      },

      experience: {
        title: "Professional Experience",
      },

      contact: {
        title: "Get In Touch",
        subtitle:
          "Open for collaboration, freelance work, and full-time opportunities. Let's connect and build something great together.",
        email: "Email",
        phone: "Contact Number",
      },
    },
  },

  es: {
    translation: {
      hero: {
        name: "Mohit Rajesh Hivare",
        title: "Desarrollador Frontend / Full-Stack (Especialista en React)",
        tagline:
          "Creando experiencias web escalables, rápidas y atractivas con tecnologías modernas de React",
        viewProjects: "Ver Proyectos",
        contactMe: "Contáctame",
        downloadResume: "Descargar CV",
      },

      about: {
        title: "Sobre Mí",
        bio:
          "Soy un Desarrollador Frontend / Full-Stack con gran pasión por React y las tecnologías modernas de JavaScript. Me especializo en crear aplicaciones escalables, responsivas y de alto rendimiento con código limpio y mantenible.",

        passion:
          "Disfruto trabajar en arquitecturas frontend complejas, aplicaciones en tiempo real y optimización de rendimiento, manteniéndome siempre actualizado con tecnologías modernas como Next.js.",

        seeking:
          "Actualmente busco una oportunidad como Desarrollador React o Ingeniero Frontend donde pueda aportar mis habilidades técnicas a proyectos innovadores.",

        funFact:
          "Dato curioso: Me gusta depurar problemas de UI complejos y optimizar aplicaciones para mejor rendimiento.",
      },

      skills: {
        title: "Habilidades Técnicas",
        all: "Todas las Habilidades",
        languages: "Lenguajes",
        frontend: "Frontend",
        stateData: "Estado & Datos",
        routingArchitecture: "Enrutamiento & Arquitectura",
        realtimeAdvanced: "Tiempo Real & Conceptos Avanzados",
        backendCms: "Backend / CMS",
        webCore: "Núcleo Web",
        buildTooling: "Construcción/Herramientas",
        databases: "Bases de Datos",
        practices: "Prácticas",
      },

      projects: {
        title: "Proyectos",
        viewDemo: "Demo en Vivo",
        viewCode: "Código Fuente",
        keyFeatures: "Características Principales",
        challenges: "Desafíos & Soluciones",
        techStack: "Tecnologías Utilizadas",
      },

      experience: {
        title: "Experiencia Profesional",
      },

      contact: {
        title: "Contacto",
        subtitle:
          "Disponible para colaboraciones, trabajo freelance y oportunidades a tiempo completo. ¡Conectemos!",
        email: "Correo",
        phone: "Número de Contacto",
      },
    },
  },
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


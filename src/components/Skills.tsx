import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { skills, type Skill } from '../data/skills';
import { useMemo, useState } from 'react';

const Skills = () => {
  const { t } = useTranslation();
  
  const groupedSkills = useMemo(() => {
    const groups: Record<string, Skill[]> = {
      languages: [],
      frontend: [],
      stateData: [],
      routingArchitecture: [],
      realtimeAdvanced: [],
      backendCms: [],
      webCore: [],
      buildTooling: [],
      databases: [],
      practices: [],
    };
    skills.forEach((skill) => {
      groups[skill.category].push(skill);
    });
    return groups;
  }, []);

  const categories = Object.keys(groupedSkills).filter(
    (cat) => groupedSkills[cat].length > 0
  );

  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || 'languages');

  // Skill color mapping for colored icons
  const getSkillColor = (skillName: string): string => {
    const colorMap: Record<string, string> = {
      'React': '#61DAFB',
      'JavaScript (ES6+)': '#F7DF1E',
      'TypeScript': '#3178C6',
      'Next.js': '#000000',
      'Angular': '#DD0031',
      'Tailwind CSS': '#06B6D4',
      'Bootstrap': '#7952B3',
      'Redux Toolkit': '#764ABC',
      'TanStack Query (React Query)': '#FF4154',
      'Axios': '#5A29E4',
      'React Hook Form': '#EC5990',
      'React Router': '#CA4245',
      'WebSocket': '#010101',
      'WebRTC': '#EF4444',
      'Strapi (Headless CMS)': '#4945FF',
      'HTML5': '#E34F26',
      'CSS3': '#1572B6',
      'Vite': '#646CFF',
      'Git': '#F05032',
      'GitHub': '#181717',
      'Postman': '#FF6C37',
      'Jira': '#0052CC',
      'MySQL (basic)': '#4479A1',
      'Java': '#ED8B00',
      'Python (basic)': '#3776AB',
    };
    return colorMap[skillName] || '#646cff';
  };

  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    const Icon = skill.icon;
    const skillColor = getSkillColor(skill.name);
    
    return (
      <motion.div
        className="bg-white dark:bg-bg-tertiary backdrop-blur-md p-5 rounded-2xl flex flex-col items-center justify-center gap-3 border-2 border-gray-300 dark:border-white/15 transition-all duration-300 relative overflow-hidden w-full cursor-pointer hover:border-accent hover:shadow-[0_8px_25px_rgba(100,108,255,0.2)] dark:hover:border-accent/60 dark:hover:shadow-[0_8px_25px_rgba(100,108,255,0.3)] hover:-translate-y-1"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/8 border-2 border-gray-200 dark:border-white/15 flex items-center justify-center relative z-[2] transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_4px_16px_rgba(100,108,255,0.25)]">
            <div className="text-3xl transition-all duration-300 flex items-center justify-center" style={{ color: skillColor }}>
              <Icon />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center min-w-0 text-center">
          <h4 className="text-sm font-semibold text-gray-800 dark:text-text-primary leading-snug break-words m-0 tracking-tight">{skill.name}</h4>
        </div>
      </motion.div>
    );
  };

  const activeSkills = groupedSkills[activeCategory] || [];

  return (
    <section id="skills" className="py-20 px-8 bg-gradient-to-b from-bg-secondary to-bg-primary">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-br from-accent via-accent-hover to-[#a855f7] bg-clip-text text-transparent tracking-tight relative leading-[1.2] py-2 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-accent after:to-accent-hover after:rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('skills.title')}
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12 p-6 bg-white/[0.08] dark:bg-white/5 backdrop-blur-lg rounded-3xl border-2 border-gray-200 dark:border-white/10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-300 relative overflow-visible font-inherit ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-accent/30 to-accent-hover/30 border-2 border-accent text-text-primary shadow-[0_4px_20px_rgba(100,108,255,0.4)] -translate-y-0.5 font-bold after:content-[""] after:absolute after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-2rem)] after:h-[3px] after:bg-gradient-to-r after:from-accent after:via-[#7c84ff] after:to-[#8b5cf6] after:rounded-t-sm hover:from-accent/40 hover:to-accent-hover/40 hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(100,108,255,0.5)]'
                  : 'bg-white dark:bg-bg-tertiary backdrop-blur-md border-2 border-gray-300 dark:border-white/15 text-gray-800 dark:text-text-primary hover:border-accent/60 dark:hover:border-accent/60 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(100,108,255,0.25)] dark:hover:shadow-[0_6px_20px_rgba(100,108,255,0.3)] hover:bg-white/95 dark:hover:bg-white/8 after:content-[""] after:absolute after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-accent after:via-[#7c84ff] after:to-[#8b5cf6] after:rounded-t-sm after:transition-all after:duration-300'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10 font-semibold">
                {t(`skills.${category}`)}
              </span>
              <span className={`inline-flex items-center justify-center min-w-6 h-6 px-2.5 rounded-xl text-xs font-bold relative z-10 border ${
                activeCategory === category
                  ? 'bg-accent border-accent text-white font-extrabold shadow-[0_2px_8px_rgba(100,108,255,0.4)]'
                  : 'bg-gray-100 dark:bg-white/10 border-gray-300 dark:border-white/15 text-gray-700 dark:text-text-primary'
              }`}>
                {groupedSkills[category].length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="min-h-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 justify-items-stretch">
              {activeSkills.length > 0 ? (
                activeSkills.map((skill, index) => (
                  <SkillCard key={`${activeCategory}-${skill.name}-${index}`} skill={skill} index={index} />
                ))
              ) : (
                <div className="text-text-secondary text-center py-8">No skills found</div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;


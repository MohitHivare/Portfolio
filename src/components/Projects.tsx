import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useMemo, useEffect } from 'react';
import { projects } from '../data/projects';
import { FaSearch } from 'react-icons/fa';

const Projects = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'fullstack' | 'ui' | 'creative'>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, filterCategory]);

  useEffect(() => {
    if (filteredProjects.length > 0 && !selectedProject) {
      setSelectedProject(filteredProjects[0].id);
    } else if (filteredProjects.length > 0 && selectedProject) {
      const isSelectedInFiltered = filteredProjects.some(p => p.id === selectedProject);
      if (!isSelectedInFiltered) {
        setSelectedProject(filteredProjects[0].id);
      }
    } else if (filteredProjects.length === 0) {
      setSelectedProject(null);
    }
  }, [filteredProjects, selectedProject]);

  const categoryColors: Record<string, string> = {
    fullstack: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    ui: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    creative: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  };

  const getCategoryColor = (category: string) => {
    return categoryColors[category] || categoryColors.fullstack;
  };

  return (
    <section id="projects" className="py-20 px-8 bg-gradient-to-b from-bg-primary to-bg-secondary">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-br from-accent via-accent-hover to-[#a855f7] bg-clip-text text-transparent tracking-tight relative leading-[1.2] py-2 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-accent after:to-accent-hover after:rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('projects.title')}
        </motion.h2>

        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
          <div className="relative flex-1 max-w-[400px] group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary transition-colors duration-300 group-focus-within:text-accent" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3.5 px-12 border-2 border-border rounded-xl bg-bg-primary text-text-primary text-base font-inherit transition-all duration-300 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)] focus:-translate-y-0.5"
              aria-label="Search projects"
            />
          </div>
          <motion.div
            className="flex flex-wrap gap-4 justify-center p-6 bg-white/[0.08] dark:bg-white/5 backdrop-blur-lg rounded-3xl border-2 border-gray-200 dark:border-white/10 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {(['all', 'fullstack', 'ui', 'creative'] as const).map((category) => (
              <motion.button
                key={category}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-semibold cursor-pointer transition-all duration-300 relative overflow-visible font-inherit ${
                  filterCategory === category
                    ? 'bg-gradient-to-r from-accent/30 to-accent-hover/30 border-2 border-accent text-text-primary shadow-[0_4px_20px_rgba(100,108,255,0.4)] -translate-y-0.5 font-bold after:content-[""] after:absolute after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-2rem)] after:h-[3px] after:bg-gradient-to-r after:from-accent after:via-[#7c84ff] after:to-[#8b5cf6] after:rounded-t-sm hover:from-accent/40 hover:to-accent-hover/40 hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(100,108,255,0.5)]'
                    : 'bg-white dark:bg-bg-tertiary backdrop-blur-md border-2 border-gray-300 dark:border-white/15 text-gray-800 dark:text-text-primary hover:border-accent/60 dark:hover:border-accent/60 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(100,108,255,0.25)] dark:hover:shadow-[0_6px_20px_rgba(100,108,255,0.3)] hover:bg-white/95 dark:hover:bg-white/8 after:content-[""] after:absolute after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-accent after:via-[#7c84ff] after:to-[#8b5cf6] after:rounded-t-sm after:transition-all after:duration-300'
                }`}
                onClick={() => setFilterCategory(category)}
                aria-label={`Filter by ${category}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10 font-semibold">
                  {category === 'fullstack' ? 'Frontend' : category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-[320px_1fr] gap-8 max-w-[1400px] mx-auto min-h-[600px] max-md:grid-cols-1">
            <div className="flex flex-col gap-3 sticky top-[120px] h-fit max-h-[calc(100vh-140px)] overflow-y-auto pr-2 pl-2 pt-2 pb-2 max-md:static max-md:max-h-none max-md:flex-row max-md:overflow-x-auto max-md:overflow-y-hidden scrollbar-hide">
              <style>{`
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
              `}</style>
              {filteredProjects.map((project, index) => (
                <motion.button
                  key={project.id}
                  type="button"
                  className={`relative backdrop-blur-md border-2 rounded-2xl px-7 py-6 cursor-pointer transition-all duration-300 text-left w-full font-inherit overflow-visible ${
                    selectedProject === project.id
                      ? 'bg-gradient-to-r from-accent/30 to-accent-hover/30 border-accent text-text-primary shadow-[0_4px_20px_rgba(100,108,255,0.4)] -translate-y-0.5 font-bold after:content-[""] after:absolute after:-bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-2rem)] after:h-[3px] after:bg-gradient-to-r after:from-accent after:via-[#7c84ff] after:to-[#8b5cf6] after:rounded-t-sm'
                      : 'bg-white dark:bg-bg-tertiary border-gray-300 dark:border-white/15 hover:border-accent/60 dark:hover:border-accent/60 hover:shadow-[0_6px_20px_rgba(100,108,255,0.2)] dark:hover:shadow-[0_6px_20px_rgba(100,108,255,0.3)] hover:-translate-y-0.5'
                  }`}
                  onClick={() => setSelectedProject(project.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    '--category-color': getCategoryColor(project.category),
                  } as React.CSSProperties}
                >
                  <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-[var(--category-color)] rounded-r transition-all duration-300 z-10 shadow-[0_0_12px_var(--category-color)]"
                    style={{
                      height: selectedProject === project.id ? '90%' : '0%',
                      opacity: selectedProject === project.id ? 1 : 0,
                    }}
                  />
                  <div className="relative z-10 flex flex-col gap-2">
                    <h3 className={`text-lg font-bold m-0 leading-tight ${
                      selectedProject === project.id 
                        ? 'text-gray-900 dark:text-text-primary' 
                        : 'text-gray-800 dark:text-text-primary'
                    }`}>{project.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-text-secondary m-0 uppercase tracking-wider">{project.category === 'fullstack' ? 'Frontend' : project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="relative min-h-[600px]">
              <AnimatePresence mode="wait">
                {selectedProject && (() => {
                  const project = filteredProjects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <motion.div
                      key={project.id}
                      className="bg-white/5 dark:bg-black/5 backdrop-blur-md rounded-[20px] overflow-hidden border-2 border-white/10 dark:border-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex flex-col h-full relative before:content-[''] before:absolute before:inset-[-2px] before:rounded-[20px] before:bg-gradient-to-br before:from-accent before:via-accent-hover before:to-[#a855f7] before:opacity-10 before:-z-10 before:blur-sm after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-1 after:bg-[var(--category-color)] after:rounded-t-[20px] after:opacity-80"
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      style={{
                        '--category-color': getCategoryColor(project.category),
                      } as React.CSSProperties}
                    >
                      <div className="p-10 flex flex-col flex-1 gap-6">
                        <div className="flex items-center justify-between gap-6 mb-2 flex-wrap">
                          <h3 className="text-2xl font-bold text-text-primary leading-tight m-0 bg-gradient-to-br from-text-primary to-accent bg-clip-text text-transparent">
                            {project.name}
                          </h3>
                          <span 
                            className="px-4 py-2 rounded-xl text-xs font-bold text-white uppercase tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.2)] whitespace-nowrap flex-shrink-0"
                            style={{ background: getCategoryColor(project.category) }}
                          >
                            {project.category === 'fullstack' ? 'Frontend' : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                          </span>
                        </div>
                        
                        <p className="text-text-secondary leading-relaxed text-[0.95rem] m-0">{project.description}</p>
                        
                        <div className="m-0">
                          <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2.5 mt-0">
                            {project.techStack.map((tech) => (
                              <motion.span 
                                key={tech} 
                                className="px-3.5 py-1.5 bg-white dark:bg-bg-tertiary rounded-xl text-xs font-medium text-gray-800 dark:text-text-primary border-2 border-gray-300 dark:border-white/15 transition-all duration-300 cursor-default hover:border-accent hover:text-accent dark:hover:text-accent hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(100,108,255,0.2)] dark:hover:shadow-[0_4px_8px_rgba(100,108,255,0.3)]"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div className="m-0">
                          <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">{t('projects.keyFeatures')}</h4>
                          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                            {project.features.map((feature, idx) => (
                              <motion.li 
                                key={idx}
                                className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <span className="flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center bg-gradient-to-br from-accent to-accent-hover text-white rounded-full text-[0.7rem] font-bold mt-0.5">✓</span>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="m-0">
                          <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 block">{t('projects.challenges')}</h4>
                          <p className="text-text-secondary leading-relaxed text-sm m-0 p-4 bg-bg-secondary rounded-xl border-l-[3px] border-accent">
                            {project.challenges}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <motion.div 
            className="text-center py-16 px-8 text-text-secondary text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>No projects found matching your search.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

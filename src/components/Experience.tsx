import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { experiences } from '../data/experience';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 px-8 bg-gradient-to-b from-bg-primary to-bg-secondary">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-br from-accent via-accent-hover to-[#a855f7] bg-clip-text text-transparent tracking-tight relative leading-[1.2] py-2 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-accent after:to-accent-hover after:rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('experience.title')}
        </motion.h2>

        <div className="relative max-w-[1000px] mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-12 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="bg-white/5 dark:bg-black/5 backdrop-blur-md rounded-[20px] border-2 border-white/10 dark:border-black/10 p-10 transition-all duration-300 relative overflow-hidden before:content-[''] before:absolute before:inset-[-2px] before:rounded-[20px] before:bg-gradient-to-br before:from-accent before:via-accent-hover before:to-[#a855f7] before:opacity-0 before:transition-opacity before:duration-300 before:-z-10 before:blur-sm hover:before:opacity-30 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(100,108,255,0.25)] hover:bg-white/5 dark:hover:bg-black/4">
                <div className="flex gap-8 relative max-md:flex-col max-md:gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-accent to-accent-hover flex items-center justify-center shadow-[0_4px_15px_rgba(100,108,255,0.4)] relative z-[2]">
                      <FaBriefcase className="text-2xl text-white" />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+3rem)] bg-gradient-to-b from-accent to-transparent z-10" />
                    )}
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="flex justify-between items-start gap-6 flex-wrap pb-6 border-b-2 border-white/10 max-md:flex-col max-md:items-start">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[1.75rem] font-bold text-text-primary m-0 bg-gradient-to-br from-text-primary to-accent bg-clip-text text-transparent">
                          {exp.title}
                        </h3>
                        <span className="text-xl text-accent font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex flex-col items-end gap-2 max-md:items-start max-md:w-full">
                        <span className="flex items-center gap-2 text-text-secondary text-[0.95rem] font-medium">
                          <FaCalendarAlt className="text-accent" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="m-0">
                      <h4 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Responsibilities</h4>
                      <ul className="list-none p-0 m-0 flex flex-col gap-3">
                        {exp.description.map((item, idx) => (
                          <motion.li 
                            key={idx}
                            className="flex items-start gap-3 text-text-secondary leading-relaxed text-[0.95rem]"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + idx * 0.05 }}
                          >
                            <span className="text-accent font-bold flex-shrink-0 mt-0.5">▸</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="m-0">
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3.5 py-1.5 bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-border rounded-xl text-xs font-medium text-text-primary transition-all duration-300 cursor-default hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(100,108,255,0.3)]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + idx * 0.03 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


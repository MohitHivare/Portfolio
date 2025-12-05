import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaReact } from 'react-icons/fa';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-8 bg-gradient-to-b from-bg-primary to-bg-secondary relative">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-br from-accent via-accent-hover to-[#a855f7] bg-clip-text text-transparent tracking-tight relative leading-[1.2] py-2 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-accent after:to-accent-hover after:rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('about.title')}
        </motion.h2>

        <div className="grid grid-cols-[1.5fr_1fr] gap-16 items-center max-md:grid-cols-1">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-text-secondary mb-8">{t('about.bio')}</p>
            <p className="text-lg leading-relaxed text-text-secondary mb-8">{t('about.passion')}</p>
            <p className="text-lg leading-relaxed text-text-secondary">{t('about.seeking')}</p>
          </motion.div>

          <motion.div
            className="text-center p-8 bg-white/[0.03] dark:bg-black/[0.02] backdrop-blur-md rounded-3xl border border-white/10 dark:border-black/10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-8 flex justify-center">
              <FaReact className="text-6xl text-[#61DAFB] drop-shadow-[0_2px_6px_rgba(97,218,251,0.3)]" style={{ animation: 'spin-slow 20s linear infinite' }} />
            </div>
            <p className="text-base leading-relaxed text-text-secondary">{t('about.funFact')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 


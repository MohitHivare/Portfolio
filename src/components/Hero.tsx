import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaDownload, FaEnvelope, FaCode } from 'react-icons/fa';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-8 py-32 pb-20 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden before:content-[''] before:absolute before:-top-1/2 before:-right-1/5 before:w-[600px] before:h-[600px] before:bg-radial-gradient before:rounded-full before:animate-[float_20s_ease-in-out_infinite] before:bg-[radial-gradient(circle,rgba(100,108,255,0.1)_0%,transparent_70%)] after:content-[''] after:absolute after:-bottom-[30%] after:-left-[10%] after:w-[500px] after:h-[500px] after:bg-radial-gradient after:rounded-full after:animate-[float_15s_ease-in-out_infinite_reverse] after:bg-[radial-gradient(circle,rgba(124,58,237,0.1)_0%,transparent_70%)]">
      <div className="max-w-6xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <div className="relative w-[180px] h-[180px] mx-auto">
              <img 
                src={`${import.meta.env.BASE_URL}profile-image.png`}
                alt="Profile" 
                className="w-[180px] h-[180px] rounded-full object-cover border-4 border-accent/30 shadow-[0_20px_60px_rgba(100,108,255,0.4)] relative z-10 transition-all duration-300 block hover:scale-105 hover:shadow-[0_25px_70px_rgba(100,108,255,0.5)]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-accent via-accent-hover to-[#a855f7] flex items-center justify-center mx-auto text-7xl font-extrabold text-white shadow-[0_20px_60px_rgba(100,108,255,0.4)] relative transition-transform duration-300 before:content-[''] before:absolute before:inset-[-4px] before:rounded-full before:bg-gradient-to-br before:from-accent before:via-accent-hover before:to-[#a855f7] before:-z-10 before:opacity-50 before:blur-[20px]" style={{ display: 'none' }}>
                <span>MH</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-7xl font-extrabold mb-4 bg-gradient-to-br from-text-primary via-accent to-accent-hover bg-clip-text text-transparent tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('hero.name')}
          </motion.h1>

          <motion.h2
            className="text-[1.75rem] text-text-secondary mb-6 font-medium tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('hero.title')}
          </motion.h2>

          <motion.p
            className="text-xl text-text-secondary mb-12 max-w-[700px] mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.div
            className="flex gap-5 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button
              className="px-9 py-4 border-none rounded-2xl text-base font-semibold cursor-pointer flex items-center gap-2 bg-gradient-to-br from-accent via-accent-hover to-[#a855f7] text-white shadow-[0_4px_15px_rgba(100,108,255,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(100,108,255,0.5)] relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:bg-white/20 before:rounded-full before:transition-all before:duration-600 hover:before:w-[300px] hover:before:h-[300px]"
              onClick={() => scrollToSection('projects')}
              aria-label={t('hero.viewProjects')}
            >
              <FaCode /> {t('hero.viewProjects')}
            </button>
            <button
              className="px-9 py-4 border-2 border-accent rounded-2xl text-base font-semibold cursor-pointer flex items-center gap-2 bg-white dark:bg-white text-gray-900 dark:text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(100,108,255,0.3)]"
              onClick={() => scrollToSection('contact')}
              aria-label={t('hero.contactMe')}
            >
              <FaEnvelope /> {t('hero.contactMe')}
            </button>
            <button
              className="px-9 py-4 border-2 border-gray-300 dark:border-gray-400 rounded-2xl text-base font-semibold cursor-pointer flex items-center gap-2 bg-white dark:bg-white text-gray-900 dark:text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
              onClick={() => window.open(`${import.meta.env.BASE_URL}Mohit Rajesh Hivare Resume.pdf`, '_blank')}
              aria-label={t('hero.downloadResume')}
            >
              <FaDownload /> {t('hero.downloadResume')}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


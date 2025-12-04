import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      className="relative w-auto h-12 rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-md border-2 border-white/10 dark:border-black/10 text-text-primary flex items-center justify-center gap-2 px-5 transition-all duration-300 hover:border-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 hover:bg-white/5 dark:hover:bg-black/5 hover:scale-105 overflow-hidden group"
      onClick={toggleLanguage}
      aria-label={`Switch to ${i18n.language === 'en' ? 'Spanish' : 'English'}`}
    >
      <span className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent to-accent-hover opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm -z-10" />
      <FaGlobe />
      <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;


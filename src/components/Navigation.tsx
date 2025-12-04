import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'code-showcase', label: 'Code' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] bg-white/[0.03] dark:bg-black/[0.02] backdrop-blur-md border-b-2 border-white/10 dark:border-black/10 transition-all duration-300 ${
      isScrolled ? 'shadow-lg bg-white/5 dark:bg-black/4 border-white/15 dark:border-black/15' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <motion.div
          className="text-3xl font-extrabold cursor-pointer bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent tracking-tight transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span onClick={() => scrollToSection('hero')}>Portfolio</span>
        </motion.div>

        <ul className="hidden md:flex list-none gap-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative bg-transparent border-none text-text-primary text-[0.95rem] font-medium cursor-pointer px-4 py-2.5 transition-all duration-300 opacity-80 hover:opacity-100 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden bg-transparent border-none text-text-primary text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-bg-secondary border-t border-border overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full py-4 px-4 bg-transparent border-none text-text-primary text-left cursor-pointer font-inherit text-base rounded-lg transition-all duration-300 hover:bg-bg-secondary"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;


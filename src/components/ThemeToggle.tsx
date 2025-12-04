import { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { toggleTheme } from '../store/themeSlice';

const ThemeToggle = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button
      className="relative w-12 h-12 rounded-full bg-white/5 dark:bg-black/5 backdrop-blur-md border-2 border-white/10 dark:border-black/10 text-text-primary flex items-center justify-center transition-all duration-300 hover:border-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 hover:bg-white/5 dark:hover:bg-black/5 hover:scale-105 overflow-hidden group"
      onClick={() => dispatch(toggleTheme())}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-hover opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm -z-10" />
      <span className="text-xl">{theme === 'light' ? <FaMoon /> : <FaSun />}</span>
    </button>
  );
};

export default ThemeToggle;


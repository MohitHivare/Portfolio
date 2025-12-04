import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
// Tailwind CSS is now imported via index.css

// Lazy load heavy components for code splitting
const CodeShowcase = lazy(() => import('./components/CodeShowcase'));

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="fixed top-[110px] right-8 z-[999] flex gap-3">
        <ThemeToggle />
        <LanguageToggle />
      </div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <CodeShowcase />
      </Suspense>
      <Contact />
      <footer className="py-8 text-center bg-bg-secondary text-text-secondary border-t border-border">
        <p>&copy; {new Date().getFullYear()} Portfolio. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;

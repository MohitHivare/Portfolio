import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { FaCode, FaCopy, FaCheck } from 'react-icons/fa';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CodeShowcase = () => {
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useLocalStorage('showcase-count', 0);

  const codeSnippets = {
    customHook: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}`,
    performance: `import { memo, useMemo } from 'react';

const ExpensiveComponent = memo(({ data }: { data: Data[] }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: expensiveCalculation(item)
    }));
  }, [data]);

  return <div>{/* Render processed data */}</div>;
});`,
    redux: `import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'dark' },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;`,
  };

  const [activeSnippet, setActiveSnippet] = useState<keyof typeof codeSnippets>('customHook');

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(codeSnippets[activeSnippet]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const memoizedValue = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <section id="code-showcase" className="py-20 px-8 bg-gradient-to-b from-bg-secondary to-bg-primary">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-br from-accent via-accent-hover to-[#a855f7] bg-clip-text text-transparent tracking-tight relative leading-[1.2] py-2 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-accent after:to-accent-hover after:rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Code Quality Showcase
        </motion.h2>

        <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6 text-text-primary">Interactive Component Demo</h3>
            <div className="bg-bg-primary p-8 rounded-xl border border-border">
              <p className="text-text-primary mb-4">This counter uses a custom useLocalStorage hook:</p>
              <div className="flex flex-col gap-4 my-8 text-xl text-text-primary">
                <span>Count: {count}</span>
                <span>Memoized (×2): {memoizedValue}</span>
              </div>
              <button 
                onClick={incrementCount} 
                className="px-8 py-3 bg-accent text-white border-none rounded-lg text-base cursor-pointer font-inherit transition-all duration-300 hover:bg-accent-hover hover:scale-105"
              >
                Increment
              </button>
              <p className="mt-4 text-sm text-text-secondary italic">
                The value persists across page refreshes using localStorage!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-2 mb-4">
              {Object.keys(codeSnippets).map((key) => (
                <button
                  key={key}
                  className={`px-4 py-2 bg-bg-tertiary border-none rounded-t-lg text-text-secondary cursor-pointer font-inherit transition-all duration-300 ${
                    activeSnippet === key
                      ? 'bg-bg-primary text-text-primary border-b-2 border-accent'
                      : 'hover:bg-bg-secondary'
                  }`}
                  onClick={() => setActiveSnippet(key as keyof typeof codeSnippets)}
                >
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </button>
              ))}
            </div>
            <div className="bg-bg-primary rounded-lg overflow-hidden border border-border">
              <div className="flex justify-between items-center p-4 bg-bg-tertiary border-b border-border">
                <FaCode className="text-text-primary" />
                <button
                  onClick={copyToClipboard}
                  className="bg-transparent border-none text-text-primary cursor-pointer p-2 rounded transition-colors duration-300 hover:bg-bg-secondary"
                  aria-label="Copy code"
                >
                  {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto bg-bg-primary text-text-primary text-sm leading-relaxed m-0">
                <code className="font-mono">{codeSnippets[activeSnippet]}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeShowcase;


import{r as c,j as e,m as d,F as p,a as g,b as h}from"./index-CpcP9X_t.js";function b(r,n){const[o,l]=c.useState(()=>{try{const t=window.localStorage.getItem(r);return t?JSON.parse(t):n}catch(t){return console.error(`Error reading localStorage key "${r}":`,t),n}});return[o,t=>{try{const a=t instanceof Function?t(o):t;l(a),window.localStorage.setItem(r,JSON.stringify(a))}catch(a){console.error(`Error setting localStorage key "${r}":`,a)}}]}const y=()=>{const[r,n]=c.useState(!1),[o,l]=b("showcase-count",0),i={customHook:`import { useState, useEffect } from 'react';

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
}`,performance:`import { memo, useMemo } from 'react';

const ExpensiveComponent = memo(({ data }: { data: Data[] }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: expensiveCalculation(item)
    }));
  }, [data]);

  return <div>{/* Render processed data */}</div>;
});`,redux:`import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'dark' },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;`},[t,a]=c.useState("customHook"),m=async()=>{await navigator.clipboard.writeText(i[t]),n(!0),setTimeout(()=>n(!1),2e3)},u=()=>{l(s=>s+1)},x=c.useMemo(()=>o*2,[o]);return e.jsx("section",{id:"code-showcase",className:"py-20 px-8 bg-gradient-to-b from-bg-secondary to-bg-primary",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-8",children:[e.jsx(d.h2,{className:"text-5xl font-extrabold text-center mb-16 bg-gradient-to-br from-accent via-accent-hover to-[#a855f7] bg-clip-text text-transparent tracking-tight relative leading-[1.2] py-2 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-accent after:to-accent-hover after:rounded-sm",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:"Code Quality Showcase"}),e.jsxs("div",{className:"grid grid-cols-2 gap-12 max-md:grid-cols-1",children:[e.jsxs(d.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx("h3",{className:"text-2xl mb-6 text-text-primary",children:"Interactive Component Demo"}),e.jsxs("div",{className:"bg-bg-primary p-8 rounded-xl border border-border",children:[e.jsx("p",{className:"text-text-primary mb-4",children:"This counter uses a custom useLocalStorage hook:"}),e.jsxs("div",{className:"flex flex-col gap-4 my-8 text-xl text-text-primary",children:[e.jsxs("span",{children:["Count: ",o]}),e.jsxs("span",{children:["Memoized (×2): ",x]})]}),e.jsx("button",{onClick:u,className:"px-8 py-3 bg-accent text-white border-none rounded-lg text-base cursor-pointer font-inherit transition-all duration-300 hover:bg-accent-hover hover:scale-105",children:"Increment"}),e.jsx("p",{className:"mt-4 text-sm text-text-secondary italic",children:"The value persists across page refreshes using localStorage!"})]})]}),e.jsxs(d.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},children:[e.jsx("div",{className:"flex gap-2 mb-4",children:Object.keys(i).map(s=>e.jsx("button",{className:`px-4 py-2 bg-bg-tertiary border-none rounded-t-lg text-text-secondary cursor-pointer font-inherit transition-all duration-300 ${t===s?"bg-bg-primary text-text-primary border-b-2 border-accent":"hover:bg-bg-secondary"}`,onClick:()=>a(s),children:s.replace(/([A-Z])/g," $1").trim()},s))}),e.jsxs("div",{className:"bg-bg-primary rounded-lg overflow-hidden border border-border",children:[e.jsxs("div",{className:"flex justify-between items-center p-4 bg-bg-tertiary border-b border-border",children:[e.jsx(p,{className:"text-text-primary"}),e.jsx("button",{onClick:m,className:"bg-transparent border-none text-text-primary cursor-pointer p-2 rounded transition-colors duration-300 hover:bg-bg-secondary","aria-label":"Copy code",children:r?e.jsx(g,{className:"text-green-400"}):e.jsx(h,{})})]}),e.jsx("pre",{className:"p-4 overflow-x-auto bg-bg-primary text-text-primary text-sm leading-relaxed m-0",children:e.jsx("code",{className:"font-mono",children:i[t]})})]})]})]})]})})};export{y as default};

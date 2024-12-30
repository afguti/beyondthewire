import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <p
      onClick={() => setDarkMode(!darkMode)}
      className="theme-toggle-btn"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setDarkMode(!darkMode);
        }
      }}
    >
      {darkMode ? '🌝' : '🌚'}
    </p>
  );
};

export default ThemeToggle; 
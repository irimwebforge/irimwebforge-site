'use client';

import { useEffect, useState } from 'react';
import { Icon } from './Icon';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    // Récupérer le thème initial
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system';
    setTheme(savedTheme);

    // Appliquer le thème initial
    applyTheme(savedTheme);

    // Écouter les changements de préférences système
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
    const root = document.documentElement;
    const isDark =
      newTheme === 'dark' ||
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-[var(--surface-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 transition-colors duration-200"
      aria-label="Changer le thème"
    >
      {theme === 'dark' ? (
        <Icon name="Moon" className="w-5 h-5" />
      ) : theme === 'light' ? (
        <Icon name="Sun" className="w-5 h-5" />
      ) : (
        <Icon name="Monitor" className="w-5 h-5" />
      )}
    </button>
  );
}

'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { createTranslator } from '@/i18n';

const darkModeQuery = '(prefers-color-scheme: dark)';

export default function ThemeSelect({ lang }: { lang: string }) {
  const t = createTranslator(lang);
  const [userTheme, setUserTheme] = useLocalStorage<string | null>(
    'theme',
    null
  );

  useEffect(() => {
    const root = document.documentElement;
    const isSystemDark = window.matchMedia(darkModeQuery).matches;
    if (userTheme) {
      const otherTheme = userTheme === 'light' ? 'dark' : 'light';
      root.classList.add(userTheme);
      root.classList.remove(otherTheme);
    } else {
      root.classList.remove('light');
      if (isSystemDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [userTheme]);

  const selectedClass =
    'bg-gradient-to-br from-primary to-secondary text-primary-on';

  return (
    <div className="relative rounded-full p-1 bg-background-on/10 flex flex-row items-center">
      <button
        className={`p-2 rounded-full flex justify-center items-center ${
          userTheme === 'light' ? selectedClass : 'hover:bg-background-on/20'
        }`}
        title={t('Theme: Light', '테마: 밝음')}
        onClick={() => setUserTheme('light')}
      >
        <FontAwesomeIcon icon={faSun} className="w-4 h-4" />
      </button>
      <button
        className={`p-2 rounded-full flex justify-center items-center ${
          userTheme === 'dark' ? selectedClass : 'hover:bg-background-on/20'
        }`}
        title={t('Theme: Dark', '테마: 어두움')}
        onClick={() => setUserTheme('dark')}
      >
        <FontAwesomeIcon icon={faMoon} className="w-4 h-4" />
      </button>
      <button
        className={`p-2 rounded-full flex justify-center items-center ${
          userTheme === null ? selectedClass : 'hover:bg-background-on/20'
        }`}
        title={t('Theme: Auto', '테마: 자동')}
        onClick={() => setUserTheme(null)}
      >
        <FontAwesomeIcon icon={faDesktop} className="w-4 h-4" />
      </button>
    </div>
  );
}

'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faDesktop } from '@fortawesome/free-solid-svg-icons';

export default function ThemeSelect() {
  const [userTheme, setUserTheme] = useLocalStorage<string | null>(
    'theme',
    null
  );

  useEffect(() => {
    const root = document.documentElement;
    if (userTheme) {
      const otherTheme = userTheme === 'light' ? 'dark' : 'light';
      root.classList.add(userTheme);
      root.classList.remove(otherTheme);
    } else {
      root.classList.remove('light');
      root.classList.remove('dark');
    }
  }, [userTheme]);

  const selectedClass =
    'bg-gradient-to-br from-primary to-secondary text-primary-on';

  return (
    <div className="relative rounded-full p-1 bg-background-on/10 flex flex-row items-center">
      <button
        className={`p-2 rounded-full flex justify-center items-center ${
          userTheme === 'light' ? selectedClass : ''
        }`}
      >
        <FontAwesomeIcon
          icon={faSun}
          className="w-4 h-4"
          onClick={() => setUserTheme('light')}
        />
      </button>
      <button
        className={`p-2 rounded-full flex justify-center items-center ${
          userTheme === 'dark' ? selectedClass : ''
        }`}
      >
        <FontAwesomeIcon
          icon={faMoon}
          className="w-4 h-4"
          onClick={() => setUserTheme('dark')}
        />
      </button>
      <button
        className={`p-2 rounded-full flex justify-center items-center ${
          userTheme === null ? selectedClass : ''
        }`}
      >
        <FontAwesomeIcon
          icon={faDesktop}
          className="w-4 h-4"
          onClick={() => setUserTheme(null)}
        />
      </button>
    </div>
  );
}

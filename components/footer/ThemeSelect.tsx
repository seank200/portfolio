'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { SupportedLang, createIntlDict } from '@/i18n/utils';

const dict = createIntlDict(
  {
    THEME: 'Theme',
    LIGHT: 'Light',
    DARK: 'Dark',
    AUTO: 'Auto',
  },
  {
    THEME: '테마',
    LIGHT: '라이트',
    DARK: '다크',
    AUTO: '자동',
  }
);

export default function ThemeSelect({ lang }: { lang: SupportedLang }) {
  const [theme, setTheme] = useLocalStorage<string | null>('theme', null);
  const { THEME, LIGHT, DARK, AUTO } = dict[lang];

  const handleThemeClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const button = e.currentTarget;
    setTheme(button.dataset.theme || null);
  };

  const selectedClassName =
    'transition-all bg-secondary-variant group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary text-background-variant';
  useEffect(() => {
    const root = document.documentElement;
    if (!theme) {
      root.setAttribute('style', '');
      return;
    }
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const deviceTheme = prefersDark ? 'dark' : 'light';
    const properties = [
      '--color-primary',
      '--color-primary-variant',
      '--color-primary-on',
      '--color-secondary',
      '--color-secondary-variant',
      '--color-secondary-on',
      '--color-background',
      '--color-background-variant',
      '--color-background-on',
      '--color-surface',
      '--color-surface-variant',
      '--color-surface-on',
      '--color-error',
      '--color-error-on',
      '--color-success',
      '--color-success-on',
    ];
    const themeProperties = properties.map(
      (p) => `${p}-${theme || deviceTheme}`
    );
    properties.forEach((property, idx) => {
      const themeProperty = themeProperties[idx];
      root.style.setProperty(property, `var(${themeProperty})`);
    });
  }, [theme]);

  return (
    <div className="group rounded-full border border-secondary-variant hover:border-secondary p-1 space-x-1 flex justify-center items-center text-sm text-secondary-variant hover:text-secondary transition-all">
      <button
        className={`rounded-full w-7 h-7 flex justify-center items-center ${
          theme === 'light' ? selectedClassName : ''
        }`}
        title={`${THEME}: ${LIGHT}`}
        data-theme="light"
        onClick={handleThemeClick}
      >
        <FontAwesomeIcon icon={faSun} />
      </button>
      <button
        className={`rounded-full w-7 h-7 flex justify-center items-center ${
          theme === 'dark' ? selectedClassName : ''
        }`}
        title={`${THEME}: ${DARK}`}
        data-theme="dark"
        onClick={handleThemeClick}
      >
        <FontAwesomeIcon icon={faMoon} />
      </button>
      <button
        className={`rounded-full w-7 h-7 flex justify-center items-center ${
          theme === null ? selectedClassName : ''
        }`}
        title={`${THEME}: ${AUTO}`}
        onClick={handleThemeClick}
      >
        <FontAwesomeIcon icon={faDesktop} />
      </button>
    </div>
  );
}

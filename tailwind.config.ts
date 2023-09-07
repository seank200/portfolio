import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'HKGrotesk',
          'Helvetica',
          'Arial',
          'ui-sans-serif',
          'sans-serif',
        ],
        display: ['Rota', 'Helvetica', 'Arial', 'ui-sans-serif', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        primary: {
          DEFAULT: 'rgba(var(--color-primary), <alpha-value>)',
          var: 'rgba(var(--color-primary-variant), <alpha-value>)',
          on: 'rgba(var(--color-primary-on), <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgba(var(--color-secondary), <alpha-value>)',
          var: 'rgba(var(--color-secondary-variant), <alpha-value>)',
          on: 'rgba(var(--color-secondary-on), <alpha-value>)',
        },
        faded: {
          DEFAULT: 'rgba(var(--color-faded), <alpha-value>)',
          var: 'rgba(var(--color-faded-variant), <alpha-value>)',
        },
        background: {
          DEFAULT: 'rgba(var(--color-background), <alpha-value>)',
          variant: 'rgba(var(--color-background-variant), <alpha-value>)',
          on: 'rgba(var(--color-background-on), <alpha-value>)',
        },
      },
      scale: {
        101: '1.01',
        102: '1.02',
      },
      transitionProperty: {
        position: 'top, left, bottom, right, transform',
      },
    },
  },
};
export default config;

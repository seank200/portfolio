import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

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
        surface: {
          DEFAULT: 'rgba(var(--color-surface), <alpha-value>)',
          on: 'rgba(var(--color-surface-on), <alpha-value>)',
        },
      },
      scale: {
        101: '1.01',
        102: '1.02',
        104: '1.04',
      },
      spacing: {
        88: '22rem',
      },
      height: {
        'screen-1/2': '50vh',
      },
      transitionProperty: {
        position: 'top, left, bottom, right, transform',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('hmd', '@media (min-height: 600px)');
      addVariant('hlg', '@media (min-height: 700px)');
      addVariant('hxl', '@media (min-height: 768px)');
    }),
  ],
};
export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        primary: {
          DEFAULT: 'var(--color-primary)',
          variant: 'var(--color-primary-variant)',
          on: 'var(--color-primary-on)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          variant: 'var(--color-secondary-variant)',
          on: 'var(--color-secondary-on)',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          variant: 'var(--color-background-variant)',
          on: 'var(--color-background-on)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          on: 'var(--color-surface-on)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          on: 'var(--color-error-on)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          on: 'var(--color-success-on)',
        },
      },
      animation: {
        beckon: 'beckon 5s linear infinite',
      },
      transitionProperty: {
        position: 'top, bottom, left, right',
      },
      scale: {
        101: '1.01',
        102: '1.02',
      },
    },
  },
  plugins: [],
};
export default config;

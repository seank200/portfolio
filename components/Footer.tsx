'use client';

import { SupportedLang } from '@/i18n';
import Container from './Container';
import ThemeSelect from './ThemeSelect';

export default function Footer({ lang }: { lang: SupportedLang }) {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };
  return (
    <footer className="mt-16 py-8 bg-background-variant">
      <Container className="flex flex-row justify-between items-center">
        <h2
          onClick={handleLogoClick}
          title="Return to top"
          className="relative top-0.5 font-display font-bold text-lg text-background-on/60 hover:text-background-on cursor-pointer"
        >
          Youngwoo Kim
        </h2>
        <div className="flex items-center gap-2">
          <ThemeSelect lang={lang} />
        </div>
      </Container>
    </footer>
  );
}

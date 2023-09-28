'use client';

import { SupportedLang } from '@/i18n';
import Container from './Container';
import LangSelect from './LangSelect';
import ThemeSelect from './ThemeSelect';

export default function Footer({ lang }: { lang: SupportedLang }) {
  return (
    <footer className="py-8 bg-background-variant">
      <Container className="flex flex-row justify-between items-center">
        <h2 className="relative top-0.5 font-display font-bold text-lg text-background-on/60 uppercase">
          Youngwoo Kim
        </h2>
        <div className="flex items-center gap-2">
          <LangSelect lang={lang} />
          <ThemeSelect lang={lang} />
        </div>
      </Container>
    </footer>
  );
}

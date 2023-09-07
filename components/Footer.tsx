'use client';

import Container from './Container';
import ThemeSelect from './ThemeSelect';

export default function Footer({ lang }: { lang: string }) {
  return (
    <footer className="py-8 bg-background-variant">
      <Container className="flex flex-row justify-between items-center">
        <h2 className="relative top-0.5 font-display font-bold text-lg text-background-on/60">
          YOUNGWOO
        </h2>
        <ThemeSelect lang={lang} />
      </Container>
    </footer>
  );
}

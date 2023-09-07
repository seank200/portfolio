import Section from '@/components/home/Section';
import HeroSection from '@/components/home/sections/HeroSection';
import { SUPPORTED_LANGS, SupportedLang } from '@/i18n';

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => {
    lang;
  });
}

export default function page({ params }: { params: { lang: SupportedLang } }) {
  const { lang } = params;
  return (
    <>
      <HeroSection lang={lang} />
      <Section />
    </>
  );
}

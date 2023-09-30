import EducationSection from '@/components/landing/sections/education';
import ExperienceSection from '@/components/landing/sections/experience';
import HeroSection from '@/components/landing/sections/hero';
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
      <ExperienceSection lang={lang} />
      <EducationSection lang={lang} />
      <div className="h-screen" />
    </>
  );
}

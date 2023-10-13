import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import ContactSection from '@/components/landing/sections/ContactSection';
import AwardSection from '@/components/landing/sections/award';
import EducationSection from '@/components/landing/sections/education';
import ExperienceSection from '@/components/landing/sections/experience';
import HeroSection from '@/components/landing/sections/hero';
import ProjectsSection from '@/components/landing/sections/projects';
import SkillsetSection from '@/components/landing/sections/skillset';
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
      <Nav lang={params.lang} />
      <main className="pb-12 min-h-screen">
        <HeroSection lang={lang} />
        <ExperienceSection lang={lang} />
        <ProjectsSection lang={lang} />
        <SkillsetSection lang={lang} />
        <EducationSection lang={lang} />
        <AwardSection lang={lang} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={params.lang} />
    </>
  );
}

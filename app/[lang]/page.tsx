import Container from '@/components/Container';
import Section from '@/components/home/Section';
import SectionHeading from '@/components/home/SectionHeading';
import HeroSection from '@/components/home/sections/HeroSection';
import SigmateSection from '@/components/home/sections/SigmateSection';
import { SUPPORTED_LANGS, SupportedLang, createIntlDict } from '@/i18n';

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => {
    lang;
  });
}

const dict = createIntlDict(
  {
    H_PROJECTS: 'Projects',
    D_PROJECTS:
      'My project experience ranges from hobby projects to contributions in open-source codebases, collaborating with teams from a wide range of cultural and educational backgrounds.',
  },
  {
    H_PROJECTS: '참여 프로젝트',
  }
);

export default function page({ params }: { params: { lang: SupportedLang } }) {
  const { lang } = params;
  const { H_PROJECTS, D_PROJECTS } = dict[lang];
  return (
    <>
      <HeroSection lang={lang} />
      <Section className="pt-8">
        <Container>
          <SectionHeading>{H_PROJECTS}</SectionHeading>
          <p className="text-faded leading-relaxed">{D_PROJECTS}</p>
        </Container>
      </Section>
      <SigmateSection lang={lang} />
      <section className="h-screen"></section>
    </>
  );
}

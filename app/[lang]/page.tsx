import Container from '@/components/Container';
import Section from '@/components/home/Section';
import SectionHeading from '@/components/home/SectionHeading';
import HeroSection from '@/components/home/sections/HeroSection';
import PoolinkSection from '@/components/home/sections/PoolinkSection';
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
    H_PROJECTS: '포트폴리오',
    D_PROJECTS:
      '개인 프로젝트부터 대규모 오픈 소스 프로젝트 커밋까지 다양한 프로젝트 경험이 있으며, 다양한 문화권 출신의 팀원들과 함께 협업할 수 있는 언어/소통 능력을 보유하고 있습니다.',
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
          <p className="text-faded text-lg leading-relaxed">{D_PROJECTS}</p>
        </Container>
      </Section>
      <SigmateSection lang={lang} className="py-8" />
      <PoolinkSection lang={lang} className="py-8" />
    </>
  );
}

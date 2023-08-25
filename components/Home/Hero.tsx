import Section from '@/components/Section';
import Container from '@/components/Container';
import ScrollGuide from '@/components/ScrollGuide';
import HeroCtaPrimary from '@/components/Home/HeroCtaPrimary';
import Memoji from '@components/Home/Memoji';
import { SupportedLang, createIntlDict } from '@/i18n/utils';

const dict = createIntlDict(
  {
    TITLE_1: 'Passion-Driven',
    TITLE_2: 'Backend Web Developer',
    SUBTITLE_1: "Hi, I'm Youngwoo",
    SUBTITLE_2: 'I am a developer based on Seoul, South Korea.',
    VIEW_PORTFOLIO: 'View Portfolio',
    CONTACT_ME: 'Contact Me',
  },
  {
    TITLE_1: '열정 가득한',
    TITLE_2: '백엔드 웹 개발자',
    SUBTITLE_1: '안녕하세요, 저는 김영우라고 합니다',
    SUBTITLE_2: '개발과 함께했던 제 시간들을 소개합니다.',
    VIEW_PORTFOLIO: '포트폴리오 보기',
    CONTACT_ME: '연락하기',
  }
);

export default function Hero({ lang }: { lang: SupportedLang }) {
  const {
    TITLE_1,
    TITLE_2,
    SUBTITLE_1,
    SUBTITLE_2,
    VIEW_PORTFOLIO,
    CONTACT_ME,
  } = dict[lang];
  return (
    <Section id="home__section_hero" className="relative">
      <Container className="flex justify-between items-center h-screen">
        <div className="flex flex-col">
          <h1 className="mb-6 text-4xl sm:text-5xl font-semibold leading-snug sm:leading-snug">
            {TITLE_1}
            <br />
            <span className="text-gradient">{TITLE_2}</span>
          </h1>
          <p className="group mb-20 sm:mb-28 text-xl sm:text-2xl font-light leading-relaxed sm:leading-relaxed">
            {SUBTITLE_1}&nbsp;
            <span className="relative transition-transform group-hover:rotate-12">
              👋
            </span>
            <br className="hidden sm:inline" />
            {SUBTITLE_2}
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <HeroCtaPrimary>{VIEW_PORTFOLIO}</HeroCtaPrimary>
            <button className="px-6 py-3 sm:py-2 rounded-md border-2 border-background-on font-medium text-background-on transition-colors hover:border-primary hover:text-primary">
              {CONTACT_ME}
            </button>
          </div>
        </div>
        <Memoji />
      </Container>
      <ScrollGuide
        scrollTo="#home__section_work_experience"
        text="Learn more about me"
      />
    </Section>
  );
}

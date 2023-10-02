import { SupportedLang, createTranslator } from '@/i18n';
import Container from '../../../Container';
import Section from '../../../Section';
import Memoji from './Memoji';
import Link from 'next/link';

export default function HeroSection({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);

  const h1FontSize = t('text-4xl', 'text-5xl');
  const buttons = (
    <>
      <HeroButton primary href="#experiences">
        {t('View portfolio', '포트폴리오 보기')}
      </HeroButton>
      <HeroButton href="#contacts">{t('Contact me', '연락하기')}</HeroButton>
    </>
  );

  return (
    <Section id="home" className="flex flex-col justify-center" screen>
      <Container className="pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <div className="md:mr-12">
          <h1
            className={`pb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center md:text-left ${h1FontSize} md:text-5xl lg:text-6xl font-semibold`}
          >
            {t('Youngwoo Kim', '김영우')}
          </h1>
          <p
            className={`text-xl md:text-2xl lg:text-[1.75rem] text-center md:text-left leading-normal md:leading-normal lg:leading-relaxed`}
          >
            {t('Hi, I am a full-stack web developer. ', '풀스택 웹 개발자 ')}
            <br className={t('hidden md:inline', 'inline')} />
            {t('Welcome to my portfolio.', '프로젝트 포트폴리오')}
          </p>
          <div className="md:mt-16 lg:mt-24 hidden md:flex flex-row gap-4">
            {buttons}
          </div>
        </div>
        <Memoji className="mt-10 md:mt-0 mb-12 md:mb-0" lang={lang} />
      </Container>
      <Container className="flex md:hidden flex-row justify-center items-stretch gap-3">
        {buttons}
      </Container>
    </Section>
  );
}

function HeroButton({
  href,
  primary,
  children,
}: {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  const bgText: string = primary
    ? 'bg-background-on text-background hover:bg-primary hover:text-primary-on'
    : 'hover:text-primary';
  return (
    <Link
      href={href}
      className={`px-6 py-2 rounded-lg border-2 border-background-on hover:border-primary ${bgText} font-medium transition-colors`}
    >
      {children}
    </Link>
  );
}

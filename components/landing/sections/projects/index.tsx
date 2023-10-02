import Container from '@/components/Container';
import Section from '@/components/Section';
import SectionH2 from '@/components/SectionH2';
import { SupportedLang, createTranslator } from '@/i18n';
import Image from 'next/image';
import sigmateLogo from '@images/LOGO_Sigmate.png';
import sigmateLogoDark from '@images/LOGO_Sigmate_Dark.png';
import poolinkLogo from '@images/LOGO_Poolink.png';
import sigmateUIUpcoming from '@images/sigmate/Sigmate_UI_Upcoming.png';
import poolinkCover from '@images/poolink/1-1.png';
import ThemedImage from '@/components/ThemedImage';
import { expDict } from '@/components/dict/experiences';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ProjectsSection({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const VIEW_DETAILS = t('View more', '상세정보 보기');
  const SIGMATE_DESC = expDict.facade[lang].DESCRIPTION;
  const POOLINK_DESC = expDict.poolink[lang].DESCRIPTION;
  return (
    <Section>
      <Container>
        <SectionH2>{t('Projects', '프로젝트')}</SectionH2>
      </Container>
      <ProjectContainer href="/project/sigmate">
        <Container className="relative h-96 flex flex-col justify-center items-start">
          <ThemedImage
            src={sigmateLogo}
            darkSrc={sigmateLogoDark}
            alt="Sigmate"
            className="mb-2 w-fit h-8 md:h-10"
            height={48}
          />
          <Description>{SIGMATE_DESC}</Description>
          <button className="mt-16 text-primary group-hover:underline font-medium">
            {VIEW_DETAILS}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
          <Image
            src={sigmateUIUpcoming}
            alt="Sigmate Upcoming UI"
            height={300}
            className="-z-10 absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-16 2xl:right-0"
          />
        </Container>
      </ProjectContainer>
      <ProjectContainer href="/project/poolink">
        <Container className="relative h-96 flex flex-col justify-center items-start">
          <Image
            src={poolinkLogo}
            alt="Poolink"
            className="w-auto max-w-full h-8 md:h-10"
            height={40}
          />
          <Description>{POOLINK_DESC}</Description>
          <button className="mt-16 text-primary group-hover:underline font-medium">
            {VIEW_DETAILS}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>

          <Image
            src={poolinkCover}
            alt="Poolink Cover Image"
            height={300}
            className="-z-10 absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-16 2xl:right-0"
          />
        </Container>
      </ProjectContainer>
    </Section>
  );
}

function Description({ children }: { children?: React.ReactNode }) {
  return (
    <p className="mt-4 text-base sm:text-lg md:text-xl text-faded group-hover:text-surface-on">
      {children}
    </p>
  );
}

function ProjectContainer({
  href,
  children,
  className,
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group mt-8 w-full shadow-lg flex flex-col justify-center items-center bg-gradient-to-r from-surface md:from-50% to-surface/90 md:to-surface/0 ${className}`}
    >
      {children}
    </Link>
  );
}

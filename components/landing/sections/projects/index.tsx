import Container from '@/components/Container';
import Section from '@/components/Section';
import SectionH2 from '@/components/SectionH2';
import { SupportedLang, createTranslator } from '@/i18n';
import Image from 'next/image';
import sigmateLogo from '@images/LOGO_Sigmate.png';
import sigmateLogoDark from '@images/LOGO_Sigmate_Dark.png';
import poolinkLogo from '@images/LOGO_Poolink.png';
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
        <Container>
          <ThemedImage
            src={sigmateLogo}
            darkSrc={sigmateLogoDark}
            alt="Sigmate"
            className="mb-2 w-auto max-w-full"
            height={48}
          />
          <Description>{SIGMATE_DESC}</Description>
          <button className="mt-16 text-primary font-medium">
            {VIEW_DETAILS}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </Container>
      </ProjectContainer>
      <ProjectContainer href="/project/poolink">
        <Container>
          <Image
            src={poolinkLogo}
            alt="Poolink"
            className="w-auto max-w-full h-8 md:h-10"
            height={40}
          />
          <Description>{POOLINK_DESC}</Description>

          <button className="mt-16 text-primary font-medium">
            {VIEW_DETAILS}
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </Container>
      </ProjectContainer>
    </Section>
  );
}

function Description({ children }: { children?: React.ReactNode }) {
  return (
    <p className="mt-4 text-base sm:text-lg md:text-xl text-faded">
      {children}
    </p>
  );
}

function ProjectContainer({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="mt-8 w-full h-screen min-h-fit px-8 py-8 flex flex-col justify-center items-center bg-surface"
    >
      {children}
    </Link>
  );
}

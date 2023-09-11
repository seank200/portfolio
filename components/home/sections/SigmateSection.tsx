import { SupportedLang, createIntlDict } from '@/i18n';
import ThemedImage from '@/components/ThemedImage';
import sigmateLogo from '@images/LOGO_Sigmate.png';
import sigmateLogoDark from '@images/LOGO_Sigmate_Dark.png';
import ProjectSection from './ProjectSection';

const dict = createIntlDict(
  {
    H_TITLE: 'My Title',
    TITLE: 'Chief Technology Officer',
    DESCRIPTION: 'A wiki platform for the NFT community',
    H_AFFILIATION: 'Affiliation',
    AFFILIATION: 'Facade Inc.',
    H_DETAILS: 'Details',
    DETAILS: [
      'Implemented a REST API app server using NodeJS and TypeScript.',
      'Managed DevOps workflows on Amazon Web Services (AWS)',
    ],
  },
  {
    H_TITLE: '직책',
    TITLE: 'CTO',
    DESCRIPTION: 'NFT 커뮤니티를 위한 위키 플랫폼',
    H_AFFILIATION: 'Affiliation',
    AFFILIATION: 'Facade Inc.',
    H_DETAILS: '설명',
    DETAILS: [
      'NodeJS와 TypeScript를 사용한 REST API app server 개발.',
      'AWS(Amazon Web Services) 상의 배포 및 DevOps 워크플로우 관리',
    ],
  }
);

export default function SigmateSection({ lang }: { lang: SupportedLang }) {
  const { TITLE, AFFILIATION, DESCRIPTION } = dict[lang];

  const DETAILS = dict[lang].DETAILS as Array<React.ReactNode>;
  return (
    <ProjectSection
      lang={lang}
      heading={
        <ThemedImage
          src={sigmateLogo}
          darkSrc={sigmateLogoDark}
          alt="Sigmate"
          height={36}
        />
      }
      description={DESCRIPTION}
      title={TITLE}
      affiliation={AFFILIATION}
      details={DETAILS}
    >
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
      <Placeholder />
    </ProjectSection>
  );
}

function Placeholder() {
  return <div className="mb-4 bg-background-on/30 w-96 h-48"></div>;
}

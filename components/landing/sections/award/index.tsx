import Container from '@/components/Container';
import Section from '@components/Section';
import SectionH2 from '@components/SectionH2';
import { SupportedLang, createIntlDict, createTranslator } from '@/i18n';
import ListItem, { listItemImageClassName } from '../../ListItem';
import { awardsDict } from '@/components/dict/awards';
import { faAward, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import kosafLogoKo from '@images/LOGO_KOSAF_ko.gif';
import kosafLogoEn from '@images/LOGO_KOSAF_en.gif';
import CFCLogo from '@images/LOGO_CFC.png';
import USFKLogo from '@images/LOGO_USFK.png';
import { expLink } from '@/components/dict/experiences';

const dict = createIntlDict(
  {
    KOSAF_LOGO: (
      <Image
        src={kosafLogoEn}
        alt="Korea Student Aid Foundation"
        height={24}
        className={listItemImageClassName}
      />
    ),
  },
  {
    KOSAF_LOGO: (
      <Image
        src={kosafLogoKo}
        alt="푸른등대 한국장학재단"
        height={24}
        className={listItemImageClassName}
      />
    ),
  }
);

export default function AwardSection({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const { TITLE: PR_TITLE, DETAILS: PR_DETAILS } =
    awardsDict.presidential[lang];
  const { NAME: CFC_ROK_NAME, DETAILS: CFC_ROK_DETAILS } =
    awardsDict.cfcROK[lang];
  const { NAME: CFC_US_NAME, DETAILS: CFC_US_DETAILS } = awardsDict.cfcUS[lang];
  const { KOSAF_LOGO } = dict[lang];
  return (
    <Section id="awards-scholarships">
      <Container>
        <SectionH2 href="#awards-scholarships">
          {t('Awards & Scholarships', '수상/장학')}
        </SectionH2>
        <ListItem
          title={PR_TITLE}
          icon={faGraduationCap}
          url={t(
            'https://www.kosaf.go.kr/eng/jsp/aid/aid02_01_01.jsp',
            'https://www.kosaf.go.kr/ko/scholar.do?pg=scholarship05_05_01'
          )}
          contents={PR_DETAILS as React.ReactNode[]}
        >
          {KOSAF_LOGO}
        </ListItem>
        <ListItem
          title={CFC_US_NAME}
          icon={faAward}
          url="https://www.usfk.mil"
          contents={CFC_US_DETAILS as React.ReactNode[]}
        >
          <Image
            src={USFKLogo}
            alt={t('United States Forces Korea', '주한미군')}
            width={36}
            className={`${listItemImageClassName} h-auto`}
          />
        </ListItem>
        <ListItem
          title={CFC_ROK_NAME}
          icon={faAward}
          url={expLink.cfc}
          contents={CFC_ROK_DETAILS as React.ReactNode[]}
        >
          <Image
            src={CFCLogo}
            alt={t('ROK-US Combined Forces Command', '한미연합군사령부')}
            width={44}
            className={`${listItemImageClassName} h-auto`}
          />
        </ListItem>
      </Container>
    </Section>
  );
}

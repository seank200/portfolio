import Container from '@/components/Container';
import Section from '@components/Section';
import SectionH2 from '@components/SectionH2';
import { SupportedLang, createIntlDict, createTranslator } from '@/i18n';
import ListItem, { listItemImageClassName } from '../../ListItem';
import { awardsDict } from '@/components/dict/awards';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import kosafLogoKo from '@images/LOGO_KOSAF_ko.gif';
import kosafLogoEn from '@images/LOGO_KOSAF_en.gif';

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
  const { TITLE, DETAILS } = awardsDict.presidential[lang];
  const { KOSAF_LOGO } = dict[lang];
  return (
    <Section id="awards-scholarships">
      <Container>
        <SectionH2 href="#awards-scholarships">
          {t('Awards / Scholarships', '수상 / 장학')}
        </SectionH2>
        <ListItem
          title={TITLE}
          icon={faGraduationCap}
          url={t(
            'https://www.kosaf.go.kr/eng/jsp/aid/aid02_01_01.jsp',
            'https://www.kosaf.go.kr/ko/scholar.do?pg=scholarship05_05_01'
          )}
          contents={DETAILS as React.ReactNode[]}
        >
          {KOSAF_LOGO}
        </ListItem>
      </Container>
    </Section>
  );
}

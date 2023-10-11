import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Container';
import Section from '@components/Section';
import SectionH2 from '@components/SectionH2';
import { SupportedLang, createTranslator, formatTimePeriod } from '@/i18n';
import { expLink, expPeriod } from '@/components/dict/experiences';
import {
  yonseiBCDict,
  yonseiCSDict,
} from '@/components/dict/experiences/yonsei';
import yonseiLogo from '@images/LOGO_Yonsei.png';
import yonseiLogoDark from '@images/Logo_Yonsei_Dark.png';
import ListItem from '@components/landing/ListItem';

export default function EducationSection({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const yonseiBC = yonseiBCDict[lang];
  const yonseiCS = yonseiCSDict[lang];

  return (
    <Section id="education">
      <Container>
        <SectionH2 href="#education">{t('Education', '교육')}</SectionH2>
        <ListItem
          title={yonseiBC.TITLE}
          icon={faGraduationCap}
          url={expLink.yonseiBC}
          contents={[
            yonseiBC.DIVISION,
            yonseiBC.AFFILIATION,
            formatTimePeriod(
              lang,
              expPeriod.yonseiBC.start,
              expPeriod.yonseiBC.end
            ),
          ]}
          imgSrc={yonseiLogo}
          imgDarkSrc={yonseiLogoDark}
          imgAlt={t('Yonsei University', '연세대학교 신촌캠퍼스')}
          imgWidth={96}
        />
        <ListItem
          title={yonseiCS.TITLE}
          icon={faGraduationCap}
          url={expLink.yonseiCS}
          contents={[
            yonseiCS.DIVISION,
            yonseiCS.AFFILIATION,
            formatTimePeriod(
              lang,
              expPeriod.yonseiCS.start,
              expPeriod.yonseiCS.end
            ),
          ]}
          imgSrc={yonseiLogo}
          imgDarkSrc={yonseiLogoDark}
          imgAlt={t('Yonsei University', '연세대학교 신촌캠퍼스')}
          imgWidth={96}
        />
      </Container>
    </Section>
  );
}

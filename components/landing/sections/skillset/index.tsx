import Container from '@/components/Container';
import Section from '@/components/Section';
import SectionH2 from '@/components/SectionH2';
import TechStack from '@/components/projects/TechStack';
import {
  TSAWS,
  TSC,
  TSCMake,
  TSCPP,
  TSDocker,
  TSGNUBash,
  TSGithub,
  TSGithubActions,
  TSJava,
  TSMYSQL,
  TSNodeJS,
  TSReactJS,
  TSTypeScript,
} from '@/components/projects/TechStackItem';
import { SupportedLang, createTranslator } from '@/i18n';

export default function SkillsetSection({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);

  return (
    <Section>
      <Container>
        <SectionH2>{t('Skillsets', '기술 스택')}</SectionH2>
        <TechStack>
          <TSTypeScript />
          <TSC lang={lang} />
          <TSCPP lang={lang} />
          <TSCMake />
          <TSGNUBash />
          <TSMYSQL />
          <TSJava />
          <TSNodeJS />
          <TSReactJS />
          <TSDocker />
          <TSAWS />
          <TSGithub />
          <TSGithubActions />
        </TechStack>
      </Container>
    </Section>
  );
}

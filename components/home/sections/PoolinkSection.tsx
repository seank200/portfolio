import Image from 'next/image';
import poolinkLogo from '@images/LOGO_Poolink.png';
import { SupportedLang, formatTimePeriod } from '@/i18n';
import Section from '../Section';
import ProjectStickyHeader from '../projects/ProjectStickyHeader';
import Container from '@/components/Container';
import ProjectHeader from '../projects/ProjectHeader';
import ProjectMyRoleList from '../projects/ProjectMyRoleList';
import PoolinkFeatures from './PoolinkFeatures';
import PoolinkHero from './PoolinkHero';
import PoolinkPainpoint from './PoolinkPainpoint';
import { poolinkDict } from '@/components/dict/experiences/poolink';
import { generalDict } from '@/components/dict/experiences/general';
import { expPeriod } from '@/components/dict/experiences';
import TechStack from '../TechStack';
import {
  TSGithubActions,
  TSJavaScript,
  TSReactJS,
  TSVercel,
} from '../TechStackItem';

export default function PoolinkSection({
  lang,
  className,
}: {
  lang: SupportedLang;
  className?: string;
}) {
  const { TITLE, CATEGORY, DESCRIPTION } = poolinkDict[lang];
  const { H_OVERVIEW, H_MY_ROLE, H_TECH_STACK } = generalDict[lang];
  const DETAILS = poolinkDict[lang].DETAILS as React.ReactNode[];
  const period = formatTimePeriod(
    lang,
    expPeriod.poolink.start,
    expPeriod.poolink.end,
    {
      precision: 'month',
    }
  );

  return (
    <Section className={className}>
      <ProjectStickyHeader
        heading={<Image src={poolinkLogo} alt="Poolink" height={28} />}
        title={TITLE}
        category={CATEGORY}
        period={period}
      />
      <Container>
        <ProjectHeader
          title={TITLE}
          period={period}
          description={DESCRIPTION}
        />
        <h4 className="mt-10 mb-4 text-2xl font-semibold">💻 {H_TECH_STACK}</h4>
        <TechStack>
          <TSReactJS />
          <TSJavaScript />
          <TSGithubActions />
          <TSVercel />
        </TechStack>
        <h4 className="mt-12 mb-2 text-2xl font-semibold">🎯 {H_MY_ROLE}</h4>
        <ProjectMyRoleList items={DETAILS} />
        <h4 className="mt-16 mb-2 text-2xl font-semibold">💡 {H_OVERVIEW}</h4>
      </Container>
      <div className="py-8 relative w-full">
        <PoolinkHero lang={lang} />
        <PoolinkPainpoint lang={lang} />
        <PoolinkFeatures lang={lang} />
      </div>
    </Section>
  );
}

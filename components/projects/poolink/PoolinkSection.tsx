import Image from 'next/image';
import poolinkLogo from '@images/LOGO_Poolink.png';
import { SupportedLang, formatTimePeriod } from '@/i18n';
import Section from '@components/Section';
import ProjectStickyHeader from '@components/projects/ProjectStickyHeader';
import Container from '@/components/Container';
import ProjectHeader from '@components/projects/ProjectHeader';
import ProjectMyRoleList from '@components/projects/ProjectMyRoleList';
import PoolinkFeatures from './PoolinkFeatures';
import PoolinkHero from './PoolinkHero';
import PoolinkPainpoint from './PoolinkPainpoint';
import { poolinkDict } from '@/components/dict/experiences/poolink';
import { generalDict } from '@/components/dict/experiences/general';
import { expPeriod } from '@/components/dict/experiences';
import TechStack from '@components/projects/TechStack';
import {
  TSGithubActions,
  TSJavaScript,
  TSReactJS,
  TSVercel,
} from '@components/projects/TechStackItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faMicrochip,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

export default function PoolinkSection({
  lang,
  className,
}: {
  lang: SupportedLang;
  className?: string;
}) {
  const { TITLE, DESCRIPTION } = poolinkDict[lang];
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
        period={period}
      />
      <Container>
        <ProjectHeader
          title={TITLE}
          period={period}
          description={DESCRIPTION}
        />
        <h4 className="mt-20 mb-4 text-2xl font-semibold">
          <FontAwesomeIcon
            icon={faMicrochip}
            className="mr-3 text-cyan-500 dark:text-cyan-300"
          />
          {H_TECH_STACK}
        </h4>
        <TechStack>
          <TSReactJS />
          <TSJavaScript />
          <TSGithubActions />
          <TSVercel />
        </TechStack>
        <h4 className="mt-24 mb-3 text-2xl font-semibold">
          <FontAwesomeIcon
            icon={faStar}
            className="mr-3 text-yellow-400 dark:text-yellow-300"
          />
          {H_MY_ROLE}
        </h4>
        <ProjectMyRoleList items={DETAILS} />
        <h4 className="mt-28 mb-2 text-2xl font-semibold">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="mr-3 text-orange-500 dark:text-orange-400"
          />
          {H_OVERVIEW}
        </h4>
      </Container>
      <div className="py-8 relative w-full">
        <PoolinkHero lang={lang} />
        <PoolinkPainpoint lang={lang} />
        <PoolinkFeatures lang={lang} />
      </div>
    </Section>
  );
}

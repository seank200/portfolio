import Image from 'next/image';
import poolinkLogo from '@images/LOGO_Poolink.png';
import { SupportedLang, createIntlDict, formatTimePeriod } from '@/i18n';
import Section from '../Section';
import { DateTime } from 'luxon';
import ProjectStickyHeader from '../projects/ProjectStickyHeader';
import Container from '@/components/Container';
import ProjectHeader from '../projects/ProjectHeader';
import ProjectMyRoleList from '../projects/ProjectMyRoleList';
import PoolinkFeatures from './PoolinkFeatures';
import PoolinkHero from './PoolinkHero';
import PoolinkPainpoint from './PoolinkPainpoint';

const dict = createIntlDict(
  {
    POOLINK: 'Poolink',
    TITLE: 'Lead frontend developer',
    CATEGORY: 'Team Project',
    DESCRIPTION: 'A web platform to save, share and explore links',
    H_MY_ROLE: 'My Role',
    MY_ROLE: [
      'Implemented a responsive web single-page application(SPA) using ReactJS',
      'Set up CI/CD on Vercel to automatically publish development, testing and production branches of the website for internal testing and production deployment',
      'Collaborated with 4 developers as the development team leader, establishing SOPs for agile programming and managing Git workflows',
    ],
  },
  {
    H_MY_ROLE: '업무 세부내용',
  }
);

export default function PoolinkSection({
  lang,
  className,
}: {
  lang: SupportedLang;
  className?: string;
}) {
  const { TITLE, CATEGORY, DESCRIPTION, H_MY_ROLE } = dict[lang];
  const MY_ROLE = dict[lang].MY_ROLE as React.ReactNode[];
  const startedAt = DateTime.fromObject({ year: 2021, month: 5 });
  const endedAt = DateTime.fromObject({ year: 2022, month: 2 });
  const period = formatTimePeriod(lang, startedAt, endedAt, {
    precision: 'month',
  });

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
        <h4 className="mt-8 mb-2 text-2xl font-semibold">🎯 {H_MY_ROLE}</h4>
        <ProjectMyRoleList items={MY_ROLE} />
      </Container>
      <div className="py-8 relative w-full">
        <PoolinkHero lang={lang} />
        <PoolinkPainpoint lang={lang} />
        <PoolinkFeatures lang={lang} />
      </div>
    </Section>
  );
}

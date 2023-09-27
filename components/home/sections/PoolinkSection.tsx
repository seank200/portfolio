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
    TITLE: 'Lead frontend developer',
    CATEGORY: 'Team Project',
    DESCRIPTION: 'A web platform to save, share and explore links',
    H_MY_ROLE: 'My Role',
    H_FEATURES: 'Feature Highlights',
    MY_ROLE: [
      'Implemented a responsive web single-page application(SPA) using ReactJS',
      'Set up CI/CD on Vercel to automatically publish development, testing and production branches of the website for internal testing and production deployment',
      'Collaborated with 4 developers as the development team leader, establishing SOPs for agile development and managing Git workflows',
    ],
  },
  {
    TITLE: '개발팀장/프론트엔드 리드 개발',
    CATEGORY: '동아리 팀프로젝트',
    DESCRIPTION: '링크(URL) 저장, 탐색 및 공유 플랫폼',
    H_MY_ROLE: '업무 세부내용',
    H_FEATURES: '기능 상세',
    MY_ROLE: [
      '[개발] ReactJS를 사용한 반응형 웹 프론트엔드 SPA(Single-Page Application) 개발',
      '[CI/CD] 개발, 테스팅, 프로덕션 Git 브랜치의 별도 자동 배포 설정을 통한 효율적인 내부 테스팅 및 프로덕션 배포 관리',
      '[리더십] 개발팀장으로써 회의, 작업 분배, 테스팅 등 업무 전반에 걸친 SOP 협의를 통한 agile 개발 워크플로우를 확립. 팀원 전원이 학업을 병행하면서 주별 패치 업데이트 및 격주 기능 업데이트를 테스팅 및 배포할 수 있을 정도로 효율적인 업무방식을 유지함.',
    ],
  }
);

export default function PoolinkSection({
  lang,
  className,
}: {
  lang: SupportedLang;
  className?: string;
}) {
  const { TITLE, CATEGORY, DESCRIPTION, H_MY_ROLE, H_FEATURES } = dict[lang];
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
        <h4 className="mt-16 mb-2 text-2xl font-semibold">💡 {H_FEATURES}</h4>
      </Container>
      <div className="py-8 relative w-full">
        <PoolinkHero lang={lang} />
        <PoolinkPainpoint lang={lang} />
        <PoolinkFeatures lang={lang} />
      </div>
    </Section>
  );
}

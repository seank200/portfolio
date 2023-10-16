import { createIntlDict } from '@/i18n';
import Link from 'next/link';

const tagStyle = 'px-1 inline-block text-secondary text-sm font-semibold';

export const poolinkDict = createIntlDict(
  {
    TITLE: 'Lead Developer (FE)',
    CATEGORY: 'Team Project',
    DIVISION: 'FE Development Team',
    AFFILIATION: 'Poolink',
    DESCRIPTION: 'A web app to save, share and explore links',
    DETAILS: [
      <>
        <span className="font-bold">[Development] </span>
        Developed and maintained a responsive web single-page application(SPA)
        using ReactJS. <span className={tagStyle}>#JavaScript</span>
        <span className={tagStyle}>#React</span>
        <span className={tagStyle}>#responsive-design</span>
      </>,
      <>
        <span className="font-bold">[DevOps] </span>
        Set up CI/CD on Vercel to automatically deploy development, testing and
        production versions separately for internal testing and stable
        production deployment <span className={tagStyle}>#vercel</span>
        <span className={tagStyle}>#git</span>
        <span className={tagStyle}>#github-actions</span>
      </>,
      <>
        <span className="font-bold">[Collaboration] </span>
        Collaborated with 4 developers as the development team leader,
        establishing SOPs for agile development and managing Git workflows.
        Communicated with PM and design team members to make adjustments to
        feature release timelines, UI/UX changes and more.
      </>,
      <>
        <span className="font-bold">[Time Mgmt./Passion] </span>
        Maintained the service for over a year with weekly update schedules for
        bug patches and monthly feature releases, with efficient workflows that
        allowed every team member to keep up with this schedule whilst going
        through college semester coursework.
      </>,
    ],
  },
  {
    TITLE: '개발팀장/Web 프론트엔드 개발',
    CATEGORY: '동아리 팀프로젝트',
    DIVISION: '프론트엔드 개발팀',
    AFFILIATION: 'Poolink',
    DESCRIPTION: '쉽고 간편한 링크(URL) 저장, 탐색 및 공유 플랫폼',
    DETAILS: [
      <>
        <span className="font-bold">[개발] </span>
        사용자가 즐겨찾기한 링크를 쉽게 정리, 공유하고 새로운 컨텐츠를 탐색할 수
        있는 웹 플랫폼 <Link href="/project/poolink">Poolink</Link>의 웹
        프론트엔드를 개발함. ReactJS를 사용한 SPA(Single-Page Application)을
        개발하였으며, 반응형(responsive) 디자인을 채택하고, Redux를 이용한
        상태(State) 관리와 React-Query를 통한 API 응답 캐싱을 통해 사이트 성능을
        최적화함. <span className={tagStyle}>#javascript</span>
        <span className={tagStyle}>#react</span>
        <span className={tagStyle}>#redux</span>
        <span className={tagStyle}>#react-query</span>
        <span className={tagStyle}>#responsive-design</span>
      </>,
      <>
        <span className="font-bold">[DevOps] </span>
        개발, 테스팅, 프로덕션 Git 브랜치에 PR이 머지되면 각각의 버전이 별도로
        자동 배포되도록 설정하여 배포의 효율성을 높이고 내부 테스팅 이후
        프로덕션 업데이트가 안정적으로 이루어질 수 있도록 구성함{' '}
        <span className={tagStyle}>#vercel</span>
        <span className={tagStyle}>#git</span>
        <span className={tagStyle}>#github-actions</span>
      </>,
      <>
        <span className="font-bold">[협업] </span>
        개발팀장으로써 회의, 작업 분배, 테스팅 등 업무 전반에 걸친 SOP 협의를
        통한 agile 개발 워크플로우를 확립. PM, 디자인 팀원들과도 소통하며 개발
        팀 내부의 의견을 나머지 팀원들과 공유하고, 기획 과정에도 활발히 참여하여
        기능 출시 로드맵을 수립하고, UI/UX 개선 사항을 협의하였음.
      </>,
      <>
        <span className="font-bold">[시간관리] </span>
        학업 병행 중 1년 이상 서비스를 운영하며, 매주 패치 업데이트 및 격주 단위
        기능 업데이트 사항에 대한 테스팅 및 배포를 진행함.
      </>,
    ],
  }
);

import { createIntlDict } from '@/i18n';
import Link from 'next/link';

const tagStyle = 'px-1 inline-block text-secondary text-sm font-semibold';

export const yicrcDict = createIntlDict(
  {
    TITLE: 'Vice Chief Residential Assistant',
    CATEGORY: 'Work Experience',
    DIVISION: 'Yonsei Residential College',
    AFFILIATION: 'Yonsei University',
    DETAILS: [
      <>
        Developed and implemented a web app,{' '}
        <Link href="/project/yrems" className="text-secondary hover:underline">
          YREMS
        </Link>
        , that allowed over 340 students to sign up for house activities and
        provided student information/cancellation/attendance administration
        features for RAs. Front end development in HTML, CSS and Javascript.
        Featured responsive web design and back end database processing server
        in PHP and MYSQL. Frequently updated website based on student and RA
        feedbacks. <span className={tagStyle}>#html</span>
        <span className={tagStyle}>#css</span>
        <span className={tagStyle}>#vanilla-js</span>
        <span className={tagStyle}>#jquery</span>
        <span className={tagStyle}>#php</span>
        <span className={tagStyle}>#mysql</span>
      </>,
      'Responsible for 29 first year college students and provided continuous one-on-one counseling upon request for 14 of them for troubles or conflicts between house residents from various educational and cultural backgrounds, and adjusting to college life.',
      'Managed over 12 million KRW of budget per semester dedicated for residential house programs and residents',
      'Planned, managed, and ran residential house programs targeted to over 340 students with various educational and cultural backgrounds',
      'Participated actively in weekly meetings where decision-making process involved reaching consensus of 10 fellow RAs and 1 Residential Master (Professor) from 4 different countries, who each has education experience in a different country.',
      'Organized a house program “Coding Zellers” to teach Python. Went from basic grammar to web crawling, natural language processing and machine learning. Received successful programming assignment builds from all students, where 31 out of 39 students submitted without any kind of aid from instructor.',
      'Supervised work distribution on house programs and dormitory duties among fellow 10 RAs',
      'Established extensive timeline and cue sheets for each house programs, each with over 30 staff members and over 300 attending students',
    ],
  },
  {
    TITLE: '부선임조교 (RA, Residential Assistant)',
    CATEGORY: '교내 근무경험',
    DIVISION: '학부대학 RC교육원',
    AFFILIATION: '연세대학교',
    DETAILS: [
      <>
        신입생 약 340명의 비교과프로그램 참가 신청, 취소, 출결 현황을 관리할 수
        있는 시스템(
        <Link href="/project/yrems" className="text-secondary hover:underline">
          YREMS
        </Link>
        )을 개발하여 1년간 운용하였음. HTML, CSS, Vanilla JS, jQuery를 사용하여
        프론트엔드 웹페이지를 개발하였고, PHP 백엔드와 MYSQL 서버를 모델링하여
        배포하였음. 주기적으로 동료 조교들 및 학생들의 피드백을 바탕으로
        업데이트를 배포함. <span className={tagStyle}>#html</span>
        <span className={tagStyle}>#css</span>
        <span className={tagStyle}>#vanilla-js</span>
        <span className={tagStyle}>#jquery</span>
        <span className={tagStyle}>#php</span>
        <span className={tagStyle}>#mysql</span>
      </>,
      '매 학기 29-31명의 국내 및 여러 문화권 출신의 해외 신입생들을 담당하여 학교 및 기숙사 생활 적응을 돕고, 그 중 14명은 요청에 따라 학생들 간 발생하는 갈등 해결 등에 관련하여 지속적인 상담 및 도움을 제공함.',
      '비교과프로그램 및 기숙사 생활 지원을 위한 학기 당 1200만원 가량의 교내 예산을 관리하였음. 부선임조교로서 동료 조교들의 프로그램 기획을 검토하여 예산을 필요에 따라 할당하고, 예산 사용 내역을 관리하였으며, 증빙 자료를 취합하여 교내 재무 담당 부서에 제출하는 업무를 담당함.',
      '신입생 약 340명을 대상으로 영어로 진행되는 비교과프로그램들을 기획, 운영 및 현장 진행하였음. 다양한 문화권 출신 학생 약 100명 이상이 참여하는 프로그램을 학기 당 6개 이상 진행하고, 다수의 소규모 프로그램도 별도로 진행함.',
      '조교 회의에 매주 참석하여 활발히 의견을 내고 의사 결정 과정에 참여함. 담당교수(외국인) 1명과 각기 여러 국가 출신이 포함된 동료 조교 10명이 참여하는 회의에서 의견을 조율하고, 기숙사 업무 및 프로그램 진행에 있어 역할 분담을 최종 결정함.',
      '개발 경험이 없는 신입생들을 위해 교육 프로그램을 기획하여 코딩 교육을 실시함. Python 을 사용하여 프로그래밍 기초부터 웹 크롤링과 NLP 라이브러리를 활용한 자동 내용 요약 어플리케이션 만들기 등 다양한 주제로 주기적인 수업을 진행하고 개발 과제를 부여함. 개발 경험이 전혀 없던 39명의 학생들 중 31명이 주어진 모든 과제를 기간 내 도움 없이 제출할 수 있을 정도로 학생들의 개발 실력을 향상시킴',
      '동료 조교들과 자원봉사자 수십 명이 숙지할 수 있도록 교내 프로그램 및 행사에 대해 큐시트(시간별 계획서)를 작성하여 배부하고, 효율적인 행사 운영이 이루어질 수 있도록 현장 감독함',
    ],
  }
);

export const yremsDict = createIntlDict(
  {
    NAME: 'YREMS',
    DESCRIPTION: 'Event RSVP and Attendance Management System',
    H_FEAT_STUDENT: 'Student User Features',
    H_FEAT_ADMIN: 'Admin User Features',
  },
  {
    DESCRIPTION: '교내 행사/교육프로그램 참가 신청 및 출결 관리 시스템',
    H_FEAT_STUDENT: '학생 유저 기능',
    H_FEAT_ADMIN: '관리자 유저 기능',
  }
);

import { createIntlDict } from '@/i18n/utils';

const portfolioDict = createIntlDict(
  {
    PORTFOLIO: 'Portfolio',
    SUBHEADING:
      'My past works range from small, full-stack personal projects to contributions to larger open-source projects. I enjoy, and am good at learning new concepts and trying them out in my projects. All projects below were planned and implemented by myself in whole or in part.',
    SIGMATE: 'Sigmate',
    SIGMATE_DESC: 'A wiki platform for the NFT community',
    SIGMATE_EASY_H: 'Information in One Place',
    SIGMATE_EASY_FRONT:
      'From real-time marketplace data to user-committed wiki content.',
    SIGMATE_EASY_BACK: '',
    SIGMATE_RELIABLE_H: 'Cross-Checked and Scam-Free Content',
    SIGMATE_RELIABLE_FRONT:
      'Both users and moderators can "verify", or "flag" any piece of information shared within the platform. The results, along with any changelogs to the content, are instantly shared to all users, allowing for easy distinction between true and sound facts, from fradulent/misleading fake news.',
    SIGMATE_RELIABLE_BACK: '',
    SIGMATE_VALUATION_H: 'Integrated Asset Valuation',
    SIGMATE_VALUATION_FRONT:
      'Assets valuated based on both on/off-chain data, including utilities, funding, social hype, and more.',
    SIGMATE_VALUATION_BACK: '',
    POOLINK: 'Poolink',
    POOLINK_DESC: 'Save, share and explore links',
    YREMS: 'YREMS',
    YREMS_DESC: 'Event participant management system',
  },
  {
    PORTFOLIO: '포트폴리오',
    SUBHEADING:
      '제가 참여했던 프로젝트들을 소개합니다. 개인적으로 진행한 토이 프로젝트부터 오픈 소스 프로젝트까지 참여하며, 주어진 일을 스스로 끝마치는 책임감부터 여러 사람과 함께 의견을 공유하고 협업하는 법을 배웠습니다. 아래 프로젝트들 모두는 전부 또는 일부를 제가 직접 기획하고 구현한 결과물이며, 단순히 강의 영상을 따라만 한 결과물과 클론 코딩은 포함하지 않았습니다.',
    SIGMATE_DESC: 'NFT 위키 및 커뮤니티 플랫폼',
    POOLINK_DESC: (
      <>
        링크 저장, 공유, 탐색 <br className="sm:hidden" />
        어플리케이션
      </>
    ),
    YREMS_DESC: '교내 비교과프로그램 참석자 관리 시스템',
  }
);

export default portfolioDict;

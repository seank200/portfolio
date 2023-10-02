import { createIntlDict } from '@/i18n';

export const yonseiBCDict = createIntlDict(
  {
    TITLE: 'B.S.E. in Bio-Convergence',
    DIVISION: 'Underwood International College',
    AFFILIATION: 'Yonsei University',
    CATEGORY: 'Education',
    LOCATION: 'Seoul, South Korea',
  },
  {
    TITLE: '바이오융합전공 학부졸업',
    DIVISION: '언더우드국제대학',
    AFFILIATION: '연세대학교 신촌캠퍼스',
    CATEGORY: '교육',
    LOCATION: '',
  }
);

export const yonseiCSDict = createIntlDict(
  {
    TITLE: 'B.S.E. in Computer Science',
    DIVISION: <>College of Computing</>,
    AFFILIATION: 'Yonsei University',
    CATEGORY: 'Education',
    LOCATION: 'Seoul, South Korea',
  },
  {
    TITLE: '컴퓨터과학과 학부졸업',
    DIVISION: (
      <>
        인공지능융합대학{' '}
        <span className="text-[0.75em]">(舊 공과대학 컴퓨터과학과)</span>
      </>
    ),
    AFFILIATION: '연세대학교 신촌캠퍼스',
    CATEGORY: '교육',
    LOCATION: '',
  }
);

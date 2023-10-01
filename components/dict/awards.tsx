import { createIntlDict } from '@/i18n';
import { DateTime } from 'luxon';
import { TimePeriod } from '.';

export type AwardItemName = 'presidential';

export const awardsPeriod: Record<AwardItemName, TimePeriod> = {
  presidential: {
    start: DateTime.fromObject({ year: 2017 }),
    end: DateTime.fromObject({ year: 2022 }),
    precision: 'year',
  },
};

export const awardsDict = {
  presidential: createIntlDict(
    {
      TITLE: 'Republic of Korea Presidential Science Scholarship',
      DETAILS: [
        'Korea Student Aid Foundation',
        "Scholarship from the Republic of Korea(ROK) Government in the ROK President's name",
        'Full cost of attendance for all semesters. Additional 2.5M KRW per semester for students of academic excellence',
        'Around 100 students chosen annually through nation-wide screening process of academic performance, recommendation from school, and interview.',
        'Criteria includes academic excellence, potential to contribute to the areas of science, engineering, and/or technology.',
      ],
    },
    {
      TITLE: '대통령과학장학금',
      DETAILS: [
        '푸른등대 한국장학재단',
        '과학/기술 분야에서의 창의성과 잠재성이 풍부한 학생을 선발, 대통령 이름으로 수여하는 장학금',
        '학부과정 8학기 학비 전액 지원, 학점 우수자 대상 학업장려금 별도 지원',
        '매년 100명 내외의 학생을 자기소개서, 학교 생활기록부, 추천서 등의 서류와 면접 과정을 거쳐 선발하며, 수학/과학 분야의 우수성, 사회적 책임감과 기여의식 등이 평가 항목으로 작용함',
      ],
    }
  ),
};

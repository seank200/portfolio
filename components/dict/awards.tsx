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
        "Scholarship from the Republic of Korea(ROK) Government in the ROK President's name",
        'Full cost of attendance for all semesters. Additional 2.5M KRW per semester for students of academic excellence',
        'Around 100 students chosen annually through nation-wide screening process of academic performance, recommendation from school, and interview.',
        'Criteria includes academic excellence, potential to contribute to the areas of science, engineering, and/or technology.',
        'Issuer: President, Republic of Korea. Korea Student Aid Foundation',
      ],
    },
    {
      TITLE: '대통령과학장학금',
      DETAILS: [
        '과학/기술 분야에서의 창의성과 잠재성이 풍부한 학생을 선발, 대통령 이름으로 수여하는 장학금',
        '학부과정 8학기 학비 전액 지원, 학점 우수자 대상 학업장려금 별도 지원',
        '매년 100명 내외의 학생을 자기소개서, 학교 생활기록부, 추천서 등의 서류와 면접 과정을 거쳐 선발하며, 수학/과학 분야의 우수성, 사회적 책임감과 기여의식 등이 평가 항목으로 작용함',
        '기관: 푸른등대 한국장학재단',
      ],
    }
  ),
  cfcROK: createIntlDict(
    {
      NAME: 'Letter of Commendation',
      DETAILS: [
        'Significantly improved response time during crisis situations by developing an automated intelligence analysis report generation program',
        'Issued at: 2 September 2019',
        'Issuer: Major General, Republic of Korea Air Force, Assistant Chief of Staff(C2), ROK-US Combined Forces Command',
      ],
    },
    {
      NAME: '표창장',
      DETAILS: [
        '상황보고 자동화 프로그램 작성으로 조기 경보에 필수적인 상황보고체계를 개선하여 한미 연합 작전태세 완비에 기여함',
        '발행일시: 2019년 9월 2일',
        '발행기관: 한미연합군사령부 정보참모부장(공군소장)',
      ],
    }
  ),
  cfcUS: createIntlDict(
    {
      NAME: 'Certificate of Achievement',
      DETAILS: [
        'Contribution to United States Forces Korea (USFK) as a language specialist',
        'Issued at: 5 October 2020',
        'Issuer: Brigadier General, United States Army, Assistant Chief of Staff(J2), United States Forces Korea',
      ],
    },
    {
      NAME: '표창장',
      DETAILS: [
        '어학병으로서 주한미군 J2의 임무 수행에 큰 기여',
        '발행일시: 2020. 10. 5.',
        '발행기관: 주한미군 정보참모부장(미 육군준장)',
      ],
    }
  ),
};

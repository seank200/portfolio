import { DateTime } from 'luxon';
import { ucnDict } from './ucn';
import { anlDict } from './anl';
import { facadeDict } from './facade';
import { yonseiBCDict, yonseiCSDict } from './yonsei';
import { yicrcDict, yremsDict } from './yicrc';
import { createIntlDict } from '@/i18n';
import { ceosDict } from './ceos';
import { cfcDict } from './cfc';
import { poolinkDict } from './poolink';
import { TimePeriod } from '..';

export type ExperienceItemName =
  | 'ucn'
  | 'anl'
  | 'yonseiCS'
  | 'yonseiBC'
  | 'facade'
  | 'poolink'
  | 'ceos'
  | 'cfc'
  | 'yicrc';

export const myInfo = {
  github: {
    url: 'https://github.com/seanK200',
    id: 'seanK200',
  },
  linkedin: {
    url: 'https://linkedin.com/in/youngwoo-kim-sean/',
    id: 'youngwoo-kim-sean',
  },
  email: {
    url: 'mailto:yw.sean.kim@gmail.com',
    id: 'yw.sean.kim@gmail.com',
  },
};

export const expPeriod: Record<ExperienceItemName, TimePeriod> = {
  ucn: {
    start: DateTime.fromObject({ year: 2021, month: 9 }),
    end: null,
  },
  anl: {
    start: DateTime.fromObject({ year: 2023, month: 6 }),
    end: DateTime.fromObject({ year: 2023, month: 8 }),
  },
  facade: {
    start: DateTime.fromObject({ year: 2022, month: 3 }),
    end: DateTime.fromObject({ year: 2023, month: 4 }),
  },
  yonseiCS: {
    start: DateTime.fromObject({ year: 2017, month: 3, day: 1 }),
    end: DateTime.fromObject({ year: 2023, month: 2, day: 28 }),
  },
  yonseiBC: {
    start: DateTime.fromObject({ year: 2017, month: 3, day: 1 }),
    end: DateTime.fromObject({ year: 2023, month: 2, day: 28 }),
  },
  poolink: {
    start: DateTime.fromObject({ year: 2021, month: 5 }),
    end: DateTime.fromObject({ year: 2022, month: 2 }),
  },
  ceos: {
    start: DateTime.fromObject({ year: 2021, month: 3 }),
    end: DateTime.fromObject({ year: 2021, month: 12 }),
  },
  cfc: {
    start: DateTime.fromObject({ year: 2019, month: 2, day: 18 }),
    end: DateTime.fromObject({ year: 2020, month: 12, day: 17 }),
  },
  yicrc: {
    start: DateTime.fromObject({ year: 2018, month: 3 }),
    end: DateTime.fromObject({ year: 2019, month: 2 }),
  },
};

export const expDict = {
  general: createIntlDict(
    {
      H_FEAT: 'Feature Highlights',
      H_OVERVIEW: 'Service Overview',
      H_MY_ROLE: 'My Role',
    },
    {
      H_FEAT: '기능 상세',
      H_OVERVIEW: '서비스 소개',
      H_MY_ROLE: '담당 업무',
    }
  ),
  ucn: ucnDict,
  anl: anlDict,
  facade: facadeDict,
  yonseiBC: yonseiBCDict,
  yonseiCS: yonseiCSDict,
  poolink: poolinkDict,
  ceos: ceosDict,
  cfc: cfcDict,
  yicrc: yicrcDict,
  yrems: yremsDict,
};

export const expLink: Record<ExperienceItemName, string> = {
  ucn: 'https://www.hcss.or.kr/html/',
  anl: 'https://www.anl.gov',
  facade: '/project/sigmate',
  yonseiBC: 'https://uic.yonsei.ac.kr/main/major.asp?mid=m02_04_03',
  yonseiCS: 'https://cs.yonsei.ac.kr',
  poolink: '/project/poolink',
  ceos: 'https://ceos-sinchon.com',
  cfc: 'https://www.usfk.mil/About/CFC/',
  yicrc: 'https://yicrc.yonsei.ac.kr/main/default.asp?mid=m00',
};

import { DateTime } from 'luxon';
import FacadeLogo from '@/public/images/LOGO_Facade.png';
import ANLLogo from '@/public/images/LOGO_ANL_RGB-01.jpg';
import YonseiLogo from '@/public/images/LOGO_Yonsei.jpg';
import YonseiRCLogo from '@/public/images/LOGO_Yonsei_RC.png';
import YonseiRCLogoDark from '@/public/images/LOGO_Yonsei_RC_Dark.png';
import CFCLogo from '@/public/images/LOGO_CFC.png';
import HCSSLogo from '@/public/images/LOGO_HCSS.png';
import { StaticImageData } from 'next/image';
import { createIntlDict } from '@/i18n/utils';

export type TimePrecision = 'year' | 'month' | 'date';

export type ExpItem = {
  dict: ReturnType<typeof createIntlDict>;
  affiliation?: { url?: string };
  /** Statically imported image. Inserted in Image(next/image)'s src prop. */
  logo?: {
    src: StaticImageData | string;
    darkSrc?: StaticImageData | string;
    width?: number;
    height?: number;
    url?: string;
  };
  startedAt: DateTime;
  /** Defaults to 'month' */
  /** Considered 'current' when omitted */
  endedAt?: DateTime;
  /** Defaults to 'month' */
  timePrecision?: TimePrecision;
};

export const experienceDicts: ExpItem[] = [
  {
    dict: createIntlDict({
      TITLE: 'Research Assistant',
      AFFILIATION:
        'Translational Systems Brain Science Research Institute, Institute of Human Complexity and System Science',
      LOCATION: 'Seoul, South Korea',
      TAGS: ['Current'],
      CONTENTS: [
        <>
          Postbach research assistant at a computational neuroscience laboratory
          (Advisor:{' '}
          <a
            href="https://sites.google.com/site/uicschun/?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Dr. Sehun Chun
          </a>
          )
        </>,
      ],
    }),
    logo: { src: HCSSLogo, width: 110, url: 'https://www.hcss.or.kr' },
    startedAt: DateTime.fromObject({ year: 2023, month: 3 }),
  },
  {
    dict: createIntlDict({
      TITLE: 'Postbach Appointee',
      AFFILIATION:
        'Mathematics and Computer Science Division, Argonne National Laboratory',
      LOCATION: 'Darien, IL, USA',
      CONTENTS: [
        'Full-time short-term employee at Argonne National Laboratory',
      ],
    }),
    logo: { src: ANLLogo, width: 100, url: 'https://www.anl.gov' },
    startedAt: DateTime.fromObject({ year: 2023, month: 5 }),
    endedAt: DateTime.fromObject({ year: 2023, month: 8 }),
  },
  {
    dict: createIntlDict({
      TITLE: 'Undergraduate Research Assistant',
      AFFILIATION: 'UIC cNeuro Lab, Yonsei University',
      LOCATION: 'Seoul, South Korea',
      CONTENTS: [
        <>
          Undergraduate research assistant at a computational neuroscience
          laboratory (Advisor:{' '}
          <a
            href="https://sites.google.com/site/uicschun/?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Dr. Sehun Chun
          </a>
          )
        </>,
      ],
    }),
    logo: { src: YonseiLogo, width: 100 },
    startedAt: DateTime.fromObject({ year: 2021, month: 9 }),
    endedAt: DateTime.fromObject({ year: 2023, month: 2 }),
  },
  {
    dict: createIntlDict({
      TITLE: 'CTO / Backend Developer',
      AFFILIATION: 'Facade Inc.',
      CONTENTS: [
        'Web backend developer and founding member of Facade Inc., a startup company that created Sigmate, a wiki & community platform for NFT(Non-fungible token)s.',
        'Implemented RESTful API Server using NodeJS with TypeScript.',
        'Managed backend deployment on Amazon Web Services (AWS), with multi A-Z backups, load balancers, SSL certificates and VPC security settings.',
        'Led weekly meetings with all members of the development team for agile development, releasing bi-weekly patch updates and monthly feature updates.',
        'Collaborated with PM and design teams during weekly company-wide meeting to provid ideas and feedbacks collected from the dev team on new feature ideas and design updates.',
      ],
    }),
    logo: { src: FacadeLogo, width: 100 },
    startedAt: DateTime.fromObject({ year: 2021, month: 9 }),
    endedAt: DateTime.fromObject({ year: 2023, month: 2 }),
  },
  {
    dict: createIntlDict({
      TITLE: 'ROKA SSgt. / Language Specialist',
      AFFILIATION: 'ROK-U.S. Combined Forces Command',
      LOCATION: 'Seoul, South Korea',
      TAGS: ['Military Service'],
      CONTENTS: [
        'Simultaneous/sequential Korean-English & English-Korean interpretation of general-level(O-8) meetings and combined joint exercises',
      ],
    }),
    logo: { src: CFCLogo, height: 28 },
    startedAt: DateTime.fromObject({ year: 2019, month: 2 }),
    endedAt: DateTime.fromObject({ year: 2020, month: 12 }),
  },
  {
    dict: createIntlDict({
      TITLE: 'Vice Chief Residential Assistant',
      AFFILIATION: 'Residential College, Yonsei University',
      LOCATION: 'Seoul, South Korea',
      CONTENTS: [
        'Vice Chief Residential Assistant at Yonsei University student dormitories',
        "Developed YREMS(Yonsei RC Event Management System), an internal school system for managing students' extracurricular activity participation records",
      ],
    }),
    logo: { src: YonseiRCLogo, darkSrc: YonseiRCLogoDark, width: 110 },
    startedAt: DateTime.fromObject({ year: 2018, month: 3 }),
    endedAt: DateTime.fromObject({ year: 2018, month: 12 }),
  },
];

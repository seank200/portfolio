import { DateTime } from 'luxon';
import FacadeLogo from '@/public/images/LOGO_Facade.png';
import ANLLogo from '@/public/images/LOGO_ANL_RGB-01.jpg';
import YonseiLogo from '@/public/images/LOGO_Yonsei.jpg';
import YonseiRCLogo from '@/public/images/LOGO_Yonsei_RC.png';
import CFCLogo from '@/public/images/LOGO_CFC.png';
import HCSSLogo from '@/public/images/LOGO_HCSS.png';
import { StaticImageData } from 'next/image';

export type TimePrecision = 'year' | 'month' | 'date';

export type PortfolioItem = {
  title: string;
  tags?: { text: string; color: string; bgColor: string }[];
  affiliation?: { text: string; url?: string };
  /** Statically imported image. Inserted in Image(next/image)'s src prop. */
  logo?: {
    src: StaticImageData | string;
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
  location?: string;
  contents?: React.ReactNode[];
};

export const experienceItems: PortfolioItem[] = [
  {
    title: 'Research Assistant',
    tags: [
      {
        text: 'Work Experience',
        color: 'text-slate-600',
        bgColor: 'bg-slate-200',
      },
      {
        text: 'Current',
        color: 'text-primary-on',
        bgColor: 'bg-primary',
      },
    ],
    affiliation: {
      text: 'Translational Systems Brain Science Research Institute, Institute of Human Complexity and System Science',
      url: 'https://www.hcss.or.kr/html/?pmode=rcIntroduce3',
    },
    location: 'Seoul, South Korea',
    logo: { src: HCSSLogo, width: 110, url: 'https://www.hcss.or.kr' },
    startedAt: DateTime.fromObject({ year: 2023, month: 3 }),
    contents: [
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
  },
  {
    title: 'Postbach Appointee',
    tags: [
      {
        text: 'Work Experience',
        color: 'text-slate-600',
        bgColor: 'bg-slate-200',
      },
    ],
    affiliation: {
      text: 'Mathematics and Computer Science Division, Argonne National Laboratory',
      url: 'https://www.anl.gov/mcs',
    },
    location: 'Darien, IL, USA',
    logo: { src: ANLLogo, width: 100, url: 'https://www.anl.gov' },
    startedAt: DateTime.fromObject({ year: 2023, month: 5 }),
    endedAt: DateTime.fromObject({ year: 2023, month: 8 }),
    contents: ['Full-time short-term employee at Argonne National Laboratory'],
  },
  {
    title: 'Undergraduate Research Assistant',
    tags: [
      {
        text: 'Work Experience',
        color: 'text-slate-600',
        bgColor: 'bg-slate-200',
      },
    ],
    affiliation: {
      text: 'UIC cNeuro Lab, Yonsei University',
      url: 'https://www.yonsei.ac.kr',
    },
    location: 'Seoul, South Korea',
    logo: { src: YonseiLogo, width: 100 },
    startedAt: DateTime.fromObject({ year: 2021, month: 9 }),
    endedAt: DateTime.fromObject({ year: 2023, month: 2 }),
    contents: [
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
  },
  {
    title: 'CTO / Backend Developer',
    tags: [
      {
        text: 'Work Experience',
        color: 'text-slate-600',
        bgColor: 'bg-slate-200',
      },
    ],
    affiliation: { text: 'Facade Inc.' },
    logo: { src: FacadeLogo, width: 100 },
    startedAt: DateTime.fromObject({ year: 2022, month: 1 }),
    endedAt: DateTime.fromObject({ year: 2022, month: 12 }),
    contents: [
      'Web backend developer and founding member of Facade Inc., a startup company that created Sigmate, a wiki & community platform for NFT(Non-fungible token)s.',
      'Implemented RESTful API Server using NodeJS with TypeScript.',
      'Managed backend deployment on Amazon Web Services (AWS), with multi A-Z backups, load balancers, SSL certificates and VPC security settings.',
      'Led weekly meetings with all members of the development team for agile development, releasing bi-weekly patch updates and monthly feature updates.',
      'Collaborated with PM and design teams during weekly company-wide meeting to provid ideas and feedbacks collected from the dev team on new feature ideas and design updates.',
    ],
  },
  {
    title: 'ROKA SSgt. / Language Specialist',
    tags: [
      {
        text: 'Military Service',
        color: 'text-lime-900',
        bgColor: 'bg-lime-100',
      },
    ],
    affiliation: {
      text: 'ROK-U.S. Combined Forces Command',
      url: 'https://www.usfk.mil/About/CFC/',
    },
    logo: { src: CFCLogo, height: 28 },
    startedAt: DateTime.fromObject({ year: 2019, month: 2 }),
    endedAt: DateTime.fromObject({ year: 2020, month: 12 }),
  },
  {
    title: 'Vice Chief Residential Assistant',
    tags: [
      {
        text: 'Work Experience',
        color: 'text-slate-600',
        bgColor: 'bg-slate-200',
      },
    ],
    affiliation: {
      text: 'Residential College, Yonsei University',
      url: 'https://yicrc.yonsei.ac.kr',
    },
    logo: { src: YonseiRCLogo, width: 110 },
    startedAt: DateTime.fromObject({ year: 2018, month: 3 }),
    endedAt: DateTime.fromObject({ year: 2018, month: 12 }),
    contents: [
      'Vice Chief Residential Assistant at Yonsei University student dormitories',
      "Developed YREMS(Yonsei RC Event Management System), an internal school system for managing students' extracurricular activity participation records",
    ],
  },
];

'use client';

import { useState, useRef, SetStateAction } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { DateTime } from 'luxon';
import {
  SupportedLang,
  createIntlDict,
  createTranslator,
  formatTime,
  formatTimePeriod,
} from '@/i18n';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import Container from '@/components/Container';
import ANLLogo from '@images/LOGO_ANL_RGB-01.jpg';
import HCSSLogo from '@images/LOGO_HCSS.png';
import FacadeLogo from '@images/LOGO_Facade.png';
import YonseiLogo from '@images/LOGO_Yonsei.jpg';
import YonseiRCLogo from '@images/LOGO_Yonsei_RC.png';
import CFCLogo from '@images/LOGO_CFC.png';

type ExperienceItem =
  | 'anl'
  | 'ucn'
  | 'facade'
  | 'yonseiCS'
  | 'yonseiBC'
  | 'cfc'
  | 'yicrc';

const dict = createIntlDict({
  UCN_TITLE: 'Research Assistant',
  UCN_DIVISION: 'Underwood Computational Neuroscience Laboratory',
  UCN_AFFILIATION: 'Yonsei University HCSS',
  UCN_LOCATION: 'Seoul, S. Korea',
  UCN_DETAILS: [
    'Etiam tincidunt dui ut ligula tempor cursus. Ut eget eros vitae leo placerat lacinia. Sed a semper neque.',
    'Integer consequat arcu ut nibh euismod, nec viverra ligula vestibulum. Cras varius lectus vel dolor auctor aliquam.',
    'Quisque velit risus, consectetur in efficitur quis, tristique finibus tellus.',
    'Nullam pharetra elementum velit ut malesuada. Maecenas ut diam quis ligula vulputate rutrum',
    'Integer pellentesque nibh eu diam imperdiet volutpat. Suspendisse lobortis lorem eu nibh imperdiet molestie.',
  ],
  ANL_TITLE: 'Postbachelorette Appointee',
  ANL_DIVISION: 'Mathematics and Computer Science Division',
  ANL_AFFILIATION: 'Argonne National Laboratory',
  ANL_LOCATION: 'Lemont, IL, USA 🇺🇸',
  ANL_DETAILS: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lorem quis orci ornare efficitur vel id urna.',
    'Etiam tincidunt dui ut ligula tempor cursus. Ut eget eros vitae leo placerat lacinia. Sed a semper neque.',
    'Quisque velit risus, consectetur in efficitur quis, tristique finibus tellus.',
    'Integer consequat arcu ut nibh euismod, nec viverra ligula vestibulum. Cras varius lectus vel dolor auctor aliquam.',
    'Integer pellentesque nibh eu diam imperdiet volutpat. Suspendisse lobortis lorem eu nibh imperdiet molestie.',
    'Nullam pharetra elementum velit ut malesuada. Maecenas ut diam quis ligula vulputate rutrum',
  ],
  FACADE_TITLE: 'CTO/Backend Developer',
  FACADE_AFFILIATION: 'Facade Inc.',
  FACADE_LOCATION: 'Seoul, S. Korea',
  FACADE_DETAILS: [
    'Etiam tincidunt dui ut ligula tempor cursus. Ut eget eros vitae leo placerat lacinia. Sed a semper neque.',
    'Integer consequat arcu ut nibh euismod, nec viverra ligula vestibulum. Cras varius lectus vel dolor auctor aliquam.',
    'Quisque velit risus, consectetur in efficitur quis, tristique finibus tellus.',
    'Nullam pharetra elementum velit ut malesuada. Maecenas ut diam quis ligula vulputate rutrum',
    'Integer pellentesque nibh eu diam imperdiet volutpat. Suspendisse lobortis lorem eu nibh imperdiet molestie.',
  ],
  YONSEI_CS_TITLE: 'B.S.E. in Computer Science (Double Major)',
  YONSEI_CS_DIVISION: 'College of Computing',
  YONSEI_CS_AFFILIATION: 'Yonsei University',
  YONSEI_CS_LOCATION: 'Seoul, S. Korea',
  YONSEI_BC_TITLE: 'B.S.E. in Bio-Convergence',
  YONSEI_BC_DIVISION: 'Underwood International College',
  YONSEI_BC_AFFILIATION: 'Yonsei University',
  YONSEI_BC_LOCATION: 'Seoul, S. Korea',
  CFC_TITLE: 'SSgt/Language Specialist',
  CFC_AFFILIATION: 'R.O.K. - U.S. Combined Forces Command',
  CFC_DETAILS: [
    'Quisque velit risus, consectetur in efficitur quis, tristique finibus tellus.',
    'Etiam tincidunt dui ut ligula tempor cursus. Ut eget eros vitae leo placerat lacinia. Sed a semper neque.',
    'Nullam pharetra elementum velit ut malesuada. Maecenas ut diam quis ligula vulputate rutrum',
    'Integer pellentesque nibh eu diam imperdiet volutpat. Suspendisse lobortis lorem eu nibh imperdiet molestie.',
  ],
  YICRC_TITLE: 'Vice Chief Residential Assistant',
  YICRC_DIVISION: 'Yonsei Residential College',
  YICRC_AFFILIATION: 'Yonsei University',
  YICRC_LOCATION: 'Incheon, S. Korea',
  YICRC_DETAILS: [
    'Etiam tincidunt dui ut ligula tempor cursus. Ut eget eros vitae leo placerat lacinia. Sed a semper neque.',
    'Quisque velit risus, consectetur in efficitur quis, tristique finibus tellus.',
    'Nullam pharetra elementum velit ut malesuada. Maecenas ut diam quis ligula vulputate rutrum',
    'Integer pellentesque nibh eu diam imperdiet volutpat. Suspendisse lobortis lorem eu nibh imperdiet molestie.',
  ],
});

const periodEnd: Record<ExperienceItem, DateTime | Date | null> = {
  ucn: null,
  anl: DateTime.fromObject({ year: 2023, month: 8 }),
  facade: DateTime.fromObject({ year: 2023, month: 2 }),
  yonseiCS: DateTime.fromObject({ year: 2023, month: 2 }),
  yonseiBC: DateTime.fromObject({ year: 2023, month: 2 }),
  cfc: DateTime.fromObject({ year: 2020, month: 12 }),
  yicrc: DateTime.fromObject({ year: 2018, month: 12 }),
};

const getPeriod = (lang: SupportedLang): Record<ExperienceItem, string> => ({
  ucn: formatTimePeriod(
    lang,
    DateTime.fromObject({ year: 2021, month: 9 }),
    periodEnd.ucn
  ),
  anl: formatTimePeriod(
    lang,
    DateTime.fromObject({ year: 2023, month: 6 }),
    periodEnd.anl
  ),
  facade: formatTimePeriod(
    lang,
    DateTime.fromObject({ year: 2022, month: 3 }),
    periodEnd.facade
  ),
  yonseiCS: formatTimePeriod(
    lang,
    DateTime.fromObject({ year: 2017, month: 3 }),
    periodEnd.yonseiCS
  ),
  yonseiBC: formatTimePeriod(
    lang,
    DateTime.fromObject({ year: 2017, month: 3 }),
    periodEnd.yonseiCS
  ),
  cfc: formatTimePeriod(
    lang,
    DateTime.fromObject({ year: 2019, month: 2 }),
    periodEnd.cfc
  ),
  yicrc: formatTimePeriod(
    lang,
    DateTime.fromObject({ year: 2018, month: 3 }),
    periodEnd.yicrc
  ),
});

export default function ExperienceSection({
  lang,
  className,
}: {
  lang: SupportedLang;
  className?: string;
}) {
  const t = createTranslator(lang);
  const {
    UCN_TITLE,
    UCN_DIVISION,
    UCN_AFFILIATION,
    UCN_LOCATION,
    ANL_TITLE,
    ANL_DIVISION,
    ANL_AFFILIATION,
    ANL_LOCATION,
    FACADE_TITLE,
    FACADE_AFFILIATION,
    FACADE_LOCATION,
    YONSEI_CS_TITLE,
    YONSEI_CS_DIVISION,
    YONSEI_CS_AFFILIATION,
    YONSEI_CS_LOCATION,
    YONSEI_BC_TITLE,
    YONSEI_BC_DIVISION,
    YONSEI_BC_AFFILIATION,
    YONSEI_BC_LOCATION,
    CFC_TITLE,
    CFC_AFFILIATION,
    YICRC_TITLE,
    YICRC_DIVISION,
    YICRC_AFFILIATION,
    YICRC_LOCATION,
  } = dict[lang];
  const period = getPeriod(lang);
  const ANL_DETAILS = dict[lang].ANL_DETAILS as React.ReactNode[];
  const UCN_DETAILS = dict[lang].UCN_DETAILS as React.ReactNode[];
  const FACADE_DETAILS = dict[lang].FACADE_DETAILS as React.ReactNode[];
  const CFC_DETAILS = dict[lang].CFC_DETAILS as React.ReactNode[];
  const YICRC_DETAILS = dict[lang].YICRC_DETAILS as React.ReactNode[];

  const [currentItem, setCurrentItem] = useState<ExperienceItem>('ucn');
  const contentDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentDiv,
    offset: ['end end', 'start start'],
  });
  const offsetY = useTransform(scrollYProgress, [0, 1], [600, 0]);

  return (
    <Section className={`${className} || ''`}>
      <Container>
        <SectionHeading>{t('Résumé', '이력서')}</SectionHeading>
        <div className="relative flex items-start">
          <div className="sticky top-0 hidden mr-6 md:mr-12 shrink-0 min-h-screen md:flex flex-col justify-center">
            <Timeline offsetY={offsetY}>
              {formatTime(lang, periodEnd[currentItem])}
            </Timeline>
          </div>
          <motion.div className="grow" ref={contentDiv}>
            <ExperienceItem
              name="ucn"
              title={UCN_TITLE}
              affiliation={UCN_AFFILIATION}
              division={UCN_DIVISION}
              location={UCN_LOCATION}
              contents={UCN_DETAILS}
              period={period.ucn}
              logoSrc={HCSSLogo}
              logoAlt={t('HCSS', '연세대학교 시스템과학융합연구원')}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="anl"
              title={ANL_TITLE}
              affiliation={ANL_AFFILIATION}
              division={ANL_DIVISION}
              location={ANL_LOCATION}
              contents={ANL_DETAILS}
              period={period.anl}
              logoSrc={ANLLogo}
              logoAlt={t('Argonne National Laboratory', '아르곤 국립 연구소')}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="yonseiCS"
              title={YONSEI_CS_TITLE}
              affiliation={YONSEI_CS_AFFILIATION}
              division={YONSEI_CS_DIVISION}
              location={YONSEI_CS_LOCATION}
              period={period.yonseiCS}
              logoSrc={YonseiLogo}
              logoAlt={t('Yonsei Univeristy', '연세대학교(신촌)')}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="yonseiBC"
              title={YONSEI_BC_TITLE}
              affiliation={YONSEI_BC_AFFILIATION}
              division={YONSEI_BC_DIVISION}
              location={YONSEI_BC_LOCATION}
              period={period.yonseiBC}
              logoSrc={YonseiLogo}
              logoAlt={t('Yonsei Univeristy', '연세대학교(신촌)')}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="facade"
              title={FACADE_TITLE}
              affiliation={FACADE_AFFILIATION}
              location={FACADE_LOCATION}
              contents={FACADE_DETAILS}
              period={period.facade}
              logoSrc={FacadeLogo}
              logoAlt={t('Facade Inc.', '파사드')}
              logoHeight={24}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="cfc"
              title={CFC_TITLE}
              affiliation={CFC_AFFILIATION}
              contents={CFC_DETAILS}
              period={period.cfc}
              logoSrc={CFCLogo}
              logoAlt={t('ROK-US Combined Forces Command', '한미연합군사령부')}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="yicrc"
              title={YICRC_TITLE}
              affiliation={YICRC_AFFILIATION}
              division={YICRC_DIVISION}
              location={YICRC_LOCATION}
              contents={YICRC_DETAILS}
              period={period.yicrc}
              logoSrc={YonseiRCLogo}
              logoAlt={t(
                'Yonsei Univeristy Residential College',
                '연세대학교 RC교육원'
              )}
              setCurrentItem={setCurrentItem}
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

function Timeline({
  offsetY,
  children,
}: {
  offsetY: MotionValue<number>;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative h-[600px] max-h-screen border-l-4 border-primary">
      <motion.div style={{ height: offsetY }}></motion.div>
      <div className="relative">
        <motion.h3 className="relative bottom-2 block pl-6 text-primary font-semibold leading-none">
          {children}
        </motion.h3>
        <div className="absolute -top-1 -left-0.5 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
      </div>
    </div>
  );
}

function ExperienceItem({
  name,
  title,
  affiliation,
  division,
  location,
  contents,
  period,
  logoSrc,
  logoAlt,
  logoHeight,
  setCurrentItem,
}: {
  name: ExperienceItem;
  title: React.ReactNode;
  affiliation?: React.ReactNode;
  division?: React.ReactNode;
  location?: React.ReactNode;
  contents?: React.ReactNode[];
  period: string;
  logoSrc?: StaticImageData | string;
  logoAlt?: string;
  logoHeight?: number;
  setCurrentItem: React.Dispatch<SetStateAction<ExperienceItem>>;
}) {
  return (
    <motion.div
      className="min-h-screen py-16 flex flex-col justify-center"
      viewport={{ once: false, amount: 0.5 }}
      onViewportEnter={() => setCurrentItem(name)}
    >
      <p className="mb-2 font-medium text-primary">{period}</p>
      <h3 className="mb-2 text-3xl font-bold">{title}</h3>
      {division && <p className="text-lg text-faded">{division}</p>}
      {affiliation && <p className="text-lg text-faded">{affiliation}</p>}
      {location && <p className="text-lg text-faded">{location}</p>}
      <ul className="mt-6 text-lg leading-relaxed list-inside list-disc">
        {contents &&
          contents.map((content, idx) => <li key={idx}>{content}</li>)}
      </ul>
      {logoSrc && logoAlt && (
        <div className="mt-6 w-full rounded py-3 flex justify-center items-center bg-white">
          <Image src={logoSrc} alt={logoAlt} height={logoHeight || 32} />
        </div>
      )}
    </motion.div>
  );
}

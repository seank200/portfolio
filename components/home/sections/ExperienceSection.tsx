'use client';

import { useState, useRef, SetStateAction, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import mapValues from 'lodash/mapValues';
import throttle from 'lodash/throttle';
import {
  SupportedLang,
  createTranslator,
  formatTime,
  formatTimePeriod,
} from '@/i18n';
import {
  ExperienceItem,
  expPeriod,
  expDict,
  expLink,
} from '@/components/dict/experiences';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import Container from '@/components/Container';
import ANLLogo from '@images/LOGO_ANL_RGB-01.jpg';
import HCSSLogo from '@images/LOGO_HCSS.png';
import FacadeLogo from '@images/LOGO_Facade.png';
import YonseiLogo from '@images/LOGO_Yonsei.jpg';
import YonseiRCLogo from '@images/LOGO_Yonsei_RC.png';
import CFCLogo from '@images/LOGO_CFC.png';
import PoolinkLogo from '@images/LOGO_Poolink.png';
import CEOSLogo from '@images/LOGO_CEOS.png';

export default function ExperienceSection({
  lang,
  className,
}: {
  lang: SupportedLang;
  className?: string;
}) {
  const t = createTranslator(lang);
  const fExpPeriod = mapValues(expPeriod, (period) =>
    formatTimePeriod(lang, period.start, period.end, {
      precision: period.precision,
    })
  );
  const expPeriodEnd = mapValues(expPeriod, (period) => period.end);

  const [currentItem, setCurrentItem] = useState<ExperienceItem>('ucn');
  const [windowH, setWindowH] = useState<number>(500);
  const timelineHeight = windowH - 152;
  const contentDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentDiv,
    offset: ['end end', 'start start'],
  });
  const offsetY = useTransform(scrollYProgress, [0, 1], [timelineHeight, 0]);

  const {
    ucn: UCN_PERIOD,
    anl: ANL_PERIOD,
    facade: FACADE_PERIOD,
    yonseiBC: YONSEI_BC_PERIOD,
    yonseiCS: YONSEI_CS_PERIOD,
    poolink: POOLINK_PERIOD,
    ceos: CEOS_PERIOD,
    cfc: CFC_PERIOD,
    yicrc: YICRC_PERIOD,
  } = fExpPeriod;

  const {
    TITLE: UCN_TITLE,
    DIVISION: UCN_DIVISION,
    AFFILIATION: UCN_AFFILIATION,
    LOCATION: UCN_LOCATION,
    CATEGORY: UCN_CATEGORY,
  } = expDict.ucn[lang];
  const UCN_DETAILS = expDict.ucn[lang].DETAILS as React.ReactNode[];

  const {
    TITLE: ANL_TITLE,
    DIVISION: ANL_DIVISION,
    AFFILIATION: ANL_AFFILIATION,
    LOCATION: ANL_LOCATION,
    CATEGORY: ANL_CATEGORY,
  } = expDict.anl[lang];
  const ANL_DETAILS = expDict.anl[lang].DETAILS as React.ReactNode[];

  const {
    TITLE: FACADE_TITLE,
    AFFILIATION: FACADE_AFFILIATION,
    CATEGORY: FACADE_CATEGORY,
  } = expDict.facade[lang];
  const FACADE_DETAILS = expDict.facade[lang].DETAILS as React.ReactNode[];

  const {
    TITLE: YONSEI_BC_TITLE,
    DIVISION: YONSEI_BC_DIVISION,
    AFFILIATION: YONSEI_BC_AFFILIATION,
    CATEGORY: YONSEI_BC_CATEGORY,
    LOCATION: YONSEI_BC_LOCATION,
  } = expDict.yonseiBC[lang];

  const {
    TITLE: YONSEI_CS_TITLE,
    DIVISION: YONSEI_CS_DIVISION,
    AFFILIATION: YONSEI_CS_AFFILIATION,
    CATEGORY: YONSEI_CS_CATEGORY,
    LOCATION: YONSEI_CS_LOCATION,
  } = expDict.yonseiCS[lang];

  const {
    TITLE: POOLINK_TITLE,
    AFFILIATION: POOLINK_AFFILIATION,
    CATEGORY: POOLINK_CATEGORY,
  } = expDict.poolink[lang];

  const {
    TITLE: CEOS_TITLE,
    CATEGORY: CEOS_CATEGORY,
    DIVISION: CEOS_DIVISION,
    AFFILIATION: CEOS_AFFILIATION,
  } = expDict.ceos[lang];

  const {
    TITLE: CFC_TITLE,
    CATEGORY: CFC_CATEGORY,
    DIVISION: CFC_DIVISION,
    AFFILIATION: CFC_AFFILIATION,
    LOCATION: CFC_LOCATION,
  } = expDict.cfc[lang];
  const CFC_DETAILS = expDict.cfc[lang].DETAILS as React.ReactNode[];

  const {
    TITLE: YICRC_TITLE,
    CATEGORY: YICRC_CATEGORY,
    DIVISION: YICRC_DIVISION,
    AFFILIATION: YICRC_AFFILIATION,
  } = expDict.yicrc[lang];
  const YICRC_DETAILS = expDict.yicrc[lang].DETAILS as React.ReactNode[];

  useEffect(() => {
    setWindowH(window.innerHeight);
    const handleResize = throttle(() => {
      setWindowH(window.innerHeight);
    }, 200);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section id="section-experiences" className={`${className || ''}`}>
      <Container>
        <SectionHeading>{t('Experiences', '이력')}</SectionHeading>
        <div className="relative flex items-start">
          <div className="sticky top-0 hidden mr-6 md:mr-12 shrink-0 min-h-screen md:flex flex-col justify-center">
            <Timeline height={timelineHeight} offsetY={offsetY}>
              {formatTime(lang, expPeriodEnd[currentItem])}
            </Timeline>
          </div>
          <motion.div className="grow" ref={contentDiv}>
            <ExperienceItem
              name="ucn"
              title={UCN_TITLE}
              affiliation={UCN_AFFILIATION}
              division={UCN_DIVISION}
              location={UCN_LOCATION}
              category={UCN_CATEGORY}
              contents={UCN_DETAILS}
              period={UCN_PERIOD}
              logoSrc={HCSSLogo}
              logoAlt={t('HCSS', '연세대학교 시스템과학융합연구원')}
              url={expLink.ucn}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="anl"
              title={ANL_TITLE}
              affiliation={ANL_AFFILIATION}
              division={ANL_DIVISION}
              location={ANL_LOCATION}
              category={ANL_CATEGORY}
              contents={ANL_DETAILS}
              period={ANL_PERIOD}
              logoSrc={ANLLogo}
              logoAlt={t('Argonne National Laboratory', '아르곤 국립 연구소')}
              url={expLink.anl}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="facade"
              title={FACADE_TITLE}
              affiliation={FACADE_AFFILIATION}
              category={FACADE_CATEGORY}
              contents={FACADE_DETAILS}
              period={FACADE_PERIOD}
              logoSrc={FacadeLogo}
              logoAlt={t('Facade Inc.', '파사드')}
              logoHeight={24}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="yonseiCS"
              title={YONSEI_CS_TITLE}
              affiliation={YONSEI_CS_AFFILIATION}
              division={YONSEI_CS_DIVISION}
              category={YONSEI_CS_CATEGORY}
              location={YONSEI_CS_LOCATION}
              period={YONSEI_CS_PERIOD}
              logoSrc={YonseiLogo}
              logoAlt={t('Yonsei Univeristy', '연세대학교(신촌)')}
              url={expLink.yonseiCS}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="yonseiBC"
              title={YONSEI_BC_TITLE}
              affiliation={YONSEI_BC_AFFILIATION}
              division={YONSEI_BC_DIVISION}
              category={YONSEI_BC_CATEGORY}
              location={YONSEI_BC_LOCATION}
              period={YONSEI_BC_PERIOD}
              logoSrc={YonseiLogo}
              logoAlt={t('Yonsei Univeristy', '연세대학교(신촌)')}
              url={expLink.yonseiBC}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="poolink"
              title={POOLINK_TITLE}
              affiliation={POOLINK_AFFILIATION}
              category={POOLINK_CATEGORY}
              period={POOLINK_PERIOD}
              logoSrc={PoolinkLogo}
              logoAlt="Poolink"
              logoHeight={28}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="ceos"
              title={CEOS_TITLE}
              affiliation={CEOS_AFFILIATION}
              division={CEOS_DIVISION}
              category={CEOS_CATEGORY}
              period={CEOS_PERIOD}
              logoSrc={CEOSLogo}
              logoAlt="CEOS"
              url={expLink.ceos}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="cfc"
              title={CFC_TITLE}
              division={CFC_DIVISION}
              affiliation={CFC_AFFILIATION}
              category={CFC_CATEGORY}
              contents={CFC_DETAILS}
              period={CFC_PERIOD}
              location={CFC_LOCATION}
              logoSrc={CFCLogo}
              logoAlt={t('ROK-US Combined Forces Command', '한미연합군사령부')}
              url={expLink.cfc}
              setCurrentItem={setCurrentItem}
            />
            <ExperienceItem
              name="yicrc"
              title={YICRC_TITLE}
              affiliation={YICRC_AFFILIATION}
              division={YICRC_DIVISION}
              category={YICRC_CATEGORY}
              contents={YICRC_DETAILS}
              period={YICRC_PERIOD}
              logoSrc={YonseiRCLogo}
              logoAlt={t(
                'Yonsei Univeristy Residential College',
                '연세대학교 RC교육원'
              )}
              url={expLink.yicrc}
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
  height,
}: {
  offsetY: MotionValue<number>;
  height: number;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{ height: `${height}px` }}
      className="relative max-h-screen border-l-4 border-primary"
    >
      <motion.div style={{ height: offsetY }}></motion.div>
      <div className="relative">
        <motion.h3 className="ml-6 relative bottom-2 block min-w-[9ch] text-primary font-semibold leading-none">
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
  category,
  contents,
  period,
  logoSrc,
  logoAlt,
  logoHeight,
  url,
  setCurrentItem,
}: {
  name: ExperienceItem;
  title: React.ReactNode;
  affiliation?: React.ReactNode;
  division?: React.ReactNode;
  location?: React.ReactNode;
  category?: React.ReactNode;
  contents?: React.ReactNode[];
  period: string;
  logoSrc?: StaticImageData | string;
  logoAlt?: string;
  logoHeight?: number;
  url?: string;
  setCurrentItem: React.Dispatch<SetStateAction<ExperienceItem>>;
}) {
  const logoClassName =
    'mt-6 w-full rounded py-3 flex justify-center items-center bg-white';
  return (
    <motion.div
      className="py-16 flex flex-col justify-center"
      viewport={{ once: false, amount: 1 }}
      onViewportEnter={() => setCurrentItem(name)}
    >
      <p className="mb-2 font-medium text-primary">{period}</p>
      <h3 className="mb-2 flex flex-wrap items-center gap-4 text-3xl font-bold">
        {title}
        {category && (
          <span className="px-2 py-1 bg-primary/10 dark:bg-primary/30 text-sm font-medium">
            {category}
          </span>
        )}
      </h3>
      {division && <p className="text-lg text-faded">{division}</p>}
      {affiliation && <p className="text-lg text-faded">{affiliation}</p>}
      {location && <p className="text-lg text-faded">{location}</p>}
      {contents && (
        <ul className="mt-6 text-lg leading-relaxed list-inside list-disc">
          {contents.map((content, idx) => (
            <li key={idx}>{content}</li>
          ))}
        </ul>
      )}
      {logoSrc &&
        logoAlt &&
        (url ? (
          <a
            href={url}
            className={`${logoClassName} hover:shadow-lg hover:scale-102 transition-all`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logoSrc} alt={logoAlt} height={logoHeight || 32} />
          </a>
        ) : (
          <div className="mt-6 w-full rounded py-3 flex justify-center items-center bg-white">
            <Image src={logoSrc} alt={logoAlt} height={logoHeight || 32} />
          </div>
        ))}
    </motion.div>
  );
}

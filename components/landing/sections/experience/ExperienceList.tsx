import { SupportedLang, createTranslator, formatTimePeriod } from '@/i18n';
import { Dispatch, LegacyRef, SetStateAction } from 'react';
import {
  ExperienceItemName,
  expPeriod,
  expDict,
  expLink,
} from '@/components/dict/experiences';
import ANLLogo from '@images/LOGO_ANL_RGB-01.jpg';
import HCSSLogo from '@images/LOGO_HCSS.png';
import FacadeLogo from '@images/LOGO_Facade.png';
import YonseiRCLogo from '@images/LOGO_Yonsei_RC.png';
import CFCLogo from '@images/LOGO_CFC.png';
import PoolinkLogo from '@images/LOGO_Poolink.png';
import CEOSLogo from '@images/LOGO_CEOS.png';
import { mapValues } from 'lodash';
import ExperienceItem, { ExperienceItemProps } from './ExperienceItem';

type ExperienceItemData = Omit<ExperienceItemProps, 'setCurrentItem' | 'lang'>;

export default function ExperienceList({
  elemRef,
  lang,
  className,
  setCurrentItem,
}: {
  elemRef: LegacyRef<HTMLUListElement>;
  lang: SupportedLang;
  className?: string;
  setCurrentItem: Dispatch<SetStateAction<ExperienceItemName>>;
}) {
  const t = createTranslator(lang);
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
    DIVISION: FACADE_DIVISION,
    CATEGORY: FACADE_CATEGORY,
  } = expDict.facade[lang];
  const FACADE_DETAILS = expDict.facade[lang].DETAILS as React.ReactNode[];

  const {
    TITLE: POOLINK_TITLE,
    DIVISION: POOLINK_DIVISION,
    AFFILIATION: POOLINK_AFFILIATION,
    CATEGORY: POOLINK_CATEGORY,
  } = expDict.poolink[lang];
  const POOLINK_DETAILS = expDict.poolink[lang].DETAILS as React.ReactNode[];

  const {
    TITLE: CEOS_TITLE,
    CATEGORY: CEOS_CATEGORY,
    DIVISION: CEOS_DIVISION,
    AFFILIATION: CEOS_AFFILIATION,
  } = expDict.ceos[lang];
  const CEOS_DETAILS = expDict.ceos[lang].DETAILS as React.ReactNode[];

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

  const fExpPeriod = mapValues(expPeriod, (period) =>
    formatTimePeriod(lang, period.start, period.end, {
      precision: period.precision,
    })
  );
  const {
    ucn: UCN_PERIOD,
    anl: ANL_PERIOD,
    facade: FACADE_PERIOD,
    poolink: POOLINK_PERIOD,
    ceos: CEOS_PERIOD,
    cfc: CFC_PERIOD,
    yicrc: YICRC_PERIOD,
  } = fExpPeriod;

  const experiences: ExperienceItemData[] = [
    {
      name: 'ucn',
      title: UCN_TITLE,
      affiliation: UCN_AFFILIATION,
      division: UCN_DIVISION,
      location: UCN_LOCATION,
      category: UCN_CATEGORY,
      contents: UCN_DETAILS,
      period: UCN_PERIOD,
      logoSrc: HCSSLogo,
      logoAlt: t('HCSS', '연세대학교 시스템과학융합연구원'),
      url: expLink.ucn,
    },
    {
      name: 'anl',
      title: ANL_TITLE,
      affiliation: ANL_AFFILIATION,
      division: ANL_DIVISION,
      location: ANL_LOCATION,
      category: ANL_CATEGORY,
      contents: ANL_DETAILS,
      period: ANL_PERIOD,
      logoSrc: ANLLogo,
      logoAlt: t('Argonne National Laboratory', '아르곤 국립 연구소'),
      url: expLink.anl,
    },
    {
      name: 'facade',
      title: FACADE_TITLE,
      affiliation: FACADE_AFFILIATION,
      division: FACADE_DIVISION,
      category: FACADE_CATEGORY,
      contents: FACADE_DETAILS,
      period: FACADE_PERIOD,
      logoSrc: FacadeLogo,
      logoAlt: t('Facade Inc.', '파사드'),
      logoHeight: 24,
      url: expLink.facade,
    },
    {
      name: 'poolink',
      title: POOLINK_TITLE,
      division: POOLINK_DIVISION,
      affiliation: POOLINK_AFFILIATION,
      category: POOLINK_CATEGORY,
      contents: POOLINK_DETAILS,
      period: POOLINK_PERIOD,
      logoSrc: PoolinkLogo,
      logoAlt: t('Yonsei Univeristy', '연세대학교(신촌)'),
      url: expLink.poolink,
      logoHeight: 26,
    },
    {
      name: 'ceos',
      title: CEOS_TITLE,
      affiliation: CEOS_AFFILIATION,
      division: CEOS_DIVISION,
      category: CEOS_CATEGORY,
      contents: CEOS_DETAILS,
      period: CEOS_PERIOD,
      logoSrc: CEOSLogo,
      logoAlt: 'CEOS',
      url: expLink.ceos,
    },
    {
      name: 'cfc',
      title: CFC_TITLE,
      affiliation: CFC_AFFILIATION,
      division: CFC_DIVISION,
      category: CFC_CATEGORY,
      location: CFC_LOCATION,
      period: CFC_PERIOD,
      contents: CFC_DETAILS,
      logoSrc: CFCLogo,
      logoAlt: t('ROK-US Combined Forces Command', '한미연합군사령부'),
      url: expLink.cfc,
    },
    {
      name: 'yicrc',
      title: YICRC_TITLE,
      affiliation: YICRC_AFFILIATION,
      division: YICRC_DIVISION,
      category: YICRC_CATEGORY,
      period: YICRC_PERIOD,
      contents: YICRC_DETAILS,
      logoSrc: YonseiRCLogo,
      logoAlt: t(
        'Yonsei Univeristy Residential College',
        '연세대학교 RC교육원'
      ),
      url: expLink.yicrc,
    },
  ];

  return (
    <ul
      ref={elemRef}
      className={`-translate-y-1 pt-8 md:pt-0 w-full ${className}`}
    >
      {experiences.map((item) => (
        <ExperienceItem
          key={item.name}
          name={item.name}
          title={item.title}
          affiliation={item.affiliation}
          division={item.division}
          contents={item.contents}
          category={item.category}
          location={item.location}
          period={item.period}
          logoSrc={item.logoSrc}
          logoAlt={item.logoAlt}
          logoHeight={item.logoHeight}
          url={item.url}
          setCurrentItem={setCurrentItem}
          lang={lang}
        />
      ))}
    </ul>
  );
}

'use client';

import portfolioDict from '@components/contents/Portfolio';
import { SupportedLang } from '@i18n/utils';
import sigmateLogo from '@/public/images/LOGO_Sigmate.png';
import sigmateLogoDark from '@/public/images/LOGO_Sigmate_Dark.png';
import poolinkLogo from '@/public/images/LOGO_Poolink.png';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PortfolioOverview({ lang }: { lang: SupportedLang }) {
  const { SIGMATE, POOLINK, YREMS } = portfolioDict[lang];
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="mb-16">
      <div
        className="mb-6 grid grid-cols-lg gap-4"
        onMouseLeave={() => setSelected('')}
      >
        <ProjectCard
          logoSrc={sigmateLogo}
          logoDarkSrc={sigmateLogoDark}
          logoHeight={36}
          title={`${SIGMATE}`}
          hideTitle
          onMouseEnter={() => setSelected('Sigmate')}
        />
        <ProjectCard
          logoSrc={poolinkLogo}
          logoHeight={30}
          title={`${POOLINK}`}
          hideTitle
          onMouseEnter={() => setSelected('Poolink')}
        />
        <ProjectCard
          title={`${YREMS}`}
          onMouseEnter={() => setSelected('YREMS')}
        />
      </div>
      <p className="text-gray-500">
        <FontAwesomeIcon icon={faArrowRight} className="mr-1 w-6" />
        Click on a project to view more details
        {selected ? (
          <>
            about <span className="font-medium text-secondary">{selected}</span>
          </>
        ) : null}
      </p>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/Container';
import { SupportedLang, createIntlDict } from '@/i18n';
import sigmateArch from '@images/sigmate/Sigmate_Arch.png';
import sigmateArchConcise from '@images/sigmate/Sigmate_Arch_Concise.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

const dict = createIntlDict(
  {
    H_ARCH: 'Backend Architecture',
    ARCH_DESC:
      "Sigmate's backend was deployed on Amazon Web Services (AWS). The deployment environment was set up with redundancy to provide continous service uptime, and with best security practices in mind.",
    ARCHITECTURE: 'Diagram',
    SUMMARY: 'Summary',
    FULL: 'Full',
    VIEW_IN_FULL: 'View in full screen',
  },
  {
    H_ARCH: '아키텍쳐 다이어그램',
    ARCH_DESC:
      'Sigmate 백엔드는 아마존 웹 서비스(AWS)에 배포되었습니다. 배포 아키텍처는 서비스 연속성 보장과 보안 유지가 가능하도록 설계되었습니다.',
    ARCHITECTURE: '아키텍쳐',
    SUMMARY: '요약',
    FULL: '상세',
    VIEW_IN_FULL: '전체화면 보기',
  }
);

export default function SigmateArch({ lang }: { lang: SupportedLang }) {
  const { H_ARCH, ARCH_DESC, SUMMARY, FULL, VIEW_IN_FULL } = dict[lang];
  const [variant, setVariant] = useState<'concise' | 'full'>('concise');

  const imgBaseUrl = '/images/sigmate';
  const imgUrl = {
    concise: `${imgBaseUrl}/Sigmate_Arch_Concise.png`,
    full: `${imgBaseUrl}/Sigmate_Arch.png`,
  };

  const imgPadding = 'px-1 py-2 md:px-6 md:py-8';

  useEffect(() => {
    const isMobile = window ? window.innerWidth < 768 : false;
    setVariant(isMobile ? 'concise' : 'full');
  }, []);

  return (
    <Container>
      <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <h4 className="text-2xl font-semibold">⚙️ {H_ARCH}</h4>
        <div className="mt-6 md:mt-0 w-full md:w-auto flex justify-center md:justify-end items-center">
          <button
            className="w-1/2 md:w-auto rounded-l border border-primary px-4 py-1 text-primary disabled:text-background disabled:bg-primary font-medium"
            disabled={variant === 'concise'}
            onClick={() => setVariant('concise')}
          >
            {SUMMARY}
          </button>
          <button
            className="w-1/2 md:w-auto rounded-r border border-primary px-4 py-1 text-primary disabled:text-background disabled:bg-primary font-medium"
            disabled={variant === 'full'}
            onClick={() => setVariant('full')}
          >
            {FULL}
          </button>
        </div>
      </div>
      <p className="mb-8 text-faded text-light leading-relaxed">{ARCH_DESC}</p>
      <div className="relative">
        <motion.div
          variants={{
            concise: {
              rotateX: 180,
              opacity: 0,
            },
            full: {
              rotateX: 0,
              opacity: 1,
            },
          }}
          className={`absolute top-0 ${imgPadding} rounded-lg shadow-lg shadow-background-on/20 bg-white overflow-hidden cursor-pointer`}
          animate={variant}
          onClick={() =>
            window.open(imgUrl.full, '_blank', 'noopener,noreferrer')
          }
        >
          <Image src={sigmateArch} alt="Sigmate Architecture Diagram" />
        </motion.div>
        <motion.div
          variants={{
            concise: {
              rotateX: 0,
              opacity: 1,
            },
            full: {
              rotateX: 180,
              opacity: 0,
            },
          }}
          animate={variant}
          className={`absolute top-0 ${imgPadding} rounded-lg shadow-lg shadow-background-on/20 bg-white overflow-hidden cursor-pointer`}
          onClick={() =>
            window.open(imgUrl[variant], '_blank', 'noopener,noreferrer')
          }
        >
          <Image src={sigmateArchConcise} alt="Sigmate Architecture Diagram" />
        </motion.div>
      </div>
      <div className={`invisible ${imgPadding}`}>
        <Image
          src={sigmateArch}
          className={variant === 'full' ? '' : 'hidden'}
          alt="Sigmate Architecture Diagram"
        />
        <Image
          src={sigmateArchConcise}
          className={variant === 'concise' ? '' : 'hidden'}
          alt="Sigmate Architecture Diagram"
        />
      </div>

      <Link
        href={imgUrl[variant]}
        className="mt-6 mx-auto block px-6 py-2 text-center text-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faExpand} className="mr-3" />
        {VIEW_IN_FULL}
      </Link>
    </Container>
  );
}

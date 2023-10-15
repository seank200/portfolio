'use client';

import { SupportedLang, createTranslator, formatTime } from '@/i18n';
import Section from '@components/Section';
import Container from '@components/Container';
import SectionH2 from '@components/SectionH2';
import { useEffect, useRef, useState } from 'react';
import { mapValues, throttle } from 'lodash';
import { motion, useScroll, useTransform } from 'framer-motion';
import ExperienceList from './ExperienceList';
import { ExperienceItemName, expPeriod } from '@/components/dict/experiences';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export default function ExperienceSection({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);

  // Check dark mode
  const [mounted, setMounted] = useState(false);
  const isDarkMode = () => {
    if (mounted) {
      const isUserDark = document.documentElement.classList.contains('dark');
      const isUserLight = document.documentElement.classList.contains('light');
      const isSystemDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      return isUserLight ? false : isUserDark || isSystemDark;
    }
    return false;
  };

  const primaryColor = isDarkMode()
    ? 'rgb(150, 101, 236)'
    : 'rgb(106, 27, 243)';
  const secondaryColor = isDarkMode()
    ? 'rgb(28, 106, 232)'
    : 'rgb(17, 100, 232)';

  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [innerHeight, setInnerHeight] = useState<number>(0);
  const [currentItem, setCurrentItem] = useState<ExperienceItemName>('ucn');
  const expPeriodEnd = mapValues(expPeriod, (period) => period.end);
  const timelineElem = useRef<HTMLDivElement>(null);
  const contentElem = useRef<HTMLUListElement>(null);
  const labelElem = useRef<HTMLParagraphElement>(null);

  const labelWidth = labelElem.current?.getBoundingClientRect().width || 0;
  const { scrollYProgress } = useScroll({
    target: contentElem,
    offset: ['end end', 'start start'],
  });

  const isMobile = innerWidth ? innerWidth < 768 : false;
  const timeLineWidth = contentElem.current
    ? contentElem.current.getBoundingClientRect().width
    : 0;
  const timelineHeight = innerHeight ? innerHeight - 8 * 16 : 0; // calc(100vh - 12rem)

  const indicatorOffsetX = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? timeLineWidth - 12 : -24, isMobile ? 0 : -24]
  );
  const indicatorOffsetY = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? -20 : timelineHeight, isMobile ? -20 : 0]
  );

  const labelOffsetX = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? timeLineWidth - labelWidth : 0, 0]
  );
  const labelOffsetY = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobile ? 0 : timelineHeight, 0]
  );
  const labelColor = useTransform(
    scrollYProgress,
    [0, 1],
    [secondaryColor, primaryColor]
  );

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
    setInnerWidth(window.innerWidth);
    setInnerHeight(window.innerHeight);

    const handleResize = throttle(() => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section id="experiences">
      <Container>
        <SectionH2 href="#experiences">{t('Experiences', '이력')}</SectionH2>
        <p className="text-faded">
          {t(
            'Introducing my work and project experiences. My experiences range from personal hobby projects to contribution to large open-source projects during internship programs.',
            '소프트웨어 개발 프로젝트 및 업무 경험입니다. 개인 취미 프로젝트부터 대규모 오픈 소스 프로젝트에 기여하는 등, 다양한 활동을 통해 실무 경험과 협업 능력을 키웠습니다.'
          )}
        </p>
      </Container>
      <Container className="mt-8 md:mt-0 relative flex flex-col md:flex-row">
        <div className="z-10 md:z-0 md:mr-8 pt-4 md:pt-0 w-full md:h-screen md:w-fit sticky top-0 flex flex-col md:flex-row justify-center md:justify-start md:items-center bg-background">
          <div className="mt-3 md:hidden flex items-center text-sm text-faded font-bold">
            <FontAwesomeIcon icon={faClock} className="mr-2 h-4" />
            {t('Timeline', '타임라인')}
          </div>
          <div className="w-full md:w-auto pt-4 md:pt-0 flex flex-col md:flex-row items-start">
            <div
              ref={timelineElem}
              className="w-full h-1 md:w-1 rounded-full bg-gradient-to-b from-primary to-secondary"
              style={{
                width: isMobile ? timeLineWidth : undefined,
                height: isMobile ? 3 : timelineHeight,
              }}
            ></div>
            <div className="mt-3 md:mt-0 md:ml-4 min-w-[10ch] flex flex-row md:flex-col">
              <motion.div
                style={{ width: labelOffsetX, height: labelOffsetY }}
                className="relative"
              >
                <motion.div
                  className="absolute -top-8 left-0 md:top-0 md:-left-6 w-3 h-3 rounded-full bg-primary"
                  style={{
                    top: indicatorOffsetY,
                    left: indicatorOffsetX,
                    backgroundColor: labelColor,
                  }}
                ></motion.div>
              </motion.div>
              <motion.p
                ref={labelElem}
                className="shrink-0 -translate-y-1/4 text-primary font-semibold md:font-medium"
                style={{ color: labelColor }}
              >
                {formatTime(lang, expPeriodEnd[currentItem])}
              </motion.p>
            </div>
          </div>
        </div>
        <ExperienceList
          lang={lang}
          elemRef={contentElem}
          setCurrentItem={setCurrentItem}
        />
      </Container>
    </Section>
  );
}

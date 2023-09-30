'use client';

import { SupportedLang, createTranslator, formatTime } from '@/i18n';
import Section from '../../Section';
import Container from '../../../Container';
import SectionH2 from '../../SectionH2';
import { useEffect, useRef, useState } from 'react';
import { mapValues, throttle } from 'lodash';
import { motion, useScroll, useTransform } from 'framer-motion';
import ExperienceList from './ExperienceList';
import { ExperienceItemName, expPeriod } from '@/components/dict/experiences';

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
  const contentElem = useRef<HTMLDivElement>(null);
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
    <Section>
      <Container>
        <SectionH2>{t('Experiences', '이력')}</SectionH2>
        <p className="text-faded">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
          nisi libero. Donec in arcu non ante facilisis finibus rhoncus ut
          magna. Phasellus nec cursus quam. Morbi ultricies nunc at viverra
          eleifend. Donec congue sem eu nulla pharetra elementum. Nam cursus
          aliquam finibus.
        </p>
      </Container>
      <Container className="relative flex flex-col md:flex-row">
        <div className="absolute top-0 bottom-0 z-10 md:relative">
          <div className="pt-4 md:pt-0 w-full md:min-h-screen md:w-fit sticky top-0 flex items-center bg-background">
            <div className="w-full md:w-auto pt-8 md:pt-0 flex flex-col md:flex-row items-start">
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
                  className="shrink-0 -translate-y-1/4 text-primary font-medium"
                  style={{ color: labelColor }}
                >
                  {formatTime(lang, expPeriodEnd[currentItem])}
                </motion.p>
              </div>
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

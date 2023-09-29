'use client';

import { SupportedLang, createIntlDict } from '@/i18n';
import Section from '@/components/home/Section';
import Container from '@/components/Container';
import Memoji from '@/components/home/Memoji';
import { motion } from 'framer-motion';

const dict = createIntlDict(
  {
    TITLE_1: 'Passion-Driven',
    TITLE_2: 'Backend Web Developer',
    SUBTITLE_1: "Hi, I'm Youngwoo",
    SUBTITLE_2: 'I am a developer based on Seoul, South Korea.',
    CONTACT_ME: 'Contact Me',
    LEARN_MORE: 'Learn more about me',
  },
  {
    TITLE_1: '열정 가득한',
    TITLE_2: '백엔드 웹 개발자',
    SUBTITLE_1: '안녕하세요 김영우입니다',
    SUBTITLE_2: '개발과 함께했던 제 시간들을 소개합니다.',
    CONTACT_ME: '연락하기',
    LEARN_MORE: '더 알아보기',
  }
);

export default function HeroSection({ lang }: { lang: SupportedLang }) {
  const { TITLE_1, TITLE_2, SUBTITLE_1, SUBTITLE_2, CONTACT_ME, LEARN_MORE } =
    dict[lang];

  const handleViewPortfolioClick = () => {
    const rect = document
      .querySelector('#section-home')
      ?.getBoundingClientRect();
    const heroHeight = rect?.height || window.innerHeight;
    window.scrollBy({ top: heroHeight, left: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document
      .querySelector('#section-contact')
      ?.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <Section id="section-home" className="relative">
      <Container className="py-24 min-h-screen relative flex justify-center md:justify-between items-center ">
        <div className="flex flex-col">
          <h1 className="mb-6 text-4xl sm:text-5xl font-semibold leading-snug sm:leading-snug">
            {TITLE_1}
            <br />
            <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
              {TITLE_2}
            </span>
          </h1>
          <p className="group flex text-xl sm:text-2xl leading-relaxed sm:leading-relaxed">
            {SUBTITLE_1}&nbsp;
            <motion.span
              className="block"
              animate={{
                rotate: [0, -10, 10, -10, 10, 0],
                transition: {
                  repeat: Infinity,
                  repeatDelay: 5,
                },
              }}
              whileHover={{ scale: 1.1 }}
            >
              👋
            </motion.span>
          </p>
          <p className="mb-20 md:mb-28 text-xl sm:text-2xl leading-relaxed sm:leading-relaxed">
            {SUBTITLE_2}
          </p>
          <div className="flex flex-col sm:items-start sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              onClick={handleViewPortfolioClick}
              className="px-6 py-3 md:py-2 rounded-md bg-background-on font-medium text-background transition-colors hover:bg-primary hover:text-primary-on"
            >
              {LEARN_MORE}
            </button>
            <button
              onClick={handleContactClick}
              className="px-6 py-3 md:py-2 rounded-md border-2 border-background-on font-medium text-background-on transition-colors hover:border-primary hover:text-primary"
            >
              {CONTACT_ME}
            </button>
          </div>
        </div>
        <Memoji />
      </Container>
    </Section>
  );
}

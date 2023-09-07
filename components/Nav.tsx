'use client';

import Link from 'next/link';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import { SupportedLang, createTranslator } from '@/i18n';
import LangSelect from './LangSelect';
import { motion } from 'framer-motion';

export default function Nav({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);

  const [isOpen, setIsOpen] = useState<boolean>(false); // mobile
  const [scrollY, setScrollY] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false); // scrolling down
  const [screenW, setScreenW] = useState<number>(0);
  const isMobile = screenW < 768;
  const animationVariant = isMobile
    ? isOpen
      ? 'mobileOpen'
      : 'mobileClosed'
    : 'desktop';

  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    setScrollY(window.scrollY);
    setScreenW(window.innerWidth);

    const handleResize = throttle(() => {
      setIsOpen(false);
      setScreenW(window.innerWidth);
    }, 100);
    const handleScroll = throttle(() => {
      setScrollY((prevScrollY) => {
        const newScrollY = window.scrollY;

        if (newScrollY >= 20 && newScrollY > prevScrollY + 20) {
          setIsScrollingDown(true);
        }
        if (newScrollY < 20 || newScrollY < prevScrollY - 10) {
          setIsScrollingDown(false);
        }

        return newScrollY;
      });
    }, 200);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  const shadow = scrollY >= 50 ? 'shadow' : '';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-10 ${shadow} shadow-background-on/10 bg-background`}
      variants={{
        mobileOpen: {
          bottom: 0,
        },
        mobileClosed: {},
        desktop: {
          bottom: 'unset',
        },
        hidden: {
          y: '-100%',
        },
        visible: {
          y: 0,
        },
      }}
      initial={false}
      animate={[animationVariant, isScrollingDown ? 'hidden' : 'visible']}
    >
      <Container className="py-8 flex justify-between items-center">
        <Link
          href="/"
          className="relative top-0.5 z-20 bg-clip-text bg-gradient-to-br from-primary to-secondary font-display font-extrabold text-xl hover:text-transparent uppercase transition-colors"
        >
          Youngwoo
        </Link>
        <button
          className="z-20 md:hidden"
          onClick={() => setIsOpen((p) => !p)}
          title={
            isOpen
              ? t('Close navigation', '메뉴 닫기')
              : t('Open navigation', '메뉴 열기')
          }
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
        <motion.ul
          className={`absolute md:static top-0 left-0 right-0 z-10 flex flex-col md:flex-row items-start md:items-center p-12 md:p-0 overflow-hidden bg-background`}
          variants={{
            mobileOpen: {
              bottom: 0,
              opacity: 1,
              paddingTop: '6rem',
              transition: {
                when: 'beforeChildren',
                staggerChildren: 0.05,
              },
            },
            mobileClosed: {
              bottom: '100%',
              opacity: 0,
              paddingTop: 0,
            },
            desktop: {
              opacity: 1,
              paddingTop: 0,
            },
          }}
        >
          <NavItem href="/" onClick={handleLinkClick}>
            {t('Home', '홈')}
          </NavItem>
          <NavItem href="/" onClick={handleLinkClick}>
            {t('Experience', '업무 경험')}
          </NavItem>
          <NavItem href="/" onClick={handleLinkClick}>
            {t('Portfolio', '포트폴리오')}
          </NavItem>
          <motion.li
            className="grow flex items-end md:items-center"
            variants={{
              mobileOpen: { opacity: 1 },
              mobileClosed: { opacity: 0 },
              desktop: { opacity: 1 },
            }}
            onClick={handleLinkClick}
          >
            <LangSelect lang={lang} />
          </motion.li>
        </motion.ul>
      </Container>
    </motion.nav>
  );
}

function NavItem({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: MouseEventHandler<HTMLLIElement>;
  children?: React.ReactNode;
}) {
  return (
    <motion.li
      onClick={onClick}
      className="mb-6 md:mb-0 md:mr-8 py-1 text-lg md:text-base text-faded"
      variants={{
        mobileOpen: { opacity: 1 },
        mobileClosed: { opacity: 0 },
        desktop: { opacity: 1 },
      }}
    >
      <Link href={href}>{children}</Link>
    </motion.li>
  );
}

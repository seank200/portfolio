'use client';

import Link from 'next/link';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import { SupportedLang, createTranslator } from '@/i18n';
import LangSelect from './LangSelect';

export default function Nav({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);

  const [isOpen, setIsOpen] = useState<boolean>(false); // mobile
  const [scrollY, setScrollY] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false); // scrolling down

  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = throttle(() => setIsOpen(false), 100);
    const handleScroll = throttle(() => {
      setScrollY((prevScrollY) => {
        const newScrollY = window.scrollY;

        if (newScrollY > 50 && newScrollY > prevScrollY + 20) {
          setIsScrollingDown(true);
        }
        if (newScrollY < 50 || newScrollY < prevScrollY - 10) {
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

  const translateX = `${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  } md:translate-x-0`;
  const translateY = isScrollingDown ? '-translate-y-full' : 'translate-y-0';
  const boxShadow = scrollY > 100 ? 'shadow-lg' : '';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 ${translateY} ${boxShadow} py-6 flex bg-background z-10 transition-all`}
    >
      <Container className="flex justify-between items-center">
        <Link
          href="/"
          className="relative top-0.5 bg-clip-text bg-gradient-to-br from-primary to-secondary font-display font-extrabold text-xl hover:text-transparent transition-colors"
        >
          YOUNGWOO
        </Link>
        <ul
          className={`fixed md:static top-0 bottom-0 left-0 right-0 ${translateX} z-10 p-12 md:p-0 flex flex-col md:flex-row bg-background-variant md:bg-background transition-position`}
        >
          <button
            className="mb-4 md:hidden self-end"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} className="h-5" />
          </button>
          <NavItem href="/" onClick={handleLinkClick}>
            {t('Home', '홈')}
          </NavItem>
          <NavItem href="/" onClick={handleLinkClick}>
            {t('Experience', '업무 경험')}
          </NavItem>
          <NavItem href="/" onClick={handleLinkClick}>
            {t('Portfolio', '포트폴리오')}
          </NavItem>
          <NavItem href="/" onClick={handleLinkClick}>
            {t('Contact Me', '연락하기')}
          </NavItem>
          <div className="grow md:grow-0 flex flex-col justify-end">
            <LangSelect lang={lang} />
          </div>
        </ul>
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars} className="h-4" />
        </button>
      </Container>
    </nav>
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
    <li
      onClick={onClick}
      className="mb-6 md:mb-0 md:mr-8 py-1 text-xl md:text-base md:text-faded hover:text-background-on"
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}

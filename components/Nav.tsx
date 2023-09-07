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

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = throttle(() => setIsOpen(false), 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 py-6 flex bg-background z-10">
      <Container className="flex justify-between items-center">
        <Link
          href="/"
          className="relative top-0.5 bg-clip-text bg-gradient-to-br from-primary to-secondary font-display font-extrabold text-xl hover:text-transparent transition-colors"
        >
          YOUNGWOO
        </Link>
        <ul
          className={`fixed md:static top-0 bottom-0 left-0 right-0 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:translate-x-0 z-10 p-12 md:p-0 flex flex-col md:flex-row bg-background-variant md:bg-background transition-position`}
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

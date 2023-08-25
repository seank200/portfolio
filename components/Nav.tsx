'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Container';
import useScroll from '@/hooks/useScroll';
import LangSelect from './LangSelect';
import throttle from 'lodash/throttle';
import { SupportedLang, createIntlDict } from '@/i18n/utils';

const dict = createIntlDict(
  {
    HOME: 'Home',
    EXPERIENCE: 'Experience',
    PORTFOLIO: 'Portfolio',
    CONTACT_ME: 'Contact Me',
  },
  {
    HOME: '홈',
    EXPERIENCE: '업무경험',
    PORTFOLIO: '포트폴리오',
    CONTACT_ME: '연락하기',
  }
);

export default function Nav({ lang }: { lang: SupportedLang }) {
  const [isOpen, setIsOpen] = useState<boolean>(false); // mobile only
  const [scrollY, isScrollingDown] = useScroll();
  const shadow = scrollY > 50 ? 'drop-shadow' : '';
  const top =
    !isOpen && scrollY > 50 && isScrollingDown ? '-top-full' : 'top-0';

  const { HOME, EXPERIENCE, PORTFOLIO } = dict[lang];

  useEffect(() => {
    const handleResize = throttle(() => {
      if (isOpen && window.innerWidth > 640) setIsOpen(false);
    }, 250);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <nav
      className={`${shadow} fixed z-10 ${top} left-0 right-0 ${
        isOpen ? 'bottom-0' : ''
      } py-8 md:py-6 bg-background transition-position`}
    >
      <Container className="flex flex-col md:flex-row md:justify-between">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="relative top-1 leading-none text-xl font-display font-extrabold uppercase text-gradient-hover"
          >
            Youngwoo
          </Link>
          {isOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="text-xl md:hidden"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="md:hidden"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        <ul
          className={`${
            isOpen ? '' : 'hidden'
          } mt-12 md:mt-0 md:flex md:space-x-8`}
        >
          <NavItem href={`#home`}>{HOME}</NavItem>
          <NavItem href={`#work-experience`}>{EXPERIENCE}</NavItem>
          <NavItem href={`#portfolio`}>{PORTFOLIO}</NavItem>
          <li>
            <LangSelect lang={lang} />
          </li>
        </ul>
      </Container>
    </nav>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <li className="mb-8 md:mb-0 font-light md:font-normal text-xl md:text-base hover:text-primary">
      <a href={href}>{children}</a>
    </li>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Container';
import useScroll from '@/hooks/useScroll';
import LangSelect from './LangSelect';
import throttle from 'lodash/throttle';
import type { SupportedLanguage } from './contents';

export default function Nav({ lang }: { lang: SupportedLanguage }) {
  const [isOpen, setIsOpen] = useState<boolean>(false); // mobile only
  const [scrollY, isScrollingDown] = useScroll();
  const shadow = scrollY > 50 ? 'drop-shadow' : '';
  const top =
    !isOpen && scrollY > 50 && isScrollingDown ? '-top-full' : 'top-0';

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
      } py-8 sm:py-6 bg-background transition-position`}
    >
      <Container className="flex flex-col sm:flex-row sm:justify-between">
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
              className="text-xl sm:hidden"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="sm:hidden"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        <ul
          className={`${
            isOpen ? '' : 'hidden'
          } mt-12 sm:mt-0 sm:flex sm:space-x-8`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/">Experience</NavItem>
          <NavItem href="/">Portfolio</NavItem>
          <NavItem href="/">Contact Me</NavItem>
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
    <li className="mb-8 sm:mb-0 font-light sm:font-normal text-xl sm:text-base hover:text-primary">
      <Link href={href}>{children}</Link>
    </li>
  );
}

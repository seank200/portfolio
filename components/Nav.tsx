'use client';

import Link from 'next/link';
import Container from '@/components/Container';
import useScroll from '@/hooks/useScroll';
import LangSelect from './LangSelect';

export default function Nav({ lang }: { lang: string }) {
  const [scrollY, isScrollingDown] = useScroll();

  return (
    <nav
      className={` ${
        scrollY > 50 ? 'drop-shadow' : ''
      } transition-position duration-500 ease-in-out fixed z-10 ${
        scrollY > 50 && isScrollingDown ? '-top-full' : 'top-0'
      } left-0 right-0 py-6 bg-background text-background-on`}
    >
      <Container className="flex justify-between">
        <Link
          href="/"
          className="block relative top-[2px] text-xl font-display font-extrabold uppercase text-gradient-hover"
        >
          Youngwoo
        </Link>
        <ul className="flex space-x-8">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/">Experience</NavItem>
          <NavItem href="/">Portfolio</NavItem>
          <NavItem href="/">Contact Me</NavItem>
          <LangSelect lang={lang} />
        </ul>
      </Container>
    </nav>
  );
}

export function NavItem({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) {
  return (
    <li>
      <Link className="hover:text-primary" href={href}>
        {children}
      </Link>
    </li>
  );
}

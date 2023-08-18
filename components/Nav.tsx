'use client';

import Link from 'next/link';
import Container from '@/components/Container';
import useScroll from '@/hooks/useScroll';

export default function Nav() {
  const [scrollY, isScrollingDown] = useScroll();

  return (
    <nav
      className={` ${
        scrollY > 50 ? 'drop-shadow' : ''
      } transition-position duration-500 ease-in-out fixed z-10 ${
        isScrollingDown ? '-top-full' : 'top-0'
      } left-0 right-0 py-6 bg-background text-background-on`}
    >
      <Container className="justify-between">
        <Link
          href="/"
          className="block relative top-[2px] text-xl font-display font-extrabold uppercase"
        >
          Youngwoo
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Github</Link>
          </li>
          <li>
            <Link href="/">Contact Me</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

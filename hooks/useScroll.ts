import throttle from 'lodash/throttle';
import { useEffect, useState } from 'react';

const SCROLL_DOWN_THRSH = 20;
const SCROLL_UP_THRSH = 10;
const SCROLL_TOP_THRSH = 50;

export default function useScroll(): {
  scrollY: number;
  scrollDirection: 'down' | 'up';
} {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false); // scrolling down

  useEffect(() => {
    setScrollY(window.scrollY);

    const handleScroll = throttle(() => {
      setScrollY((prevScrollY) => {
        const newScrollY = window.scrollY;

        if (
          newScrollY >= SCROLL_TOP_THRSH &&
          newScrollY > prevScrollY + SCROLL_DOWN_THRSH
        ) {
          setIsScrollingDown(true);
        }
        if (
          newScrollY < SCROLL_TOP_THRSH ||
          newScrollY < prevScrollY - SCROLL_UP_THRSH
        ) {
          setIsScrollingDown(false);
        }

        return newScrollY;
      });
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    scrollY: scrollY,
    scrollDirection: isScrollingDown ? 'down' : 'up',
  };
}

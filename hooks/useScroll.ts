import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

const SCROLL_DOWN_THRSH = 10;
const SCROLL_UP_THRSH = 30;

export default function useScroll(): [number, boolean] {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isScrollingDown, setScrollingDown] = useState<boolean>(false);

  useEffect(() => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
    const scrollListener = throttle(() => {
      setScrollY((prevScrollY) => {
        const newScrollY = window.scrollY || document.documentElement.scrollTop;
        if (newScrollY > prevScrollY + SCROLL_DOWN_THRSH) {
          setScrollingDown(true);
          // console.log(
          //   `Scroll Direction: DOWN (${prevScrollY} -> ${newScrollY})`
          // );
        } else if (newScrollY < prevScrollY - SCROLL_UP_THRSH) {
          setScrollingDown(false);
          // console.log(`Scroll Direction: UP (${prevScrollY} -> ${newScrollY})`);
        }
        return newScrollY;
      });
    }, 100);
    document.addEventListener('scroll', scrollListener);

    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return [scrollY, isScrollingDown];
}

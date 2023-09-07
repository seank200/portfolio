'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function ScrollGuide({
  /** CSS selector for the element to scroll to */
  scrollTo,
  children,
}: {
  scrollTo?: string;
  children?: React.ReactNode;
}) {
  const handleClick = () => {
    if (!scrollTo) return;
    document.querySelector(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className={`group absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col justify-center items-center text-sm text-primary hover:text-primary-variant ${
        scrollTo ? 'cursor-pointer' : ''
      }`}
    >
      {children}
      <FontAwesomeIcon
        icon={faChevronDown}
        className="relative animate-beckon group-hover:animate-none"
        style={{ height: '1rem' }}
      />
    </div>
  );
}

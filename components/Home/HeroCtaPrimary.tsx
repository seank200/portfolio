'use client';

import useShortcut from '@/hooks/useShortcut';

export default function HeroCtaPrimary() {
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-2 rounded-md bg-background-on font-medium text-background transition-colors hover:bg-primary hover:text-primary-on"
    >
      View Portfolio
    </button>
  );
}

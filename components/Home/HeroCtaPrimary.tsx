'use client';

import useShortcut from '@/hooks/useShortcut';

export default function HeroCtaPrimary() {
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-2 rounded-md bg-background-on font-medium text-white transition-colors hover:bg-primary"
    >
      View Portfolio
    </button>
  );
}

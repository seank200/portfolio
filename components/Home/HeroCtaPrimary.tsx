'use client';

export default function HeroCtaPrimary({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 sm:py-2 rounded-md bg-background-on font-medium text-background transition-colors hover:bg-primary hover:text-primary-on"
    >
      {children}
    </button>
  );
}

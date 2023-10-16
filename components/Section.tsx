'use client';

export default function Section({
  className,
  children,
  elementRef,
  id,
  screen,
}: {
  className?: string;
  children: React.ReactNode;
  elementRef?: React.LegacyRef<HTMLElement>;
  id?: string;
  screen?: boolean;
}) {
  return (
    <section
      id={id}
      className={`w-full my-8 first:mt-0 py-8 first:py-0 scroll-mt-8 ${className} ${
        screen ? 'min-h-screen transition-all' : ''
      }`}
      style={{ minHeight: screen ? '100svh' : undefined }}
      ref={elementRef}
    >
      {children}
    </section>
  );
}

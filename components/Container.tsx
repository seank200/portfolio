export const containerClassName =
  'mx-auto w-full max-w-6xl px-12 md:px-16 2xl:px-0';

export default function Container({
  className = '',
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return <div className={`${containerClassName} ${className}`}>{children}</div>;
}

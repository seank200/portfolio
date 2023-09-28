export const containerPaddingX = `px-8 md:px-16 2xl:px-0`;

export const containerClassName = `mx-auto w-full max-w-7xl ${containerPaddingX}`;

export const containerNoPaddingXOnMobileClassName =
  'mx-auto w-full md:max-w-7xl md:px-16 2xl:px-0';

export default function Container({
  noPaddingXOnMobile,
  className = '',
  children,
}: {
  noPaddingXOnMobile?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const base = noPaddingXOnMobile
    ? containerNoPaddingXOnMobileClassName
    : containerClassName;
  return <div className={`${base} ${className}`}>{children}</div>;
}

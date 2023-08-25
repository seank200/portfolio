export default function Container({
  children,
  className,
  mobilePaddingX = 'px-8',
}: {
  children?: React.ReactNode;
  className?: string;
  mobilePaddingX?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl ${mobilePaddingX} md:px-16 2xl:px-0 ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
}

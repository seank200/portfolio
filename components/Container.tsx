export default function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-10 md:px-16 2xl:px-0 ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
}

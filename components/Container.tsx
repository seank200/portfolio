export default function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-10 2xl:px-0 flex ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
}

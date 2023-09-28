export default function SectionHeading({
  className,
  children,
  style,
}: {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      className={`mb-2 2xl:mb-4 bg-clip-text bg-gradient-to-br from-secondary to-primary text-4xl 2xl:text-5xl text-transparent font-semibold leading-relaxed ${
        className || ''
      }`}
      style={style}
    >
      {children}
    </h2>
  );
}

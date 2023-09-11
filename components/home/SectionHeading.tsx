export default function SectionHeading({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <h2
      className={`mb-4 bg-clip-text bg-gradient-to-br from-secondary to-primary text-4xl text-transparent font-semibold leading-relaxed ${
        className || ''
      }`}
    >
      {children}
    </h2>
  );
}

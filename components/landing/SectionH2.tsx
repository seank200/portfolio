export default function SectionH2({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <h2
      className={`mb-3 w-fit text-3xl md:text-4xl font-semibold ${className}`}
    >
      {children}
    </h2>
  );
}

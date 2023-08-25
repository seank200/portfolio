export default function SectionHeading({
  color = 'primary',
  children,
}: {
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
}) {
  return (
    <h2
      className={`text-4xl md:text-5xl font-semibold mb-4 ${
        color === 'secondary' ? 'text-gradient-secondary' : 'text-gradient'
      }`}
    >
      {children}
    </h2>
  );
}

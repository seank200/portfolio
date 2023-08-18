export default function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`w-full h-screen ${className || ''}`}>
      {children}
    </section>
  );
}

export default function ProjectSummarySection({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section className="w-full shrink-0 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 leading-relaxed">
      {children}
    </section>
  );
}

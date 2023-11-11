export type ProjectPeriod = {
  start: Date;
  end?: Date;
};

export default function ProjectDetailsSection({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={`mb-16 group/project relative w-full ${className || ""}`}
      id={id}
    >
      {children}
    </section>
  );
}

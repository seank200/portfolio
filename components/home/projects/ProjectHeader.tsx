export default function ProjectHeader({
  title,
  period,
  description,
}: {
  title?: React.ReactNode;
  period?: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <>
      {title && <p className="md:hidden font-medium text-faded">{title}</p>}
      {period && <p className="mb-4 md:hidden text-sm text-faded">{period}</p>}
      {description && <p className="md:text-lg">{description}</p>}
    </>
  );
}

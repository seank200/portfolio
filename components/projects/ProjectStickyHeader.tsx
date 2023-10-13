import Container from '@/components/Container';

export default function ProjectStickyHeader({
  heading,
  title,
  period,
}: {
  heading: React.ReactNode;
  title?: React.ReactNode;
  period?: string;
}) {
  return (
    <div className="mt-4 z-10 sticky top-0 -translate-y-[1px] shadow shadow-background/20 py-6 md:py-4 bg-background">
      <Container>
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className="flex justify-between md:justify-start items-center">
            <h3>{heading}</h3>
            {title && (
              <p className="hidden md:block md:ml-4 rounded px-3 py-1 bg-secondary/10 font-semibold text-faded text-sm">
                {title}
              </p>
            )}
          </div>
          <div className="mt-4 md:mt-0 hidden md:flex flex-row items-start md:items-center">
            {period && <p className="text-faded">{period}</p>}
          </div>
        </div>
      </Container>
    </div>
  );
}

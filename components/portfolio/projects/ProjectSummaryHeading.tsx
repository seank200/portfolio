import Heading from "../Heading";

export default function ProjectSummaryHeading({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Heading level={4} className="text-xl font-bold">
      {children}
    </Heading>
  );
}

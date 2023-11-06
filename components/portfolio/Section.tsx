import Heading, { HeadingLevel } from "./Heading";

export default function Section({
  level,
  id,
  className,
  heading,
  hideHeading,
  children,
}: {
  level: HeadingLevel;
  id: string;
  heading: string;
  className?: string;
  hideHeading?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className={`w-full ${className}`} id={id}>
      <Heading level={level} className={`${hideHeading ? "hidden" : ""}`}>
        {heading}
      </Heading>
      {children}
    </section>
  );
}

import Container from "@components/Container";
import Heading, { HeadingLevel } from "./Heading";

export default function Section({
  level,
  id,
  className,
  headingClassName,
  heading,
  hideHeading,
  children,
}: {
  level: HeadingLevel;
  id: string;
  heading?: React.ReactNode;
  headingClassName?: string;
  className?: string;
  hideHeading?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section className={`w-full ${className || ""}`} id={id}>
      {heading && (
        <Container>
          <Heading
            level={level}
            className={`${hideHeading ? "hidden" : ""} ${
              headingClassName || ""
            }`}
          >
            {heading}
          </Heading>
        </Container>
      )}
      {children}
    </section>
  );
}

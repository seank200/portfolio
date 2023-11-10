import Heading from "../Heading";

export default function ProjectHeading({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Heading level={3} className="">
      {children}
    </Heading>
  );
}

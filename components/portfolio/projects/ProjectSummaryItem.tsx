import { MyLang, createIntlDict } from "@lib/i18n";
import Heading from "../Heading";

const dict = createIntlDict(
  {
    OVERVIEW: "Project Summary",
    ROLE: "Role Summary",
    TECH: "Tech Summary",
  },
  {
    OVERVIEW: "프로젝트 개요",
    ROLE: "담당 업무 요약",
    TECH: "기술 스택",
  },
);

export default function ProjectSummaryItem({
  id,
  lang,
  heading: headingProp,
  children,
}: {
  id: string;
  lang: MyLang;
  heading?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const { OVERVIEW, ROLE, TECH } = dict[lang];

  let heading: React.ReactNode;
  if (typeof headingProp === "string") {
    switch (headingProp) {
      case "overview":
        heading = OVERVIEW;
        break;
      case "role":
        heading = ROLE;
        break;
      case "tech":
        heading = TECH;
        break;
      default:
        heading = headingProp;
        break;
    }
  } else {
    heading = headingProp;
  }

  return (
    <section id={id}>
      <Heading level={4}>{heading}</Heading>
      {children}
    </section>
  );
}

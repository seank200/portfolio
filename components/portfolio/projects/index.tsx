import { MyLang, translator } from "@lib/i18n";
import Heading from "../Heading";

export default function ProjectSection({
  children,
  lang,
}: {
  children?: React.ReactNode;
  lang: MyLang;
}) {
  const t = translator(lang);
  return (
    <section id="projects" className="scroll-my-16">
      <Heading level={2} className="container">
        {t("Projects", "주요 프로젝트 경험")}
      </Heading>
      <section
        id="project-overview"
        className="container grid grid-cols-1 md:grid-cols-3"
      ></section>
      {children}
    </section>
  );
}

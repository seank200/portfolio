import Section from "@components/portfolio/Section";
import { MyLang, translator } from "@lib/i18n";

export default function ProjectSection({
  children,
  lang,
}: {
  children?: React.ReactNode;
  lang: MyLang;
}) {
  const t = translator(lang);
  return (
    <Section
      level={2}
      heading={t("Projects", "프로젝트")}
      id="projects"
      hideHeading
    >
      {children}
    </Section>
  );
}

import { MyLang } from "@lib/i18n";

export type ProjectPeriod = {
  start: Date;
  end?: Date;
};

export default function ProjectSection({
  id,
  className,
  lang,
  children,
}: {
  id: string;
  className?: string;
  lang: MyLang;
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

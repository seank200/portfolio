import MyLink from "@components/MyLink";
import TSCss from "@components/portfolio/tech/TSCss";
import TSHtml from "@components/portfolio/tech/TSHtml";
import TSJavascript from "@components/portfolio/tech/TSJavascript";
import TSJquery from "@components/portfolio/tech/TSJquery";
import TSMysql from "@components/portfolio/tech/TSMysql";
import TSPhp from "@components/portfolio/tech/TSPhp";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyLang, translator } from "@lib/i18n";

export default function YremsTechSummary({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  const techStack = [
    <TSHtml key="HTML" />,
    <TSCss key="CSS" />,
    <TSJavascript key="JavaScript" />,
    <TSJquery key="jQuery" />,
    <TSPhp key="PHP" />,
    <TSMysql key="MYSQL" />,
  ];

  return (
    <>
      <ul className="flex flex-wrap gap-4">
        {techStack.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <ul className="mt-6 flex flex-col gap-2 text-sm">
        <li>
          <MyLink
            href="https://github.com/seanK200/yrems"
            className="text-ctp-blue hover:underline"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="mr-2 h-em text-ctp-text"
            />
            {t("Project Repo..", "소스 코드")}
          </MyLink>
        </li>
      </ul>
    </>
  );
}

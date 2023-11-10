import { MyLang, translator } from "@lib/i18n";
import TSTypescript from "@components/portfolio/tech/TSTypescript";
import TSNodejs from "@components/portfolio/tech/TSNodejs";
import TSMysql from "@components/portfolio/tech/TSMysql";
import TSAws from "@components/portfolio/tech/TSAws";
import TSBash from "@components/portfolio/tech/TSBash";
import TSGit from "@components/portfolio/tech/TSGit";
import TSAWSDyanmoDB from "@components/portfolio/tech/TSAWSDynamoDB";
import MyLink from "@components/MyLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import ProjectSummaryItem from "../ProjectSummaryItem";

export default function SigmateTechSummary({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  const techStack = [
    <TSTypescript key="TypeScript" />,
    <TSNodejs key="Nodejs" />,
    <TSMysql key="MYSQL" />,
    <TSAws key="AWS" />,
    <TSBash key="Bash" />,
    <TSGit key="Git" />,
    <TSAWSDyanmoDB key="DyanmoDB" />,
  ];

  return (
    <ProjectSummaryItem id="sigmate-tech-summary" heading="role" lang={lang}>
      <ul className="flex flex-wrap gap-4">
        {techStack.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <ul className="mt-6 flex flex-col gap-2 text-sm">
        <li>
          <MyLink
            href="https://github.com/teamfacade/sigmate-backend"
            className="text-ctp-blue hover:underline"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="mr-2 h-em text-ctp-text"
            />
            {t("Project Repo..", "소스 코드")}
          </MyLink>
        </li>
        <li>
          <MyLink
            href="https://sigmate.gitbook.io/"
            className="text-ctp-blue hover:underline"
          >
            <FontAwesomeIcon
              icon={faBook}
              className="mr-2 h-em text-ctp-text"
            />
            {t("Service Docs..", "기술 백서")}
          </MyLink>
        </li>
      </ul>
    </ProjectSummaryItem>
  );
}

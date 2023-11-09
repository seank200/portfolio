import MyLink from "@components/MyLink";
import TSBash from "@components/portfolio/tech/TSBash";
import TSGit from "@components/portfolio/tech/TSGit";
import TSJavascript from "@components/portfolio/tech/TSJavascript";
import TSReact from "@components/portfolio/tech/TSReact";
import TSReactQuery from "@components/portfolio/tech/TSReactQuery";
import TSVercel from "@components/portfolio/tech/TSVercel";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyLang, translator } from "@lib/i18n";

export default function PoolinkTechSummary({ lang }: { lang: MyLang }) {
  const t = translator(lang);

  const techStack = [
    <TSReact key="ReactJS" />,
    <TSJavascript key="JavaScript" />,
    <TSReactQuery key="React Query" />,
    <TSVercel key="Vercel" />,
    <TSGit key="Git" />,
    <TSBash key="Bash" />,
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
            href="https://github.com/seanK200/poolink-frontend"
            className="text-ctp-blue hover:underline"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="mr-2 h-em text-ctp-text"
            />
            {t("Project Repo..", "소스 코드 (Github)")}
          </MyLink>
        </li>
      </ul>
    </>
  );
}

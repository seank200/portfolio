import ListItem from "@components/ListItem";
import { MyLang, translator } from "@lib/i18n";
import ProjectSummaryItem from "../ProjectSummaryItem";

export default function SigmateRoleSummary({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  return (
    <ProjectSummaryItem id="sigmate-role-summary" heading="role" lang={lang}>
      <ul>
        <ListItem>
          {t(
            "Title: Chief Technology Officer (CTO)",
            "직책: CTO (최고 기술 책임자)",
          )}
        </ListItem>
        <ListItem>
          {t(
            "Developed of web API server with custom wiki engine, and deployed it on Amazon Web Services (AWS)",
            "커스텀 위키 엔진이 포함된 백엔드 API 서버 구현을 주도하고, 이를 AWS에 배포하였음",
          )}
        </ListItem>
        <ListItem>
          {t(
            "Collaborated with a team of 6 developers, 3 PMs and 1 designer, and maintained service for around a year, with regular patch/feature updates",
            "CTO로서 개발팀(6명), 기획팀(3명), 디자이너(1명)과 협업 하 서비스를 약 1년간 운영하며, 주기적으로 업데이트를 배포함.",
          )}
        </ListItem>
      </ul>
    </ProjectSummaryItem>
  );
}

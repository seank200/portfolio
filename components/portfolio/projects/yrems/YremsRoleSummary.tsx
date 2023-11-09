import ListItem from "@components/ListItem";
import { MyLang, translator } from "@lib/i18n";

export default function YremsRoleSummary({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  return (
    <ul>
      <ListItem>{t("Full-stack web developer", "풀스택 웹 개발자")}</ListItem>
      <ListItem>
        {t(
          "Developed a web frontend and backend code for student event participation management and modeled relational database schemas.",
          "교내 행사 프로그램 관리에 필요한 참가 신청 및 출결 관리 기능 구현을 위한 웹 프론트엔드 및 백엔드 코드를 단독 개발하고, DB를 모델링함",
        )}
      </ListItem>
      <ListItem>
        {t(
          "Received feedback from around 340 students and 20 other admin users and pushed updates and performed maintenance regularly.",
          "약 340명 가량의 학생 유저와 20명 가량의 관리자 유저로부터의 피드백을 수용하여 주기적으로 업데이트를 배포하고 유지보수를 실시함",
        )}
      </ListItem>
    </ul>
  );
}

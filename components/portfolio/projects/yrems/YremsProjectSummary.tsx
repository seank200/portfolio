import { MyLang, translator } from "@lib/i18n";
import ProjectSummaryItem from "../ProjectSummaryItem";

export default function YremsProjectSummary({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  return (
    <ProjectSummaryItem
      id="yrems-project-summary"
      lang={lang}
      heading="overview"
    >
      <p>
        {t(
          "YREMS is a event participation RSVP and attendance checking system specifically developed for student extracurricular activities at my university. This service was incorportated into official school systems after a year of service.",
          "YREMS는 대학 내 학생들의 비교과프로그램 참가 신청, 출결 관리를 위해 개발된 시스템입니다. 1년간 실제 교내 신입생 대상으로 운용 후, 필요성과 완성도를 인정받아 학교 공식 시스템에 통합 반영되었습니다.",
        )}
      </p>
    </ProjectSummaryItem>
  );
}

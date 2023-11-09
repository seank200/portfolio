import ListItem from "@components/ListItem";
import { MyLang, translator } from "@lib/i18n";

export default function PoolinkRoleSummary({ lang }: { lang: MyLang }) {
  const t = translator(lang);

  return (
    <ul>
      <ListItem>
        {t(
          "Lead Developer / Frontend Development",
          "개발 팀장 / 웹 프론트엔드 개발",
        )}
      </ListItem>
      <ListItem>
        {t(
          "Led development of frontend web application with responsive design and client side rendering/routing.",
          "웹 프론트엔드 개발을 주도하여 반응형 디자인과 클라이언트 측 렌더링/라우팅이 적용된 웹 SPA 구현",
        )}
      </ListItem>
      <ListItem>
        {t(
          "Collaborated with a team of 4 developers, 2 PMs and 2 deesigners, and provided long-term service maintenance and updates",
          "개발 팀장으로서 개발자(4명), 기획(2명), 디자이너(2명)과 협업 하 서비스를 약 6개월 간 운영하며 주기적으로 유지/보수함.",
        )}
      </ListItem>
    </ul>
  );
}

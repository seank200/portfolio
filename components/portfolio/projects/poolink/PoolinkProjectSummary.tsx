import MyLink from "@components/MyLink";
import { faDollar } from "@fortawesome/free-solid-svg-icons/faDollar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyLang, translator } from "@lib/i18n";

export default function PoolinkProjectSummary({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  return (
    <>
      <p>
        {t(
          "Poolink is a web platform for saving, sharing favorite links, and discovering new content on the web.",
          "Poolink는 링크 저장, 공유, 탐색 웹 플랫폼 입니다. 유저들은 다시 방문하고 싶은 웹사이트의 링크(URL)들을 손쉽게 정리 및 공유할 수 있고, 관심사에 맞는 새로운 웹 컨텐츠를 추천받습니다. ",
        )}
      </p>
      <p className="mt-5 text-sm font-medium">
        <FontAwesomeIcon
          icon={faDollar}
          className="mr-2 h-em text-ctp-yellow"
        />
        {t(
          <>
            Funded by{" "}
            <MyLink
              href="https://www.mss.go.kr/"
              className="text-ctp-blue hover:underline"
            >
              Ministry of SMEs and Startups
            </MyLink>
            , S. Korea
          </>,
          <>
            <MyLink
              href="https://www.mss.go.kr/"
              className="text-ctp-blue hover:underline"
            >
              중소벤처기업부
            </MyLink>{" "}
            지원대상 선정 (2021 예비창업패키지)
          </>,
        )}
      </p>
    </>
  );
}

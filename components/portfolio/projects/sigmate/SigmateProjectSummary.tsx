import MyLink from "@components/MyLink";
import { faDollar } from "@fortawesome/free-solid-svg-icons/faDollar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyLang, translator } from "@lib/i18n";
import ProjectSummaryItem from "../ProjectSummaryItem";

export default function SigmateProjectSummary({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  return (
    <ProjectSummaryItem
      id="sigmate-project-summary"
      heading="overview"
      lang={lang}
    >
      <p>
        {t(
          "Sigmate is a wiki and community platform that provides reliable information on Non-fungible Tokens(NFTs). With Sigmate, users can easily valuate NFT assets and confidently make investment decisions.",
          "Sigmate는 신뢰성 높은 NFT 투자 정보를 제공하는 위키 및 커뮤니티 플랫폼으로, 투자 정보를 얻기 힘들어 NFT 투자를 꺼려하는 고객들을 위해 개발되었습니다. NFT 정보 서비스를 통해 사용자들은 자산 가치를 쉽게 파악하고, 확신 있는 투자 결정을 내리게 됩니다.",
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
            지원대상 선정 (2022 예비창업패키지)
          </>,
        )}
      </p>
    </ProjectSummaryItem>
  );
}

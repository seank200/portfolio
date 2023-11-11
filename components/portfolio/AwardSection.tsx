import { MyLang, createIntlDict, translator } from "@lib/i18n";
import Heading from "./Heading";
import ListItem from "@components/ListItem";

const awardsDict = {
  presidential: createIntlDict(
    {
      NAME: "Republic of Korea Presidential Science Scholarship",
      DETAILS: [
        "Scholarship from the Republic of Korea(ROK) Government in the ROK President's name",
        "Full cost of attendance for all semesters. Additional 2.5M KRW per semester for students of academic excellence",
        "Around 100 students chosen annually through nation-wide screening process of academic performance, recommendation from school, and interview.",
        "Criteria includes academic excellence, potential to contribute to the areas of science, engineering, and/or technology.",
        "Issuer: President, Republic of Korea. Korea Student Aid Foundation",
      ],
    },
    {
      NAME: "대통령과학장학금",
      DETAILS: [
        "지원기간: 학부 8학기 학비 전액 지원",
        "평가기준: 과학/기술 분야에서의 창의성과 잠재성",
        "지원기관: 푸른등대 한국장학재단",
      ],
    },
  ),
  cfcROK: createIntlDict(
    {
      NAME: "Letter of Commendation",
      DETAILS: [
        "Significantly improved response time during crisis situations by developing an automated intelligence analysis report generation program",
        "Issued at: 2 September 2019",
        "Issuer: Major General, Republic of Korea Air Force, Assistant Chief of Staff(C2), ROK-US Combined Forces Command",
      ],
    },
    {
      NAME: "표창장",
      DETAILS: [
        "상황보고 자동화 프로그램 작성으로 조기 경보에 필수적인 상황보고체계를 개선하여 한미 연합 작전태세 완비에 기여함",
        "발행일시: 2019. 9. 2.",
        "발행기관: 한미연합군사령부 정보참모부장 (공군소장)",
      ],
    },
  ),
  cfcUS: createIntlDict(
    {
      NAME: "Certificate of Achievement",
      DETAILS: [
        "Contribution to United States Forces Korea (USFK) as a language specialist",
        "Issued at: 5 October 2020",
        "Issuer: Brigadier General, United States Army, Assistant Chief of Staff(J2), United States Forces Korea",
      ],
    },
    {
      NAME: "표창장",
      DETAILS: [
        "어학병으로서 주한미군사령부의 임무 수행을 지원하여, 한반도 내 평화 유지와 한미 동맹 강화에 크게 기여함",
        "발행일시: 2020. 10. 5.",
        "발행기관: 주한미군 정보참모부장 (美 육군준장)",
      ],
    },
  ),
};

export default function AwardSection({ lang }: { lang: MyLang }) {
  const t = translator(lang);

  const pr = awardsDict.presidential[lang];
  const cr = awardsDict.cfcROK[lang];
  const cu = awardsDict.cfcUS[lang];

  const items = [
    {
      time: "2017 - 2023",
      name: pr.NAME,
      details: pr.DETAILS,
    },
    {
      time: "2020",
      name: cu.NAME,
      details: cu.DETAILS,
    },
    {
      time: "2019",
      name: cr.NAME,
      details: cr.DETAILS,
    },
    {
      time: "2018",
      name: t("Award of Academic Achievement", "학업우수상"),
      details: [t("Issued by: Yonsei University", "발행기관: 연세대학교")],
    },
    {
      time: "2017",
      name: t("Award of Academic Achievement", "학업우수상"),
      details: [t("Issued by: Yonsei University", "발행기관: 연세대학교")],
    },
  ];

  return (
    <section id="awards" className="my-16 scroll-my-16 container">
      <Heading level={2}>{t("Awards & Scholarship", "수상/장학")}</Heading>
      <table>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td className="pr-4 py-1 font-semibold align-top">{item.time}</td>
              <td className="border-l border-ctp-text pl-4 py-1 align-top leading-relaxed">
                <span className="font-semibold">{item.name}</span> <br />
                <ul>
                  {item.details.map((detail, idx) => (
                    <ListItem key={idx}>{detail}</ListItem>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

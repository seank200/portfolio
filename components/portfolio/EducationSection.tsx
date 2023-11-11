import { MyLang, translator } from "@lib/i18n";
import Heading from "./Heading";
import MyLink from "@components/MyLink";

const yonseiLink = {
  bc: "https://uic.yonsei.ac.kr/main/major.asp?mid=m02_04_03",
  cs: "https://cs.yonsei.ac.kr",
};

export default function EducationSection({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  return (
    <section id="education" className="my-16 scroll-my-16 container">
      <Heading level={2}>{t("Education", "교육")}</Heading>
      <table>
        <tbody>
          <tr>
            <td className="font-semibold pr-4 py-1">2023</td>
            <td className="border-l border-ctp-text pl-4 py-1">
              <MyLink href={yonseiLink.bc} className="hover:underline">
                {t(
                  "B.S.E. in Bio-convergence, Yonsei University",
                  "연세대학교 바이오융합전공 공학사",
                )}
              </MyLink>
            </td>
          </tr>
          <tr>
            <td className="font-semibold pr-4 py-1">2023</td>
            <td className="border-l border-ctp-text pl-4 py-1">
              <MyLink href={yonseiLink.cs} className="hover:underline">
                {t(
                  "B.S.E. in Computer Science, Yonsei University",
                  "연세대학교 컴퓨터과학전공 공학사",
                )}
              </MyLink>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

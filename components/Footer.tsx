import { MyLang, translator } from "@lib/i18n";
import Container from "./Container";
import MyLink from "./MyLink";

export default function Footer({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  return (
    <footer className="py-16 w-full bg-ctp-mantle">
      <Container className="flex flex-col md:flex-row md:justify-between md:items-center">
        <MyLink href="/" lang={lang} className="text-lg font-medium">
          Youngwoo Kim
        </MyLink>
        <nav>
          <ul className="mt-8 md:mt-0 flex flex-row flex-wrap gap-6">
            <li>
              <MyLink className="hover:underline" href="#introduction">
                {t("Introduction", "소개")}
              </MyLink>
            </li>
            <li>
              <MyLink className="hover:underline" href="#projects">
                {t("Projects", "프로젝트 경험")}
              </MyLink>
            </li>
            <li>
              <MyLink className="hover:underline" href="#experiences">
                {t("Work Experience", "업무 경험")}
              </MyLink>
            </li>
            <li>
              <MyLink className="hover:underline" href="#education">
                {t("Education", "교육")}
              </MyLink>
            </li>
            <li>
              <MyLink className="hover:underline" href="#awards">
                {t("Awards&Scholarships", "수상/장학")}
              </MyLink>
            </li>
            <li>
              <MyLink className="hover:underline" href="#contacts">
                {t("Contact", "연락하기")}
              </MyLink>
            </li>
            <li>
              <MyLink
                href="https://github.com/seanK200"
                className="hover:underline"
              >
                Github
              </MyLink>
            </li>
            <li>
              <MyLink
                href="https://linkedin.com/in/youngwoo-kim-sean/"
                className="hover:underline"
              >
                LinkedIn
              </MyLink>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

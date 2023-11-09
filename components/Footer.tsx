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
              <MyLink href="/" lang={lang} className="hover:underline">
                {t("Home", "포트폴리오")}
              </MyLink>
            </li>
            <li>{t("Blog", "블로그")}</li>
            <li>{t("Resume", "이력서")}</li>
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

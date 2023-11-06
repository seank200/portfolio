import MyLink from "@components/MyLink";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyLang, translator } from "@lib/i18n";

export default function NavLinks({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  return (
    <nav className="grow">
      <ul className="flex flex-col gap-6 text-xl md:text-lg font-medium leading-none">
        <li className="hover:text-ctp-mauve">
          <MyLink href="/" lang={lang}>
            {t("Portfolio", "포트폴리오")}
          </MyLink>
        </li>
        <li className="hover:text-ctp-mauve">
          <MyLink href="/" lang={lang}>
            {t("Resume", "이력서")}
          </MyLink>
        </li>
        <li className="hover:text-ctp-mauve">
          <MyLink href="/" lang={lang}>
            {t("Blog", "블로그")}
          </MyLink>
        </li>
        <li className="hover:text-ctp-mauve">
          <MyLink href="/" lang={lang}>
            {t("Contact", "연락하기")}
          </MyLink>
        </li>
      </ul>
      <hr className="my-8 border-[0.5px] border-ctp-surface2" />
      <ul className="flex flex-col gap-4 text-lg md:text-base font-medium leading-none">
        <li className="hover:text-ctp-teal">
          <MyLink
            href="https://github.com/seanK200"
            className="flex items-center gap-3"
          >
            <FontAwesomeIcon icon={faGithub} className="h-em" fixedWidth />
            <span className="text-base md:text-sm">
              {t("Github", "깃허브")}
            </span>
          </MyLink>
        </li>
        <li className="hover:text-ctp-teal">
          <MyLink
            href="https://linkedin.com/in/youngwoo-kim-sean"
            className="flex items-center gap-3"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-em" fixedWidth />
            <span className="text-base md:text-sm">
              {t("LinkedIn", "링크드인")}
            </span>
          </MyLink>
        </li>
        <li className="hover:text-ctp-teal">
          <MyLink
            href="mailto:yw.sean.kim@gmail.com"
            className="flex items-center gap-3"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-em" fixedWidth />
            <span className="text-base md:text-sm">{t("Email", "이메일")}</span>
          </MyLink>
        </li>
      </ul>
    </nav>
  );
}

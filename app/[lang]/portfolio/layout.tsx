import Footer from "@components/Footer";
import Nav, { NavLink } from "@components/nav";
import { MyLang, translator } from "@lib/i18n";

export default function layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { lang: MyLang };
}) {
  const t = translator(params.lang);

  const navLinks: NavLink[] = [
    {
      label: t("home", "홈"),
      href: "#introduction",
    },
    {
      label: t("Projects", "주요 프로젝트"),
      href: "#projects",
      topbar: true,
    },
    {
      label: t("Work Experience", "업무 경험"),
      href: "#experiences",
      topbar: true,
    },
    {
      label: t("Education", "교육"),
      href: "#education",
    },
    {
      label: t("Awards", "수상/장학"),
      href: "#awards",
    },
    {
      label: t("Contact", "연락하기"),
      href: "#contacts",
    },
  ];

  return (
    <>
      <Nav lang={params.lang} navLinks={navLinks} />
      {children}
      <Footer lang={params.lang} />
    </>
  );
}

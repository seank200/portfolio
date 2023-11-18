import Footer from "@components/Footer";
import Nav, { NavLink } from "@components/nav";
import { MyLang, translator } from "@lib/i18n";

export default function BlogLayout({
  params,
  children,
}: {
  children?: React.ReactNode;
  params: { lang: MyLang };
}) {
  const t = translator(params.lang);
  const navLinks: NavLink[] = [
    {
      label: t("Home", "블로그 홈"),
      href: "/blog",
      topbar: true,
    },
    {
      label: t("Categories", "카테고리"),
      href: "/blog",
      topbar: true,
    },
    {
      label: t("Contact", "연락하기"),
      href: "/#contacts",
      topbar: true,
    },
    {
      label: t("Portfolio", "포트폴리오"),
      href: "/",
      topbar: true,
    },
  ];

  return (
    <>
      <Nav lang={params.lang} home="/blog" navLinks={navLinks} />
      {children}
      <Footer lang={params.lang} />
    </>
  );
}

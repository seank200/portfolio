import Nav from "@components/nav";
import { MyLang } from "@lib/i18n";

export default function layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { lang: MyLang };
}) {
  return (
    <>
      <Nav lang={params.lang} />
      {children}
    </>
  );
}

import Main from "@components/Main";
import HeroSection from "@components/portfolio/hero";
import { MyLang } from "@lib/i18n";

export default function page({ params }: { params: { lang: MyLang } }) {
  const { lang } = params;
  return (
    <Main removePaddingTop>
      <HeroSection lang={lang} />
    </Main>
  );
}

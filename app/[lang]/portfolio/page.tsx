import Main from "@components/Main";
import HeroSection from "@components/portfolio/hero";
import IntroSection from "@components/portfolio/intro";
import ProjectSection from "@components/portfolio/projects";
import SigmateSection from "@components/portfolio/projects/sigmate";
import { MyLang } from "@lib/i18n";

export default function page({ params }: { params: { lang: MyLang } }) {
  const { lang } = params;
  return (
    <Main removePaddingTop>
      <HeroSection lang={lang} />
      <IntroSection lang={lang} />
      <ProjectSection lang={lang}>
        <SigmateSection lang={lang} />
      </ProjectSection>
      <div className="h-screen" />
    </Main>
  );
}

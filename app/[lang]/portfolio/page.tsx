import Main from "@components/Main";
import ExperienceSection from "@components/portfolio/experiences";
import HeroSection from "@components/portfolio/hero";
import IntroSection from "@components/portfolio/intro";
import ProjectSection from "@components/portfolio/projects";
import PoolinkSection from "@components/portfolio/projects/poolink";
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
        <PoolinkSection lang={lang} />
      </ProjectSection>
      <ExperienceSection lang={lang} />
      <div className="h-screen" />
    </Main>
  );
}

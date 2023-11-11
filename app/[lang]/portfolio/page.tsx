import Main from "@components/Main";
import AwardSection from "@components/portfolio/AwardSection";
import EducationSection from "@components/portfolio/EducationSection";
import ContactSection from "@components/portfolio/contact";
import ExperienceSection from "@components/portfolio/experiences";
import HeroSection from "@components/portfolio/hero";
import IntroSection from "@components/portfolio/intro";
import ProjectSection from "@components/portfolio/projects";
import PoolinkSection from "@components/portfolio/projects/poolink";
import SigmateSection from "@components/portfolio/projects/sigmate";
import YremsSection from "@components/portfolio/projects/yrems";
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
        <YremsSection lang={lang} />
      </ProjectSection>
      <ExperienceSection lang={lang} />
      <EducationSection lang={lang} />
      <AwardSection lang={lang} />
      <ContactSection lang={lang} />
    </Main>
  );
}

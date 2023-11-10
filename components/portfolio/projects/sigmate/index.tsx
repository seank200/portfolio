import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import ThemedImage from "@components/ThemedImage";
import { MyLang, translator } from "@lib/i18n";
import sigmateLight from "@images/logo/Sigmate_light.png";
import sigmateDark from "@images/logo/Sigmate_dark.png";
import SigmateFeatures from "./SigmateFeatures";
import SigmateRole from "./SigmateRole";
import SigmateProjectSummary from "./SigmateProjectSummary";
import SigmateRoleSummary from "./SigmateRoleSummary";
import SigmateTechSummary from "./SigmateTechSummary";

import sigmate001 from "@images/projects/sigmate/001-main.png";
import sigmate002 from "@images/projects/sigmate/002-landing-1.png";
import sigmate003 from "@images/projects/sigmate/003-landing-2.png";
import sigmate005 from "@images/projects/sigmate/005-landing-4.png";
import sigmate006 from "@images/projects/sigmate/006-signin.png";
import sigmate007 from "@images/projects/sigmate/007-signup.png";
import sigmate008 from "@images/projects/sigmate/008-article-list.png";
import sigmate009 from "@images/projects/sigmate/009-article-view.png";
import sigmate010 from "@images/projects/sigmate/010-forum-view.png";
import sigmate012 from "@images/projects/sigmate/012-account.png";
import sigmate013 from "@images/projects/sigmate/013-referral.png";
import sigmate014 from "@images/projects/sigmate/014-rewards.png";
import sigmate015 from "@images/projects/sigmate/015-verify-1.png";
import sigmate016 from "@images/projects/sigmate/016-verify-2.png";
import sigmate017 from "@images/projects/sigmate/017-verify-3.png";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import SigmateArch from "./SigmateArch";
import ProjectGallery, { ProjectGalleryItem } from "../ProjectGallery";
import { faImages } from "@fortawesome/free-regular-svg-icons/faImages";
import ProjectSection from "../ProjectSection";
import ProjectHero from "../ProjectHero";
import ProjectSummarySection from "../ProjectSummarySection";
import Heading from "@components/portfolio/Heading";

export const sigmatePeriod = {
  start: new Date("2022-03"),
  end: new Date("2023-04"),
};

export default function SigmateSection({ lang }: { lang: MyLang }) {
  const t = translator(lang);

  const galleryItems: ProjectGalleryItem[] = [
    { src: sigmate001, alt: "home", caption: "" },
    { src: sigmate003, alt: "landing page - forum", caption: "" },
    { src: sigmate002, alt: "landing page - calendar", caption: "" },
    { src: sigmate005, alt: "landing page - wiki", caption: "" },
    { src: sigmate006, alt: "signin page", caption: "" },
    { src: sigmate007, alt: "signup page", caption: "" },
    { src: sigmate008, alt: "article list", caption: "" },
    { src: sigmate009, alt: "article view", caption: "" },
    { src: sigmate010, alt: "forum-view", caption: "" },
    { src: sigmate012, alt: "account", caption: "" },
    { src: sigmate013, alt: "referrals", caption: "" },
    { src: sigmate014, alt: "user rewards system", caption: "" },
    { src: sigmate015, alt: "verify modal - options", caption: "" },
    { src: sigmate016, alt: "verify modal - community verdict", caption: "" },
    { src: sigmate017, alt: "verify modal - after submit", caption: "" },
  ];

  return (
    <ProjectSection id="sigmate" lang={lang}>
      <ProjectHero
        lang={lang}
        heading={
          <ThemedImage
            src={sigmateLight}
            darkSrc={sigmateDark}
            alt="Sigmate"
            height={72}
            imageClassName="w-auto h-16 md:h-auto"
          />
        }
        period={sigmatePeriod}
        images={galleryItems.map((i) => i.src)}
      >
        <ProjectSummarySection>
          <SigmateProjectSummary lang={lang} />
          <SigmateRoleSummary lang={lang} />
          <SigmateTechSummary lang={lang} />
        </ProjectSummarySection>
      </ProjectHero>
      <section
        id="sigmate-features"
        className="my-16 w-full bg-gradient-to-b from-background to-ctp-lavender/5"
      >
        <SigmateFeatures lang={lang} />
      </section>
      <section id="sigmate-role" className="container my-16">
        <Heading level={4}>
          <FontAwesomeIcon
            icon={faStar}
            className="mr-3 h-em text-ctp-yellow"
          />
          {t("My Role", "담당 업무 상세")}
        </Heading>
        <SigmateRole lang={lang} />
      </section>
      <section id="sigmate-architecture" className="container my-16">
        <Heading level={4}>
          <FontAwesomeIcon icon={faServer} className="mr-3 h-em text-ctp-sky" />
          {t("Backend Architecture", "백엔드 서버 아키텍쳐")}
        </Heading>
        <SigmateArch lang={lang} />
      </section>
      <section id="sigmate-screenshots" className="container my-16">
        <Heading level={4}>
          <FontAwesomeIcon
            icon={faImages}
            className="mr-3 h-em text-ctp-flamingo"
          />
          {t("Screenshots", "스크린샷")}
        </Heading>
        <ProjectGallery lang={lang} items={galleryItems} />
      </section>
    </ProjectSection>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import ThemedImage from "@components/ThemedImage";
import { MyLang, translator } from "@lib/i18n";
import sigmateLight from "@images/logo/Sigmate_light.png";
import sigmateDark from "@images/logo/Sigmate_dark.png";
import ProjectDetailsSection from "../ProjectDetailsSection";
import Section from "@components/portfolio/Section";
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

export const sigmatePeriod = {
  start: new Date("2022-03"),
  end: new Date("2023-04"),
};

export default function SigmateSection({ lang }: { lang: MyLang }) {
  const t = translator(lang);

  const galleryItems: ProjectGalleryItem[] = [
    { src: sigmate001, alt: "home", caption: "" },
    { src: sigmate003, alt: "landing page - calendar", caption: "" },
    { src: sigmate002, alt: "landing page - forum", caption: "" },
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
    <ProjectDetailsSection
      lang={lang}
      heading="Sigmate"
      id="sigmate"
      images={galleryItems.map((i) => i.src)}
      period={sigmatePeriod}
      logo={
        <ThemedImage
          src={sigmateLight}
          darkSrc={sigmateDark}
          height={72}
          alt="Sigmate"
          imageClassName="w-auto h-16 md:h-auto"
        />
      }
      overviewLHeading={t("Project Overview", "프로젝트 개요")}
      overviewL={<SigmateProjectSummary lang={lang} />}
      overviewCHeading={t("Role Overview", "담당 업무 요약")}
      overviewC={<SigmateRoleSummary lang={lang} />}
      overviewRHeading={t("Tech", "기술 스택")}
      overviewR={<SigmateTechSummary lang={lang} />}
    >
      <Section
        level={4}
        heading={t("Feature Highlights", "주요 기능")}
        headingClassName="text-xl font-semibold"
        className="bg-gradient-to-b from-background to-ctp-lavender/5"
        id="sigmate-features"
        hideHeading
      >
        <SigmateFeatures lang={lang} />
      </Section>

      <Section
        level={4}
        heading={
          <>
            <FontAwesomeIcon
              icon={faStar}
              className="mr-3 h-em text-ctp-yellow"
            />
            {t("My Role", "담당 업무 상세")}
          </>
        }
        id="sigmate-role"
        headingClassName="text-xl font-semibold"
        className="py-16"
      >
        <SigmateRole lang={lang} />
      </Section>

      <Section
        level={4}
        heading={
          <>
            <FontAwesomeIcon
              icon={faServer}
              className="mr-3 h-em text-ctp-sky"
            />
            {t("Backend Architecture", "백엔드 서버 아키텍쳐")}
          </>
        }
        headingClassName="text-xl font-semibold"
        id="sigmate-architecture"
        className="py-16"
      >
        <SigmateArch lang={lang} />
      </Section>

      <Section
        level={4}
        heading={
          <>
            <FontAwesomeIcon
              icon={faImages}
              className="mr-3 h-em text-ctp-flamingo"
            />
            {t("Screenshots", "스크린샷")}
          </>
        }
        headingClassName="text-xl font-semibold"
        id="sigmate-architecture"
        className="py-16"
      >
        <ProjectGallery lang={lang} items={galleryItems} />
      </Section>
    </ProjectDetailsSection>
  );
}

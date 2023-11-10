import { MyLang, translator } from "@lib/i18n";
import ProjectDetailsSection from "../ProjectDetailsSection";
import Section from "@components/portfolio/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons/faImages";
import ProjectGallery, { ProjectGalleryItem } from "../ProjectGallery";

import yrems001 from "@images/projects/yrems/user/yrems_screenshot.001.png";
import yrems002 from "@images/projects/yrems/user/yrems_screenshot.002.png";
import yrems003 from "@images/projects/yrems/user/yrems_screenshot.003.png";
import yrems004 from "@images/projects/yrems/user/yrems_screenshot.004.png";
import yrems005 from "@images/projects/yrems/user/yrems_screenshot.005.png";
import yrems006 from "@images/projects/yrems/user/yrems_screenshot.006.png";
import yrems007 from "@images/projects/yrems/user/yrems_screenshot.007.png";
import yrems008 from "@images/projects/yrems/user/yrems_screenshot.008.png";
import yrems009 from "@images/projects/yrems/user/yrems_screenshot.009.png";
import yrems010 from "@images/projects/yrems/user/yrems_screenshot.010.png";
import yrems011 from "@images/projects/yrems/user/yrems_screenshot.011.png";
import yrems012 from "@images/projects/yrems/user/yrems_screenshot.012.png";
import yrems013 from "@images/projects/yrems/user/yrems_screenshot.013.png";
import yrems015 from "@images/projects/yrems/admin/yrems_screenshot.015.png";
import yrems016 from "@images/projects/yrems/admin/yrems_screenshot.016.png";
import yrems017 from "@images/projects/yrems/admin/yrems_screenshot.017.png";
import yrems018 from "@images/projects/yrems/admin/yrems_screenshot.018.png";
import yrems020 from "@images/projects/yrems/admin/yrems_screenshot.020.png";
import yrems021 from "@images/projects/yrems/admin/yrems_screenshot.021.png";
import yrems022 from "@images/projects/yrems/admin/yrems_screenshot.022.png";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import YremsRole from "./YremsRole";
import YremsProjectSummary from "./YremsProjectSummary";
import YremsRoleSummary from "./YremsRoleSummary";
import YremsTechSummary from "./YremsTechSummary";
import ProjectSection from "../ProjectSection";
import ProjectHero from "../ProjectHero";
import ProjectSummarySection from "../ProjectSummarySection";
import Heading from "@components/portfolio/Heading";

const yremsPeriod = {
  start: new Date("2018-02-01"),
  end: new Date("2019-01-31"),
};

export default function YremsSection({ lang }: { lang: MyLang }) {
  const t = translator(lang);

  const galleryItems: ProjectGalleryItem[] = [
    { src: yrems001, alt: "Login" },
    { src: yrems002, alt: "Sign Up - Terms of Service" },
    { src: yrems003, alt: "Sign Up - Terms of Service - Consent" },
    { src: yrems004, alt: "Sign Up - Account Information (1/2)" },
    { src: yrems005, alt: "Sign Up - Account Information (2/2)" },
    { src: yrems006, alt: "Student User - Menu" },
    { src: yrems007, alt: "Student User - Event List" },
    { src: yrems008, alt: "Student User - Event Details (1/2)" },
    { src: yrems009, alt: "Student User - Event Details (2/2)" },
    { src: yrems010, alt: "Student User - Event RSVP - Consent" },
    { src: yrems011, alt: "Student User - Event RSVP - Sign up" },
    { src: yrems012, alt: "Student User - Event RSVP - Results - Success" },
    {
      src: yrems013,
      alt: "Student User - Event RSVP - Results - Waiting List",
    },
    {
      src: yrems017,
      alt: "Student user - Event RSVP - Results - Pending Cancellation",
    },
    { src: yrems015, alt: "Admin User - Menu" },
    { src: yrems016, alt: "Admin User - Event Details" },
    { src: yrems018, alt: "Admin User - Manage Event - Participants" },
    { src: yrems020, alt: "Admin User - Manage Event - Attendance List" },
    { src: yrems021, alt: "Admin User - Manage Event - Attendance Check" },
    { src: yrems022, alt: "Admin User - Manage Students" },
  ];

  return (
    <ProjectSection id="yrems" lang={lang}>
      <ProjectHero
        lang={lang}
        heading={
          <span className="text-7xl text-[#0A3879] dark:text-blue-100 font-bold">
            YREMS
          </span>
        }
        period={yremsPeriod}
        images={galleryItems.map((i) => i.src)}
      >
        <ProjectSummarySection>
          <YremsProjectSummary lang={lang} />
          <YremsRoleSummary lang={lang} />
          <YremsTechSummary lang={lang} />
        </ProjectSummarySection>
      </ProjectHero>
      <section id="yrems-role" className="container my-16">
        <Heading level={4}>
          <FontAwesomeIcon
            icon={faStar}
            className="mr-3 h-em text-ctp-yellow"
          />
          {t("My Role", "담당 업무 상세")}
        </Heading>
        <YremsRole lang={lang} />
      </section>
      <section id="yrems-screenshot" className="container my-16">
        <Heading level={4}>
          <FontAwesomeIcon
            icon={faImages}
            className="mr-3 h-em text-ctp-flamingo"
          />
          {t("Screenshots", "스크린샷")}
        </Heading>
        <ProjectGallery lang={lang} items={galleryItems} small />
      </section>
    </ProjectSection>
  );
}

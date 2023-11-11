import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons/faImages";
import { MyLang, translator } from "@lib/i18n";
import ProjectGallery, { ProjectGalleryItem } from "../ProjectGallery";
import PoolinkOverview from "./PoolinkOverview";
import PoolinkPainpoint from "./PoolinkPainpoint";
import PoolinkFeatures from "./PoolinkFeatures";
import PoolinkProjectSummary from "./PoolinkProjectSummary";

import poolinkLogo from "@images/projects/poolink/LOGO_Poolink.png";

import poolinkSS002 from "@images/projects/poolink/screenshots/MyBoards_Boarddetail.png";
import poolinkSS003 from "@images/projects/poolink/screenshots/MyBoards_SearchResults.png";
import poolinkSS004 from "@images/projects/poolink/screenshots/MyBoards_Cancelling_follow.png";
import poolinkSS005 from "@images/projects/poolink/screenshots/MyBoards_Followed_Board_Details.png";
import poolinkSS007 from "@images/projects/poolink/screenshots/MyBoards_Home3.png";
import poolinkSS008 from "@images/projects/poolink/screenshots/MyBoards_Home.png";
import poolinkSS009 from "@images/projects/poolink/screenshots/Explore_SearchResults.png";
import poolinkSS010 from "@images/projects/poolink/screenshots/Explore_ParentBoard.png";
import poolinkSS011 from "@images/projects/poolink/screenshots/Explore_Home.png";
import poolinkSS012 from "@images/projects/poolink/screenshots/Settings.png";
import poolinkSS015 from "@images/projects/poolink/screenshots/Login_Home.png";
import poolinkSS013 from "@images/projects/poolink/screenshots/modals/Login_SignUp_Onboarding_Choose_Category.png";
import poolinkSS014 from "@images/projects/poolink/screenshots/modals/Login_SignUp_Create_Account.png";
import poolinkSS016 from "@images/projects/poolink/screenshots/modals/Board_MyBoardDetails_Modal_EditLink_BoardSelect.png";
import poolinkSS017 from "@images/projects/poolink/screenshots/modals/Board_MyBoardDetails_Modal_EditLink_LinkLabelEdit.png";
import poolinkSS018 from "@images/projects/poolink/screenshots/modals/Board_MyBoardDetails_Modal_EditLink_CreateNewBoard.png";
import poolinkSS019 from "@images/projects/poolink/screenshots/modals/Board_MyBoardDetails_LinkSelect_LinkDeleteConfirmModal.png";
import poolinkSS020 from "@images/projects/poolink/screenshots/modals/MyBoard_Modal_EditBoard.png";
import poolinkSS021 from "@images/projects/poolink/screenshots/modals/MyBoard_Modal_BoardDeleteConfirmPop-up.png";
import poolinkSS022 from "@images/projects/poolink/screenshots/modals/AddLinkModal_CreateNewBoard_Category.png";
import poolinkSS023 from "@images/projects/poolink/screenshots/modals/AddLinkModal.png";
import poolinkSS024 from "@images/projects/poolink/screenshots/modals/Explore_SaveLinkModal_CreateNewBoard_SelectCategory_SearchResult.png";
import poolinkSS025 from "@images/projects/poolink/screenshots/modals/Explore_SaveLinkModal_SearchResults.png";
import poolinkSS026 from "@images/projects/poolink/screenshots/modals/Login_FindPassword.png";
import poolinkSS027 from "@images/projects/poolink/screenshots/modals/Settings_DeleteAccount.png";

import PoolinkRoleSummary from "./PoolinkRoleSummary";
import PoolinkTechSummary from "./PoolinkTechSummary";
import ProjectDetailsSection from "../ProjectDetailsSection";
import ProjectHero from "../ProjectHero";
import ProjectSummarySection from "../ProjectSummarySection";
import Heading from "@components/portfolio/Heading";
import PoolinkRole from "./PoolinkRole";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";

const poolinkPeriod = {
  start: new Date("2021-05"),
  end: new Date("2022-02"),
};

export default function PoolinkSection({ lang }: { lang: MyLang }) {
  const t = translator(lang);

  const galleryItems: ProjectGalleryItem[] = [
    { src: poolinkSS005, alt: "My Boards - Followed Board Details" },
    { src: poolinkSS002, alt: "My Boards - Board detail" },
    { src: poolinkSS004, alt: "My Boards - Cancelling follow" },
    { src: poolinkSS003, alt: "My Boards - Search Results" },
    { src: poolinkSS007, alt: "My Boards - Home 3" },
    { src: poolinkSS009, alt: "Explore - Search Results" },
    { src: poolinkSS012, alt: "Settings" },
    { src: poolinkSS010, alt: "Explore - Parent Board" },
    { src: poolinkSS008, alt: "My Boards - Home" },
    { src: poolinkSS011, alt: "Explore - Home" },
    {
      src: poolinkSS013,
      alt: "Login - Sign Up - Onboarding - Choose Category",
    },
    { src: poolinkSS014, alt: "Login - Sign Up - Creat Account" },
    { src: poolinkSS015, alt: "Login - Home" },
    {
      src: poolinkSS016,
      alt: "Board - My Board Details - Modal - Edit Link - Board Select",
    },
    {
      src: poolinkSS017,
      alt: "Board - My Board Details - Modal - Edit Link - Link Label Edit",
    },
    {
      src: poolinkSS018,
      alt: "Board - My Board Details - Modal - Edit Link - Creating a New Board",
    },
    {
      src: poolinkSS019,
      alt: "Board - My Board Details - Link Select - Link Delete Confirm Modal",
    },
    { src: poolinkSS020, alt: "My Board - Modal - Edit Board" },
    {
      src: poolinkSS021,
      alt: "My Board - Modal - Board Delete Confirm Pop-up",
    },
    { src: poolinkSS022, alt: "Add Link Modal - Create New Board - Category" },
    { src: poolinkSS023, alt: "Add Link Modal" },
    {
      src: poolinkSS024,
      alt: "Explore - Save Link Modal - Create New Board - Select Category - Search Results",
    },
    { src: poolinkSS025, alt: "Explore - Save Link Modal - Search Results" },
    { src: poolinkSS026, alt: "Login - Find Password" },
    { src: poolinkSS027, alt: "Settings - Delete Account" },
  ];

  return (
    <ProjectDetailsSection id="poolink">
      <ProjectHero
        lang={lang}
        heading={
          <Image
            src={poolinkLogo}
            alt="Poolink"
            height={60}
            className="w-auto h-16 md:h-auto"
          />
        }
        period={poolinkPeriod}
        images={galleryItems.slice(0, 15).map((i) => i.src)}
      >
        <ProjectSummarySection>
          <PoolinkProjectSummary lang={lang} />
          <PoolinkRoleSummary lang={lang} />
          <PoolinkTechSummary lang={lang} />
        </ProjectSummarySection>
      </ProjectHero>
      <section id="poolink-role" className="my-24 container">
        <Heading level={4}>
          <FontAwesomeIcon
            icon={faStar}
            className="mr-3 h-em text-ctp-yellow"
          />
          {t("My Role", "담당 업무 상세")}
        </Heading>
        <PoolinkRole lang={lang} />
      </section>
      <section id="poolink-overview" className="my-24">
        <PoolinkOverview lang={lang} />
      </section>
      <section id="poolink-painpoint" className="my-24 container">
        <PoolinkPainpoint lang={lang} />
      </section>
      <section id="poolink-features" className="my-24 container">
        <PoolinkFeatures lang={lang} />
      </section>
      <section id="poolink-screenshots" className="my-24 container">
        <Heading level={4}>
          <FontAwesomeIcon
            icon={faImages}
            className="mr-3 h-em text-ctp-flamingo"
          />
          {t("Screenshots", "스크린샷")}
        </Heading>
        <ProjectGallery items={galleryItems} />
      </section>
    </ProjectDetailsSection>
  );
}

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons/faImages";
import Section from "@components/portfolio/Section";
import { MyLang, translator } from "@lib/i18n";
import ProjectDetailsSection from "../ProjectDetailsSection";
import ProjectGallery, { ProjectGalleryItem } from "../ProjectGallery";
import PoolinkHero from "./PoolinkHero";
import PoolinkPainpoint from "./PoolinkPainpoint";
import PoolinkFeatures from "./PoolinkFeatures";
import PoolinkProjectSummary from "./PoolinkProjectSummary";

import poolinkLogo from "@images/projects/poolink/LOGO_Poolink.png";
import poolinkSS002 from "@images/projects/poolink/screenshots/내 보드 _ 보드 상세.png";
import poolinkSS003 from "@images/projects/poolink/screenshots/내 보드 _ 검색 결과.png";
import poolinkSS004 from "@images/projects/poolink/screenshots/내 보드 _ 스크랩 보드 상세 _ 스크랩 취소 눌렀을 때.png";
import poolinkSS005 from "@images/projects/poolink/screenshots/내 보드 _ 스크랩 보드 상세.png";
import poolinkSS007 from "@images/projects/poolink/screenshots/내 보드 홈-3.png";
import poolinkSS008 from "@images/projects/poolink/screenshots/내 보드 홈.png";
import poolinkSS009 from "@images/projects/poolink/screenshots/탐색 _ 검색 결과.png";
import poolinkSS010 from "@images/projects/poolink/screenshots/탐색 _ 상위보드.png";
import poolinkSS011 from "@images/projects/poolink/screenshots/탐색 홈.png";
import poolinkSS012 from "@images/projects/poolink/screenshots/환경설정 홈.png";
import poolinkSS013 from "@images/projects/poolink/screenshots/modals/로그인 _ 회원가입 _ 튜토리얼 _ 카데고리 설정.png";
import poolinkSS014 from "@images/projects/poolink/screenshots/modals/로그인 _ 회뭔가입-1.png";
import poolinkSS015 from "@images/projects/poolink/screenshots/modals/로그인-1.png";
import poolinkSS016 from "@images/projects/poolink/screenshots/modals/내 보드 _ 보드 상세 _ 스노우맨 팝업 _ 링크 수정하기 ( 보드 변경 시 ).png";
import poolinkSS017 from "@images/projects/poolink/screenshots/modals/내 보드 _ 보드 상세 _ 스노우맨 팝업 _ 링크 수정하기 ( 제목 수정하려고 전부 지웠을 시 ).png";
import poolinkSS018 from "@images/projects/poolink/screenshots/modals/내 보드 _ 보드 상세 _ 스노우맨 팝업 _ 링크 수정하기 ( 새로운 보드 생성 시 ) _ 카테고리.png";
import poolinkSS019 from "@images/projects/poolink/screenshots/modals/내 보드 _ 보드 상세 _ 선택하기 _ 링크 삭제 확인 팝업.png";
import poolinkSS020 from "@images/projects/poolink/screenshots/modals/내 보드 _ 스노우맨 - 수정 _ 보드 수정하기 팝업-1.png";
import poolinkSS021 from "@images/projects/poolink/screenshots/modals/내 보드 _ 스노우맨 - 수정 _ 보드 수정하기 팝업.png";
import poolinkSS022 from "@images/projects/poolink/screenshots/modals/내 보드 _ 선택하기 _ 보드 삭제 확인 팝업.png";
import poolinkSS023 from "@images/projects/poolink/screenshots/modals/링크 추가하기 팝업 ( 새 보드 만들었을 시 ) _ 카테고리.png";
import poolinkSS024 from "@images/projects/poolink/screenshots/modals/링크 추가하기 팝업.png";
import poolinkSS025 from "@images/projects/poolink/screenshots/modals/탐색 _ 링크 저장하기 - 새로운 보드 _ 카테고리 팝업 (검색결과, 상위보드 동일 적용).png";
import poolinkSS026 from "@images/projects/poolink/screenshots/modals/탐색 _ 링크 저장하기 팝업 (검색결과, 상위보드 동일 적용).png";
import poolinkSS027 from "@images/projects/poolink/screenshots/modals/로그인 _ 비밀번호 찾기.png";
import poolinkSS028 from "@images/projects/poolink/screenshots/modals/환경설정 - 탈퇴.png";
import PoolinkRoleSummary from "./PoolinkRoleSummary";
import PoolinkTechSummary from "./PoolinkTechSummary";

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
    { src: poolinkSS021, alt: "My Board - Modal - Edit board" },
    {
      src: poolinkSS022,
      alt: "My Board - Modal - Board Delete Confirm Pop-up",
    },
    { src: poolinkSS023, alt: "Add Link Modal - Create New Board - Category" },
    { src: poolinkSS024, alt: "Add Link Modal" },
    {
      src: poolinkSS025,
      alt: "Explore - Save Link Modal - Create New Board - Select Category - Search Results",
    },
    { src: poolinkSS026, alt: "Explore - Save Link Modal - Search Results" },
    { src: poolinkSS027, alt: "Login - Find Password" },
    { src: poolinkSS028, alt: "Settings - Delete Account" },
  ];

  return (
    <ProjectDetailsSection
      lang={lang}
      heading="Poolink"
      id="poolink"
      images={galleryItems.slice(0, 11).map((i) => i.src)}
      period={poolinkPeriod}
      logo={
        <Image
          src={poolinkLogo}
          alt="Poolink"
          height={64}
          className="w-auto h-16 md:h-auto"
        />
      }
      overviewLHeading={t("Project Overview", "프로젝트 개요")}
      overviewL={<PoolinkProjectSummary lang={lang} />}
      overviewCHeading={t("Role Overview", "담당 업무 요약")}
      overviewC={<PoolinkRoleSummary lang={lang} />}
      overviewRHeading={t("Tech", "기술 스택")}
      overviewR={<PoolinkTechSummary lang={lang} />}
    >
      <Section
        level={4}
        heading={t("Poolink Introduction", "풀링 소개")}
        hideHeading
        id="poolink-intro"
        className="py-16"
      >
        <PoolinkHero lang={lang} />
      </Section>
      <Section
        level={4}
        heading={t("Pain Point", "문제점")}
        hideHeading
        id="poolink-pain-point"
        className="py-16"
      >
        <PoolinkPainpoint lang={lang} />
      </Section>
      <Section
        level={4}
        heading={t("Features", "주요 기능")}
        headingClassName="text-xl font-semibold"
        hideHeading
        id="poolink-features"
        className="py-16"
      >
        <PoolinkFeatures lang={lang} />
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
        id="poolink-screenshots"
        className="py-16"
      >
        <ProjectGallery lang={lang} items={galleryItems} />
      </Section>
    </ProjectDetailsSection>
  );
}

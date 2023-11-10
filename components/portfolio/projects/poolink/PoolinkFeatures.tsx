"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { MyLang, createIntlDict, translator } from "@lib/i18n";
import poolinkLogo from "@images/projects/poolink/LOGO_Poolink.png";
import poolinkScreenShot1 from "@images/projects/poolink/overview/4.png";
import poolinkScreenShot2 from "@images/projects/poolink/overview/5-3.png";
import poolinkScreenShot3 from "@images/projects/poolink/overview/6.png";
import Heading from "@components/portfolio/Heading";

const dict = createIntlDict(
  {
    H_HERO: (
      <>
        Pull In Your Links to <span className="hidden">Poolink</span>
      </>
    ),
    FEAT_SAVE: "Save",
    SAVE_H: (
      <>
        Save and Organize
        <br />
        in Seconds
      </>
    ),
    SAVE_DESC: (
      <>
        Label and categorize
        <br />
        all your links with ease.
      </>
    ),
    FEAT_EXPLORE: "Explore",
    EXPLORE_H: (
      <>
        Discover New Links
        <br />
        Curated Just for You
      </>
    ),
    EXPLORE_DESC: (
      <>
        Tell us your interests and
        <br />
        browse through
        <br />
        suggested collections.
      </>
    ),
    FEAT_SHARE: "Share",
    SHARE_H: (
      <>
        Better URL Sharing
        <br />
        with Keywords and Images
      </>
    ),
    SHARE_DESC: (
      <>
        Share entire collections
        <br />
        with your friends or collegues
        <br />
        just with a tap.
      </>
    ),
  },
  {
    H_HERO: (
      <>
        나만의 풀로 링크를 <span className="hidden">Poolink</span>
      </>
    ),
    FEAT_SAVE: "저장",
    SAVE_H: (
      <>
        링크 저장,정리
        <br />
        5초면 끝
      </>
    ),
    SAVE_DESC: (
      <>
        최소한의 동작으로
        <br />
        라벨링과 카테고리까지 <br />
        심플하게 정리하세요.
      </>
    ),
    FEAT_EXPLORE: "탐색",
    EXPLORE_H: (
      <>
        당신만을 위한
        <br />
        취향저격
        <br />
        웹사이트 모음
      </>
    ),
    EXPLORE_DESC: (
      <>
        관심 키워드를 설정하여
        <br />
        매일 업데이트되는
        <br />
        사이트들을 탐색하세요
      </>
    ),
    FEAT_SHARE: "공유",
    SHARE_H: (
      <>
        공유는
        <br />
        키워드와 이미지로
        <br />
        알아보기 쉽게
      </>
    ),
    SHARE_DESC: (
      <>
        Poolink에 모아놓은
        <br />
        링크를 한번에 공유해 보세요.
      </>
    ),
  },
);

export default function PoolinkFeatures({ lang }: { lang: MyLang }) {
  const { SAVE_H, SAVE_DESC, EXPLORE_H, EXPLORE_DESC, SHARE_H, SHARE_DESC } =
    dict[lang];

  const t = translator(lang);

  return (
    <>
      <Heading level={4} className="hidden">
        {t("Feature Highlights", "주요 기능")}
      </Heading>
      <FeatureItem
        heading={SAVE_H}
        description={SAVE_DESC}
        src={poolinkScreenShot1}
        alt="Create board modal"
        id="poolink-features-save"
      />
      <FeatureItem
        heading={EXPLORE_H}
        description={EXPLORE_DESC}
        src={poolinkScreenShot2}
        alt="Explore board UI"
        id="poolink-features-explore"
      />
      <FeatureItem
        heading={SHARE_H}
        description={SHARE_DESC}
        src={poolinkScreenShot3}
        alt="Share board modal"
        id="poolink-features-share"
      />
    </>
  );
}

function FeatureItem({
  heading,
  description,
  src,
  alt,
  id,
}: {
  heading: React.ReactNode;
  description: React.ReactNode;
  src: StaticImageData;
  alt: string;
  id: string;
}) {
  return (
    <motion.section
      className="shrink-0 mb-48 relative w-full px-8 md:px-16 2xl:px-0 flex flex-col md:flex-row justify-center items-start md:items-center"
      id={id}
    >
      <div className="md:mr-20 mb-8 md:mb-0">
        <Heading
          level={5}
          className="mb-2 font-semibold text-3xl leading-normal"
        >
          {heading}
        </Heading>
        <p className="text-faded text-xl leading-relaxed">{description}</p>
      </div>
      <motion.div
        initial={{ opacity: 0, translateX: "32px" }}
        animate={{ transition: { bounce: 0 } }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full md:w-auto"
      >
        <Image src={src} alt={alt} className="w-full max-w-[480px]" />
      </motion.div>
    </motion.section>
  );
}

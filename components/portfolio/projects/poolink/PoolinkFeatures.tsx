"use client";

import Image, { StaticImageData } from "next/image";
import {
  useRef,
  type MouseEventHandler,
  useState,
  MutableRefObject,
} from "react";
import { MotionProps, motion } from "framer-motion";
import Container from "@components/Container";
import { MyLang, createIntlDict } from "@lib/i18n";
import poolinkLogo from "@images/projects/poolink/LOGO_Poolink.png";
import poolinkScreenShot1 from "@images/projects/poolink/overview/4.png";
import poolinkScreenShot2 from "@images/projects/poolink/overview/5-3.png";
import poolinkScreenShot3 from "@images/projects/poolink/overview/6.png";
import Heading from "@components/portfolio/Heading";
import Section from "@components/portfolio/Section";

type FeatureName = "save" | "explore" | "share";

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
  const {
    FEAT_SAVE,
    FEAT_EXPLORE,
    FEAT_SHARE,
    SAVE_H,
    SAVE_DESC,
    EXPLORE_H,
    EXPLORE_DESC,
    SHARE_H,
    SHARE_DESC,
  } = dict[lang];

  const [selected, setSelected] = useState<FeatureName>("save");

  const scrollDiv1 = useRef<HTMLDivElement | null>(null);
  const scrollDiv2 = useRef<HTMLDivElement | null>(null);
  const scrollDiv3 = useRef<HTMLDivElement | null>(null);

  const featureClickHandler: Record<
    FeatureName,
    MouseEventHandler<HTMLButtonElement>
  > = {
    save: () => {
      // setHighlighted('save');
      scrollDiv1.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    explore: () => {
      // setHighlighted('explore');
      scrollDiv2.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    share: () => {
      // setHighlighted('share');
      scrollDiv3.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
  };

  return (
    <>
      <Container>
        <FeatureItem
          heading={SAVE_H}
          description={SAVE_DESC}
          src={poolinkScreenShot1}
          alt="Create board modal"
          id="poolink-features-save"
          elemRef={scrollDiv1}
          onViewportEnter={() => setSelected("save")}
        />
        <FeatureItem
          heading={EXPLORE_H}
          description={EXPLORE_DESC}
          src={poolinkScreenShot2}
          alt="Explore board UI"
          id="poolink-features-explore"
          elemRef={scrollDiv2}
          onViewportEnter={() => setSelected("explore")}
        />
        <FeatureItem
          heading={SHARE_H}
          description={SHARE_DESC}
          src={poolinkScreenShot3}
          alt="Share board modal"
          id="poolink-features-share"
          elemRef={scrollDiv3}
          onViewportEnter={() => setSelected("share")}
        />
        <div className="sticky bottom-0 w-full py-5 flex justify-center items-center bg-background">
          <p className="mr-6">
            링크
            <FeatureButton
              onClick={featureClickHandler.save}
              selected={selected === "save"}
            >
              {FEAT_SAVE}
            </FeatureButton>
            <FeatureButton
              onClick={featureClickHandler.explore}
              selected={selected === "explore"}
            >
              {FEAT_EXPLORE}
            </FeatureButton>
            <FeatureButton
              onClick={featureClickHandler.share}
              selected={selected === "share"}
            >
              {FEAT_SHARE}
            </FeatureButton>
            플랫폼,
            <Image
              src={poolinkLogo}
              alt="Poolink"
              height={14}
              className="mx-2 relative bottom-[2px] inline-block w-auto"
            />
            <span>🔗</span>
          </p>
        </div>
      </Container>
    </>
  );
}

function FeatureItem({
  heading,
  description,
  elemRef,
  src,
  alt,
  id,
  onViewportEnter,
}: {
  heading: React.ReactNode;
  description: React.ReactNode;
  elemRef: MutableRefObject<HTMLDivElement | null>;
  src: StaticImageData;
  alt: string;
  id: string;
  onViewportEnter: MotionProps["onViewportEnter"];
}) {
  return (
    <motion.div
      ref={elemRef}
      onViewportEnter={onViewportEnter}
      viewport={{ once: false, amount: 1 }}
    >
      <FeatureDetail
        heading={heading}
        description={description}
        imgSrc={src}
        imgAlt={alt}
        className="my-24 relative"
        id={id}
      />
    </motion.div>
  );
}

function FeatureButton({
  children,
  selected,
  onClick,
}: {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const fontStyle = selected ? "text-poolink font-bold" : "font-medium";
  return (
    <button
      onClick={onClick}
      className={`ml-1 mr-1 after:content-['·'] last-of-type:after:content-[''] after:inline-block after:pl-1 after:text-ctp-text ${fontStyle}`}
    >
      {children}
    </button>
  );
}

function FeatureDetail({
  heading,
  description,
  id,
  imgSrc,
  imgAlt,
  className,
}: {
  heading: React.ReactNode;
  description: React.ReactNode;
  id: string;
  imgSrc: StaticImageData | string;
  imgAlt: string;
  className: string;
}) {
  return (
    <>
      <Section
        className={`shrink-0 w-full px-8 md:px-16 2xl:px-0 py-12 flex flex-col md:flex-row justify-center items-start md:items-center ${
          className || ""
        }`}
        id={id}
        level={5}
      >
        <div className="md:mr-12 mb-8 md:mb-0">
          <Heading
            level={5}
            className="mb-2 font-semibold text-3xl leading-normal"
          >
            {heading}
          </Heading>
          <p className="text-faded text-xl leading-relaxed">{description}</p>
        </div>
        <div className="w-full md:w-auto">
          <Image src={imgSrc} alt={imgAlt} className="w-full max-w-lg" />
        </div>
      </Section>
    </>
  );
}

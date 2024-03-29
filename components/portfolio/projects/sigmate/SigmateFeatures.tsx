"use client";

import Image from "next/image";
import FeatureNumber from "./FeatureNumber";
import sigmateFeature01 from "@images/projects/sigmate/feature-01.png";
import sigmateFeature02 from "@images/projects/sigmate/feature-02.png";
import sigmateFeature03 from "@images/projects/sigmate/feature-03.png";
import sigmateFeature04 from "@images/projects/sigmate/feature-04.png";
import sigmateFeature0501 from "@images/projects/sigmate/feature-05-01.png";
import sigmateFeature0502 from "@images/projects/sigmate/feature-05-02.png";
import { motion } from "framer-motion";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { MyLang, createIntlDict, translator } from "@lib/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons/faLightbulb";
import Heading from "@components/portfolio/Heading";

const dict = createIntlDict(
  {
    feat1: (
      <>
        Everything about your NFT <br />
        <span className="text-ctp-blue font-semibold">at a glance</span>
      </>
    ),
    feat2: (
      <>
        <span className="text-ctp-blue font-semibold">
          Off-chain data tracking{" "}
        </span>
        from <br /> Twitter, Discord and more
      </>
    ),
    feat3: (
      <>
        <span className="text-ctp-blue font-semibold">
          Information you can trust,{" "}
        </span>
        <br /> cross-referenced and verified.
      </>
    ),
    feat4: (
      <>
        Never miss another minting with
        <br /> our centralized{" "}
        <span className="text-ctp-blue font-semibold">event feed</span>
      </>
    ),
    feat5: (
      <>
        <span className="text-ctp-blue font-semibold">Get rewarded</span> for
        your
        <br /> contributions
      </>
    ),
    caption501: (
      <p className="text-center text-lg">
        Collect more rewards as you{" "}
        <span className="font-semibold text-ctp-blue">level up</span>, and{" "}
        <span className="font-semibold text-ctp-blue">contribute more</span>
      </p>
    ),
    caption502: (
      <p className="text-center text-lg">
        Participate in{" "}
        <span className="font-semibold text-ctp-blue">raffles</span>
        {", "}
        <br />
        and enjoy benefits from{" "}
        <span className="font-semibold text-ctp-blue">membership NFTs</span>
      </p>
    ),
  },
  {
    feat1: (
      <>
        NFT에 특화된 위키 UI로 <br />
        <span className="text-ctp-blue font-semibold">한 눈에 </span>
        들어오는 정보
      </>
    ),
    feat2: (
      <>
        트위터, 디스코드 등에 산재된
        <br />{" "}
        <span className="text-ctp-blue font-semibold">
          오프체인 데이터 트래킹{" "}
        </span>
      </>
    ),
    feat3: (
      <>
        의견 공유와 교차 검증으로
        <br /> <span className="text-ctp-blue font-semibold">신뢰성 향상</span>
      </>
    ),
    feat4: (
      <>
        <span className="text-ctp-blue font-semibold">
          자산별 주요 이벤트 확인
        </span>
        을
        <br /> 캘린더에서 한번에
      </>
    ),
    feat5: (
      <>
        커뮤니티에 기여하고 보상받는
        <br />{" "}
        <span className="text-ctp-blue font-semibold">Write-to-Earn</span>
      </>
    ),
    caption501: (
      <p className="text-center text-lg">
        <span className="font-semibold text-ctp-blue">시스템 레벨</span>과{" "}
        <span className="font-semibold text-ctp-blue">기여도</span>에 따라
        달라지는 보상
      </p>
    ),
    caption502: (
      <p className="text-center text-lg">
        보상받은 토큰을 사용한{" "}
        <span className="font-semibold text-ctp-blue">레플 참여</span>
        {", "}
        <br />
        <span className="font-semibold text-ctp-blue">멤버쉽 NFT</span>로 누리는
        다양한 혜택
      </p>
    ),
  },
);

export default function SigmateFeatures({ lang }: { lang: MyLang }) {
  const featImage1: MutableRefObject<HTMLLIElement | null> = useRef(null);
  const featImage2: MutableRefObject<HTMLLIElement | null> = useRef(null);
  const featImage3: MutableRefObject<HTMLLIElement | null> = useRef(null);
  const featImage4: MutableRefObject<HTMLLIElement | null> = useRef(null);
  const featImage5: MutableRefObject<HTMLLIElement | null> = useRef(null);
  const highlightColor = useRef("rgba(255 255 255 / 0.1)");
  const [highlight, setHighlight] = useState(-1);

  const highlightFeature = (idx: number) => {
    let elem: HTMLElement | null;
    switch (idx) {
      case 0:
      default:
        elem = featImage1.current;
        break;
      case 1:
        elem = featImage2.current;
        break;
      case 2:
        elem = featImage3.current;
        break;
      case 3:
        elem = featImage4.current;
        break;
      case 4:
        elem = featImage5.current;
        break;
    }
    if (!elem) return;
    elem.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("theme-dark");
    highlightColor.current = isDark
      ? "rgba(255 255 255 / 0.2)"
      : "rgba(255 255 255 / 1.0)";
  });

  return (
    <div className="container flex gap-12">
      <div className="shrink-0 relative hidden md:block">
        <FeatureLabels
          lang={lang}
          highlight={highlight}
          highlightFeature={highlightFeature}
        />
      </div>
      <ol className="grow">
        <FeatureImages
          lang={lang}
          setHighlight={setHighlight}
          featImage1={featImage1}
          featImage2={featImage2}
          featImage3={featImage3}
          featImage4={featImage4}
          featImage5={featImage5}
        />
      </ol>
    </div>
  );
}

function FeatureLabels({
  lang,
  highlight,
  highlightFeature,
}: {
  lang: MyLang;
  highlight: number;
  highlightFeature: (idx: number) => void;
}) {
  const highlightColor = useRef("rgba(255 255 255 / 0.1)");

  const t = translator(lang);
  const { feat1, feat2, feat3, feat4, feat5 } = dict[lang];
  const feats = [feat1, feat2, feat3, feat4, feat5];

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("theme-dark");
    highlightColor.current = isDark
      ? "rgba(255 255 255 / 0.2)"
      : "rgba(255 255 255 / 1.0)";
  });

  return (
    <div className="md:sticky top-0 min-h-screen flex flex-col justify-center">
      <Heading level={4} className="mb-6 text-xl font-semibold">
        <FontAwesomeIcon
          icon={faLightbulb}
          className="mr-3 text-ctp-flamingo"
        />
        {t("Feature Highlights", "주요 기능")}
      </Heading>
      <ol>
        {feats.map((feat, idx) => (
          <motion.li
            key={idx}
            initial={false}
            animate={highlight === idx ? "highlighted" : "normal"}
            variants={{
              highlighted: {
                backgroundColor: highlightColor.current,
                scale: 1.03,
              },
              hover: {
                scale: 1.03,
              },
              normal: {
                backgroundColor: "rgba(255 255 255 / 0)",
              },
            }}
            whileHover={highlight === idx ? "highlighted" : "hover"}
            className="shrink-0 mb-4 last:mb-0 rounded-lg px-6 py-3 flex items-center text-xl leading-relaxed cursor-pointer"
            onClick={() => highlightFeature(idx)}
          >
            <FeatureNumber num={idx + 1} />
            <span>{feat}</span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function FeatureImages({
  lang,
  setHighlight,
  featImage1,
  featImage2,
  featImage3,
  featImage4,
  featImage5,
}: {
  featImage1: MutableRefObject<HTMLLIElement | null>;
  featImage2: MutableRefObject<HTMLLIElement | null>;
  featImage3: MutableRefObject<HTMLLIElement | null>;
  featImage4: MutableRefObject<HTMLLIElement | null>;
  featImage5: MutableRefObject<HTMLLIElement | null>;
  lang: MyLang;
  setHighlight: Dispatch<SetStateAction<number>>;
}) {
  const { feat1, feat2, feat3, feat4, feat5, caption501, caption502 } =
    dict[lang];

  return (
    <>
      <motion.li
        className="md:min-h-screen py-12 flex flex-col justify-center items-center"
        viewport={{ amount: 0.5, once: false }}
        onViewportEnter={() => setHighlight(0)}
        ref={featImage1}
      >
        <div className="flex md:hidden items-center text-xl leading-relaxed">
          <FeatureNumber num={1} bg />
          <span>{feat1}</span>
        </div>
        <Image
          src={sigmateFeature01}
          alt="Sigmate Wiki UI"
          width={720}
          className="my-6 md:px-4"
        />
      </motion.li>
      <motion.li
        className="md:min-h-screen py-12 flex flex-col justify-center items-center"
        viewport={{ amount: 0.5, once: false }}
        onViewportEnter={() => setHighlight(1)}
        ref={featImage2}
      >
        <div className="flex md:hidden items-center text-xl leading-relaxed">
          <FeatureNumber num={2} bg />
          <span>{feat2}</span>
        </div>
        <Image
          src={sigmateFeature02}
          alt="Sigmate Wiki UI"
          width={600}
          className="my-6 md:px-8"
        />
      </motion.li>
      <motion.li
        className="md:min-h-screen py-12 flex flex-col justify-center items-center"
        viewport={{ amount: 0.5, once: false }}
        onViewportEnter={() => setHighlight(2)}
        ref={featImage3}
      >
        <div className="flex md:hidden items-center text-xl leading-relaxed">
          <FeatureNumber num={3} bg />
          <span>{feat3}</span>
        </div>
        <Image
          src={sigmateFeature03}
          alt="Sigmate Wiki UI"
          width={720}
          className="my-6 md:px-8"
        />
      </motion.li>
      <motion.li
        className="md:min-h-screen py-12 flex flex-col justify-center items-center"
        viewport={{ amount: 0.5, once: false }}
        onViewportEnter={() => setHighlight(3)}
        ref={featImage4}
      >
        <div className="flex md:hidden items-center text-xl leading-relaxed">
          <FeatureNumber num={4} bg />
          <span>{feat4}</span>
        </div>
        <Image
          src={sigmateFeature04}
          alt="Sigmate Wiki UI"
          width={720}
          className="my-6 md:px-8"
        />
      </motion.li>
      <motion.li
        className="md:min-h-screen py-12 flex flex-col justify-center items-center"
        viewport={{ amount: 0.5, once: false }}
        onViewportEnter={() => setHighlight(4)}
        ref={featImage5}
      >
        <div className="flex md:hidden items-center text-xl leading-relaxed">
          <FeatureNumber num={5} bg />
          <span>{feat5}</span>
        </div>
        <Image
          src={sigmateFeature0501}
          alt="Sigmate Wiki UI"
          width={720}
          className="my-6 md:px-8"
        />
        {caption501}
      </motion.li>
      <motion.li
        className="md:min-h-screen py-12 flex flex-col justify-center items-center"
        viewport={{ amount: 0.5, once: false }}
        onViewportEnter={() => setHighlight(4)}
      >
        <Image
          src={sigmateFeature0502}
          alt="Sigmate Wiki UI"
          width={720}
          className="my-6 md:px-8"
        />
        {caption502}
      </motion.li>
    </>
  );
}

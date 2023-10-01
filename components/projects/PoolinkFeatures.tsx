'use client';

import Image, { StaticImageData } from 'next/image';
import { Variants, motion } from 'framer-motion';
import { useState, useRef, MouseEventHandler } from 'react';
import { SupportedLang, createIntlDict } from '@/i18n';
import poolinkScreenShot1 from '@images/poolink/4.png';
import poolinkScreenShot2 from '@images/poolink/5-3.png';
import poolinkScreenShot3 from '@images/poolink/6.png';

type FeatureName = 'save' | 'explore' | 'share';

const dict = createIntlDict(
  {
    FEAT_SAVE: 'Save',
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
    FEAT_EXPLORE: 'Explore',
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
    FEAT_SHARE: 'Share',
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
    FEAT_SAVE: '저장',
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
    FEAT_EXPLORE: '탐색',
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
    FEAT_SHARE: '공유',
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
  }
);

export default function PoolinkFeatures({ lang }: { lang: SupportedLang }) {
  const {
    FEAT_SAVE,
    SAVE_H,
    SAVE_DESC,
    FEAT_EXPLORE,
    EXPLORE_H,
    EXPLORE_DESC,
    FEAT_SHARE,
    SHARE_H,
    SHARE_DESC,
  } = dict[lang];

  const [highlighted, setHighlighted] = useState<FeatureName>('save');
  const scrollDiv1 = useRef<HTMLDivElement>(null);
  const scrollDiv2 = useRef<HTMLDivElement>(null);
  const scrollDiv3 = useRef<HTMLDivElement>(null);

  const featureClickHandler: Record<
    FeatureName,
    MouseEventHandler<HTMLButtonElement>
  > = {
    save: () => {
      setHighlighted('save');
      scrollDiv1.current?.scrollIntoView({ behavior: 'auto' });
    },
    explore: () => {
      setHighlighted('explore');
      scrollDiv2.current?.scrollIntoView({ behavior: 'auto' });
    },
    share: () => {
      setHighlighted('share');
      scrollDiv3.current?.scrollIntoView({ behavior: 'auto' });
    },
  };

  const motionVariants: Record<FeatureName, Variants> = {
    save: {
      save: { right: 0 },
      explore: { right: '100vw' },
      share: { right: '200vw' },
    },
    explore: {
      save: { right: '-100vw' },
      explore: { right: 0 },
      share: { right: '100vw' },
    },
    share: {
      save: { right: '-200vw' },
      explore: { right: '-100vw' },
      share: { right: 0 },
    },
  };

  return (
    <div className="mt-16 py-8 w-full flex flex-col justify-center items-start">
      <div className="w-full flex justify-center">
        <FeatureButton
          onClick={featureClickHandler.save}
          selected={highlighted === 'save'}
        >
          {FEAT_SAVE}
        </FeatureButton>
        <FeatureButton
          onClick={featureClickHandler.explore}
          selected={highlighted === 'explore'}
        >
          {FEAT_EXPLORE}
        </FeatureButton>
        <FeatureButton
          onClick={featureClickHandler.share}
          selected={highlighted === 'share'}
        >
          {FEAT_SHARE}
        </FeatureButton>
      </div>
      <motion.div
        className="relative w-full py-12 overflow-x-hidden overflow-y-visible"
        animate={highlighted}
      >
        <FeatureHighlight
          heading={SAVE_H}
          description={SAVE_DESC}
          imgSrc={poolinkScreenShot1}
          imgAlt="Create board modal"
          className="relative"
          variants={motionVariants.save}
        />
        <FeatureHighlight
          heading={EXPLORE_H}
          description={EXPLORE_DESC}
          imgSrc={poolinkScreenShot2}
          imgAlt="Explore tab"
          className="absolute top-1/2 -translate-y-1/2"
          variants={motionVariants.explore}
        />
        <FeatureHighlight
          heading={SHARE_H}
          description={SHARE_DESC}
          imgSrc={poolinkScreenShot3}
          imgAlt="Share menu"
          className="absolute top-1/2 -translate-y-1/2"
          variants={motionVariants.share}
        />
      </motion.div>
    </div>
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
  const color = selected
    ? 'border-secondary text-secondary'
    : 'border-background text-faded';
  return (
    <button
      onClick={onClick}
      className={`border-b-2 px-6 py-1 font-medium ${color}`}
    >
      {children}
    </button>
  );
}

function FeatureHighlight({
  heading,
  description,
  imgSrc,
  imgAlt,
  className,
  variants,
}: {
  heading: React.ReactNode;
  description: React.ReactNode;
  imgSrc: StaticImageData | string;
  imgAlt: string;
  className: string;
  variants: Variants;
}) {
  return (
    <>
      <motion.div
        className={`shrink-0 w-full px-8 md:px-16 2xl:px-0 flex flex-col md:flex-row justify-center items-start md:items-center ${
          className || ''
        }`}
        variants={variants}
      >
        <div className="md:mr-12 mb-8 md:mb-0">
          <h5 className="mb-2 font-semibold text-3xl leading-normal">
            {heading}
          </h5>
          <p className="text-faded text-xl leading-relaxed">{description}</p>
        </div>
        <div className="w-full md:w-auto">
          <Image src={imgSrc} alt={imgAlt} className="w-full max-w-lg" />
        </div>
      </motion.div>
    </>
  );
}

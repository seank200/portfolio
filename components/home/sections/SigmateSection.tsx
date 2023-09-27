'use client';

import {
  MouseEventHandler,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import { DateTime } from 'luxon';
import { SupportedLang, createIntlDict, formatTimePeriod } from '@/i18n';
import ThemedImage from '@/components/ThemedImage';
import sigmateLogo from '@images/LOGO_Sigmate.png';
import sigmateLogoDark from '@images/LOGO_Sigmate_Dark.png';
import sigmateUIWiki from '@images/sigmate/Sigmate_UI_Wiki.png';
import sigmateUIWH from '@images/sigmate/Sigmate_UI_WH.png';
import sigmateUIUpcoming from '@images/sigmate/Sigmate_UI_Upcoming.png';
import sigmateUIVerification from '@images/sigmate/Sigmate_UI_Verification.png';
import sigmateUIVerificationModal from '@images/sigmate/Sigmate_UI_Verification_Modal.png';
import sigmateUIValuationUtility from '@images/sigmate/Sigmate_UI_Val_Utility.png';
import sigmateUIValuationFunding from '@images/sigmate/Sigmate_UI_Val_Funding.png';
import sigmateUIValuationSocialHype from '@images/sigmate/Sigmate_UI_Val_Social_Hype.png';
import Section from '../Section';
import Container, { containerClassName } from '@/components/Container';
import Image from 'next/image';
import { throttle } from 'lodash';
import ProjectStickyHeader from '../projects/ProjectStickyHeader';
import SigmateArch from './SigmateArch';
import ProjectHeader from '../projects/ProjectHeader';
import ProjectMyRoleList from '../projects/ProjectMyRoleList';

const dict = createIntlDict(
  {
    TITLE: 'CTO/Backend Developer',
    DESCRIPTION:
      'Sigmate is a wiki platform for the NFT community, created by Facade Inc., a Web3 startup.',
    CATEGORY: 'Work Experience',
    H_FEATURE_HIGHLIGHTS: 'Feature Highlights',
    H_FEAT_1: 'Easy',
    FEAT_1: 'All information in one place',
    FEAT_1_CAPTION:
      'Check minting schedules, social media updates, floor prices, and more.',
    H_FEAT_2: 'Reliable',
    FEAT_2: 'Cross-checked by users and moderators',
    FEAT_2_CAPTION: 'Increase trust by cross-checking and validation',
    H_FEAT_3: 'Valuated',
    FEAT_3: 'Integrated asset valuation using both on and off-chain data',
    FEAT_3_CAPTION:
      'NFT Valuation based on utility, funding and social hype analysis',
    H_MY_ROLE: 'My Role',
    JOB_DETAILS: [
      'Implemented a REST API app server using NodeJS and TypeScript.',
      'Managed DevOps workflows on Amazon Web Services (AWS)',
      'Modeled and deployed MYSQL server on AWS RDS with multi A-Z, read replicas, and auto backups',
      'Set up NoSQL server for content audit logs using AWS DynamoDB',
      'Deployed HTTPS NodeJS servers on Load balanced(ELB) EC2 instances',
      'Configured VPC with best security practices (subnet separation, firewall in/outbound rules, etc.)',
    ],
  },
  {
    TITLE: 'CTO/백엔드 개발',
    DESCRIPTION: 'NFT 커뮤니티를 위한 위키 플랫폼',
    CATEGORY: '업무 경험',
    H_FEATURE_HIGHLIGHTS: '기능 상세',
    H_FEAT_1: 'Easy',
    FEAT_1: '위키 기반의 각종 NFT 데이터 한곳에서 모아보기',
    FEAT_1_CAPTION:
      '민팅 일정부터 사기 여부까지, 한 페이지에서 모든 정보를 확인. 트위터, 디스코드, 미디엄 등의 오프체인 데이터 트래킹.',
    H_FEAT_2: 'Reliable',
    FEAT_2: '유저와 운영자간 교차검증 서비스',
    FEAT_2_CAPTION: '교차 검증 시스템을 통한 정보 신뢰성 향상',
    H_FEAT_3: 'Valuated',
    FEAT_3: '온/오프체인 데이터 통합형 가치평가',
    FEAT_3_CAPTION:
      'Utility, Funding, Social Hype 등 다양한 지표 분석을 통한 NFT 가치평가 제공',

    H_MY_ROLE: '세부 업무내용',
    JOB_DETAILS: [
      'NodeJS와 TypeScript를 사용한 REST API app server 개발.',
      'AWS(Amazon Web Services) 상의 배포 및 DevOps 워크플로우 관리',
    ],
  }
);

export default function SigmateSection({
  lang,
  className,
}: {
  lang: SupportedLang;
  className?: string;
}) {
  const {
    TITLE,
    DESCRIPTION,
    CATEGORY,
    H_FEATURE_HIGHLIGHTS,
    H_FEAT_1,
    H_FEAT_2,
    H_FEAT_3,
    FEAT_1,
    FEAT_1_CAPTION,
    FEAT_2,
    FEAT_2_CAPTION,
    FEAT_3,
    FEAT_3_CAPTION,
    H_MY_ROLE,
  } = dict[lang];

  const JOB_DETAILS = dict[lang].JOB_DETAILS as Array<React.ReactNode>;

  const startedAt = DateTime.fromObject({ year: 2021, month: 3 });
  const endedAt = DateTime.fromObject({ year: 2023, month: 3 });
  const period = formatTimePeriod(lang, startedAt, endedAt, {
    precision: 'month',
  });

  const [selectedFeature, setSelectedFeature] = useState<number>(0);
  const [marginTop, setMarginTop] = useState<number>(0);
  const feat1Ref = useRef<HTMLDivElement | null>(null);
  const feat2Ref = useRef<HTMLDivElement | null>(null);
  const feat3Ref = useRef<HTMLDivElement | null>(null);

  const createFeatureSelector = useCallback(
    (featureId: number) => () => {
      let ref: MutableRefObject<HTMLDivElement | null>;
      switch (featureId) {
        case 1:
          ref = feat1Ref;
          break;
        case 2:
          ref = feat2Ref;
          break;
        case 3:
          ref = feat3Ref;
          break;
        default:
          throw new Error(`Unexpected featureId: ${featureId}`);
      }
      if (!ref.current) return;
      ref.current.scrollIntoView({ behavior: 'smooth' });
    },
    [feat1Ref, feat2Ref, feat3Ref]
  );

  useEffect(() => {
    const handleResize = throttle(() => {
      const elemHeight = feat1Ref.current?.getBoundingClientRect()?.height;
      setMarginTop(Math.ceil(elemHeight ? elemHeight - window.innerHeight : 0));
    }, 200);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section className={`min-h-screen ${className || ''}`}>
      <ProjectStickyHeader
        heading={
          <ThemedImage
            src={sigmateLogo}
            darkSrc={sigmateLogoDark}
            alt="Sigmate"
            height={34}
            className="relative right-[2px]"
          />
        }
        title={TITLE}
        category={CATEGORY}
        period={period}
      />
      <Container className="mb-12 relative bottom-1">
        <ProjectHeader
          title={TITLE}
          period={period}
          description={DESCRIPTION}
        />
        <h4 className="mt-8 mb-2 text-2xl font-semibold">🎯 {H_MY_ROLE}</h4>
        <ProjectMyRoleList items={JOB_DETAILS} />
      </Container>
      <div className="relative">
        <Container className="md:sticky top-0 md:min-h-screen hidden md:flex flex-col justify-center items-start">
          <h4 className="mb-6 text-2xl font-semibold">
            💡 {H_FEATURE_HIGHLIGHTS}
          </h4>
          <FeatureHighlight
            heading={H_FEAT_1}
            body={FEAT_1}
            selectedFeature={selectedFeature}
            onClick={createFeatureSelector(1)}
            featureId={1}
          />
          <FeatureHighlight
            heading={H_FEAT_2}
            body={FEAT_2}
            selectedFeature={selectedFeature}
            onClick={createFeatureSelector(2)}
            featureId={2}
          />
          <FeatureHighlight
            heading={H_FEAT_3}
            body={FEAT_3}
            selectedFeature={selectedFeature}
            onClick={createFeatureSelector(3)}
            featureId={3}
          />
        </Container>
        <Container className="md:hidden">
          <h4 className="mb-6 text-2xl font-semibold">
            💡 {H_FEATURE_HIGHLIGHTS}
          </h4>
        </Container>
        <motion.div
          className={`${containerClassName} md:absolute top-0 left-1/2 md:-translate-x-1/2 md:min-h-screen py-8 md:py-16 flex flex-col items-start justify-center md:flex-row md:justify-start md:items-center`}
          onViewportEnter={() => setSelectedFeature(1)}
          viewport={{ once: false, amount: 0.3 }}
          ref={feat1Ref}
        >
          <FeatureImage className="flex flex-col items-center">
            <Image
              src={sigmateUIWiki}
              alt="Sigmate UI: Wiki"
              width={1158}
              className="mb-12 shrink-0 hover:scale-102 transition-transform shadow-lg shadow-background-on/20"
            />
            <Image
              src={sigmateUIWH}
              alt="Sigmate UI: What's Happening"
              width={1158}
              className="mb-12 shrink-0 md:w-2/3 hover:scale-102 transition-transform shadow-lg shadow-background-on/20"
            />
            <Image
              src={sigmateUIUpcoming}
              alt="Sigmate UI: What's Happening"
              width={1158}
              className="shrink-0 hover:scale-102 transition-transform shadow-lg shadow-background-on/20"
            />
            <p className="mt-8 block px-8 md:px-0 text-center text-faded text-lg font-light">
              {FEAT_1_CAPTION}
            </p>
          </FeatureImage>
        </motion.div>
        <div style={{ height: marginTop }} className="hidden md:block"></div>
        <motion.div
          className={`${containerClassName} md:min-h-screen py-8 md:py-16 flex justify-start items-center`}
          viewport={{ once: false, amount: 0.5 }}
          onViewportEnter={() => setSelectedFeature(2)}
          ref={feat2Ref}
        >
          <FeatureImage className="flex flex-col items-center">
            <Image
              src={sigmateUIVerification}
              alt="Sigmate UI: Verification"
              width={1158}
              className="w-full hover:scale-102 transition-transform shadow-lg shadow-background-on/20"
            />
            <Image
              src={sigmateUIVerificationModal}
              alt="Sigmate UI: Verification Modal"
              width={1158}
              className="w-1/2 hover:scale-102 transition-transform -translate-y-1/4 shadow-lg shadow-background-on/20"
            />
            <p className="px-8 md:px-0 text-center text-faded text-lg font-light">
              {FEAT_2_CAPTION}
            </p>
          </FeatureImage>
        </motion.div>
        <motion.div
          className={`${containerClassName} md:min-h-screen py-8 md:py-16 flex justify-start items-center`}
          viewport={{ once: false, amount: 0.5 }}
          onViewportEnter={() => setSelectedFeature(3)}
          ref={feat3Ref}
        >
          <FeatureImage className="flex flex-col items-center">
            <div className="w-1/2 flex flex-col gap-4">
              <div>
                <Image
                  src={sigmateUIValuationUtility}
                  alt="Sigmate UI: Valuation (Utility)"
                  width={600}
                  className="hover:scale-104 transition-transform shadow-lg shadow-background-on/20"
                />
              </div>
              <div>
                <Image
                  src={sigmateUIValuationFunding}
                  alt="Sigmate UI: Valuation (Funding)"
                  width={600}
                  className="hover:scale-104 transition-transform shadow-lg shadow-background-on/20"
                />
              </div>
              <div>
                <Image
                  src={sigmateUIValuationSocialHype}
                  alt="Sigmate UI: Valuation (Social Hype)"
                  width={600}
                  className="hover:scale-104 transition-transform shadow-lg shadow-background-on/20"
                />
              </div>
            </div>
            <p className="mt-8 px-8 md:px-0 text-center text-faded text-lg font-light">
              {FEAT_3_CAPTION}
            </p>
          </FeatureImage>
        </motion.div>
      </div>
      <SigmateArch lang={lang} />
    </Section>
  );
}

function FeatureImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <div className="mr-20 shrink-0 w-88 hidden md:block" />
      <div className={`md:grow ${className || ''}`}>{children}</div>
    </>
  );
}

function FeatureHighlight({
  heading,
  body,
  selectedFeature,
  featureId,
  onClick,
}: {
  heading: React.ReactNode;
  body: React.ReactNode;
  selectedFeature: number;
  featureId: number;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <motion.div
      className={`mb-6 last-of-type:mb-0 w-full md:w-88 cursor-pointer shadow-lg border-2 border-surface rounded-lg px-8 py-4 bg-surface text-surface-on`}
      onClick={onClick}
      animate={selectedFeature === featureId ? 'selected' : 'normal'}
      variants={{
        selected: {
          borderColor: 'var(--rgb-primary)',
          boxShadow:
            'rgba(var(--color-primary), 0.4) 0 10px 15px -3px, rgba(var(--color-primary), 0.4) 0 4px 6px -4px',
          scale: 1,
        },
        normal: {
          borderColor: 'var(--rgb-surface)',
          boxShadow:
            'rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.1) 0 4px 6px -4px',
          scale: 1,
        },
        hover: {
          scale: 1.04,
        },
      }}
      whileHover="hover"
    >
      <motion.h5
        className="mb-2 text-2xl text-faded font-bold"
        variants={{
          selected: { color: 'var(--rgb-primary)' },
          normal: { color: 'var(--rgb-faded)' },
          hover: { color: 'var(--rgb-primary)' },
        }}
      >
        {heading}
      </motion.h5>
      <motion.p
        className="text-faded"
        variants={{
          selected: { color: 'var(--rgb-surface-on)' },
          normal: { color: 'var(--rgb-faded)' },
          hover: { color: 'var(--rgb-surface-on)' },
        }}
      >
        {body}
      </motion.p>
    </motion.div>
  );
}

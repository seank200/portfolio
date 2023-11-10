"use client";

import { useState } from "react";
import { Variants, motion } from "framer-motion";
import Container from "@components/Container";
import { MyLang, createIntlDict, translator } from "@lib/i18n";
import RoleTag from "../RoleTag";
import MyLink from "@components/MyLink";
import ListItem from "@components/ListItem";
import MotionListItem from "@components/MotionListItem";

const dict = createIntlDict(
  {
    ROLE_1: (
      <>
        <span className="font-bold">[Development-Overview] </span>
        Implemented a REST API server that were dockerized and deployed on AWS
        EC2 instances. Features included OAuth login stategies, JWT
        authentication, wiki content auditing/version control, and data
        fetching/caching from blockchains and SNS platforms. Modeled MYSQL, and
        Document (NoSQL) DBs for data storage, and AWS S3 bucket for static file
        hosting.
      </>
    ),
    TAGS_1: (
      <>
        <RoleTag>#nodejs</RoleTag>
        <RoleTag>#typescript</RoleTag>
        <RoleTag>#docker</RoleTag>
        <RoleTag>#aws</RoleTag>
        <RoleTag>#mysql</RoleTag>
        <RoleTag>#nosql</RoleTag>
        <RoleTag>#redis</RoleTag>
      </>
    ),
    ROLE_2: (
      <>
        <span className="font-bold">[System Design] </span>
        Designed and deployed a web server architecture on Amazon Web Services
        (AWS) to ensure service continuity, and enforce security. Achieved less
        than 1% service downtime after official launch for a year, with 125
        active users and average 5.2K API calls per day. Detected and mitigated
        average 1.2K malicious requests per day (SSH access, SQL injection and
        XSR attempts).
      </>
    ),
    TAGS_2: (
      <>
        <RoleTag>#aws</RoleTag>
        <RoleTag>#aws-ec2</RoleTag>
        <RoleTag>#aws-rds</RoleTag>
        <RoleTag>#aws-dynamo-db</RoleTag>
        <RoleTag>#aws-s3</RoleTag>
        <RoleTag>#aws-cloudwatch</RoleTag>
        <RoleTag>#aws-route-53</RoleTag>
        <RoleTag>#ssl-tls</RoleTag>
        <RoleTag>#aws-certificate-manager</RoleTag>
        <RoleTag>#aws-vpc</RoleTag>
      </>
    ),
    ROLE_3: (
      <>
        <span className="font-bold">[Development-SQL] </span>
        Modeled a relational database with MYSQL and deployed it on AWS RDS. 52
        SQL tables were created to support application features such as user
        authentication, rewards system, blockchain and SNS data aggregation, NFT
        minting event schedule tracking, wiki content moderation and much more.
        Made necessary table alters such as constraints and indexes to improve
        query performance after log analysis.
      </>
    ),
    TAGS_3: (
      <>
        <RoleTag>#mysql</RoleTag>
        <RoleTag>#aws-rds</RoleTag>
      </>
    ),
    ROLE_4: (
      <>
        <span className="font-bold">[Development-NoSQL] </span>
        Implemented a NoSQL database for storing wiki content and edit logs.
        Implemented hash key(partition key) and range key(sort key) generation
        algorithms for DB entries to optimize speed and traffic for frequent
        select queries and support sharding to limit partition sizes.
      </>
    ),
    TAGS_4: (
      <>
        <RoleTag>#nosql</RoleTag>
        <RoleTag>#aws-dynamo-db</RoleTag>
      </>
    ),
    ROLE_5: (
      <>
        <span className="font-bold">[Development-Wiki Engine] </span>
        Developed a wiki engine with version control and content verification.
        Version control supported version history comparison (diff), rollback
        feature for moderators and reward system for content contributors.
        Content verification features allowed readers to vote on certain
        sections of the wiki article to express their opinions on whether the
        article content was accurate or not.
      </>
    ),
    TAGS_5: (
      <>
        <RoleTag>#typescript</RoleTag>
        <RoleTag>#mysql</RoleTag>
        <RoleTag>#nosql</RoleTag>
      </>
    ),
    ROLE_6: (
      <>
        <span className="font-bold">[Development-Logging] </span>
        Designed a custom logging system for analytics and debugging purposes.
        Collaborated with PMs and designers to implement loggers that collected
        information on peak activity time periods, user join rates, client
        device information and more to improve UX, evaluate marketing operation
        results, and make tweaks to UI elements. Collected debugging information
        such as API response times and error rates, and set up monitoring on AWS
        CloudWatch that automatically alerted developers on increased error
        rates, or critical database failures using email and Slack Integration.
      </>
    ),
    TAGS_6: (
      <>
        <RoleTag>#typescript</RoleTag>
        <RoleTag>#aws-cloudwatch</RoleTag>
      </>
    ),
  },
  {
    ROLE_1: (
      <>
        <span className="font-bold">[개발] </span>
        NodeJS/TypeScript를 사용하여 REST API 서버를 개발하고, 이를 Docker
        컨테이너화하여 AWS EC2 인스턴스에 배포하였음. OAuth 로그인, JWT 인증,
        위키 편집 및 버전 관리 엔진, 블록체인 및 SNS 서비스 데이터 수집 및 캐싱
        등을 구현하였음. MYSQL 및 NoSQL(AWS DyanmoDB) 데이터베이스를 모델링 및
        배포하였으며, AWS S3를 통해 정적 파일을 호스팅하였음.
      </>
    ),
    ROLE_2: (
      <>
        <span className="font-bold">[시스템 설계] </span>웹 백엔드 아키텍쳐를
        설계하고 이를 아미존웹서비스(AWS)에 배포하였음. 서비스 연속성을
        보장하고, 보안을 유지하며 업데이트 배포가 용이하도록{" "}
        <MyLink lang="ko" href="/" className="text-secondary hover:underline">
          백엔드 아키텍쳐
        </MyLink>{" "}
        를 설계함. 서비스 다운타임은 정식 런치 후 1년간 5% 미만으로 유지하였고,
        125명의 유저가 가입하였으며 하루 평균 약 5,200 건의 API 요청을 처리함.
        또한, 하루 평균 약 1천 건의 악의적 접근 요청을 감지하고 로그 분석을 통해
        해당 클라이언트를 차단 조치함 (SSH 접근 시도, SQL Injection, XSR 시도
        등).
      </>
    ),
    ROLE_3: (
      <>
        <span className="font-bold">[개발-SQL] </span>
        MYSQL 관계형 데이터베이스를 모델링하고 AWS RDS에 배포하였음. 유저 인증,
        유저 보상 시스템, 위키 내용 검증, 블록체인 및 SNS 데이터 캐싱, NFT 민팅
        일정 제공 등 다양한 애플리케이션 기능을 지원하기 위해 52개의 SQL
        테이블을 모델링함. 주기적인 성능 로그 분석을 통해 필요시 테이블 구조를
        조정하는 등 쿼리 성능 향상을 위해 꾸준한 후속조치를 취함.
      </>
    ),
    ROLE_4: (
      <>
        <span className="font-bold">[개발-NoSQL] </span>
        위키 페이지 내용과 버전 기록을 위해 비관계형(NoSQL) 데이터베이스를 AWS
        DynamoDB에서 운영하였음. 자주 일어나는 쿼리의 성능을 극대화하기 위해
        복합 인덱스(파티션 키, 정렬 키)를 구성하였고, 샤딩(sharding)이
        가능하도록 키(key)를 설계하였음.
      </>
    ),
    ROLE_5: (
      <>
        <span className="font-bold">[개발-위키 엔진] </span>
        사이트 내 자체 위키 엔진을 구현하여 페이지 기록 관리, 유저 보상, 그리고
        내용 검증 기능을 제공함. 구현한 위키 엔진은 버전별 내용 비교(diff) 기능,
        악의적 편집 대응을 위한 롤백 기능(관리자 전용), 위키 내용 작성 기여도에
        비례한 유저 보상 기능, 그리고 독자가 위키 글 내용의 정확성 여부를 투표할
        수 있는 내용 검증 기능 등을 제공하였음.
      </>
    ),
    ROLE_6: (
      <>
        <span className="font-bold">[개발-로그] </span>
        개발, PM, 디자인 팀원의 요구사항을 충족할 수 있는 로그 시스템을 직접
        설계 및 구현함. 디버깅, 마케팅 효과 평가, UI/UX 개선 등이 가능하도록
        다양한 정보를 수집함 (트래픽 급증 시간대, 가입 유저 수 변화, API
        응답시간 등). API별 오류 발생률의 급격한 변화를 감지할 수 있도록 AWS
        CloudWatch를 구성하고, 필요시 자동으로 개발팀원에게 이메일 및 Slack으로
        알림이 전송되도록 구성함.
      </>
    ),
  },
);

export default function SigmateRole({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  const [expanded, setIsExpanded] = useState(false);

  const {
    ROLE_1,
    ROLE_2,
    ROLE_3,
    ROLE_4,
    ROLE_5,
    ROLE_6,
    TAGS_1,
    TAGS_2,
    TAGS_3,
    TAGS_4,
    TAGS_5,
    TAGS_6,
  } = dict[lang];

  const listItemVariants: Variants = {
    expanded: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  return (
    <>
      <ul className="flex flex-col gap-4 leading-relaxed xl:text-lg">
        <ListItem>
          {ROLE_1}
          {TAGS_1}
        </ListItem>
        <ListItem>
          {ROLE_2}
          {TAGS_2}
        </ListItem>
        <ListItem>
          {ROLE_3}
          {TAGS_3}
        </ListItem>
        <motion.div
          initial={false}
          animate={expanded ? "expanded" : "closed"}
          variants={{
            expanded: {
              height: "auto",
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.05,
              },
            },
            closed: {
              height: "0px",
              transition: {
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1,
              },
            },
          }}
          className="flex flex-col gap-4 overflow-hidden"
        >
          <MotionListItem variants={listItemVariants}>
            {ROLE_4}
            {TAGS_4}
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            {ROLE_5}
            {TAGS_5}
          </MotionListItem>
          <MotionListItem variants={listItemVariants}>
            {ROLE_6}
            {TAGS_6}
          </MotionListItem>
        </motion.div>
      </ul>
      <button
        onClick={() => setIsExpanded((p) => !p)}
        className="mt-4 w-full text-center hover:underline text-ctp-mauve font-medium"
      >
        {t(
          expanded ? "View less" : "View more..",
          expanded ? "숨기기" : "더보기..",
        )}
      </button>
    </>
  );
}

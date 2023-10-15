import { createIntlDict } from '@/i18n';
import Link from 'next/link';

const tagStyle = 'px-1 text-secondary text-sm font-semibold';

export const facadeDict = createIntlDict(
  {
    TITLE: 'CTO / Backend Developer',
    DIVISION: 'BE Development/DevOps Team',
    AFFILIATION: 'Facade Inc.',
    CATEGORY: 'Work Experience',
    DESCRIPTION: 'A wiki platform for the NFT community',
    DETAILS: [
      <>
        Lead backend developer/CTO in developing a web platform,
        <Link
          href="/project/sigmate"
          className="mx-1 text-secondary hover:underline"
        >
          Sigmate,
        </Link>
        that provided investment information on NFTs and blockchains.
      </>,
      <>
        <span className="font-bold">[Development-Overview] </span>
        Implemented a REST API server using NodeJS wtih TypeScript that were
        deployed on AWS EC2 instances. APIs included OAuth login stategies, JWT
        authentication, wiki content auditing/version control, and data
        fetching/caching from blockchains and SNS platforms. Modeled MYSQL, and
        Document (NoSQL) DBs for data storage.
        <span className={tagStyle}>#node-js</span>
        <span className={tagStyle}>#typescript</span>
        <span className={tagStyle}>#mysql</span>
        <span className={tagStyle}>#nosql</span>
        <span className={tagStyle}>#redis</span>
      </>,
      <>
        <span className="font-bold">[DevOps] </span>
        Managed DevOps on Amazon Web Services (AWS) to improve deployment
        workflow efficiency, ensure service continuity, and enforce security.
        Achieved less than 1% service downtime after official launch for a year,
        with 1552 active users and average 52K API calls per day. Detected and
        mitigated 5-6K malicious requests per day (SSH access, SQL injection and
        XSR attempts).
        <Link href="/project/sigmate" className="mx-1 hover:underline">
          (Click here to view system architecture diagram)
        </Link>
        <span className={tagStyle}>#aws</span>
        <span className={tagStyle}>#aws-ec2</span>
        <span className={tagStyle}>#aws-rds</span>
        <span className={tagStyle}>#aws-dynamo-db</span>
        <span className={tagStyle}>#aws-s3</span>
        <span className={tagStyle}>#aws-route-53</span>
        <span className={tagStyle}>#aws-certificate-manager</span>
        <span className={tagStyle}>#aws-vpc</span>
      </>,
      <>
        <span className="font-bold">[Development] </span>
        Developed a wiki engine with version control and content verification.
        Version control supported version history comparison (diff), rollback
        feature for moderators and reward system for content contributors.
        Content verification features allowed readers to vote on certain
        sections of the wiki article to express their opinions on whether the
        article content was accurate or not.
        <span className={tagStyle}>#typescript</span>
        <span className={tagStyle}>#mysql</span>
        <span className={tagStyle}>#nosql</span>
      </>,
      <>
        <span className="font-bold">[Development-SQL] </span>
        Modeled a SQL database with and deployed the on AWS RDS. All 52 SQL
        tables were modeled with normalization, constraints, and indexes in mind
        to ensure data integrity, save storage and improve query performance.
        <span className={tagStyle}>#mysql</span>
        <span className={tagStyle}>#aws-rds</span>
      </>,
      <>
        <span className="font-bold">[Development-NoSQL] </span>
        Implemented a NoSQL database for storing wiki content and edit logs.
        Implemented hash key(partition key) and range key(sort key) generation
        algorithms for DB entries to optimize speed and traffic for frequent
        select queries and support sharding to limit partition sizes.
        <span className={tagStyle}>#nosql</span>
        <span className={tagStyle}>#aws-dynamo-db</span>
      </>,
    ],
  },
  {
    TITLE: 'CTO / 백엔드 개발',
    DIVISION: '파사드',
    AFFILIATION:
      '대한민국 중소벤처사업부 예비창업패키지 선정 대상 Web3/블록체인 스타트업',
    CATEGORY: '업무 경험',
    DESCRIPTION: 'NFT 커뮤니티를 위한 위키 플랫폼',
  }
);

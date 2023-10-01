import { createIntlDict } from '@/i18n';

export const facadeDict = createIntlDict(
  {
    TITLE: 'CTO / Backend Developer',
    DIVISION: 'Facade Inc.',
    AFFILIATION:
      'Startup funded by Ministry of SMEs and Startup(MSS), Repulbic of Korea',
    CATEGORY: 'Work Experience',
    DESCRIPTION: 'A wiki platform for the NFT community',
    DETAILS: [
      'Lead backend developer/CTO in developing a platform that provided verified, user-provided information on NFTs and blockchains ',
      'Implemented a REST API app server using NodeJS wtih TypeScript.',
      'Managed DevOps workflows on Amazon Web Services (AWS)',
      'Modeled and deployed MYSQL server on AWS RDS with multi A-Z, read replicas, and auto backups',
      'Set up NoSQL server for content audit logs using AWS DynamoDB',
      'Deployed HTTPS NodeJS servers on Load balanced(ELB) EC2 instances',
      'Configured VPC with best security practices (subnet separation, firewall in/outbound rules, etc.)',
    ],
  },
  {
    TITLE: 'CTO / 백엔드 개발',
    DIVISION: '파사드',
    AFFILIATION:
      '대한민국 중소벤처사업부 예비창업패키지 선정 대상 Web3/블록체인 스타트업',
    CATEGORY: '업무 경험',
    DESCRIPTION: 'NFT 커뮤니티를 위한 위키 플랫폼',
    DETAILS: [
      'Implemented a REST API app server using NodeJS and TypeScript.',
      'Managed DevOps workflows on Amazon Web Services (AWS)',
      'Modeled and deployed MYSQL server on AWS RDS with multi A-Z, read replicas, and auto backups',
      'Set up NoSQL server for content audit logs using AWS DynamoDB',
      'Deployed HTTPS NodeJS servers on Load balanced(ELB) EC2 instances',
      'Configured VPC with best security practices (subnet separation, firewall in/outbound rules, etc.)',
      'NodeJS와 TypeScript를 사용한 REST API app server 개발.',
      'AWS(Amazon Web Services) 상의 배포 및 DevOps 워크플로우 관리',
    ],
  },
  { strict: true }
);

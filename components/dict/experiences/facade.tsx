import { createIntlDict } from '@/i18n';

export const facadeDict = createIntlDict(
  {
    TITLE: 'CTO / Backend Developer',
    AFFILIATION: 'Facade Inc.',
    CATEGORY: 'Work Experience',
    DESCRIPTION:
      'Sigmate is a wiki platform for the NFT community, created by Facade Inc., a Web3 startup.',
    DETAILS: [
      'Implemented a REST API app server using NodeJS and TypeScript.',
      'Managed DevOps workflows on Amazon Web Services (AWS)',
      'Modeled and deployed MYSQL server on AWS RDS with multi A-Z, read replicas, and auto backups',
      'Set up NoSQL server for content audit logs using AWS DynamoDB',
      'Deployed HTTPS NodeJS servers on Load balanced(ELB) EC2 instances',
      'Configured VPC with best security practices (subnet separation, firewall in/outbound rules, etc.)',
    ],
  },
  {
    TITLE: 'CTO / 백엔드 개발',
    AFFILIATION: '파사드',
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

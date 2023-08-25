import type { SameKeys, IntlContents } from '.';

const navContentsEn = Object.freeze({
  HOME: 'Home',
  EXPERIENCE: 'Experience',
  PORTFOLIO: 'Portfolio',
  CONTACT_ME: 'Contact Me',
});

const navContentsKr: SameKeys<typeof navContentsEn> = Object.freeze({
  HOME: '홈',
  EXPERIENCE: '업무경험',
  PORTFOLIO: '포트폴리오',
  CONTACT_ME: '연락하기',
});

export const navContents: IntlContents = {
  en: navContentsEn,
  kr: navContentsKr,
};

import { SupportedLang, createIntlDict } from '@/i18n';
import Section from '@components/Section';
import Container from '@/components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SectionH2 from '@/components/SectionH2';

const emailUrl = 'mailto:yw.sean.kim@gmail.com';
const githubUrl = 'https://github.com/seanK200';
const linkedInUrl = 'https://linkedin.com/in/youngwoo-kim-sean/';

const dict = createIntlDict(
  {
    H_LINKS: 'External Links',
    H_NAME: 'Name',
    NAME: 'Youngwoo Kim',
    H_TIMEZONE: 'My Timezone',
    TIMEZONE: 'Asia/Seoul (UTC+09:00)',
    H_LANGUAGE: 'Languages I Speak',
    LANGUAGE: 'English (native speaker proficiency), Korean (native)',
    H_CONTACT_ME: 'Contact Me',
    CFA: (
      <>
        Thank you for visiting my portfolio. I am currently{' '}
        <b>[open for hire]</b>. Reach out to me by{' '}
        <a href={emailUrl} rel="noopener noreferrer" className="underline">
          my email
        </a>{' '}
        or visit{' '}
        <a href={linkedInUrl} rel="noopener noreferrer" className="underline">
          my LinkedIn profile
        </a>{' '}
        to send me a message.
      </>
    ),
    GITHUB: 'Github',
    LINKEDIN: 'LinkedIn',
    EMAIL: 'Email',
  },
  {
    H_LINKS: '외부 링크',
    H_NAME: '이름',
    NAME: '김영우',
    H_CONTACT_ME: '연락하기',
    CFA: (
      <>
        제 포트폴리오를 방문해주셔서 감사합니다. 저에 대해 더 알고 싶으시다면,
        아래{' '}
        <a href={emailUrl} rel="noopener noreferrer" className="underline">
          이메일
        </a>{' '}
        또는{' '}
        <a href={linkedInUrl} rel="noopener noreferrer" className="underline">
          링크드인 메세지
        </a>
        를 통해 연락주시면 회신드리도록 하겠습니다.
      </>
    ),
    GITHUB: '깃허브',
    LINKEDIN: '링크드인',
    EMAIL: '이메일',
  }
);

export default function ContactSection({
  lang,
  className,
}: {
  lang: SupportedLang;
  className?: string;
}) {
  const {
    H_LINKS,
    H_NAME,
    NAME,
    H_TIMEZONE,
    TIMEZONE,
    H_LANGUAGE,
    LANGUAGE,
    H_CONTACT_ME,
    CFA,
    GITHUB,
    LINKEDIN,
    EMAIL,
  } = dict[lang];
  return (
    <Section className={`${className || ''}`} id="contacts">
      <Container>
        <SectionH2 href="#contacts">{H_CONTACT_ME}</SectionH2>
        <p className="text-lg text-faded">{CFA}</p>
        <h3 className="mt-8 mb-1 text-xl font-semibold">{H_NAME}</h3>
        <p className="text-lg text-faded">{NAME}</p>
        {lang === 'en' && (
          <>
            <h3 className="mt-8 mb-1 text-xl font-semibold">{H_LANGUAGE}</h3>
            <p className="text-lg text-faded">{LANGUAGE}</p>
            <h3 className="mt-8 mb-1 text-xl font-semibold">{H_TIMEZONE}</h3>
            <p className="text-lg text-faded">{TIMEZONE}</p>
          </>
        )}
        <h3 className="mt-8 mb-4 text-xl font-semibold">{H_LINKS}</h3>
        <ul className="grid grid-cols-lg gap-4">
          <ContactLink
            href={emailUrl}
            label={EMAIL}
            icon={faEnvelope}
            id="yw.sean.kim@gmail.com"
          />
          <ContactLink
            href={linkedInUrl}
            label={LINKEDIN}
            icon={faLinkedin}
            id="youngwoo-kim-sean"
          />
          <ContactLink
            href={githubUrl}
            label={GITHUB}
            icon={faGithub}
            id="seanK200"
          />
        </ul>
      </Container>
    </Section>
  );
}

function ContactLink({
  href,
  label,
  icon,
  id,
}: {
  href: string;
  label: React.ReactNode;
  icon: IconProp;
  id: string;
}) {
  return (
    <li className="group hover:scale-102 rounded px-5 py-4 flex bg-surface hover:bg-gradient-to-br from-primary to-secondary shadow transition-all">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group-hover:text-primary-on grow flex justify-between items-center"
      >
        <div className="flex flex-col justify-between items-start">
          <span className="mb-8 text-xl font-medium">{label}</span>
          <span className="text-sm text-faded group-hover:text-primary-on">
            <FontAwesomeIcon icon={icon} className="mr-2" />
            {id}
          </span>
        </div>
        <ArrowButton />
      </a>
    </li>
  );
}

function ArrowButton() {
  return (
    <button className="rounded-full p-0.5">
      <FontAwesomeIcon icon={faArrowRight} className="h-6" />
    </button>
  );
}

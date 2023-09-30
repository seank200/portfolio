import { SupportedLang, createIntlDict } from '@/i18n';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import Container from '@/components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const dict = createIntlDict(
  {
    H_LINKS: 'External Links / Contacts',
    H_NAME: 'Name',
    NAME: 'Youngwoo Kim',
    H_TIMEZONE: 'My Timezone',
    TIMEZONE: 'Seoul (UTC +09:00)',
    H_LANGUAGE: 'Languages I Speak',
    LANGUAGE: 'Korean (native), English (native speaker proficiency)',
    H_CONTACT_ME: 'Contact Me',
    CFA: (
      <>
        Thank you for visiting my portfolio. I am currently{' '}
        <b>[open for hire]</b>, and you can reach out to me using the links
        below.
      </>
    ),
    GITHUB: 'Github',
    LINKEDIN: 'LinkedIn',
    EMAIL: 'Email',
  },
  {
    H_LINKS: '외부 링크 / 연락처',
    H_NAME: '이름',
    NAME: '김영우',
    H_CONTACT_ME: '연락하기',
    CFA: (
      <>
        제 포트폴리오를 방문해주셔서 감사합니다. 저는 현재 <b>[구직중]</b>이며,
        아래 링크를 통해 저에 대해 더 많은 정보를 얻으시거나, 저에게 연락하실 수
        있습니다.
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
    <Section className={`${className || ''}`} id="section-contact">
      <Container>
        <SectionHeading>{H_CONTACT_ME}</SectionHeading>
        <p className="text-lg">{CFA}</p>
        <h3 className="mt-8 mb-2 text-xl font-semibold">{H_NAME}</h3>
        <p className="text-lg">{NAME}</p>
        <h3 className="mt-8 mb-2 text-xl font-semibold">{H_LANGUAGE}</h3>
        <p className="text-lg">{LANGUAGE}</p>
        <h3 className="mt-8 mb-2 text-xl font-semibold">{H_TIMEZONE}</h3>
        <p className="text-lg">{TIMEZONE}</p>
        <h3 className="mt-8 mb-4 text-xl font-semibold">{H_LINKS}</h3>
        <ul className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-4">
          <ContactLink
            href="mailto:yw.sean.kim@gmail.com"
            label={EMAIL}
            icon={faEnvelope}
            id="yw.sean.kim@gmail.com"
          />
          <ContactLink
            href="https://github.com/seanK200"
            label={GITHUB}
            icon={faGithub}
            id="seanK200"
          />
          <ContactLink
            href="https://linkedin.com/in/youngwoo-kim-sean/"
            label={LINKEDIN}
            icon={faLinkedin}
            id="youngwoo-kim-sean"
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
    <li className="group hover:scale-102 rounded px-6 py-4 flex bg-surface hover:bg-gradient-to-br from-primary to-secondary shadow transition-all">
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

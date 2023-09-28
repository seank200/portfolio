import { SupportedLang, createIntlDict } from '@/i18n';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import Container from '@/components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const dict = createIntlDict({
  CONTACT_ME: 'Contact Me',
  CFA: 'Thank you for visiting my personal portfolio page. I am currently open for hire, and you can reach out to me using the links below.',
  GITHUB: 'Github',
  LINKEDIN: 'LinkedIn',
  EMAIL: 'Email',
});

export default function ContactSection({
  lang,
  className,
}: {
  lang: SupportedLang;
  className?: string;
}) {
  const { CONTACT_ME, CFA, GITHUB, LINKEDIN, EMAIL } = dict[lang];
  return (
    <Section className={`${className || ''}`}>
      <Container>
        <SectionHeading>{CONTACT_ME}</SectionHeading>
        <p>{CFA}</p>
        <ul className="mt-8 grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-4">
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
          <ContactLink
            href="mailto:yw.sean.kim@gmail.com"
            label={EMAIL}
            icon={faEnvelope}
            id="yw.sean.kim@gmail.com"
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
    <li className="group rounded px-6 py-4 flex bg-surface hover:bg-gradient-to-br from-primary to-secondary shadow transition-all">
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

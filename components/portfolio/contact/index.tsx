import { MyLang, createIntlDict, translator } from "@lib/i18n";
import Heading from "../Heading";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

const emailUrl = "mailto:yw.sean.kim@gmail.com";
const githubUrl = "https://github.com/seanK200";
const linkedInUrl = "https://linkedin.com/in/youngwoo-kim-sean/";

const dict = createIntlDict(
  {
    H_LINKS: "External Links",
    H_NAME: "Name",
    NAME: "Youngwoo Kim",
    H_TIMEZONE: "My Timezone",
    TIMEZONE: "Asia/Seoul (UTC+09:00)",
    H_LANGUAGE: "Languages I Speak",
    LANGUAGE: "English (native speaker proficiency), Korean (native)",
    H_CONTACT_ME: "Contact Me",
    CFA: (
      <>
        Thank you for visiting my portfolio. I am currently{" "}
        <b>[open for hire]</b>. Reach out to me by{" "}
        <a href={emailUrl} rel="noopener noreferrer" className="underline">
          my email
        </a>{" "}
        or visit{" "}
        <a href={linkedInUrl} rel="noopener noreferrer" className="underline">
          my LinkedIn profile
        </a>{" "}
        to send me a message.
      </>
    ),
    GITHUB: "Github",
    LINKEDIN: "LinkedIn",
    EMAIL: "Email",
  },
  {
    H_LINKS: "외부 링크",
    H_NAME: "이름",
    NAME: "김영우",
    H_CONTACT_ME: "연락하기",
    CFA: (
      <>
        제 포트폴리오를 방문해주셔서 감사합니다. 아래{" "}
        <a href={emailUrl} rel="noopener noreferrer" className="underline">
          이메일
        </a>{" "}
        또는{" "}
        <a href={linkedInUrl} rel="noopener noreferrer" className="underline">
          링크드인 메세지
        </a>
        를 통해 연락주시면 회신드리도록 하겠습니다.
      </>
    ),
    GITHUB: "깃허브",
    LINKEDIN: "링크드인",
    EMAIL: "이메일",
  },
);

export default function ContactSection({ lang }: { lang: MyLang }) {
  const t = translator(lang);
  const { CFA, GITHUB, LINKEDIN, EMAIL } = dict[lang];
  return (
    <section id="contacts" className="container my-16">
      <Heading level={2}>{t("Contact Me", "연락하기")}</Heading>
      <p className="text-lg text-faded">{CFA}</p>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
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
    </section>
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
    <li className="group hover:scale-102 rounded px-5 py-4 flex bg-ctp-surface0 hover:bg-gradient-to-br from-ctp-mauve to-ctp-blue shadow transition-all">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group-hover:text-ctp-base grow flex justify-between items-center"
      >
        <div className="flex flex-col justify-between items-start">
          <span className="mb-8 text-xl font-medium">{label}</span>
          <span className="text-sm text-faded group-hover:text-ctp-base">
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

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Container from './Container';
import ThemeSelect from './footer/ThemeSelect';
import { URL_GITHUB, URL_LINKEDIN, URL_EMAIL } from './contents/links';
import { SupportedLang, createIntlDict } from '@/i18n/utils';
import FooterCta from './footer/FooterCta';

const dict = createIntlDict(
  {
    INTRO:
      "I'm a backend web developer based on Seoul. You can usually find me in a cafe along with my laptop and a nice hot cup of tea, occasionally with my camera or my bike. If you can't, you can also find me through the links below. If you liked my content, or have any feedbacks, let me know!",
    GOTO_PORTFOLIO: 'You can also check out my portfolio here.',
    GITHUB: 'Github',
    LINKEDIN: 'LinkedIn',
    EMAIL: 'Email',
  },
  {
    INTRO:
      '저는 백엔드 웹 개발자입니다. 서울에 있는 카페에서 노트북과 따뜻한 차, 그리고 가끔씩은 카메라나 자전거와 함께 발견되곤 합니다. 저를 발견하지 못하셨다면, 아래 링크들을 통해서도 저를 찾을 수 있습니다.',
    GOTO_PORTFOLIO: '혹시 제 포트폴리오가 궁금해지셨다면, 여기를 클릭해주세요.',
    GITHUB: '깃허브',
    LINKEDIN: '링크드인',
    EMAIL: '이메일',
  }
);

export default function Footer({ lang }: { lang: SupportedLang }) {
  const { INTRO, GITHUB, LINKEDIN, EMAIL, GOTO_PORTFOLIO } = dict[lang];
  return (
    <footer className="w-full bg-background-variant text-background-on">
      <Container className="py-8 flex flex-col">
        <div>
          <h2>
            <Link
              href={`/${lang}`}
              className="top-[2px] text-2xl font-display font-extrabold leading-relaxed"
            >
              Youngwoo Kim
            </Link>
          </h2>
          <p className="mb-8 text-sm">
            {INTRO}&nbsp;
            <FooterCta lang={lang}>{GOTO_PORTFOLIO}</FooterCta>
          </p>
          <div className="flex space-x-6 lg:space-x-8 items-start">
            <a
              href={URL_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon
                icon={faGithub}
                title="Github"
                className="mr-2"
              />
              {GITHUB}
            </a>
            <a
              href={URL_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                title="LinkedIn"
                className="mr-2"
              />
              {LINKEDIN}
            </a>
            <a
              href={URL_EMAIL}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-primary"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                title="Email"
                className="mr-2"
              />
              {EMAIL}
            </a>
          </div>
        </div>
        <div className="mt-12 md:mt-0 flex justify-start md:justify-end items-end space-x-4">
          <ThemeSelect lang={lang} />
        </div>
      </Container>
    </footer>
  );
}

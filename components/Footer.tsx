import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Container from './Container';
import ThemeSelect from './footer/ThemeSelect';

const LINKEDIN = 'https://linkedin.com/in/youngwoo-kim-sean/';
const EMAIL = 'yw.sean.kim@gmail.com';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-200">
      <Container className="py-8 flex justify-between">
        <div>
          <h2>
            <Link
              href="/"
              className="top-[2px] text-xl text-slate-800 font-display font-extrabold"
            >
              Youngwoo Kim
            </Link>
          </h2>
          <p className="text-slate-600 font-light mb-6">
            I&apos;m a web developer, a photographer and a cyclist based on
            Seoul. If you liked my content, click on the links below to reach
            me.
          </p>
          <div className="flex space-x-6 lg:space-x-8 items-start text-slate-800">
            <a
              href="https://github.com/seanK200"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon
                icon={faGithub}
                title="Github"
                className="mr-2"
              />
              Github
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                title="LinkedIn"
                className="mr-2"
              />
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-primary"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                title="Email"
                className="mr-2"
              />
              E-mail
            </a>
          </div>
        </div>
        <div className="flex justify-end items-end space-x-4">
          <ThemeSelect />
        </div>
      </Container>
    </footer>
  );
}

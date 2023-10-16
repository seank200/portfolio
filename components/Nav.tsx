'use client';

import Link from 'next/link';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MouseEventHandler, Suspense, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import { SupportedLang, createTranslator } from '@/i18n';
import { motion } from 'framer-motion';
import LangSelect from './LangSelect';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LangSuggestBanner from './LangSuggestBanner';

const SCROLL_DOWN_THRSH = 20;
const SCROLL_UP_THRSH = 10;
const SCROLL_TOP_THRSH = 50;
const SCROLL_BOT_THRSH = 300;

const MOBILE_SCREEN_W = 768;

const LINK_GITHUB = 'https://github.com/seanK200';
const LINK_LINKEDIN = 'https://www.linkedin.com/in/youngwoo-kim-sean/';
const LINK_MAILTO = 'mailto:yw.sean.kim@gmail.com';
// const LINK_BLOG = 'https://velog.io/@seank200';

export default function Nav({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const pathname = usePathname();
  const LABEL_GITHUB = 'Github';
  const LABEL_LINKEDIN = t('LinkedIn', '링크드인');
  // const LABEL_BLOG = t('Blog', '블로그');
  const LABEL_EMAIL = t('Email', '이메일');

  const SECTION_EXPERIENCES = t('Experiences', '이력');
  const SECTION_PROJECTS = t('Projects', '프로젝트');
  const SECTION_SKILLSETS = t('Skillsets', '기술 스택');
  const SECTION_CONTACT = t('Contact Me', '연락하기');

  // Move up out of the screen when scrolling down, and re-appear when scrolling up
  const [isHidden, setIsHidden] = useState<boolean>(false);
  // Expand menu when clicked on mobile
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const isNearTop = scrollY < SCROLL_TOP_THRSH;
  const navShadow = isNearTop && !isExpanded ? '' : 'shadow';
  const motionVariant = `${isMobile ? 'mobile' : 'desktop'}${
    isMobile && isExpanded ? 'Expanded' : isHidden ? 'Hidden' : 'Normal'
  }`;
  const showNameLogo = pathname === '/' && isNearTop;

  const handleLinkClick: MouseEventHandler<HTMLLIElement> = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    setScrollY(window.scrollY);
    setIsMobile(window.innerWidth < MOBILE_SCREEN_W);

    const handleScroll = throttle(() => {
      setScrollY((prevScrollY) => {
        const newScrollY = window.scrollY;
        const isNearTop = newScrollY < SCROLL_TOP_THRSH;
        const isNearBottom =
          newScrollY >
          document.body.scrollHeight - window.innerHeight - SCROLL_BOT_THRSH;

        if (
          isNearTop ||
          isNearBottom ||
          newScrollY < prevScrollY - SCROLL_UP_THRSH
        ) {
          setIsHidden(false);
        } else if (!isNearTop && newScrollY > prevScrollY + SCROLL_DOWN_THRSH) {
          setIsHidden(true);
        }

        return newScrollY;
      });
    }, 200);

    const handleResize = throttle(() => {
      setIsMobile(window.innerWidth < MOBILE_SCREEN_W);
      setIsExpanded(false);
    }, 200);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-20 ${navShadow} shadow-background-on/10 bg-background`}
      animate={motionVariant}
      initial={{ opacity: 0 }}
      variants={{
        mobileNormal: { translateY: 0, opacity: 1 },
        mobileHidden: { translateY: '-100%', opacity: 1 },
        mobileExpanded: { translateY: 0, opacity: 1 },
        desktopNormal: { translateY: 0, opacity: 1 },
        desktopHidden: { translateY: '-100%', opacity: 1 },
      }}
    >
      <Suspense fallback={<div />}>
        <LangSuggestBanner lang={lang} />
      </Suspense>
      <Container className="flex justify-between items-center py-4">
        <Link href={`/${lang}`} className="relative z-20">
          <Image
            src="/apple-touch-icon.png"
            className={`${
              showNameLogo ? 'opacity-100' : 'opacity-0'
            } rounded transition-all`}
            alt="Youngwoo Kim"
            width={24}
            height={24}
          />
          <span
            className={`${
              showNameLogo ? 'opacity-0' : 'opacity-100'
            } absolute top-0 left-0 bg-clip-text bg-gradient-to-br from-primary to-secondary font-display font-extrabold text-xl hover:text-transparent uppercase transition-all`}
          >
            Youngwoo
          </span>
        </Link>
        <button
          className="z-20 relative md:hidden"
          onClick={() => setIsExpanded((p) => !p)}
        >
          <motion.div
            variants={{
              mobileNormal: { opacity: 1, rotate: 0 },
              mobileHidden: { opacity: 1, rotate: 0 },
              mobileExpanded: { opacity: 0, rotate: 180 },
              desktopNormal: { opacity: 1, rotate: 0 },
              desktopHidden: { opacity: 1, rotate: 0 },
            }}
          >
            <FontAwesomeIcon icon={faBars} className="h-5" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0"
            variants={{
              mobileNormal: { opacity: 0, rotate: 180 },
              mobileHidden: { opacity: 0, rotate: 180 },
              mobileExpanded: { opacity: 1, rotate: 0 },
              desktopNormal: { opacity: 0, rotate: 180 },
              desktopHidden: { opacity: 0, rotate: 180 },
            }}
          >
            <FontAwesomeIcon icon={faXmark} className="h-6" />
          </motion.div>
        </button>
        <motion.ul
          className="absolute md:static top-0 left-0 right-0 -translate-y-full md:translate-y-0 h-screen md:h-auto bg-background px-8 md:px-0 pt-24 md:pt-0 flex flex-col justify-start items-start md:flex-row md:items-center gap-6 md:gap-5"
          initial={{
            translateY: '-100%',
          }}
          animate={motionVariant}
          variants={{
            mobileNormal: {
              translateY: '-100%',
              transition: {
                staggerChildren: 0.05,
                bounce: 0,
              },
              opacity: 0,
            },
            mobileHidden: { translateY: '-100%', opacity: 0 },
            mobileExpanded: {
              translateY: 0,
              opacity: 1,
              transition: {
                when: 'beforeChildren',
                staggerChildren: 0.05,
                bounce: 0,
              },
            },
            desktopNormal: { translateY: 0 },
            desktopHidden: { translateY: 0 },
          }}
        >
          <motion.li
            className={`${
              isMobile ? 'hidden' : 'flex'
            } items-end text-faded leading-none`}
            variants={{
              mobileHidden: { opacity: 0 },
              mobileNormal: { opacity: 0 },
              mobileExpanded: { opacity: 1 },
              desktopHidden: { opacity: 1 },
              desktopNormal: { opacity: 1 },
            }}
          >
            <Suspense fallback={<div></div>}>
              <LangSelect lang={lang} />
            </Suspense>
          </motion.li>
          <NavItem href="#experiences" onClick={handleLinkClick} mobileOnly>
            # {SECTION_EXPERIENCES}
          </NavItem>
          <NavItem href="#projects" onClick={handleLinkClick} mobileOnly>
            # {SECTION_PROJECTS}
          </NavItem>
          <NavItem href="#skills" onClick={handleLinkClick} mobileOnly>
            # {SECTION_SKILLSETS}
          </NavItem>
          <NavItem href="#contacts" onClick={handleLinkClick} mobileOnly>
            # {SECTION_CONTACT}
          </NavItem>
          <NavHr />
          <NavItem
            href={LINK_GITHUB}
            onClick={handleLinkClick}
            title={LABEL_GITHUB}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="relative top-px mr-3 md:mr-0 h-5"
              fixedWidth
            />
            <span className="md:hidden">{LABEL_GITHUB}</span>
          </NavItem>
          <NavItem
            href={LINK_LINKEDIN}
            onClick={handleLinkClick}
            title={LABEL_LINKEDIN}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="relative top-0.5 mr-3 md:mr-0 h-5"
              fixedWidth
            />
            <span className="md:hidden">{LABEL_LINKEDIN}</span>
          </NavItem>
          {/* <NavItem
            href={LINK_BLOG}
            onClick={handleLinkClick}
            title={LABEL_BLOG}
          >
            <FontAwesomeIcon
              icon={faSquareRss}
              className="relative top-0.5 mr-3 md:mr-0 h-5"
              fixedWidth
            />
            <span className="md:hidden">{LABEL_BLOG}</span>
          </NavItem> */}
          <NavItem
            href={LINK_MAILTO}
            onClick={handleLinkClick}
            title={LABEL_EMAIL}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="relative top-0.5 mr-3 md:mr-0 h-5"
              fixedWidth
            />
            <span className="md:hidden">{LABEL_EMAIL}</span>
          </NavItem>
          <NavHr />
          <motion.li
            className={`${
              isMobile ? 'flex' : 'hidden'
            } items-center text-faded leading-none`}
            variants={{
              mobileHidden: { opacity: 0 },
              mobileNormal: { opacity: 0 },
              mobileExpanded: { opacity: 1 },
              desktopHidden: { opacity: 1 },
              desktopNormal: { opacity: 1 },
            }}
          >
            <Suspense fallback={<div></div>}>
              <LangSelect lang={lang} />
            </Suspense>
          </motion.li>
        </motion.ul>
      </Container>
    </motion.nav>
  );
}

function NavItem({
  href,
  children,
  onClick,
  title,
  mobileOnly,
}: {
  href: string;
  children?: React.ReactNode;
  onClick: MouseEventHandler<HTMLLIElement>;
  title?: string;
  mobileOnly?: boolean;
}) {
  const isInternalLink = href.charAt(0) === '/' || href.charAt(0) === '#';
  return (
    <motion.li
      className={`${
        mobileOnly ? 'md:hidden' : ''
      } text-lg md:text-base text-faded hover:text-primary`}
      variants={{
        mobileHidden: { opacity: 0, translateY: '-1rem' },
        mobileNormal: { opacity: 0, translateY: '-1rem' },
        mobileExpanded: { opacity: 1, translateY: 0 },
        desktopHidden: mobileOnly
          ? { display: 'none', opacity: 0 }
          : { opacity: 1, translateY: 0 },
        desktopNormal: mobileOnly
          ? { display: 'none', opacity: 0 }
          : { opacity: 1, translateY: 0 },
      }}
      onClick={onClick}
      title={title}
    >
      {isInternalLink ? (
        <Link href={href}>{children}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )}
    </motion.li>
  );
}

function NavHr() {
  return (
    <motion.hr
      variants={{
        mobileHidden: { opacity: 0, translateY: '-1rem' },
        mobileNormal: { opacity: 0, translateY: '-1rem' },
        mobileExpanded: { opacity: 1, translateY: 0 },
        desktopHidden: { opacity: 1, translateY: 0 },
        desktopNormal: { opacity: 1, translateY: 0 },
      }}
      className="md:hidden w-full border-faded/20"
    />
  );
}

'use client';

import Link from 'next/link';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faEnvelope,
  faSquareRss,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MouseEventHandler, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import { SupportedLang, createTranslator } from '@/i18n';
import { motion } from 'framer-motion';

const SCROLL_DOWN_THRSH = 20;
const SCROLL_UP_THRSH = 10;
const SCROLL_TOP_THRSH = 50;

const MOBILE_SCREEN_W = 768;

const LINK_GITHUB = 'https://github.com/seanK200';
const LINK_LINKEDIN = 'https://www.linkedin.com/in/youngwoo-kim-sean/';
const LINK_MAILTO = 'mailto:yw.sean.kim@gmail.com';
const LINK_BLOG = 'https://velog.io/@seank200';

export default function Nav({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const LABEL_GITHUB = 'Github';
  const LABEL_LINKEDIN = t('LinkedIn', '링크드인');
  const LABEL_BLOG = t('Blog', '블로그');
  const LABEL_EMAIL = t('Email', '이메일');

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

        if (!isNearTop && newScrollY > prevScrollY + SCROLL_DOWN_THRSH) {
          setIsHidden(true);
        } else if (isNearTop || newScrollY < prevScrollY - SCROLL_UP_THRSH) {
          setIsHidden(false);
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
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-20 ${navShadow} shadow-background-on/10 bg-background`}
      animate={motionVariant}
      variants={{
        mobileNormal: { translateY: 0 },
        mobileHidden: { translateY: '-100%' },
        mobileExpanded: { translateY: 0 },
        desktopNormal: { translateY: 0 },
        desktopHidden: { translateY: '-100%' },
      }}
    >
      <Container className="flex justify-between items-center py-6">
        <Link
          href="/"
          className="relative top-0.5 z-20 bg-clip-text bg-gradient-to-br from-primary to-secondary font-display font-extrabold text-2xl hover:text-transparent uppercase transition-colors"
        >
          Youngwoo
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
          className="absolute md:static top-0 left-0 right-0 h-screen md:h-auto bg-background px-8 md:px-0 pt-24 md:pt-0 flex flex-col justify-between items-start md:flex-row md:justify-start md:items-center gap-4 md:gap-2"
          variants={{
            mobileNormal: { translateY: '-100%' },
            mobileHidden: { translateY: '-100%' },
            mobileExpanded: { translateY: 0 },
            desktopNormal: { translateY: 0 },
            desktopHidden: { translateY: 0 },
          }}
        >
          <NavItem href={LINK_GITHUB} onClick={handleLinkClick}>
            <FontAwesomeIcon
              icon={faGithub}
              className="relative top-px mr-3 h-5"
              fixedWidth
              title={LABEL_GITHUB}
            />
            <span className="md:hidden">{LABEL_GITHUB}</span>
          </NavItem>
          <NavItem href={LINK_LINKEDIN} onClick={handleLinkClick}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="relative top-0.5 mr-3 h-5"
              fixedWidth
              title={LABEL_LINKEDIN}
            />
            <span className="md:hidden">{LABEL_LINKEDIN}</span>
          </NavItem>
          <NavItem href={LINK_BLOG} onClick={handleLinkClick}>
            <FontAwesomeIcon
              icon={faSquareRss}
              className="relative top-0.5 mr-3 h-5"
              fixedWidth
              title={LABEL_BLOG}
            />
            <span className="md:hidden">{LABEL_BLOG}</span>
          </NavItem>
          <NavItem href={LINK_MAILTO} onClick={handleLinkClick}>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="relative top-0.5 mr-3 h-5"
              fixedWidth
              title={LABEL_EMAIL}
            />
            <span className="md:hidden">{LABEL_EMAIL}</span>
          </NavItem>
        </motion.ul>
      </Container>
    </motion.nav>
  );
}

function NavItem({
  href,
  children,
  onClick,
}: {
  href: string;
  children?: React.ReactNode;
  onClick: MouseEventHandler<HTMLLIElement>;
}) {
  const isInternalLink = href.charAt(0) === '/';
  return (
    <motion.li
      className="text-lg md:text-base text-faded hover:text-background-on"
      variants={{
        mobileHidden: { opacity: 0, translateY: '-1rem' },
        mobileNormal: { opacity: 0, translateY: '-1rem' },
        mobileExpanded: { opacity: 1, translateY: 0 },
        desktopHidden: { opacity: 1, translateY: 0 },
        desktopNormal: { opacity: 1, translateY: 0 },
      }}
      onClick={onClick}
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

// export default function Nav({ lang }: { lang: SupportedLang }) {
//   const t = createTranslator(lang);

//   const [isExpanded, setIsExpanded] = useState<boolean>(false); // mobile
//   const [scrollY, setScrollY] = useState<number>(0);
//   const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false); // scrolling down
//   const [screenW, setScreenW] = useState<number>(0);
//   const isMobile = screenW < 768;
//   const animationVariant = isMobile
//     ? isExpanded
//       ? 'mobileOpen'
//       : 'mobileClosed'
//     : 'desktop';

//   const handleLinkClick = () => setIsExpanded(false);

//   useEffect(() => {
//     setScrollY(window.scrollY);
//     setScreenW(window.innerWidth);

//     const handleResize = throttle(() => {
//       setIsExpanded(false);
//       setScreenW(window.innerWidth);
//       setIsScrollingDown(false);
//     }, 100);
//     const handleScroll = throttle(() => {
//       setScrollY((prevScrollY) => {
//         const newScrollY = window.scrollY;

//         if (
//           newScrollY >= SCROLL_TOP_THRSH &&
//           newScrollY > prevScrollY + SCROLL_DOWN_THRSH
//         ) {
//           setIsScrollingDown(true);
//         }
//         if (
//           newScrollY < SCROLL_TOP_THRSH ||
//           newScrollY < prevScrollY - SCROLL_UP_THRSH
//         ) {
//           setIsScrollingDown(false);
//         }

//         return newScrollY;
//       });
//     }, 200);
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.addEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const shadow = scrollY >= SCROLL_TOP_THRSH ? 'shadow' : '';

//   return (
//     <motion.nav
//       className={`fixed top-0 left-0 right-0 z-20 ${shadow} shadow-background-on/10 bg-background`}
//       variants={{
//         mobileOpen: {
//           bottom: 0,
//         },
//         mobileClosed: {},
//         desktop: {
//           bottom: 'unset',
//         },
//         hidden: {
//           y: '-100%',
//         },
//         visible: {
//           y: 0,
//         },
//       }}
//       initial={false}
//       animate={[animationVariant, isScrollingDown ? 'hidden' : 'visible']}
//     >
//       <Container
//         className={`${
//           scrollY > SCROLL_TOP_THRSH ? 'py-4' : 'py-6'
//         } flex justify-between items-center`}
//       >
//         <Link
//           href="/"
//           className="relative top-0.5 z-20 bg-clip-text bg-gradient-to-br from-primary to-secondary font-display font-extrabold text-xl hover:text-transparent uppercase transition-colors"
//         >
//           Youngwoo
//         </Link>
//         <button
//           className="z-20 md:hidden relative"
//           onClick={() => setIsExpanded((p) => !p)}
//           title={
//             isExpanded
//               ? t('Close navigation', '메뉴 닫기')
//               : t('Open navigation', '메뉴 열기')
//           }
//         >
//           <motion.div
//             variants={{
//               mobileOpen: {
//                 opacity: 0,
//                 rotate: 180,
//               },
//               mobileClosed: {
//                 opacity: 1,
//                 rotate: 0,
//               },
//             }}
//           >
//             <FontAwesomeIcon icon={faBars} className="h-5" />
//           </motion.div>
//           <motion.div
//             className="absolute top-0 left-0"
//             variants={{
//               mobileOpen: {
//                 opacity: 1,
//                 rotate: 0,
//               },
//               mobileClosed: {
//                 opacity: 0,
//                 rotate: 180,
//               },
//             }}
//           >
//             <FontAwesomeIcon icon={faXmark} className="h-6" />
//           </motion.div>
//         </button>
//         <motion.ul
//           className={`absolute md:static top-0 left-0 right-0 z-10 px-8 pb-6 md:px-0 md:pb-0 flex flex-col md:flex-row items-start md:items-center overflow-hidden bg-background`}
//           variants={{
//             mobileOpen: {
//               bottom: 0,
//               opacity: 1,
//               paddingTop: '6rem',
//               transition: {
//                 when: 'beforeChildren',
//                 staggerChildren: 0.05,
//               },
//             },
//             mobileClosed: {
//               bottom: '100%',
//               opacity: 0,
//               paddingTop: 0,
//             },
//             desktop: {
//               opacity: 1,
//               paddingTop: 0,
//             },
//           }}
//         >
//           <NavItem
//             href="https://github.com/seanK200"
//             external
//             onClick={handleLinkClick}
//           >
//             <FontAwesomeIcon icon={faGithub} title="Github" />
//             <span className="ml-4 md:hidden">Github</span>
//           </NavItem>
//           <NavItem
//             href="https://www.linkedin.com/in/youngwoo-kim-sean/"
//             external
//             onClick={handleLinkClick}
//           >
//             <FontAwesomeIcon
//               icon={faLinkedin}
//               title={t('LinkedIn', '링크드인')}
//             />
//             <span className="ml-4 md:hidden">{t('LinkedIn', '링크드인')}</span>
//           </NavItem>
//           <NavItem
//             href="mailto:yw.sean.kim@gmail.com"
//             external
//             onClick={handleLinkClick}
//           >
//             <FontAwesomeIcon icon={faEnvelope} title={t('Email', '이메일')} />
//             <span className="ml-4 md:hidden">{t('Email', '이메일')}</span>
//           </NavItem>
//           <motion.li
//             className="grow flex items-end md:items-center"
//             variants={{
//               mobileOpen: { opacity: 1 },
//               mobileClosed: { opacity: 0 },
//               desktop: { opacity: 1 },
//             }}
//             onClick={handleLinkClick}
//           >
//             <LangSelect lang={lang} />
//           </motion.li>
//         </motion.ul>
//       </Container>
//     </motion.nav>
//   );
// }

// function NavItem({
//   href,
//   onClick,
//   children,
//   external,
// }: {
//   href: string;
//   onClick?: MouseEventHandler<HTMLLIElement>;
//   children?: React.ReactNode;
//   external?: boolean;
// }) {
//   return (
//     <motion.li
//       onClick={onClick}
//       className="mb-6 md:mb-0 md:mr-8 py-1 text-lg md:text-base text-faded"
//       variants={{
//         mobileOpen: { opacity: 1 },
//         mobileClosed: { opacity: 0 },
//         desktop: { opacity: 1 },
//       }}
//     >
//       {external ? (
//         <a href={href} target="_blank" rel="noopener noreferrer">
//           {children}
//         </a>
//       ) : (
//         <Link href={href}>{children}</Link>
//       )}
//     </motion.li>
//   );
// }

"use client";

import { MyLang, translator } from "@lib/i18n";
import Container from "../Container";
import MyLink from "../MyLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LangSelect from "../LangSelect";
import ThemeSelect from "../ThemeSelect";
import { useEffect, useState } from "react";
import throttle from "lodash/throttle";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const SCROLL_DOWN_THRSH = 20;
const SCROLL_UP_THRSH = 10;
const SCROLL_TOP_THRSH = 50;
const SCROLL_BOT_THRSH = 200;

export type NavLink = {
  label: string;
  href: string;
  topbar?: boolean;
};

export default function Nav({
  lang,
  home = "/",
  navLinks,
}: {
  lang: MyLang;
  home?: string;
  navLinks: NavLink[];
}) {
  const [, setScrollY] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const t = translator(lang);

  const topbarClass = isHidden ? "-translate-y-full" : "translate-y-0";
  const sidebarClass = isOpen
    ? "translate-x-0 opacity-100"
    : "translate-x-full opacity-0";
  // const bcClass = scrollY > SCROLL_TOP_THRSH ? "opacity-100" : "opacity-0";

  useEffect(() => {
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
          setIsOpen(false);
        }

        return newScrollY;
      });
    }, 200);

    const handleResize = throttle(() => {
      setIsHidden(false);
      setIsOpen(false);
    }, 500);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`z-10 fixed top-0 left-0 right-0 ${topbarClass} py-6 md:py-4 bg-background transition-all`}
      >
        <Container className="flex justify-between items-center">
          <MyLink
            href={home}
            lang={lang}
            className={`relative top-px bg-gradient-to-r from-ctp-mauve to-ctp-blue bg-clip-text hover:text-transparent text-xl font-extrabold font-display leading-none uppercase transition`}
          >
            Youngwoo
          </MyLink>
          <ul className="flex items-center gap-6 text-lg md:text-base">
            {navLinks
              .filter((l) => l.topbar)
              .map((nl) => (
                <li
                  key={nl.href}
                  className="hidden md:block hover:text-ctp-mauve relative top-px"
                >
                  <MyLink href={nl.href} lang={lang}>
                    {nl.label}
                  </MyLink>
                </li>
              ))}
            <li className="hover:text-ctp-mauve text-lg">
              <MyLink
                href="https://github.com/seanK200"
                className="flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faGithub} className="h-em" />
              </MyLink>
            </li>
            <li
              className="cursor-pointer hover:text-ctp-mauve text-lg"
              role="button"
              onClick={() => setIsOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} className="h-em" />
            </li>
          </ul>
        </Container>
      </div>
      <div
        className={`z-30 fixed top-0 bottom-0 right-0 ${sidebarClass} px-10 md:px-8 pt-8 md:pt-6 pb-12 w-full md:w-72 flex flex-col gap-4 bg-ctp-crust transition-all duration-500 ease-in-out`}
        onClick={() => setIsOpen(false)}
      >
        <button className="text-lg self-end">
          <FontAwesomeIcon icon={faXmark} className="text-lg h-em" />
        </button>
        <nav className="grow">
          <ul className="flex flex-col gap-6 text-xl md:text-lg font-medium leading-none">
            {navLinks.map((nl) => (
              <li key={nl.href}>
                <MyLink className="hover:underline" href={nl.href}>
                  {nl.label}
                </MyLink>
              </li>
            ))}
          </ul>
          <hr className="my-8 border-[0.5px] border-ctp-surface2" />
          <ul className="flex flex-col gap-4 text-lg md:text-base font-medium leading-none">
            <li className="hover:text-ctp-mauve">
              <ExternalNavLink
                lang={lang}
                href="https://github.com/seanK200"
                icon={faGithub}
                label={t("Github", "깃허브")}
              />
            </li>
            <li className="hover:text-ctp-mauve">
              <ExternalNavLink
                lang={lang}
                href="https://linkedin.com/in/youngwoo-kim-sean"
                icon={faLinkedin}
                label={t("LinkedIn", "링크드인")}
              />
            </li>
            <li className="hover:text-ctp-mauve">
              <ExternalNavLink
                lang={lang}
                href="mailto:yw.sean.kim@gmail.com"
                icon={faEnvelope}
                label={t("Email", "이메일")}
              />
            </li>
          </ul>
        </nav>
        <ul className="flex justify-between items-center">
          <li>
            <LangSelect lang={lang} />
          </li>
          <li>
            <ThemeSelect lang={lang} />
          </li>
        </ul>
      </div>
      <div
        className={`z-20 fixed top-0 right-0 bottom-0 ${
          isOpen ? "bg-black/30" : "bg-none"
        } ${isOpen ? "left-0" : "left-full"} transition-colors`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

function ExternalNavLink({
  lang,
  href,
  icon,
  label,
}: {
  lang: MyLang;
  href: string;
  icon: IconProp;
  label: string;
}) {
  return (
    <MyLink href={href} lang={lang} className="flex items-center gap-3">
      <FontAwesomeIcon icon={icon} className="h-em" fixedWidth />
      <span className="text-base md:text-sm">{label}</span>
    </MyLink>
  );
}

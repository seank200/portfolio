"use client";

import { MyLang } from "@lib/i18n";
import Container from "../Container";
import MyLink from "../MyLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LangSelect from "../LangSelect";
import ThemeSelect from "../ThemeSelect";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

const SCROLL_DOWN_THRSH = 20;
const SCROLL_UP_THRSH = 10;
const SCROLL_TOP_THRSH = 50;
const SCROLL_BOT_THRSH = 300;

export default function Nav({ lang }: { lang: MyLang }) {
  const [, setScrollY] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            href="/"
            lang={lang}
            className={`relative top-px bg-gradient-to-r from-ctp-mauve to-ctp-blue bg-clip-text hover:text-transparent text-xl md:text-lg font-extrabold font-display leading-none uppercase transition`}
          >
            Youngwoo
          </MyLink>
          <ul className="flex items-center gap-4 text-lg md:text-base leading-none">
            <li>
              <MyLink
                href="https://github.com/seanK200"
                className="flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faGithub} className="h-em" />
              </MyLink>
            </li>
            <li
              className="cursor-pointer"
              role="button"
              onClick={() => setIsOpen(true)}
            >
              <FontAwesomeIcon icon={faBars} className="h-em" />
            </li>
          </ul>
        </Container>
      </div>
      <div
        className={`z-20 fixed top-0 bottom-0 right-0 ${sidebarClass} px-8 pt-6 pb-12 w-full md:w-72 flex flex-col gap-4 bg-ctp-crust transition-all duration-500 ease-in-out`}
      >
        <button className="text-lg self-end" onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faXmark} className="text-lg h-em" />
        </button>
        <NavLinks lang={lang} />
        <ul className="flex justify-between items-center">
          <li>
            <LangSelect lang={lang} />
          </li>
          <li>
            <ThemeSelect lang={lang} />
          </li>
        </ul>
      </div>
    </>
  );
}

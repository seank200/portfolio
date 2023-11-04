"use client";

import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useLocalStorage from "@hooks/useLocalStorage";
import { MyLang, translator } from "@lib/i18n";
import { useEffect } from "react";

export const THEME_CTP_VARIANTS = ["mocha", "macchiato", "frappe", "latte"].map(
  (v) => `ctp-${v}`,
);

const DEFAULT_DARK = 1;
const DEFAULT_LIGHT = 3;

export default function ThemeSelect({
  className,
  lang,
}: {
  className?: string;
  lang: MyLang;
}) {
  const t = translator(lang);
  const [userTheme, setUserTheme] = useLocalStorage<number | null>(
    "theme",
    null,
  );

  const handleLightClick = () => setUserTheme(DEFAULT_LIGHT);
  const handleDarkClick = () =>
    setUserTheme((p) => (p === null ? (p = DEFAULT_DARK) : (p + 1) % 3));
  const handleAutoClick = () => setUserTheme(null);

  const commonClass =
    "w-8 h-8 md:w-7 md:h-7 rounded-full flex justify-center items-center text-lg md:text-base cursor-pointer";

  const activeClass =
    "bg-gradient-to-br from-ctp-mauve to-ctp-blue text-ctp-base";
  const inactiveClass = "hover:bg-ctp-surface1";

  const lightClass = userTheme === DEFAULT_LIGHT ? activeClass : inactiveClass;
  const darkClass =
    userTheme !== null && userTheme < DEFAULT_LIGHT
      ? activeClass
      : inactiveClass;
  const deviceClass = userTheme === null ? activeClass : inactiveClass;

  useEffect(() => {
    let newTheme: number;
    if (userTheme === null) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      newTheme = prefersDark ? DEFAULT_DARK : DEFAULT_LIGHT;
    } else {
      newTheme = userTheme;
    }

    if (newTheme < DEFAULT_LIGHT) {
      document.documentElement.classList.add("theme-dark");
      document.documentElement.classList.remove("theme-light");
    } else {
      document.documentElement.classList.add("theme-light");
      document.documentElement.classList.remove("theme-dark");
    }

    THEME_CTP_VARIANTS.forEach((v, i) => {
      if (i === newTheme) {
        document.body.classList.add(v);
      } else {
        document.body.classList.remove(v);
      }
    });
  }, [userTheme]);

  return (
    <ul
      className={`rounded-full p-1.5 bg-ctp-surface0 flex items-center gap-0.5 ${
        className || ""
      }`}
    >
      <li
        className={`${commonClass} ${lightClass}`}
        role="button"
        title={t("Light Theme", "밝은 테마")}
        onClick={handleLightClick}
      >
        <LightIcon className="w-em" />
      </li>
      <li
        className={`${commonClass} ${darkClass}`}
        role="button"
        title={t("Dark Theme", "어두운 테마")}
        onClick={handleDarkClick}
      >
        <DarkIcon className="w-em" />
      </li>
      <li
        className={`${commonClass} ${deviceClass}`}
        role="button"
        title={t("Auto Theme", "자동 테마")}
        onClick={handleAutoClick}
      >
        <FontAwesomeIcon icon={faDesktop} className="w-em" />
      </li>
      {THEME_CTP_VARIANTS.map((v) => (
        <li key={v} className={`${v} hidden`}></li>
      ))}
    </ul>
  );
}

function LightIcon({ className }: { className?: string }) {
  // https://www.iconfinder.com/iconsets/music-ui-solid-24px
  // http://creativecommons.org/licenses/by-nc/3.0/

  return (
    <svg
      viewBox="2 2 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title />
      <circle cx="12" cy="12" fill="currentColor" r="5" />
      <path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" fill="currentColor" />
      <path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" fill="currentColor" />
      <path
        d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z"
        fill="currentColor"
      />
      <path
        d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z"
        fill="currentColor"
      />
      <path
        d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z"
        fill="currentColor"
      />
      <path
        d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z"
        fill="currentColor"
      />
      <path
        d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z"
        fill="currentColor"
      />
      <path
        d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DarkIcon({ className }: { className?: string }) {
  // https://www.iconfinder.com/iconsets/music-ui-solid-24px
  // http://creativecommons.org/licenses/by-nc/3.0/

  return (
    <svg
      viewBox="2 2 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title />
      <path
        d="M20.21,15.32A8.56,8.56,0,1,1,11.29,3.5a.5.5,0,0,1,.51.28.49.49,0,0,1-.09.57A6.46,6.46,0,0,0,9.8,9a6.57,6.57,0,0,0,9.71,5.72.52.52,0,0,1,.58.07A.52.52,0,0,1,20.21,15.32Z"
        fill="currentColor"
      />
    </svg>
  );
}

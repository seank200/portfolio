"use client";

import { MyLang, isMyLang, translator } from "@lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSelect({
  className,
  lang,
}: {
  className?: string;
  lang: MyLang;
}) {
  const t = translator(lang);
  const pathname = usePathname().substring(1);
  const pathparts = pathname.split("/");
  pathparts.splice(
    0,
    isMyLang(pathparts[0]) ? 1 : 0,
    lang === "ko" ? "en" : "ko",
  );
  const otherPath = "/" + pathparts.join("/");
  return (
    <Link
      href={otherPath}
      className={`flex items-center gap-3 text-2xl md:text-xl leading-none ${
        className || ""
      }`}
      title={t("Switch Language", "언어 변경")}
    >
      {t("🇺🇸", "🇰🇷")}
      <span className="text-base md:text-sm">{t("English", "한국어")}</span>
    </Link>
  );
}

// function GlobeIcon({ className }: { className?: string }) {
//   // CC BY-ND 3.0 DEED
//   // https://www.iconfinder.com/iconsets/ios-7-icons
//   return (
//     <svg
//       className={`${className}`}
//       version="1.1"
//       viewBox="-3 -3 56 56"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle
//         cx="25"
//         cy="25"
//         fill="none"
//         r="24"
//         strokeLinecap="round"
//         strokeMiterlimit="10"
//         strokeWidth="2"
//       />
//       <ellipse
//         cx="25"
//         cy="25"
//         fill="none"
//         rx="12"
//         ry="24"
//         strokeLinecap="round"
//         strokeMiterlimit="10"
//         strokeWidth="2"
//       />
//       <path
//         d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325"
//         fill="none"
//         strokeMiterlimit="10"
//         strokeWidth="2"
//       />
//       <path
//         d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325"
//         fill="none"
//         strokeMiterlimit="10"
//         strokeWidth="2"
//       />
//       <line
//         fill="none"
//         strokeMiterlimit="10"
//         strokeWidth="2"
//         x1="1"
//         x2="49"
//         y1="25"
//         y2="25"
//       />
//       <line
//         fill="none"
//         strokeMiterlimit="10"
//         strokeWidth="2"
//         x1="25"
//         x2="25"
//         y1="1"
//         y2="49"
//       />
//     </svg>
//   );
// }

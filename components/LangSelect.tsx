'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SupportedLang, createTranslator } from '@/i18n';
import useSwitchLang from '@/hooks/useSwitchLang';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function LangSelect({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const otherLangHref = useSwitchLang(lang);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const arrowRotate = isOpen ? 'rotate-180' : 'rotate-0';
  const menuDisplay = isOpen ? 'flex' : 'hidden';

  const engItem = (
    <>
      🇺🇸 <span className="ml-2">{t('English', '영어')}</span>
    </>
  );
  const korItem = (
    <>
      🇰🇷 <span className="ml-2">{t('Korean', '한국어')}</span>
    </>
  );

  return (
    <button
      title={t('Switch Language', '언어 변경')}
      className="relative h-10 md:px-4 flex justify-center items-center text-xl"
      onClick={() => setIsOpen((p) => !p)}
    >
      <GlobeIcon className="mr-1 w-4 h-4 stroke-background-on" />
      <span className="ml-2 text-sm">{t('English', '한국어')}</span>
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`ml-4 h-2 transition-transform ${arrowRotate}`}
      />
      <ul
        className={`absolute top-full left-0 w-28 border border-faded/20 shadow rounded px-2 py-2 ${menuDisplay} flex-col items-stretch bg-background text-sm break-keep`}
      >
        <li className="rounded px-2 py-2 text-left hover:bg-background-on/10">
          {lang != 'en' ? <Link href={otherLangHref}>{engItem}</Link> : engItem}
        </li>
        <li className="rounded px-2 py-2 text-left hover:bg-background-on/10">
          {lang != 'ko' ? <Link href={otherLangHref}>{korItem}</Link> : korItem}
        </li>
      </ul>
    </button>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  // CC BY-ND 3.0 DEED
  // https://www.iconfinder.com/iconsets/ios-7-icons
  return (
    <svg
      className={`${className}`}
      version="1.1"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="none" stroke="none" height="50" width="50" />
      <circle
        cx="25"
        cy="25"
        fill="none"
        r="24"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <ellipse
        cx="25"
        cy="25"
        fill="none"
        rx="12"
        ry="24"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <path
        d="M6.365,40.438C10.766,37.729,17.479,36,25,36  c7.418,0,14.049,1.682,18.451,4.325"
        fill="none"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <path
        d="M43.635,9.563C39.234,12.271,32.521,14,25,14  c-7.417,0-14.049-1.682-18.451-4.325"
        fill="none"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <line
        fill="none"
        stroke-miterlimit="10"
        stroke-width="2"
        x1="1"
        x2="49"
        y1="25"
        y2="25"
      />
      <line
        fill="none"
        stroke-miterlimit="10"
        stroke-width="2"
        x1="25"
        x2="25"
        y1="1"
        y2="49"
      />
    </svg>
  );
}

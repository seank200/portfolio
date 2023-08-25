'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { SupportedLanguage } from './contents';

const langEmoji: Readonly<Record<SupportedLanguage, string>> = Object.freeze({
  kr: '🇰🇷',
  en: '🇺🇸',
});

const langLabel: Readonly<Record<SupportedLanguage, string>> = Object.freeze({
  kr: '한국어',
  en: 'English',
});

const otherLangs: Readonly<Record<SupportedLanguage, SupportedLanguage>> =
  Object.freeze({
    kr: 'en',
    en: 'kr',
  });

const action: Readonly<Record<SupportedLanguage, string>> = Object.freeze({
  kr: `언어 변경`,
  en: `Switch language`,
});

export default function LangSelect({ lang }: { lang: SupportedLanguage }) {
  const pathname = usePathname();
  const pathparts = pathname.split('/');
  const searchParams = useSearchParams();
  const otherLang = otherLangs[lang];

  // Generate relative URL for language change
  if (pathparts.length > 1) {
    pathparts[1] = otherLang;
  } else {
    pathparts.push(otherLang);
  }
  const searchParamsStr = searchParams.toString();
  const href =
    pathparts.join('/') + (searchParamsStr ? `?${searchParamsStr}` : '');

  return (
    <Link
      href={href}
      className="group relative rounded hover:bg-background-variant px-2 flex text-xl sm:text-base"
      title={action[otherLang]}
    >
      {langEmoji[lang]}
      <div className="ml-2 sm:ml-0 sm:mt-2 sm:hidden sm:group-hover:block sm:absolute sm:top-full sm:left-1/2 sm:-translate-x-1/2 rounded sm:px-2 sm:py-1 w-max sm:bg-background-on sm:text-background sm:text-center">
        <span className="sm:hidden">{langLabel[lang]}</span>
        <br className="sm:hidden" />
        <span className="mt-2 text-base sm:text-sm group-hover:text-underline">
          {action[lang]}
          <br className="hidden sm:inline sm:text-xs" />
          <span className="hidden sm:inline">{langEmoji[otherLang]}</span>
          <span>&nbsp;{langLabel[otherLang]}</span>
        </span>
      </div>
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { SupportedLang, createIntlDict } from '@/i18n/utils';

const OTHER_LANGS: Readonly<Record<SupportedLang, SupportedLang>> =
  Object.freeze({
    kr: 'en',
    en: 'kr',
  });

const dict = createIntlDict(
  {
    LANG_EMOJI: '🇺🇸',
    LANG_LABEL: 'English',
    LANG_EMOJI_OTHER: '🇰🇷',
    LANG_LABEL_OTHER: '한국어',
    SWITCH_LANG: 'Switch Language',
  },
  {
    LANG_EMOJI: '🇰🇷',
    LANG_LABEL: '한국어',
    LANG_EMOJI_OTHER: '🇺🇸',
    LANG_LABEL_OTHER: 'English',
    SWITCH_LANG: '언어 변경',
  }
);

export default function LangSelect({ lang }: { lang: SupportedLang }) {
  const pathname = usePathname();
  const pathparts = pathname.split('/');
  const searchParams = useSearchParams();
  const otherLang = OTHER_LANGS[lang];
  const {
    LANG_EMOJI,
    LANG_LABEL,
    LANG_EMOJI_OTHER,
    LANG_LABEL_OTHER,
    SWITCH_LANG,
  } = dict[lang];

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
      title={SWITCH_LANG as string}
    >
      {LANG_EMOJI}
      <div className="ml-2 sm:ml-0 sm:mt-2 sm:hidden sm:group-hover:block sm:absolute sm:top-full sm:left-1/2 sm:-translate-x-1/2 rounded sm:px-2 sm:py-1 w-max sm:bg-background-on sm:text-background sm:text-center">
        <span className="sm:hidden">{LANG_LABEL}</span>
        <br className="sm:hidden" />
        <span className="mt-2 text-base sm:text-sm group-hover:text-underline">
          {SWITCH_LANG}
          <br className="hidden sm:inline sm:text-xs" />
          <span className="hidden sm:inline">{LANG_EMOJI_OTHER}</span>
          <span>&nbsp;{LANG_LABEL_OTHER}</span>
        </span>
      </div>
    </Link>
  );
}

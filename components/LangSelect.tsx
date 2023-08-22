'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const langEmoji = {
  kr: '🇰🇷',
  en: '🇺🇸',
} as const;

const otherLangs = {
  kr: 'en',
  en: 'kr',
} as const;

const tooltip = {
  kr: '언어 변경',
  en: 'Switch language',
} as const;

export default function LangSelect({ lang }: { lang: string }) {
  const pathname = usePathname();
  const pathparts = pathname.split('/');
  const searchParams = useSearchParams();
  const otherLang = otherLangs[lang as keyof typeof otherLangs];

  if (pathparts.length > 1) {
    pathparts[1] = otherLang;
  } else {
    pathparts.push(otherLang);
  }
  console.log(pathparts);

  const searchParamsStr = searchParams.toString();

  const href =
    pathparts.join('/') + (searchParamsStr ? `?${searchParamsStr}` : '');

  return (
    <Link
      href={href}
      className="group rounded sm:px-2 hover:bg-background-variant text-xl sm:text-base"
      title={tooltip[otherLang]}
    >
      <span className="group-hover:hidden">
        {langEmoji[lang as keyof typeof langEmoji]}
      </span>
      <span className="hidden group-hover:inline">{langEmoji[otherLang]}</span>
      <span className="ml-2 sm:hidden">
        {tooltip[lang as keyof typeof tooltip]}
      </span>
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { SupportedLang, createTranslator } from '@/i18n';

export default function LangSelect({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const pathname = usePathname();
  const pathparts = pathname.split('/');
  const searchParams = useSearchParams();
  const otherLang = { ko: 'en', en: 'ko' }[lang];

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
      title={t('Switch Language', '언어 변경')}
      className="w-10 h-10 rounded-full py-2 flex justify-center items-center text-lg text-center bg-background-on/10 hover:bg-background-on/20"
    >
      <span className="relative md:left-0.5">{t('🇺🇸', '🇰🇷')}</span>
    </Link>
  );

  // return (
  //   <Link
  //     href={href}
  //     title={t('Switch Language', '언어 변경')}
  //     className="group rounded md:px-2 py-1 flex items-center hover:bg-background-on/10 text-faded hover:text-background-on"
  //   >
  //     <FontAwesomeIcon icon={faEarthAsia} className="h-5 transition-all" />
  //     <span
  //       className={`ml-2 block overflow-hidden md:w-0 ${t(
  //         'md:group-hover:w-14',
  //         'md:group-hover:w-12'
  //       )} text-right transition-all break-keep`}
  //     >
  //       {t('English', '한국어')}
  //     </span>
  //   </Link>
  // );
}
